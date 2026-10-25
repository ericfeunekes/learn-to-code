const fs = require('node:fs/promises');
const path = require('node:path');
const matter = require('gray-matter');

// This positive allowlist excludes learner records, logs, research and archives.
const pages = [
  ['OVERVIEW.md', '/', 'Course outcomes and a useful project to begin with.'],
  [
    'CURRICULUM.md',
    '/learning-path',
    'The seven core modules and directions for further learning.',
  ],
  [
    'AI-TEACHER.md',
    '/teaching',
    'Introduce concepts, explore understanding and review project practice.',
  ],
  [
    'PRACTICE.md',
    '/practice',
    'Apply an objective in a project thread and bring the evidence back.',
  ],
  [
    '01-testing-and-qa.md',
    '/modules/testing-and-qa',
    'Define expected behavior and judge tests and the actual client outcome.',
  ],
  [
    '02-error-handling-and-recovery.md',
    '/modules/error-handling-and-recovery',
    'Diagnose failures and choose responses and recovery.',
  ],
  [
    '03-persistence-and-shared-state.md',
    '/modules/persistence-and-shared-state',
    'Explain storage, authoritative values, caching and preservation.',
  ],
  [
    '04-modeling-data-and-behavior.md',
    '/modules/modeling-data-and-behavior',
    'Describe identities, relationships, states and rules.',
  ],
  [
    '05-typing-protocols-and-data-validation.md',
    '/modules/typing-protocols-and-data-validation',
    'Express shapes and shared promises, and check actual data.',
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
    // Keep the reusable skill's private location and all learner records out.
    if (file === 'AI-TEACHER.md') {
      content = content.replace(
        /Use the \[Teach through projects skill\]\(<[^>]+>\) for the teaching method:/,
        'The teaching method is to',
      );
      content = content.replace(
        /\[the progress record\]\(LEDGER\.md\)/g,
        'the learner’s private progress record',
      );
      content = content.replace(
        /\[the teaching log\]\(TEACHING-LOG\.md\)/g,
        'the learner’s private teaching log',
      );
      content = content.replace(
        /When using a teaching AI[\s\S]*$/,
        'Keep learner records outside this public website. The full reusable teaching skill is maintained separately; the course owner can provide it to the teaching AI.\n',
      );
    }
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
        description:
          content.includes('**Being built**') && /^0[2-7]-/.test(file)
            ? `Being built — outline only. ${description}`
            : description,
        slug,
        source_file: file,
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
