const fs = require('node:fs/promises');
const path = require('node:path');
const matter = require('gray-matter');

async function main() {
  const sourceDir = path.resolve('docs');
  const outDir = path.resolve('.generated');
  const base = process.env.BASE_URL || '/learn-to-code/';
  if (!base.startsWith('/') || !base.endsWith('/')) {
    throw new Error('BASE_URL must start and end with /');
  }
  // This directory is exclusively owned by this generator; clear retired exports.
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });
  const files = (await fs.readdir(sourceDir, { recursive: true }))
    .filter((file) => file.endsWith('.md'))
    .sort();
  const entries = [];
  for (const file of files) {
    const source = await fs.readFile(path.join(sourceDir, file), 'utf8');
    const { data, content } = matter(source);
    if (!data.title || !data.description || !data.slug) {
      throw new Error(`${file}: title, description and slug are required`);
    }
    const raw = `raw/${file.split(path.sep).join('/')}`;
    const destination = path.join(outDir, raw);
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.writeFile(destination, source.replaceAll('pathname:///', base));
    entries.push({
      title: data.title,
      description: data.description,
      route:
        `${base}${data.slug.replace(/^\//, '').replace(/\/?$/, '/')}`.replace(
          /\/+/g,
          '/',
        ),
      raw: `${base}${raw}`,
      text: content.replace(/```[\s\S]*?```/g, '').replace(/[#*_`>]/g, ''),
    });
  }
  await fs.writeFile(
    path.join(outDir, 'search-index.json'),
    JSON.stringify(entries),
  );
  await fs.writeFile(
    path.join(outDir, 'llms.txt'),
    [
      '# Learn to Code',
      '',
      '> Plain Markdown generated from the same source as this website.',
      '> Course objectives and general guides only; learner records are private.',
      '',
      '## Pages',
      ...entries.map(
        (entry) => `- [${entry.title}](${entry.raw}): ${entry.description}`,
      ),
      '',
    ].join('\n'),
  );
  console.log(
    `Generated Markdown, reading index and search for ${entries.length} pages.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
