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
    ['modules/project-and-git/', 'Module 0 — Git and GitHub for your work'],
    ['learning-path/', 'Learn to Build Software — Curriculum'],
    ['practice/', 'Learn to Build Software — Practice and review'],
    ['modules/testing-and-qa/', 'Module 1 — Testing and QA'],
    [
      'modules/error-handling-and-recovery/',
      'Module 2 — Error handling and recovery',
    ],
    ['modules/concurrency/', 'Module 7 — Concurrency'],
    ['companions/', 'Companion skills'],
    ['companions/read-active-repository/', 'Read an Active Repository'],
    ['companions/fieldnotes-evidence/', 'Fieldnotes repository evidence'],
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
  await page.getByRole('link', { name: /Next 0\. Git\/GitHub/ }).click();
  await expect(page).toHaveURL(new RegExp(`${base}modules/project-and-git/$`));
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
  await page.keyboard.type('Markdown');
  await expect(page.getByRole('status')).toHaveText(
    /[1-9]\d* matching pages?\./,
  );
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
    'for-ai.md',
    'companions/index.md',
    'companions/read-active-repository.md',
    'companions/fieldnotes-evidence.md',
    ...[
      'OVERVIEW.md',
      'SETUP.md',
      '00-project-and-git.md',
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
  expect(entries).toHaveLength(files.length);
  for (const entry of entries) {
    const response = await request.get(entry.route);
    expect(response.status()).toBe(200);
  }
  expect(entries.map((entry) => entry.route)).toContain(
    `${base}modules/concurrency/`,
  );
});

test('merged entry keeps the old overview URL and marks future work', async ({
  page,
  request,
}) => {
  await page.goto('start/');
  await expect(page).toHaveURL(new RegExp(`${base}$`));
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Learn to Build Software',
  );
  await expect(
    page.getByRole('heading', { level: 2, name: /^Course status/ }),
  ).toBeVisible();
  await page.goto('modules/concurrency/');
  await expect(
    page.getByRole('main').getByText('Being built', { exact: true }),
  ).toBeVisible();
  await expect(page.getByRole('heading', { level: 3 })).toHaveCount(0);
  const legacy = await request.get('raw/welcome.md');
  expect(legacy.status()).toBe(200);
  expect(await legacy.text()).toContain('course/OVERVIEW.md');
});

test('setup exposes independent project preparation, three choices, and copyable prompts', async ({
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
    main.getByRole('link', { name: 'Define your project', exact: true }),
  ).toHaveAttribute('href', `${base}#choose-and-outline-your-project`);
  await expect(
    main.getByRole('link', {
      name: 'Module 0 — Git and GitHub for your work',
      exact: true,
    }),
  ).toHaveAttribute('href', `${base}modules/project-and-git/`);
  await expect(
    main.getByText('Continue existing work:', { exact: true }),
  ).toBeVisible();
  const blocks = main.locator('.theme-code-block');
  await expect(blocks).toHaveCount(5);
  const setup = await readFile('docs/course/SETUP.md', 'utf8');
  const expectedBlocks = sourceCodeBlocks(setup);
  expect(expectedBlocks[0]).toContain('my own project repository');
  expect(expectedBlocks[0]).toContain('separate from the learn-to-code course');
  expect(expectedBlocks[1]).toContain('YOUR-USERNAME/YOUR-PROJECT.git');
  expect(expectedBlocks.slice(2)).toEqual([
    'Help me choose a small useful app and define its first behavior.',
    'Help me understand Git and GitHub using my project repository.',
    'I already have a project. Help me choose a useful next learning step.',
  ]);
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
      name: 'Module 0 — Git and GitHub for your work',
      exact: true,
    })
    .click();
  const gitPrompt = main.locator('.theme-code-block');
  await expect(gitPrompt).toHaveCount(1);
  await expect(gitPrompt.locator('code')).toContainText(
    'Help me understand Git and GitHub using my project repository.',
  );
  await expect(gitPrompt.locator('code')).not.toContainText('define');
  await expect(
    main.getByText('Draft — for review.', { exact: true }),
  ).toBeVisible();
});

test('full course map leads to independent practice and accessible evidence return', async ({
  page,
  isMobile,
}, info) => {
  await page.goto('');
  const main = page.getByRole('main');
  const modules = main.getByRole('table');
  await expect(modules.getByRole('row')).toHaveCount(8);
  await expect(
    main.getByText(/Module 1 has detailed learning objectives/),
  ).toBeVisible();
  // Later core topics are directly discoverable, without expanding a future-only category.
  if (isMobile) {
    await page.getByRole('button', { name: 'Toggle navigation bar' }).click();
  }
  const nav = isMobile
    ? page.locator('.navbar-sidebar__item:not([inert])')
    : page.getByRole('navigation', { name: 'Docs sidebar' });
  await expect(
    nav.getByRole('link', { name: /7\. Concurrency/ }),
  ).toBeVisible();
  await nav.getByRole('link', { name: /7\. Concurrency/ }).click();
  await expect(page).toHaveURL(new RegExp(`${base}modules/concurrency/$`));
  await page.goto('practice/#bring-work-back-for-review');
  await expect(
    main.getByRole('heading', { name: /^Bring work back for review/ }),
  ).toBeVisible();
  await expect(main.getByText(/A chat link is a pointer/)).toBeVisible();
  await expect(main.getByText(/pasted excerpt/)).toBeVisible();
  await expect(
    main.getByText(/Distinguish reported results from inspected evidence/),
  ).toBeVisible();
  await page.screenshot({
    path: info.outputPath('evidence-return.png'),
    fullPage: true,
  });
});

