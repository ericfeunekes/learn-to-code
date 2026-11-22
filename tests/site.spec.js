import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile } from 'node:fs/promises';

const base = process.env.BASE_URL || '/learn-to-code/';

function sourceCodeBlocks(source) {
  return [
    ...source.matchAll(/^([ \t]*)```(?:text|sh)\n([\s\S]*?)^\1```/gm),
  ].map(([, indent, body]) =>
    body
      .split('\n')
      .map((line) =>
        line.startsWith(indent) ? line.slice(indent.length) : line,
      )
      .join('\n')
      .trimEnd(),
  );
}

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
    ['', 'Learn to Build Software'],
    ['setup/', 'Set up your workspace'],
    ['modules/project-and-git/', 'Module 0 — Directing an agent'],
    ['learning-path/', 'Learn to Build Software — Curriculum'],
    ['practice/', 'Practice and review'],
    ['modules/testing-and-qa/', 'Module 1 — Testing and QA'],
    ['modules/concurrency/', 'Module 7 — Concurrency'],
    ['plan-your-app/', 'Plan your app'],
    [
      'modules/share-run-and-maintain/',
      'Module 8 — Share, run and maintain your app',
    ],
    [
      'modules/build-and-learn-on-your-own/',
      'Module 9 — Build and learn on your own',
    ],
    ['understand-code/', 'Understand code and changes'],
    [
      'understand-code/work-with-engineers/',
      'Module 7 — Work with engineers on GitHub',
    ],
    ['understand-code/review-questions/', 'Review questions for a change'],
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
    // The wide future-directions table is the last table on the page.
    const table = page.getByRole('region', { name: 'Scrollable table' }).last();
    await table.focus();
    await page.keyboard.press('ArrowRight');
    await expect
      .poll(() => table.evaluate((el) => el.scrollLeft))
      .toBeGreaterThan(0);
  }
  await page.getByRole('link', { name: /Next Plan your app/ }).click();
  await expect(page).toHaveURL(new RegExp(`${base}plan-your-app/$`));
  await page.getByRole('link', { name: /Next Practice and review/ }).click();
  await expect(page).toHaveURL(new RegExp(`${base}practice/$`));
  await page.getByRole('link', { name: /Next 1\. Testing and QA/ }).click();
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
  await page.keyboard.type('file-reading');
  await expect(page.getByRole('status')).toHaveText('1 matching page.');
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
  await input.fill('file-reading');
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
    'for-ai.md',
    ...[
      'OVERVIEW.md',
      'SETUP.md',
      '00-project-and-git.md',
      'CURRICULUM.md',
      'PRACTICE.md',
      'AI-TEACHER.md',
      '01-testing-and-qa.md',
      'PLAN.md',
      '02-modeling-data-and-behavior.md',
      '03-error-handling-and-recovery.md',
      '04-persistence-and-shared-state.md',
      '05-typing-protocols-and-data-validation.md',
      '06-structuring-a-program.md',
      '07-concurrency.md',
      '08-share-run-and-maintain.md',
      '09-build-and-learn-on-your-own.md',
    ].map((name) => `course/${name}`),
    'understand-code/index.md',
    'understand-code/07-work-with-engineers.md',
    'understand-code/review-questions.md',
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
  expect(entries).toHaveLength(37);
  for (const entry of entries) {
    const response = await request.get(entry.route);
    expect(response.status()).toBe(200);
  }
  expect(entries.map((entry) => entry.route)).toContain(
    `${base}modules/concurrency/`,
  );
});

test('merged entry keeps the old overview URL and shows full modules', async ({
  page,
  request,
}) => {
  await page.goto('start/');
  await expect(page).toHaveURL(new RegExp(`${base}$`));
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Learn to Build Software',
  );
  await expect(
    page.getByRole('heading', { level: 2, name: /^The core modules/ }),
  ).toBeVisible();
  await expect(page.getByRole('main')).not.toContainText(/draft/i);
  await page.goto('modules/concurrency/');
  await expect(page.getByRole('main')).not.toContainText(/draft|being built/i);
  await expect(
    page.getByRole('heading', {
      level: 2,
      name: /^Agent mistakes to watch for/,
    }),
  ).toBeVisible();
  const legacy = await request.get('raw/welcome.md');
  expect(legacy.status()).toBe(200);
  expect(await legacy.text()).toContain('course/OVERVIEW.md');
});

