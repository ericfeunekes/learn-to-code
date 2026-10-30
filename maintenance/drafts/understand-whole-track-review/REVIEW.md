# Understand code and changes — independent review

Status: **initial all-six-draft review; changes and shared integration
required**. Private local review artifact, not canonical curriculum, publication
approval, or learner records. No module source fixes are made by the reviewer.

## Review contract and revision ledger

The intended learner can use repository files, history, agents and appropriate
tools to explain, investigate, run QA and assess software without implementing
features. Shared GitHub Module 0 precedes two tracks. The second track does not
require a product brief or implementation repository. General concepts precede
small examples and increasingly specific repository application. Short adaptive
teaching, independent learner decisions and review of accessible evidence govern
assessment. Agent output and green software checks do not establish mastery.

Review branch: `course-understand-whole-track-review`, isolated worktree
`/tmp/learn-to-code-understand-review`, based on exact draft
`d3c8cdb5631141ace2528326f7190e39073b23ac`.

| Source                                                  | Author commit                            | Review state                                    |
| ------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------- |
| Shared baseline, Module 0, teacher contracts, companion | d3c8cdb5631141ace2528326f7190e39073b23ac | Inspected                                       |
| 1. How software fits together                           | 942dfd6186c4ddea0bb404d5b49e861642cc26c4 | Three independent perspectives complete         |
| 2. Find your way through a codebase                     | f8e51fe105f9b580dcfcf4d42e897ea29c60ee6f | Three independent perspectives complete         |
| 3. Run and investigate software                         | b200afbe3cbb5ffa62d26517cb78447d2d906cd7 | Three independent perspectives complete; R1     |
| 4. Follow a feature or change                           | 683170fd5982625f9b19adfe0dce33b370ea34a3 | Three independent perspectives complete         |
| 5. Understand evidence of correctness                   | 9d00978e8b5af943ca1e5dbec1122c1b6789732f | Three independent perspectives complete         |
| 6. Read an evolving project                             | 0c53c8f91e573fde3e1e127f797565674d2a2dc4 | Three independent perspectives complete; R1, R2 |

## Assessment plan

Three independent read-only perspectives cover (a) pedagogy and learner paths,
(b) practical execution, fixtures and evidence at the runtime boundary, and (c)
whole-artifact contracts, source provenance, presentation and shared entry. The
lead checks findings against source and runs site/rendering verification.

Each module is checked for observable objectives, prerequisite and handoff fit,
load, general-to-specific examples, scope exclusions, independent application,
learner agency, accessible evidence return, partial assessment and teacher
responses. The assembled path is checked for duplication/gaps, Module 0 and
building-track interfaces, API/MCP/React options, safe environment/version and
effects decisions, and transfer to an unfamiliar repository. The capstone must
combine these skills without claiming universal mastery.

Simulate novice entry, experienced skip/transfer, a copied agent answer,
inaccessible chat/repository evidence, and blocked runtime access. These are
reviewer simulations, never observations of a real learner. Exercise local
fixtures and actual browser/Markdown boundaries. Technical checks establish
software or delivery properties, not pedagogical effectiveness.

Severity: P1 prevents the intended learning path or creates consequential unsafe
activity; P2 materially impairs an exercise, assessment or integrated delivery;
P3 is a minor improvement. Shared integration obligations are separated from
module-author defects. Final integrated approval remains pending remediation and
review of the combined candidate. All six draft modules have independent lane
coverage.

## Findings and integration obligations

### R1 — P2: browser preconnections can stall the Modules 3 and 6 fixtures

Affected: `maintenance/drafts/understand-module-3/fixture/module3_server.py:27`,
`maintenance/drafts/understand-module-3/PRACTICE.md:52`,
`static/labs/track2-module6/server.py:56` and
`docs/understand/module6-harbor-log-lab.md:170`.