test('Module 2 draft connects independent application to the shared evidence-return flow', async ({
  page,
  request,
}) => {
  await page.goto('');
  const main = page.getByRole('main');
  await expect(
    main.getByText('detailed draft pending course-author review', {
      exact: true,
    }),
  ).toBeVisible();
  await main
    .getByRole('link', { name: '2. Error handling and recovery', exact: true })
    .click();
  await expect(page).toHaveURL(
    new RegExp(`${base}modules/error-handling-and-recovery/$`),
  );
  await expect(
    main.getByText('Draft — for course-author review.', { exact: true }),
  ).toBeVisible();
  await expect(main.getByRole('heading', { level: 3 })).toHaveCount(6);
  await expect(
    main.getByText(
      /Implementation happens in a separate learner-owned repository/,
    ),
  ).toBeVisible();
  await expect(
    main.getByText(/If the teacher cannot open the chat or repository/),
  ).toBeVisible();
  const raw = await request.get('raw/course/02-error-handling-and-recovery.md');
  expect(await raw.text()).toContain('module-2-recovery-draft-2026-10-30');
  await main
    .getByRole('link', { name: 'Practice and transcript review', exact: true })
    .click();
  await expect(
    main.getByRole('heading', { name: /^Bring work back for review/ }),
  ).toBeVisible();
  await expect(main.getByText(/A chat link is a pointer/)).toBeVisible();
  await page.goto('search/');
  await page
    .getByRole('searchbox', { name: 'Search words' })
    .fill('unknown outcomes');
  await page
    .locator('.search-results')
    .getByRole('link', {
      name: 'Module 2 — Error handling and recovery',
      exact: true,
    })
    .click();
  await expect(page).toHaveURL(
    new RegExp(`${base}modules/error-handling-and-recovery/$`),
  );
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

test('standalone companion is discoverable outside the core sequence with practice and search', async ({
  page,
  isMobile,
}, info) => {
  await page.goto('');
  const main = page.getByRole('main');
  const article = page.getByRole('article');
  await article
    .getByRole('link', { name: 'Companion skills', exact: true })
    .click();
  await expect(page).toHaveURL(new RegExp(`${base}companions/$`));
  await article
    .getByRole('link', { name: 'Read an Active Repository', exact: true })
    .click();
  await expect(page).toHaveURL(
    new RegExp(`${base}companions/read-active-repository/$`),
  );
  await expect(
    main.getByText('Draft — for course-author review.', { exact: true }),
  ).toBeVisible();
  await expect(main.getByRole('heading', { level: 3 })).toHaveCount(6);
  await expect(main.getByText(/You do not need to write code/)).toBeVisible();
  // The companion uses its own sidebar and pagination rather than Module 8.
  await expect(main.locator('.pagination-nav')).not.toContainText(
    'Concurrency',
  );
  if (isMobile)
    await page.getByRole('button', { name: 'Toggle navigation bar' }).click();
  const nav = isMobile
    ? page.locator('.navbar-sidebar__item:not([inert])')
    : page.getByRole('navigation', { name: 'Docs sidebar' });
  await expect(
    nav.getByRole('link', { name: /Read an Active Repository/ }),
  ).toBeVisible();
  await expect(nav.getByRole('link', { name: /7\. Concurrency/ })).toHaveCount(
    0,
  );
  if (isMobile)
    await page.getByRole('button', { name: 'Close navigation bar' }).click();
  await page.screenshot({
    path: info.outputPath('companion-module.png'),
    fullPage: true,
  });
  const table = main.getByRole('region', { name: 'Scrollable table' });
  await table.focus();
  if (isMobile) {
    await page.keyboard.press('ArrowRight');
    await expect
      .poll(() => table.evaluate((el) => el.scrollLeft))
      .toBeGreaterThan(0);
  }
  await article
    .getByRole('link', { name: 'fictional Fieldnotes example', exact: true })
    .click();
  await expect(page).toHaveURL(
    new RegExp(`${base}companions/fieldnotes-evidence/$`),
  );
  await expect(
    main.getByRole('heading', {
      name: /^E7 A plausible but flawed AI summary/,
    }),
  ).toBeVisible();
  await page.screenshot({
    path: info.outputPath('companion-evidence.png'),
    fullPage: true,
  });
  await page.goto('search/');
  await page
    .getByRole('searchbox', { name: 'Search words' })
    .fill('read an active repository');
  await page
    .locator('.search-results')
    .getByRole('link', { name: 'Read an Active Repository', exact: true })
    .click();
  await expect(page).toHaveURL(
    new RegExp(`${base}companions/read-active-repository/$`),
  );
  await page.goto('learning-path/');
  await article
    .getByRole('link', { name: 'Read an Active Repository', exact: true })
    .click();
  await expect(page).toHaveURL(
    new RegExp(`${base}companions/read-active-repository/$`),
  );
  await page.goto('companions/');
  if (isMobile)
    await page.getByRole('button', { name: 'Toggle navigation bar' }).click();
  if (isMobile)
    await page.getByRole('button', { name: /Back to main menu/ }).click();
  const mainNav = isMobile
    ? page.locator('.navbar-sidebar__item:not([inert])')
    : page.getByRole('navigation', { name: 'Main', exact: true });
  await mainNav
    .getByRole('link', { name: 'Learning path', exact: true })
    .click();
  await expect(page).toHaveURL(new RegExp(`${base}learning-path/$`));
});
