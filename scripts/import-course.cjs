const fs = require('node:fs/promises');
const path = require('node:path');
const matter = require('gray-matter');
const { refinements } = require('../maintenance/course-refinements.json');

// This positive allowlist excludes learner records, logs, research and archives.
const pages = [
  [
    'OVERVIEW.md',
    '/',
    "Two tracks: build a useful work app by directing AI, or understand a team's code and changes.",
  ],
  [
    'PLAN.md',
    '/plan-your-app',
    'Decide whether to build, on what and with which data, who will use it, and outline the first version.',
  ],
  [
    'SETUP.md',
    '/setup',
    'Get the course workspace and a private project repository, then choose what is next.',
  ],
  [
    '00-project-and-git.md',
    '/modules/project-and-git',
    'Brief an agent, check its work and use Git to keep or undo it.',
  ],
  [
    'CURRICULUM.md',
    '/learning-path',
    'The core modules, how they reach the goal, and directions for further learning.',
  ],
  [
    'AI-TEACHER.md',
    '/teaching',
    'Introduce concepts, explore understanding and review project practice.',
  ],
  [
    'PRACTICE.md',
    '/practice',
    'Apply an objective in this conversation or hand it off, then review the evidence.',
  ],
  [
    '01-testing-and-qa.md',
    '/modules/testing-and-qa',
    'Define expected behavior and judge tests and the actual client outcome.',
  ],
  [
    '02-modeling-data-and-behavior.md',
    '/modules/modeling-data-and-behavior',
    'Describe identities, relationships, states and rules, and write a spec an agent can build from.',
  ],
  [
    '03-error-handling-and-recovery.md',
    '/modules/error-handling-and-recovery',
    'Direct a diagnosis from evidence, and choose responses and recovery.',
  ],
  [
    '04-persistence-and-shared-state.md',
    '/modules/persistence-and-shared-state',
    'Explain storage, authoritative values, caching and preservation.',
  ],
  [
    '05-typing-protocols-and-data-validation.md',
    '/modules/typing-protocols-and-data-validation',
    'Check outside data at the boundary, and see what types and promises do and do not check.',
  ],
  [
    '06-structuring-a-program.md',
    '/modules/structuring-a-program',
    'Explain responsibilities and dependencies, and plan coherent changes.',
  ],
  [
    '07-concurrency.md',
    '/modules/concurrency',
    'Reason about overlapping and repeated work and suitable controls.',
  ],
  [
    '08-share-run-and-maintain.md',
    '/modules/share-run-and-maintain',
    'Choose where your app runs, control who gets in, release safely, and keep it running or hand it off.',
  ],
  [
    '09-build-and-learn-on-your-own.md',
    '/modules/build-and-learn-on-your-own',
    'Plan, direct and ship a useful app yourself, learn a new topic with an agent and set your next outcomes.',
  ],
];

async function main() {
  const sourceDir = process.argv[2];
  if (!sourceDir)
    throw new Error(
      'Usage: npm run content:refresh -- /path/to/maintained/course',
    );
  const output = path.resolve('docs/course');
  const rendered = [];
  for (const [file, slug, description] of pages) {
    let { content } = matter(
      await fs.readFile(path.join(sourceDir, file), 'utf8'),
    );
    const appliedRefinements = [];
    for (const refinement of refinements.filter((item) => item.file === file)) {
      if (content.split(refinement.before).length !== 2)
        throw new Error(
          `${file}: approved refinement ${refinement.id} needs source review`,
        );
      content = content.replace(refinement.before, refinement.after);
      appliedRefinements.push(refinement.id);
    }
    // Display source-authored prompts as copyable text without changing their words.
    if (file === 'SETUP.md') {
      content = content.replace(
        /Ask: “([^”]+)”/g,
        '\n\n  ```text\n  $1\n  ```\n\n  ',
      );
      content = content.replace(
        /ask: “([^”]+)”/g,
        '\n\n  ```text\n  $1\n  ```\n\n  ',
      );
    }
    if (file === 'OVERVIEW.md')
      content = content.replace(
        /Ask AI: “([^”]+)”/g,
        'Ask AI:\n\n```text\n$1\n```\n',
      );
    if (file === 'CURRICULUM.md') {
      content = content.replace(/\n## Design basis[\s\S]*$/, '\n');
      content = content.replace(
        /^# Future directions/m,
        '## Future directions',
      );
    }
    if (
      /\/Users\/|drive\.google|docs\.google|LEDGER\.md|TEACHING-LOG\.md|research\//i.test(
        content,
      )
    ) {
      throw new Error(
        `${file}: excluded private reference; review the source before publishing`,
      );
    }
    content = content.replace(/\bEric\b/g, 'the course author');
    const title = content.match(/^# (.+)$/m)?.[1];
    if (!title) throw new Error(`${file}: missing title`);
    rendered.push([
      file,
      matter.stringify(content.trim() + '\n', {
        title,
        description: description,
        slug,
        source_file: file,
        ...(appliedRefinements.length
          ? { source_refinements: appliedRefinements }
          : {}),
      }) +
        '\n<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->\n',
    ]);
  }
  await fs.mkdir(output, { recursive: true });
  for (const [file, content] of rendered)
    await fs.writeFile(path.join(output, file), content);
  console.log(
    `Prepared ${rendered.length} reviewed course pages; private records and source locations excluded.`,
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
