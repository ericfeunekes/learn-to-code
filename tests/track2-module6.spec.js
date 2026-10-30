import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile } from 'node:fs/promises';

const base = process.env.BASE_URL || '/learn-to-code/';

test('Module 6 learner can reach the capstone, inspect its source and return', async ({
  page,
  request,
}) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('understand-code/read-evolving-project/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    '6. Read an evolving project',
  );
  const main = page.getByRole('main');
  await main.getByRole('link', { name: 'Harbor Log lab', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Module 6 lab: Harbor Log',
  );
  const source = main.getByRole('link', { name: 'server.py', exact: true });
  await expect(source).toHaveAttribute(
    'href',
    `${base}labs/track2-module6/server.py`,
  );
  const download = await request.get(await source.getAttribute('href'));
  expect(download.status()).toBe(200);
  expect(await download.text()).toBe(
    await readFile('static/labs/track2-module6/server.py', 'utf8'),
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  const accessibility = await new AxeBuilder({ page }).analyze();
  expect(
    accessibility.violations.filter((violation) =>
      ['serious', 'critical'].includes(violation.impact),
    ),
  ).toEqual([]);
  await main
    .getByRole('link', { name: 'Read an evolving project', exact: true })
    .click();
  await expect(page).toHaveURL(
    new RegExp(`${base}understand-code/read-evolving-project/$`),
  );
  expect(errors).toEqual([]);
});

test('Module 6 reading exports preserve the authored draft and fixture links', async ({
  request,
}) => {
  const index = await request.get('llms.txt');
  const indexText = await index.text();
  for (const file of [
    'understand-code/06-read-evolving-project.md',
    'understand-code/module6-harbor-log-lab.md',
  ]) {
    expect(indexText).toContain(`${base}raw/${file}`);
    const exported = await request.get(`raw/${file}`);
    expect(exported.status()).toBe(200);
    expect(await exported.text()).toBe(
      (await readFile(`docs/${file}`, 'utf8')).replaceAll('pathname:///', base),
    );
  }
});
