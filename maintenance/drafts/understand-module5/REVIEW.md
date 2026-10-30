# Module 5 — Understand evidence of correctness: review handoff

Status: **local detailed draft pending course-author and independent whole-track
review**. No canonical Drive source, real learner validation, agreed completion,
public publication, push, merge or deployment is claimed.

## Source ownership and isolated scope

Base: `d3c8cdb5631141ace2528326f7190e39073b23ac`. Branch:
`course-understand-module5-correctness-task9`. Worktree:
`/tmp/learn-to-code-understand-module5-task9`.

Authored sources:

- [Module](../../../docs/understand-code/05-evidence-of-correctness.md): six
  proposed outcomes, short optional exercises, observable learner evidence,
  teacher adaptation and review criteria, prompts and incomplete-access
  guidance.
- [Fictional packet](../../../docs/understand-code/05-practice-evidence.md): an
  independent expected behavior, weak assertion, focused reproduction,
  mismatched staging version, four transfer cases and a teacher comparison.
- [Local lab](../../../static/exercises/understand-module5/evidence-lab.cjs):
  downloadable standalone Node script using built-in assertions and in-memory
  fictional notes. It never calls a service, starts a server or writes data.
- [Browser check](../../../tests/understand-module5.spec.js): module-to-practice
  navigation, source-equal download and Markdown exports, desktop/phone
  overflow, browser errors and serious/critical automated accessibility
  findings.

These are new locally authored sources directed by the October 30 module task,
not Drive exports. The normal build admits the new `docs/` files to local search
and Markdown exports. That mechanical inclusion is not publication clearance.
Shared navigation, root teaching routes, existing tests, generated core course
snapshots, canonical source/refinement manifests, dependencies and other
workers' files are unchanged. Existing check dependencies were reused through
ignored local links; no package installation or dependency update was performed.

## Scope and progression for whole-track review

GitHub is shared Module 0. The module takes Module 3's safe investigation skills
and Module 4's specific change as inputs. It supplies a bounded evidence account
to Module 6. It starts with expectation versus observation, applies that idea to
one short local test, then transfers to an authorized repository or an API, MCP
or React case. It requires neither building-track Module 1 nor creating an
implementation repo. A learner may direct a small test script in a separate safe
exercise, but feature implementation, test-suite architecture and formal
code/security/release approval remain outside scope.

The crucial distinction is what software evidence establishes versus what the
learner independently predicts, chooses or judges. Supplied transcripts can
support interpretation; they cannot establish that a learner reproduced a run.
The teacher reviews accessible excerpts and actual learner contributions,
retains partial evidence and does not infer hidden chat content.

## Validation

- `npm run check:skills`, `npm run lint` and `git diff --check`: passed.
- Final `npm run build`: passed with this worktree's isolated dependency cache.
  The normal Node localStorage/update-check notices were nonfatal.
- Final `npm run check:links`: passed, **22 HTML files and 936 local
  links/assets/fragments** at `/learn-to-code/`.
- Standalone lab matrix: weak checks pass on both versions; focused check passes
  on baseline and deliberately exits 1 on candidate with the exact supplied
  expected/observed output. Observation exits 0 and reports the incorrect saved
  note. Invalid CLI arguments exit 2. Empty-title and ordinary-title spot checks
  match P1 on both versions. Runtime: Node v26.0.0 / npm 11.12.1.
- Final module browser check: **2 passed (8.5s)**, desktop and phone, using
  `npm test -- --config .scratch/module5-playwright.config.js tests/understand-module5.spec.js`.
  The disposable config changes only the port to 4195 and resolves the test,
  output and server working directories. Both pages have matching raw exports,
  the lab download equals source, links resolve, no horizontal page overflow or
  browser errors were observed, and no serious/critical Axe findings remained in
  the tested light appearance. This is browser emulation, not a physical phone
  check. Screenshots are under ignored `test-results/module5-final/`.

The complete `npm run check` was attempted. A sandboxed attempt stopped before
browser execution because local socket binding returned EPERM. An approved
execution with loopback access ran **24 tests: 20 passed, 4 failed**. Two
failures were the existing export manifest expecting 17 entries while the build
contains 19; that shared file is outside this worker's edit scope. The other two
were a real contrast defect in the new practice page's JavaScript syntax colors.
The two-line assertion now uses plain code text without color highlighting; the
final desktop/phone module checks above verify that correction. Full check is
therefore **not reported as green**; the remaining shared export-manifest
integration is documented below. Unchanged existing behavior checks passed in
that full run, and only the corrected page's tests were rerun afterward.

A rebuild initially encountered another worker's cached Docusaurus module paths
because dependency caches had been linked with reused dependencies. This task's
`node_modules/.cache` is now a real isolated directory, and the subsequent final
build passed. No passing claim relies on the collided rebuild. Logs/traces and
synthetic walkthroughs are private local scratch evidence, not learner records
or authored teaching sources. No live API, MCP, shared staging or production
mutation occurred.

## Synthetic learning scenarios and limitations

The author walked through five synthetic scenarios against the proposed
criteria: agent-only completion summary; a reader identifying the weak assertion
and version mismatch; React mocked success versus reload loss; inaccessible
private chat evidence; and a changed rollout with validation disabled. The
walkthroughs are in ignored `.scratch/module5-scenarios.md`.

The expected review distinguishes supplied facts from execution, leaves
agent-only learner judgment unassessed, credits a learner's independent
expectation/assertion choice, preserves the unknown cause of reload loss,
requests only relevant missing excerpts, and limits deployment evidence to its
version/configuration. These are authored simulations, not independent review,
actual learner evidence or proof of novice comprehension. The packet explicitly
states much of the evidence, so success there alone cannot establish independent
source discovery in an unfamiliar repository. Real API, MCP and browser QA was
not exercised by the fictional note lab.

## Integration instructions and remaining work

Cherry-pick this task's final commit onto the combined review branch; all added
paths have module-specific names. Do not refresh canonical snapshots from these
files or promote them to Drive without the course author's source decision.

The integration owner should:

- Add the module and packet to the new second-track navigation and overview,
  with Module 4 before it and Module 6 after it. The draft uses stable routes
  `/understand/evidence-of-correctness/` and its `/practice/` child. Navigation
  and prior/next module links are intentionally unwired in this task.
- Reconcile shared Module 0, setup, root agent guidance and bundled teaching
  routes with the two-track entry and no implementation-repo prerequisite for
  this track. Current root skills still route primarily to the existing core
  sequence. The module itself can be taught from supplied Markdown meanwhile.
- Update the existing export test's explicit admitted-file list in
  `tests/site.spec.js` for all new track pages, including this task's two
  `understand/05-*.md` files. Its fixed count assumes the original 17 pages. The
  module-specific test independently checks both new raw exports.
- Run the user-requested independent review across all six modules: progression,
  handoffs, overlap with Modules 3/4/6 and the building track, appropriate
  depth, practical outcome evidence and scope. In particular, assess whether the
  learner can justify a conclusion rather than repeat the teacher comparison.
- Judge the proposed criteria and try the module with real learners before
  claiming human validation or agreed completion. Publication, push, merge and
  canonical-source promotion remain separately authorized steps.