test('setup exposes three choices, an understand-track pointer and source-authored copyable prompts', async ({
  page,
  context,
}, info) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('setup/#whats-next');
  const main = page.getByRole('main');
  await expect(
    main.getByRole('heading', { name: /^What's next\?/, level: 2 }),
  ).toBeVisible();
  await expect(
    main.getByRole('link', { name: 'Plan your app', exact: true }),
  ).toHaveAttribute('href', `${base}plan-your-app/`);
  await expect(
    main.getByRole('link', {
      name: 'Module 0 — Directing an agent',
      exact: true,
    }),
  ).toHaveAttribute('href', `${base}modules/project-and-git/`);
  await expect(
    main.getByText('Continue existing work:', { exact: true }),
  ).toBeVisible();
  const blocks = main.locator('.theme-code-block');
  const setup = await readFile('docs/course/SETUP.md', 'utf8');
  const expectedBlocks = sourceCodeBlocks(setup);
  await expect(blocks).toHaveCount(expectedBlocks.length);
  expect(expectedBlocks).toEqual(
    expect.arrayContaining([
      'Help me decide whether to build my idea, and on what.',
      'Help me understand Git and GitHub using this repository.',
      'I already have a project. Help me choose a useful next learning step.',
      'Help me get to know a repository my team works on.',
    ]),
  );
  for (const [index, block] of (await blocks.all()).entries()) {
    const expected = expectedBlocks[index];
    const button = block.getByRole('button', {
      name: 'Copy text to clipboard',
    });
    await button.focus();
    await page.keyboard.press('Enter');
    await expect(block.getByRole('status')).toHaveText('Copied.');
    await expect
      .poll(() => page.evaluate(() => navigator.clipboard.readText()))
      .toBe(expected);
    await button.click();
    await expect
      .poll(() => page.evaluate(() => navigator.clipboard.readText()))
      .toBe(expected);
  }
  await page.screenshot({
    path: info.outputPath('setup-choices.png'),
    fullPage: true,
  });
  await main
    .getByRole('link', {
      name: 'Module 0 — Directing an agent',
      exact: true,
    })
    .click();
  const gitPrompt = main.locator('.theme-code-block');
  await expect(gitPrompt).toHaveCount(1);
  await expect(gitPrompt.locator('code')).toContainText(
    'Help me understand Git and GitHub using this repository.',
  );
  await expect(gitPrompt.locator('code')).not.toContainText('define');
  await expect(main).not.toContainText(/draft — for review/i);
});

test('copy failure is announced and repeated copy can recover without browser errors', async ({
  page,
}) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.addInitScript(() => {
    window.copyAttempts = [];
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (text) => {
          window.copyAttempts.push(text);
          if (window.copyAttempts.length === 1)
            throw new Error('Clipboard denied');
        },
      },
    });
  });
  await page.goto('setup/');
  const block = page.locator('.theme-code-block').first();
  const button = block.getByRole('button', { name: 'Copy text to clipboard' });
  await button.click();
  await expect(block.getByRole('status')).toHaveText(
    'Copy failed. Select the text and copy it, or try again.',
  );
  const expected = sourceCodeBlocks(
    await readFile('docs/course/SETUP.md', 'utf8'),
  )[0];
  await expect(block.locator('code')).toBeVisible();
  await button.click();
  await expect(block.getByRole('status')).toHaveText('Copied.');
  await button.click();
  await expect
    .poll(() => page.evaluate(() => window.copyAttempts.length))
    .toBe(3);
  expect(await page.evaluate(() => window.copyAttempts)).toEqual([
    expected,
    expected,
    expected,
  ]);
  expect(errors).toEqual([]);
});

test('understanding track guide reaches all seven modules without draft labels', async ({
  page,
}) => {
  await page.goto('understand-code/');
  const main = page.getByRole('main');
  await expect(main).toContainText(/risk and control/);
  await expect(main).not.toContainText(/draft module|second-track/i);
  for (const route of [
    'how-software-fits-together',
    'find-your-way',
    'follow-one-behavior',
    'run-and-investigate',
    'evidence-of-correctness',
    'read-evolving-project',
    'work-with-engineers',
  ]) {
    const response = await page.goto(`understand-code/${route}/`);
    expect(response.status()).toBe(200);
    await expect(page.getByRole('main')).not.toContainText(/draft module/i);
  }
  await expect(
    page.getByRole('heading', { level: 2, name: /^Capstone/ }),
  ).toBeVisible();
});
