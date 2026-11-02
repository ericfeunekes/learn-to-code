import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile } from 'node:fs/promises';

const base = process.env.BASE_URL || '/learn-to-code/';

test('module 5 reaches its practice, downloadable lab and matching text exports', async ({
  page,
  request,
}, info) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('understand-code/evidence-of-correctness/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Module 5 — Understand a change and its evidence',
  );
  await page
    .getByRole('article')
    .getByRole('link', { name: 'the small evidence packet' })
    .click();
  await expect(page).toHaveURL(
    new RegExp(`${base}understand-code/evidence-of-correctness/practice/$`),
  );
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Evidence for a blank-title change',
  );
  const labLink = page.getByRole('link', { name: 'the local evidence lab' });
  const download = await request.get(await labLink.getAttribute('href'));
  expect(download.status()).toBe(200);
  expect(await download.text()).toBe(
    await readFile(
      'static/exercises/understand-module5/evidence-lab.cjs',
      'utf8',
    ),
  );
  for (const file of [
    '05-evidence-of-correctness.md',
    '05-practice-evidence.md',
  ]) {
    const raw = await request.get(`raw/understand-code/${file}`);
    expect(raw.status()).toBe(200);
    expect(await raw.text()).toBe(
      (await readFile(`docs/understand-code/${file}`, 'utf8')).replaceAll(
        'pathname:///',
        base,
      ),
    );
  }
  for (const route of [
    'understand-code/evidence-of-correctness/',
    'understand-code/evidence-of-correctness/practice/',
  ]) {
    await page.goto(route);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const accessibility = await new AxeBuilder({ page }).analyze();
    expect(
      accessibility.violations.filter((v) =>
        ['critical', 'serious'].includes(v.impact),
      ),
    ).toEqual([]);
    await page.screenshot({
      path: info.outputPath(
        route.endsWith('practice/') ? 'module5-practice.png' : 'module5.png',
      ),
      fullPage: true,
    });
  }
  expect(errors).toEqual([]);
});
