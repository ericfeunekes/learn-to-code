const fs = require('node:fs/promises');
const path = require('node:path');

const names = ['use-learning-outcomes', 'review-learning-evidence'];
const check = process.argv.includes('--check');

async function main() {
  for (const name of names) {
    const source = await fs.readFile(path.join('skills', name, 'SKILL.md'));
    for (const root of ['.agents/skills', '.claude/skills']) {
      const target = path.join(root, name, 'SKILL.md');
      if (check) {
        const stat = await fs.lstat(target);
        if (!stat.isFile() || !(await fs.readFile(target)).equals(source))
          throw new Error(`${target}: must be a regular, byte-equal copy`);
      } else {
        await fs.mkdir(path.dirname(target), { recursive: true });
        // Refuse a symlink rather than following it outside this checkout.
        const stat = await fs.lstat(target).catch((error) => {
          if (error.code !== 'ENOENT') throw error;
        });
        if (stat && !stat.isFile())
          throw new Error(`${target}: not a regular file`);
        await fs.writeFile(target, source);
      }
    }
  }
  for (const dir of ['.', 'app']) {
    const agents = await fs.readFile(path.join(dir, 'AGENTS.md'));
    if (!agents.equals(await fs.readFile(path.join(dir, 'CLAUDE.md'))))
      throw new Error(`${dir}: AGENTS.md and CLAUDE.md must share guidance`);
  }
  for (const file of ['PROJECT.md', 'PROGRESS.md', 'LOG.md', 'HANDOFF.md'])
    await fs.access(path.join('templates', 'learning', file));
  console.log(
    `Teaching skill discovery copies ${check ? 'verified' : 'updated'}.`,
  );
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
