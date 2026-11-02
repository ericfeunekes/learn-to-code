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
    ['', 'Learn to Work with Code'],
    ['setup/', 'Set up your workspace'],
    ['modules/project-and-git/', 'Module 0 — GitHub for everyone'],
    ['learning-path/', 'Learning path — two ways to work with code'],
    ['practice/', 'Practice and evidence review'],
    ['modules/testing-and-qa/', 'Module 1 — Testing and QA'],
    [
      'modules/error-handling-and-recovery/',
      'Module 2 — Error handling and recovery',
    ],
    ['modules/concurrency/', 'Module 7 — Concurrency'],
    ['companions/', 'Earlier repository-reading material'],
    [
      'companions/read-active-repository/',
      'Read an Active Repository — earlier material',
    ],
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
    'Learning path — two ways to work with code',
  );
  if (isMobile) {
    const table = page.getByRole('region', { name: 'Scrollable table' });
    await table.focus();
    await page.keyboard.press('ArrowRight');
    await expect
      .poll(() => table.evaluate((el) => el.scrollLeft))
      .toBeGreaterThan(0);
  }
  await page
    .getByRole('main')
    .locator(`a[href="${base}modules/project-and-git/"]`)
    .first()
    .click();
  await expect(page).toHaveURL(new RegExp(`${base}modules/project-and-git/$`));
  await page.goto('');
  await page
    .getByRole('main')
    .getByRole('link', { name: 'Testing and QA', exact: true })
    .click();
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
    'understand-code/index.md',
    'understand-code/01-how-software-fits-together.md',
    'understand-code/fixtures/module-1-shelf-summary.md',
    'understand-code/02-find-your-way.md',
    'understand-code/02-navigation-evidence.md',
    'understand-code/03-follow-one-behavior.md',
    'understand-code/03-behavior-evidence.md',
    'understand-code/03-run-and-investigate.md',
    'understand-code/03-workshop-practice.md',
    'understand-code/03-teacher-notes.md',
    'understand-code/04-follow-feature-or-change.md',
    'understand-code/04-change-evidence.md',
    'understand-code/05-evidence-of-correctness.md',
    'understand-code/05-practice-evidence.md',
    'understand-code/06-read-evolving-project.md',
    'understand-code/module6-harbor-log-lab.md',
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
  expect(entries).toHaveLength(33);
  expect(entries.map((entry) => entry.raw).sort()).toEqual(
    files.map((file) => `${base}raw/${file}`).sort(),
  );
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
    'Learn to Work with Code',
  );
  await expect(
    page.getByRole('heading', { level: 2, name: /^Module availability/ }),
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
      name: 'Module 0 — GitHub for everyone',
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
  expect(expectedBlocks[0]).toContain('my own project repository');
  expect(
    expectedBlocks.some((block) =>
      block.includes('git clone --origin upstream'),
    ),
  ).toBe(true);
  expect(
    expectedBlocks.some((block) =>
      block.includes('git config remote.pushDefault origin'),
    ),
  ).toBe(true);
  expect(expectedBlocks[0]).toContain('separate from the learn-to-code course');
  expect(expectedBlocks[1]).toContain('YOUR_APPROVED_PROJECT_URL');
  expect(expectedBlocks.slice(2, 5)).toEqual([
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
      name: 'Module 0 — GitHub for everyone',
      exact: true,
    })
    .click();
  const gitPrompt = main.locator('.theme-code-block');
  await expect(gitPrompt).toHaveCount(1);
  await expect(gitPrompt.locator('code')).toContainText(
    'Help me understand GitHub using',
  );
  await expect(gitPrompt.locator('code')).not.toContainText('define');
  await expect(
    main.getByText('Draft module.', {
      exact: true,
    }),
  ).toBeVisible();
});