Both browser exercises use single-threaded `HTTPServer`. The practical reviewer
started it, opened an idle loopback TCP connection, then sent `/about` through
another connection. The identity request timed out until the idle connection
closed. The same probe against Module 6 blocked `/version` until the idle
connection closed. Browsers can preopen sockets, so successful startup can be
followed by a blocked first exercise. The three existing sequential boundary
tests pass and do not cover this path.
[Python documentation](https://docs.python.org/3/library/http.server.html#http.server.ThreadingHTTPServer)
identifies this browser preconnection limitation.

Smallest remedy: use `ThreadingHTTPServer` or equivalent idle-connection
handling, with one local boundary check per fixture demonstrating a request
while another connection is idle. Module 6 website checks never start its Python
fixture, so they cannot detect this runtime issue. Authors own the fixes;
reviewer independently rechecks.

### R2 — P2: the fallback capstone cannot establish the full-track tracing claim

Affected: `docs/understand/06-read-evolving-project.md:167–188`,
`docs/understand/module6-harbor-log-lab.md:80–92`, and
`maintenance/drafts/track2-module6/REVIEW.md:97–103`.

Module 4's distinctive skill is tracing connected behavior and comparing source
before and after a change; its independent application explicitly asks for one
connection and diff hunk
(`docs/understand-code/04-follow-feature-or-change.md:136–138`). Harbor Log
supplies the current source plus PR/status summaries, without a before-version
or diff. Module 6's learner steps request file selection, project state and a
runtime check but no source/change explanation. Its teacher reference
nevertheless calls for a dated change trace as evidence linking all six skills.
A learner could meet every stated capstone step by accurately repeating history
records without demonstrating that distinctive tracing capability. This limits
the full-track assessment claim, although the lab does support Module 6's
bounded project-account outcomes.

Smallest remedy: either add one brief before/after excerpt tied to PR #36 and
ask for its behavioral consequence, or explicitly carry forward inspected Module
4 trace evidence and qualify what a packet-only capstone establishes. Do not
make all six skills a rote checklist for every short Module 6 session. Author
owns the adjustment; reviewer independently rechecks.

### I1 — P2 integration: reconcile the common entry and teaching routes

Affected: `AGENTS.md:10,40`, `CLAUDE.md`, canonical teaching/review skills and
mirrors, `docs/course/00-project-and-git.md:17,94`, overview/curriculum,
setup/practice/teacher guidance and `docs/for-ai.md`.

The current entry calls for an own implementation repository, treats Module 0 as
an optional post-setup lesson and selects outcomes only from `docs/course/`.
Following those shared instructions can bypass the new track or impose a
prerequisite its modules explicitly remove. This is pre-existing content newly
depended on by the assembled track, and shared files were protected from module
workers. The existing Module 0 outcomes focus on own-working-copy sharing, a
change/checkpoint and merging; PR details are deferred and introductory issue /
release navigation is not supplied. That leaves parts of the agreed common
GitHub orientation to be picked up implicitly later.

Integrator remedy: common introductory GitHub Module 0 covering repositories,
files/history/versions, branches, PRs, issues and releases, then explicit track
selection; implementation setup/application only where the learner chooses the
building track; teaching and evidence review use the selected track's page.
Preserve canonical revision guards and sync regular instruction mirrors.

### I2 — P2 integration: deliver one navigable second track

Affected: `sidebars.js:15`, maintained course overview/curriculum revisions,
module routes and `maintenance/drafts/understand-module-3/REVIEW.md:104`.

Modules 1–2 enter search and exports under `docs/understand-code/`; Module 3
remains maintenance-only; Module 6 uses `docs/understand/`. Existing navigation
exposes the building sequence. A learner cannot follow 1→2→3 from the course
entry or obtain Module 3's executable material through ordinary site delivery.
Module-author handoffs explicitly defer this to integration.

Integrator remedy: consistent track identity, ordered links and source/status
ownership after all drafts arrive; deliver downloadable Module 3 fixture files
and deliberately adapt their paths. Reconcile the old companion without silently
removing its read-only permission boundary.

### I3 — P2 integration: export inventory check has not admitted new pages

Affected: `tests/site.spec.js:195–226` and admitted reading inventory.

At the first-three-module build (review commit `5f30ccc`), reading export and
search generation included 21 pages, while the unchanged owning browser test
expects 17. Both desktop and phone inventory tests failed. The assertion runs
before route validation for new entries. Existing suite: **20 passed, 2
failed**; this is not a passing aggregate check.

Integrator remedy: update the shared admitted inventory with every intended
second-track page and retain exact export and served-route checks. Do not
silence the count assertion to claim unchanged-suite success.

### I4 — integration verification: phone browser exceptions remain unresolved

Affected verification: `tests/understand-module5.spec.js:72`; focused Module
1/2/4 phone-page probe. Runtime locator:
`node_modules/@docusaurus/theme-common/src/hooks/useCodeWordWrap.ts:83`,
compiled `assets/js/737.0e2c3c4e.js:2:29415` at this build.

The combined suite captured two null-`scrollWidth` page errors in the Module 5
phone check. Three unchanged targeted repeats passed, but a separate probe of
all six Module 1/2/4 reading/evidence pages captured fourteen matching errors on
phone. The stack maps to the shared word-wrap hook dereferencing
`codeBlockRef.current` without checking whether the element remains mounted. The
preserved trace contains fourteen actual page-error events after the dark-theme
reload of `/understand-code/navigation-evidence/` at viewport 390×664. This code
is an unchanged installed dependency, not a module-author edit. Unchanged source
does not establish baseline reproduction, and the precise triggering
lifecycle/resize sequence remains unestablished. No claim is made that a
particular user-visible operation was broken; the observed failure is the
repository's required no-browser-errors check.

Integrator disposition: preserve the assertion and trace, isolate the narrow
mobile reload/lifecycle reproduction against current and baseline sites, and
demonstrate that ordinary phone navigation and page checks on the final
candidate complete without these exceptions. A passing targeted retry does not
establish a clean aggregate run. Do not assign this to Module 5's prose or
weaken the check based on the message alone. Preserved reviewer trace (ignored):
`.scratch/whole-track-review/browser-failures/phone-draft-pages-trace.zip`.

## Initial coverage and evidence

At `5f30cccdb815e62b5d6227d2cffc743881b22b1f` (Modules 1–3):

- **Passed:** independent pedagogy/craft inspection, objective-to-evidence fit,
  scaffolding and boundaries. Module 1 connects roles to a result; Module 2
  locates relevant evidence; Module 3 applies it to an authorized check.
- **Passed:** reviewer tabletop novice path through Shelf counts/runtime limits,
  Pocket Library file selection/generated-copy rejection, and a case-variant
  Workshop check; experienced path through test limits, a changed MCP navigation
  question and packet-only runtime assessment. These are simulations only.
- **Passed:** learner choices, explanations and challenges are distinct from AI
  output; inaccessible evidence and blocked execution retain useful partial
  credit. Packet-only work cannot earn environment-operation evidence.
- **Passed:** three actual Module 3 Python HTTP/process tests after approved
  socket escalation; practical reviewer independently checked identity,
  readiness, empty results, `wood`/`WOOD`, logging and clean shutdown.
- **Passed:** `check:skills`, lint, build and link checks (24 generated HTML
  files, 1004 local links/assets/fragments at `/learn-to-code/`). The site did
  not contain maintenance-only Module 3.
- **Failed:** I3's two inventory tests; R1's independent idle-socket probe.
- **Not tested:** real learner comprehension/transfer; actual MCP client, React
  application or shared staging execution; full integrated navigation and client
  instruction loading; remaining modules at this initial checkpoint. These
  cannot be inferred from green author checks.

Initial sandboxed socket binding was blocked by environment policy; approved
escalation allowed the fixture and preview checks. A first scratch config
wrapper ran 11 unnamed tests and is not desktop/phone evidence. A config copied
from the baseline, changing only isolated port and paths, listed and ran all 22
tests. No public mutation, deployment, source import, push or main merge
occurred.

## All-six-draft judgment

Frozen reviewed module tree: `fb46715ad4093ea1469ab8e340438c610739a7c5`. All
three independent perspectives completed against this revision: pedagogy and
learner paths, practical/code/evidence boundary, and whole-contract/craft/risk
coverage. The lead checked their causal claims against the files. No uncovered
material review domain or unresolved reviewer disagreement remains. No author
content was changed by this review.

**Verdict: changes required (R1, R2), plus shared integration I1–I4 before final
combined approval.** No P1 defect found. The fundamental curriculum sequence is
coherent and stays within implementation-free code investigation, QA and
assessment. That is a judgment of design and executable feasibility, not proof
that real learners have attained the destination.

| Module                  | Distinct learner contribution and handoff                                                                                   | Result                                                                                    |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 0, shared entry         | Repositories, files, history, versions, branches, PRs, issues and releases sufficient for either track                      | I1: current optional implementation-oriented draft needs shared-entry reconciliation      |
| 1, software map         | Explain how code/settings/data/dependencies/tests/process connect to a result; locate runtime uncertainty                   | Passed draft inspection and novice/experienced simulation                                 |
| 2, navigation           | Select and justify relevant source files, inspect a connection, reject an unsupported agent map                             | Passed draft inspection and changed-question simulation                                   |
| 3, operation/QA         | Establish target/effects, operate or access environment, choose an expectation/check, interpret diagnostics, return finding | Passed normal API execution and assessment design; R1 runtime reliability                 |
| 4, feature/change       | Trace connected behavior and a before/after source change; explain unchanged-caller impact                                  | Passed source/packet consistency and independent simulation                               |
| 5, correctness evidence | Explain actual assertions, response plus stored effects, substitutes/boundaries, version mismatch and bounded confidence    | Passed executable matrix and assessment simulation                                        |
| 6, project synthesis    | Reconcile dated history/status/runtime claims, challenge overreach, run bounded QA and update account                       | Passed bounded outcomes; R1 runtime reliability; R2 full-track tracing-credit calibration |

The general-to-specific path is evident: roles → question-led locations →
runtime operation → connected behavior/change → assertion sensitivity → dated
project synthesis. Vocabulary is explained when needed. Each module permits a
short useful exchange, existing experience and partial results. Repeated
version, permission and evidence distinctions answer different questions rather
than requiring repeated full lessons. No product-development,
implementation-design, code-approval, release-authority or employee-evaluation
curriculum was found.

API, MCP and React appear as alternative interfaces to the same inquiry method.
A learner need not learn all three stacks. The API fixtures are executable;
MCP/browser packets accurately remain interpretation practice and require later
actual operation before earning operating credit. Authorized staging is an
option governed by target/version/data/effects evidence; its name is never
permission. This review found no unsafe permission carryover or required private
workplace access. The shared companion retains its separate read-only limits
until deliberate integration reconciles it.

### Independent simulations and practical checks

These are reviewer reasoning exercises and local fixture executions, not actual
novice/experienced human trials.

- Novice: Shelf predicts two unfinished books but cannot infer current runtime
  from the latest files; Pocket Library's README points to a missing path and
  its generated copy is not maintained source; Workshop's nearby case variants
  can reveal a 200-with-wrong-content mismatch.
- Experienced: skip role matching, question the supplied test boundary, switch a
  navigation question from browser to MCP, preserve omitted startup/provider
  information, and leave packet-only operation unassessed.
- Module 4: explicit 80 reaches the store at `n100` but fails at `n101`; omitted
  input selects 20 versus 50. The unchanged UI and MCP schema may conflict with
  the new maximum. With only 12 matching notes, equal counts would not disprove
  different defaults. External-client impact and aggregate load stay unknown.
- Module 5: choose 400/message/no-save from the independent rule; identify why
  numeric status accepts an incorrect 201. A changed-context 400 plus one saved
  note still violates the rule. Actual six-mode execution on Node v26.0.0: weak
  checks both exit 0; baseline focused exits 0; candidate focused exits 1 with
  201/one note; both observation modes exit 0 and report their actual result.
  Invalid mode exits 2. No HTTP/database execution is claimed.
- Module 6: first week delivers duplicate-save repair; second week releases and
  stages search but failed production activation retains the earlier version.
  Export remains blocked and disabled; commit counts do not establish speed.
  Current local QA on `c930` cannot rewrite historical pilot observations. A
  later deployment updates only relevant dated claims and does not repair an
  observed local defect or expand test coverage.
- Copied agent answer: each module requests the learner's explanation, choice,
  prediction or challenge; without it the result remains partial/unassessed.
  Inaccessible chat links accept relevant safe excerpts. Blocked execution can
  support conceptual judgment while leaving operation unobserved. Missing
  evidence is never treated as inability.
- Actual Module 6 runtime requests independently confirmed version, lowercase,
  padded, blank and omitted queries, disabled export, intentional uppercase
  mismatch, and SIGINT exit 0. Both fixtures failed the same idle-connection
  probe. These were controlled loopback simulations of browser connection
  behavior, not claims of reproducing it in a particular browser session.

The repeated capitalization defect in Modules 3 and 6 adds limited QA breadth,
but Module 6's historical cutoffs, deployment/rollout reconciliation, confidence
limits and new-evidence update add meaningful synthesis. A new defect type is
not required: a well-grounded passing check is expressly valid, and broad
MCP/React transfer is not credited. The concrete issue is R2's tracing claim,
which can be fixed by supplying the relevant evidence or narrowing the credit.

### Final integration and rereview handoff

Assign R1 to the Module 3 and Module 6 authors and R2 to Module 6. The
integrator owns I1–I4; module workers correctly preserved protected shared
files. Do not silently repair reviewed sources in this review branch. A final
combined candidate must supply its immutable commit, a concise revision summary
and finding dispositions. Resume the same review perspectives against that
complete candidate to verify accepted remedies and material regressions, without
adding new requirements.

Final acceptance must inspect both track choices from shared Module 0, selected
track teaching/review criteria, accessible Module 3 fixture delivery, navigation
and links, full export inventory, desktop/phone surfaces and the capstone credit
boundary. At least one idle-connection check must pass per affected fixture. No
live MCP, staging, production or private repository test is needed merely to
approve this scoped draft. Human learner testing remains an explicitly separate
unestablished outcome, not a fabricated validation claim.

## All-six-draft technical verification

At frozen module tree `fb46715`:

- **Passed:** skill mirror check, lint, build and source-link/asset check (30
  generated HTML files, 1243 local links/assets/fragments, `/learn-to-code/`).
  Export generation includes 27 reading pages; Module 3 remains
  maintenance-only.
- **Failed aggregate:** the unmodified combined desktop/phone suite ran 28
  tests: **25 passed, 3 failed**. Two failures are the shared inventory mismatch
  (expected 17, actual 27). The third is Module 5's phone test capturing two
  `Cannot read properties of null (reading 'scrollWidth')` page errors at its
  final no-browser-errors assertion (`tests/understand-module5.spec.js:72`).
- **Targeted retry:** the unchanged Module 5 phone test passed three subsequent
  repetitions. This does not explain or erase the original browser exception. It
  subsequently recurred in the focused phone page probe; see I4 for the
  shared-hook stack and preserved trace. No module-specific source defect is
  inferred from the message alone. A clean aggregate pass has not been
  established.

No full root/renamed-prefix checks were required at this draft-assembly stage:
URL machinery is unchanged. Shared integration does change routing/navigation,
so its final proof must cover the repository's required base paths. Automated
accessibility and browser checks establish bounded delivery properties; they do
not establish learner comprehension or complete accessibility.

Focused rendering check of Modules 1, 2 and 4 (six learner/evidence pages) used
both desktop and phone configurations and awaited hydration. On both sizes, all
six pages passed their light/dark serious/critical Axe checks, no-horizontal-
overflow assertions, served raw-Markdown equality checks and title checks.
Desktop's complete probe passed; phone's final no-page-errors assertion failed
with I4's shared-hook exceptions. A representative phone Module 4 screenshot was
visually inspected: headings, prose, examples and link treatment rendered in a
single readable column. This is not integrated track navigation proof.

The first scratch rendering probe directly changed the theme attribute before
hydration and produced mixed-theme contrast errors. That was invalid probe
setup, not a module finding. The corrected probe persisted the preference,
reloaded, asserted the selected theme and awaited hydration before accessibility
analysis. Its accessibility checks passed; I4 is a separate captured exception.

## Subsequent author-fix disposition

The original findings and failed checks above describe frozen draft `fb46715`.
R1 and R2 are now closed at author-fix checkpoint `53df1bd`; see
[the independent author-fix recheck](REREVIEW-AUTHOR-FIXES.md) for source
commits, actual runtime proof, capstone assessment and limits. I1–I4 and final
combined review remain pending integration.
