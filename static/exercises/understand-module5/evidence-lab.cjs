// Fictional Module 5 exercise. Built-ins only; no network or persistent writes.
const assert = require('node:assert/strict');

function simulateRequest(version, title) {
  if (!['baseline', 'candidate'].includes(version)) {
    throw new Error('Choose baseline or candidate.');
  }
  const notes = [];
  const invalid =
    version === 'baseline' ? title.trim().length === 0 : title.length === 0;
  if (invalid) {
    return { status: 400, message: 'Title required', noteCount: notes.length };
  }
  notes.push({ title });
  return { status: 201, message: 'Created', noteCount: notes.length };
}

function main() {
  const [version, mode] = process.argv.slice(2);
  if (
    !['baseline', 'candidate'].includes(version) ||
    !['weak', 'focused', 'observe'].includes(mode)
  ) {
    console.error(
      'Usage: node evidence-lab.cjs baseline|candidate weak|focused|observe',
    );
    process.exitCode = 2;
    return;
  }
  const title = '   ';
  const result = simulateRequest(version, title);
  if (mode === 'observe') {
    console.log(
      JSON.stringify({ version, title, initialNoteCount: 0, result }),
    );
    return;
  }
  const expected = { status: 400, message: 'Title required', noteCount: 0 };
  try {
    if (mode === 'weak') {
      assert.equal(typeof result.status, 'number');
    } else {
      assert.deepEqual(result, expected);
    }
    console.log(`PASS: ${mode} check for ${version}`);
  } catch (error) {
    if (!(error instanceof assert.AssertionError)) throw error;
    console.error(`FAIL: ${mode} check for ${version}`);
    console.error(`Expected: ${JSON.stringify(expected)}`);
    console.error(`Observed: ${JSON.stringify(result)}`);
    process.exitCode = 1;
  }
}

if (require.main === module) main();
module.exports = { simulateRequest };