test('full course map leads to independent practice and accessible evidence return', async ({
  page,
  isMobile,
}, info) => {
  await page.goto('');
  const main = page.getByRole('main');
  // Both tracks have equal heading rank and expose their complete module paths.
  await expect(
    main.getByRole('heading', {
      level: 3,
      name: /^Build with Code/,
    }),
  ).toBeVisible();
  await expect(
    main.getByRole('heading', {
      level: 3,
      name: /^Understand \/ Investigate Software/,
    }),
  ).toBeVisible();
  for (const route of [
    'modules/testing-and-qa',
    'modules/error-handling-and-recovery',
    'modules/persistence-and-shared-state',
    'modules/modeling-data-and-behavior',
    'modules/typing-protocols-and-data-validation',
    'modules/structuring-a-program',
    'modules/concurrency',
    'understand-code/how-software-fits-together',
    'understand-code/find-your-way',
    'understand-code/follow-one-behavior',
    'understand-code/run-and-investigate',
    'understand-code/evidence-of-correctness',
    'understand-code/read-evolving-project',
  ])
    await expect(main.locator(`a[href="${base}${route}/"]`)).toBeVisible();
  await expect(
    main.getByText(/Module 1\s+has detailed learning objectives/),
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
    main.getByText('Draft', {
      exact: true,
    }),
  ).toBeVisible();
  await main
    .getByRole('link', { name: 'Error handling and recovery', exact: true })
    .click();
  await expect(page).toHaveURL(
    new RegExp(`${base}modules/error-handling-and-recovery/$`),
  );
  await expect(main.getByText('Draft module.', { exact: true })).toBeVisible();
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

test('shared GitHub foundation leads to the complete second-track draft without app setup', async ({
  page,
}, info) => {
  await page.goto('');
  const main = page.getByRole('main');
  await main
    .getByRole('link', { name: 'Module 0 — GitHub for everyone', exact: true })
    .click();
  await expect(main.getByRole('heading', { level: 1 })).toHaveText(
    'Module 0 — GitHub for everyone',
  );
  await expect(main.getByText('You do not need an app idea')).toBeVisible();
  await main
    .getByRole('link', { name: 'How software fits together', exact: true })
    .click();
  const routes = [
    'how-software-fits-together',
    'find-your-way',
    'follow-one-behavior',
    'run-and-investigate',
    'evidence-of-correctness',
    'read-evolving-project',
  ];
  for (const [index, route] of routes.entries()) {
    await expect(page).toHaveURL(
      new RegExp(`${base}understand-code/${route}/$`),
    );
    await expect(
      main.getByRole('link', { name: 'Shared GitHub 0', exact: true }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const a11y = await new AxeBuilder({ page }).analyze();
    expect(
      a11y.violations.filter((v) => ['critical', 'serious'].includes(v.impact)),
    ).toEqual([]);
    if (index < routes.length - 1)
      await main
        .getByRole('link', { name: 'Next module', exact: true })
        .click();
  }
  await main
    .getByRole('link', { name: 'Second-track guide', exact: true })
    .click();
  await expect(main.getByRole('heading', { level: 1 })).toHaveText(
    'Understand code and changes',
  );
  await expect(
    main.getByRole('heading', { name: /^The six-module path/ }),
  ).toBeVisible();
  await page.screenshot({
    path: info.outputPath('two-track-guide.png'),
    fullPage: true,
  });
  await page.goto('companions/read-active-repository/');
  await main
    .getByRole('link', {
      name: 'Module 6 — Read an evolving project',
      exact: true,
    })
    .click();
  await expect(page).toHaveURL(
    new RegExp(`${base}understand-code/read-evolving-project/$`),
  );
});

test('investigation practice exposes the exact disposable fixture and evidence-return guide', async ({
  page,
  request,
}) => {
  await page.goto('understand-code/run-and-investigate/');
  const main = page.getByRole('main');
  await main.getByRole('link', { name: 'practice', exact: true }).click();
  await expect(page).toHaveURL(
    new RegExp(`${base}understand-code/practice/workshop-directory/$`),
  );
  for (const file of ['module3_server.py', 'module3_fixture_test.py']) {
    const response = await request.get(`exercises/understand-module3/${file}`);
    expect(response.status()).toBe(200);
    expect(await response.text()).toBe(
      await readFile(`static/exercises/understand-module3/${file}`, 'utf8'),
    );
  }
  await expect(main.getByText(/No course\s+checkout/)).toBeVisible();
  await page.goto('practice/#bring-work-back-for-review');
  await expect(
    main.getByRole('heading', { name: /^Bring work back for review/ }),
  ).toBeVisible();
  await expect(main.getByText(/A chat link is a pointer/)).toBeVisible();
});

test('code word wrapping survives resize during route detachment', async ({
  page,
  isMobile,
}) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('setup/');
  await expect(page.locator('html')).toHaveAttribute(
    'data-has-hydrated',
    'true',
  );
  await expect(page.getByRole('main').locator('pre').first()).toBeVisible();
  if (isMobile) {
    const block = page.getByRole('main').locator('.theme-code-block').first();
    const wrap = block.getByRole('button', { name: 'Toggle word wrap' });
    await expect(wrap).toBeVisible();
    await wrap.click();
    await expect(block.locator('code')).toHaveCSS('white-space', 'pre-wrap');
    await wrap.click();
    await expect(block.locator('code')).not.toHaveCSS(
      'white-space',
      'pre-wrap',
    );
  }
  // Model a queued viewport change at the detach boundary, before passive
  // listener cleanup. This exercises the shared hook, not a module's prose.
  await page.evaluate(() => {
    window.codeDetachResizes = 0;
    const removeChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function (child) {
      const containsCode =
        child instanceof Element &&
        (child.matches('pre') || child.querySelector('pre'));
      const removed = removeChild.call(this, child);
      if (containsCode) {
        window.codeDetachResizes += 1;
        window.dispatchEvent(new Event('resize'));
      }
      return removed;
    };
  });
  await page
    .getByRole('main')
    .getByRole('link', { name: 'the second-track guide', exact: true })
    .click();
  await expect(page).toHaveURL(new RegExp(`${base}understand-code/$`));
  expect(await page.evaluate(() => window.codeDetachResizes)).toBeGreaterThan(
    0,
  );
  expect(errors).toEqual([]);
});

test('code blocks survive theme reload and viewport changes', async ({
  page,
}) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.emulateMedia({ colorScheme: 'dark' });
  for (const route of [
    'understand-code/navigation-evidence/',
    'understand-code/evidence-of-correctness/practice/',
  ]) {
    await page.goto(route);
    await expect(page.locator('html')).toHaveAttribute(
      'data-has-hydrated',
      'true',
    );
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute(
      'data-has-hydrated',
      'true',
    );
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    for (const width of [390, 430, 390])
      await page.setViewportSize({ width, height: 664 });
    await page.evaluate(
      () =>
        new Promise((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(resolve)),
        ),
    );
  }
  expect(errors).toEqual([]);
});
