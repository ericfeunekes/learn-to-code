import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile } from 'node:fs/promises';

const base = process.env.BASE_URL || '/learn-to-code/';

test('production pages load without broken assets or browser errors', async ({
  page,
}, info) => {
  test.setTimeout(60000);
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => {
    if (response.status() >= 400)
      errors.push(`${response.status()} ${response.url()}`);
  });
  for (const [route, title] of [
    ['', 'Understand what you build.'],
    ['learning-path/', 'Learn to Build Software — Curriculum'],
    ['modules/testing-and-qa/', 'Module 1 — Testing and QA'],
    ['modules/concurrency/', 'Module 7 — Concurrency'],
    ['for-ai/', 'For AI'],
    ['search/', 'Find an idea.'],
  ]) {
    const response = await page.goto(route);
    expect(response.status()).toBe(200);
    await expect(
      page.getByRole('heading', { level: 1, name: title, exact: true }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const results = await new AxeBuilder({ page }).analyze();
    expect(
      results.violations.filter((v) =>
        ['critical', 'serious'].includes(v.impact),
      ),
    ).toEqual([]);
  }
  await page.goto('');
  await page.screenshot({
    path: info.outputPath('home-light.png'),
    fullPage: true,
  });
  expect(errors).toEqual([]);
});

test('navigation and theme work on desktop and phone', async ({
  page,
  isMobile,
}, info) => {
  await page.goto('');
  await expect(page.locator('html')).toHaveAttribute(
    'data-has-hydrated',
    'true',
  );
  if (isMobile) {
    await page.getByRole('button', { name: 'Toggle navigation bar' }).click();
    await page
      .locator('.navbar-sidebar__item:not([inert])')
      .getByRole('link', { name: 'Learning path', exact: true })
      .click();
  } else {
    await page
      .getByRole('navigation', { name: 'Main', exact: true })
      .getByRole('link', { name: 'Learning path', exact: true })
      .click();
  }
  await expect(page).toHaveURL(new RegExp(`${base}learning-path/$`));
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Learn to Build Software — Curriculum',
  );
  if (isMobile) {
    const table = page.getByRole('region', { name: 'Scrollable table' });
    await table.focus();
    await page.keyboard.press('ArrowRight');
    await expect
      .poll(() => table.evaluate((el) => el.scrollLeft))
      .toBeGreaterThan(0);
  }
  await page.getByRole('link', { name: /Next Module 1/ }).click();
  await expect(page).toHaveURL(new RegExp(`${base}modules/testing-and-qa/$`));
  if (isMobile)
    await page.getByRole('button', { name: 'Toggle navigation bar' }).click();
  await page
    .getByRole('button', { name: /Switch between dark and light mode/ })
    .filter({ visible: true })
    .click();
  await expect(page.locator('html')).toHaveAttribute(
    'data-theme-choice',
    'light',
  );
  await page
    .getByRole('button', { name: /Switch between dark and light mode/ })
    .filter({ visible: true })
    .click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  if (isMobile)
    await page.getByRole('button', { name: 'Close navigation bar' }).click();
  await page.screenshot({
    path: info.outputPath('reading-dark.png'),
    fullPage: true,
  });
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  const darkResults = await new AxeBuilder({ page }).analyze();
  expect(
    darkResults.violations.filter((v) =>
      ['critical', 'serious'].includes(v.impact),
    ),
  ).toEqual([]);
});

test('search supports keyboard input, results and an empty state', async ({
  page,
}, info) => {
  await page.goto('search/');
  await expect(page.getByRole('status')).toHaveText(
    'Enter a word or phrase to begin.',
  );
  const input = page.getByRole('searchbox', { name: 'Search words' });
  await input.focus();
  await page.keyboard.type('Markdown');
  await expect(page.getByRole('status')).toHaveText(/matching pages/);
  await expect(
    page
      .locator('.search-results')
      .getByRole('link', { name: 'For AI', exact: true }),
  ).toBeVisible();
  await page.screenshot({
    path: info.outputPath('search-results.png'),
    fullPage: true,
  });
  await input.fill('no-such-concept-xyz');
  await expect(page.getByRole('status')).toHaveText('0 matching pages.');
  await expect(page.locator('.search-results li')).toHaveCount(0);
  await input.fill('Markdown');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
  await expect(page).not.toHaveURL(/search\/$/);
});

test('skip link is reachable before navigation', async ({ page }) => {
  await page.goto('');
  await expect(page.locator('html')).toHaveAttribute(
    'data-has-hydrated',
    'true',
  );
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Skip to main content' });
  await expect(skip).toBeFocused();
  await page.keyboard.press('Enter');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('main').getByRole('link', { name: 'Home page' }),
  ).toBeFocused();
});

test('served text exports come from the admitted Markdown', async ({
  request,
}) => {
  const index = await request.get('llms.txt');
  expect(index.status()).toBe(200);
  const text = await index.text();
  const files = [
    'welcome.md',
    'for-ai.md',
    ...[
      'OVERVIEW.md',
      'CURRICULUM.md',
      'PRACTICE.md',
      'AI-TEACHER.md',
      '01-testing-and-qa.md',
      '02-error-handling-and-recovery.md',
      '03-persistence-and-shared-state.md',
      '04-modeling-data-and-behavior.md',
      '05-typing-protocols-and-data-validation.md',
      '06-structuring-a-program.md',
      '07-concurrency.md',
    ].map((name) => `course/${name}`),
  ];
  for (const file of files) {
    expect(text).toContain(`${base}raw/${file}`);
    const raw = await request.get(`raw/${file}`);
    expect(raw.status()).toBe(200);
    const source = await readFile(`docs/${file}`, 'utf8');
    expect(await raw.text()).toBe(source.replaceAll('pathname:///', base));
  }
  const search = await request.get('search-index.json');
  expect(search.status()).toBe(200);
  const entries = await search.json();
  expect(entries).toHaveLength(13);
  for (const entry of entries) {
    const response = await request.get(entry.route);
    expect(response.status()).toBe(200);
  }
  expect(entries.map((entry) => entry.route)).toContain(
    `${base}modules/concurrency/`,
  );
});
