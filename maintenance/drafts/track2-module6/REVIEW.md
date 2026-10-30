# Second-track Module 6 review handoff

Status: **local author-review draft; initial review findings remediated,
awaiting independent recheck**. No actual learner evidence, public release,
Drive edit, push or merge is included.

## Deliverables and ownership

- [Read an evolving project](../../../docs/understand/06-read-evolving-project.md)
  supplies five proposed outcomes, small adaptive exercises, optional agent
  prompts, an independent capstone and evidence-return/review criteria.
- [Harbor Log lab](../../../docs/understand/module6-harbor-log-lab.md) supplies
  fictional repository extracts, bounded history and a safe local runtime task.
- [server.py](../../../static/labs/track2-module6/server.py) is the downloadable
  fixture: standard-library Python, loopback binding, in-memory dummy data, no
  outbound calls, credentials or persistent writes. Its defect is intentional;
  this is software to assess rather than an implementation reference.
- [Module 6 browser checks](../../../tests/track2-module6.spec.js) cover the
  learner's page-to-lab-to-source-and-back path, mobile overflow,
  serious/critical automated accessibility findings, and exact Markdown/source
  delivery.

New pages are maintained directly under `docs/understand/`, not generated
`docs/course/` snapshots. They are locally authored under the October 30 task,
with no canonical Drive-source claim. Importer registrations, source hashes,
core modules, shared skills/guidance, navigation and dependencies are untouched.
The normal build includes the two new pages in raw Markdown, search and
`llms.txt`; that local build inclusion is not permission to publish.

The existing companion's bounded-window inquiry, dated status distinctions,
priority evidence, activity-count critique and agent-challenge exercise informed
this draft. Its fictional Fieldnotes packet is linked for the small initial
example rather than copied. The new module takes orientation and basic tracing
as prior skills and adds synthesis plus observed QA. It does not inherit the
companion's standalone placement, lack of prerequisites or exclusively read-only
activity. Read-only investigation and separately authorized local execution are
explicitly distinct steps.

## Fit within the new track

Shared GitHub Module 0 precedes both tracks. Second-track Modules 1–5 supply the
mental model, navigation, execution, change tracing and correctness-evidence
skills. Module 6 uses them together on an unfamiliar safe project. It does not
teach implementation, project/product planning, release operations or employee
evaluation. The learner interprets visible priorities and dependencies without
claiming authority to set them or estimate delivery.

The API fixture is one executable path, not a claim of transfer to MCP or React.
Learners can use another authorized project and one suitable client boundary.
Private sources, production writes and external communication are not required.
Local observations are dated separately from the historical window. Interrupted
or unavailable runtime access remains partial evidence, not a fabricated pass or
a reason to discard demonstrated reading skills.

## Teacher reference: assess after an independent attempt

Keep this reference out of the initial worked teaching example. Ask for the
learner's own reasons and inspect their supplied outputs. Do not treat the model
answer as a script they must repeat or an agreed completion rubric.

For the Harbor Log capstone, these conclusions are supported:

- The scope is one API repo, `main`, October 12–25 inclusive, UTC; the supplied
  snapshot is October 26 at 09:00. H1 is a component map, not an inventory of
  all organizational work. The board and identity service remain inaccessible.
- During the first week the duplicate-save repair merged, reached release 0.8,
  was activated in production, and had one recorded pilot retry observation
  (H3–H5). That evidence covers the recorded scenario, not all retry failures.
- During the second week consistent search merged and was released and staged at
  `c930`. The failed production activation left 0.8 / `b830` active. This
  evidence does not establish that the new search behavior reached pilots
  (H4–H5).
- Export is an open blocked draft, outside `main`, excluded from release 0.9,
  and explicitly disabled in the named environments. The old README is not
  evidence of current availability (H1, H3–H5). Offline capture is an idea.
- The reaffirmed decision supplies current visible priorities. An old high label
  and overdue milestone do not promise next-week delivery. The unavailable board
  limits an account of the whole plan (H3).
- More commits cannot establish a threefold speedup or employee productivity.
  The mix includes bots and draft checkpoints; merges and actual user outcomes
  must be distinguished (H4–H6).
- H4's green checks cover lowercase and blank queries. They do not demonstrate
  the whole H2 contract, and the lab contains no automatic complete test suite.

One reproducible QA finding is sufficient. A useful independent selection is:
expect N1 for uppercase `SPILL` because H2 requires case-insensitive matching.
On local fixture 0.9 / `c930`, `/api/search?q=SPILL` returns HTTP 200 with zero
notes, while `/api/search?q=spill` returns N1. A padded lowercase query also
returns N1. This supports a local contract failure related to case, rather than
an empty dataset or failure to trim whitespace. It does not establish historical
production behavior. The source suggests query normalization as a cause; a
learner need not diagnose or patch it to demonstrate the investigation outcome.
Other well-grounded checks, including a pass with explicit limits, are valid. If
they test only a passing case, ask what contract condition remains uncovered; do
not require guessing this particular defect as a universal completion gate.

For full capstone evidence, look for a learner contribution linking all six
track skills: a plain-language parts map, relevant source navigation, an
observed authorized check, a source-change trace connecting an input to its
result with before/after reasoning, a reasoned statement of what the checks
establish, and a bounded project account. H4a supplies the hunk for that trace:
the query passes through parsing and note selection into the unchanged response.
For example, `spill` predicts count 0 at `b830` and 1 at `c930`; `Spill`
predicts 1 then 0. An unchanged client request can therefore change behavior
even though the endpoint and response shape stay the same. The after source
lowercases note text but not the query, so the change does not satisfy all of
H2. Neither before-version execution nor historical production behavior was
observed.

Ask the learner to explain a chosen input and comparison, rather than repeat
these examples. Inspect their cited hunk and connection: a PR summary or dated
status list alone leaves Module 4 source tracing unassessed. A polished agent
brief alone supports none of those learner-reasoning claims. Record partial
evidence against the five outcomes rather than imposing a numerical score or
declaring general mastery. This capstone does not require the full trace for
every short Module 6 exploration.

### Give this new record after the initial attempt

“New fictional record, October 26 at 12:00 UTC: production activation of 0.9 /
`c930` succeeded for the pilot. Export remains disabled. No new acceptance or
search observation is supplied.”

Ask for a dated update and one explanation of its effect. Deployment of 0.9 is
now supported after noon; the October 25 account stays intact. Export remains
known unavailable. The earlier local uppercase failure remains evidence about
the same source revision and a reason to investigate before promising consistent
search, but is not itself a production observation. New deployment evidence does
not repair the defect or expand passing-test coverage. No date for export or
full project completion follows.

## Author-run simulation and runtime verification

The author designed the fixture and predicted the H2 contract result before
running an uppercase query. The local probe observed:

- `/version`: HTTP 200, `0.9`, `c930`, `local-fixture`, export disabled.
- Lowercase `spill`: HTTP 200, count 1, N1.
- Uppercase `SPILL`: HTTP 200, count 0; violates H2's expectation of N1.
- Padded lowercase `spill`: HTTP 200, count 1.
- Missing and whitespace-only queries: HTTP 200, count 2.
- Export: HTTP 403; unknown path: HTTP 404; POST search: HTTP 405.

The simulated brief distinguished the first week's observed production repair
from the second week's released/staged search, identified the privacy
dependency, challenged shipment and speedup claims, and preserved the cutoff
under the new record above. This was an author-run synthetic walkthrough with an
actual local runtime check, not independent agent review or human learner
validation. Because the author designed the fixture, it establishes
reproducibility and content consistency, not learner discovery, teaching
effectiveness or general transfer. Actual learners, unfamiliar safe
repositories, and MCP/React applications remain untested. Independent
cross-module review belongs to the parent's separate task.

## Verification and integration notes

The fixture initially could not bind a socket in the restricted sandbox. The
authorized loopback-only runtime probe then passed with sandbox escalation; it
terminated the server afterward. This is resolved, not a pending access blocker.
The probe and JSON output are in ignored `.scratch/`. No external service ran.

Integration should:

1. Bring in only this module's new files. Preserve the exact draft base
   `d3c8cdb5631141ace2528326f7190e39073b23ac` and other workers' isolated
   changes.
2. Add the module and lab to the new second-track sidebar/map in positions after
   Module 5; keep GitHub Module 0 shared. The module currently names earlier
   modules in prose to avoid guessing their concurrent filenames. Add those
   cross-links once paths are agreed. Direct routes and lab return links already
   work without shared navigation changes.
3. Route the shared guidance to the second track without imposing app-project
   creation or the old companion's standalone prerequisites. Reconcile the
   companion/map copy so there is one clear learning path rather than two
   apparently equivalent endpoints. Decide whether to retain the old companion
   as optional practice or retire its duplicate teaching page through a reviewed
   source change.
4. Update the existing `tests/site.spec.js` admitted-export file list for all
   integrated pages. Its exact `files.length` assertion currently expects 17;
   this module alone adds two. Shared test edits were prohibited for workers.
   The module-specific test already checks its own exports and source download.
5. Review the draft/source ownership manifest before publication. This addition
   is not a canonical Drive update and supplies no public-release authorization.
6. Run the full integrated checks and independent whole-track review, including
   progression, scope, teacher behavior and genuine learner transfer evidence.

### Initial draft checks (`0c53c8f`)

- `npm run check:skills`, `npm run lint`, and `git diff --check`: passed.
- `npm run build`: passed at `/learn-to-code/`; generated 19 reading exports.
- `npm run check:links`: passed, **22 HTML files and 933 local links, fragments
  and assets**.
- Actual loopback fixture requests: passed the probe's expected observations,
  including the deliberately failing uppercase contract case documented above.
  Fixture SHA-256:
  `2d55a203c1d67c3bab5429608ff564015fcb3cf02070ef496aa8a8962725ba50`.
- Desktop and phone browser checks: **26 passed (30.2 seconds)**. The ignored
  `.scratch/module6-playwright.config.js` copies the normal configuration with a
  separate server port, working/test/output paths. Its scratch copy of the
  shared site test adds only the two new pages to the admitted-export file list;
  the module-specific tests are copied without changes. All other test
  assertions and both viewport projects are retained.
- Initial module browser checks exposed low contrast in the JSON syntax colors.
  The lab now renders that JSON sample as plain text; the final checks report no
  serious/critical automated accessibility violation on the lab path and no
  phone overflow. No shared styling changed.
- The shared test file remains unmodified. Its exact export count fails against
  the two added pages until the integrator performs step 4 above, so an
  unchanged `npm run check` is **not claimed to pass**. The scratch-adjusted
  suite verifies the precise integration adjustment without editing a shared
  worker surface.

The existing draft worktree's installed dependency tree was reused by a
temporary symlink for these checks; this was not a fresh `npm ci` reproduction.
The symlink is removed before commit. Build output emitted the existing nonfatal
Node localStorage and Docusaurus update-check warnings. Original checkout and
base content remain unchanged. No services from the probes are left running.

Ignored evidence: `.scratch/module6-runtime-evidence.json`,
`.scratch/module6-probe.py`, `.scratch/module6-simulation.md`, isolated browser
configuration/test copies, and `test-results/module6-final/`. The synthetic
simulation is explicitly author-produced and supplies no learner mastery claim.

## Independent review remediation: R1 and R2

Review source: `626ffef1171b3ee621a016416fa615ce6c86343d`,
`maintenance/drafts/understand-whole-track-review/REVIEW.md` on the independent
review branch. Both P2 findings were confirmed against this module. The fixes
below await the reviewer's independent recheck; they do not claim final
whole-track approval.

**R1 — idle browser connections:** use `ThreadingHTTPServer` so an idle accepted
connection does not block a second client's identity request. The committed
`tests/test_track2_module6_runtime.py` starts the actual downloadable fixture,
keeps a TCP connection idle, completes `/version` through another connection
within a two-second bound, then verifies clean process exit with the idle socket
still open. Run it with `python3 tests/test_track2_module6_runtime.py -v`. The
regression passes. Against a scratch control differing only by use of the
original `HTTPServer`, the same test fails with a request timeout. This checks
the causal boundary rather than merely asserting the chosen server class. The
regular dummy API probe still reproduces the intended search contract failure
and the previously documented response statuses. No search fix is part of this
remediation.

**R2 — source-change tracing:** H4a now supplies a tiny PR #36 search diff from
`b830` to `c930`, with just-in-time explanations of its operations. The learner
chooses an input, follows request → query → selected notes → response, predicts
before/after behavior, and explains a changed operation and unchanged
connection. They then choose a contrasting case. The module's capstone return
and teacher criteria now require that source evidence before crediting the
full-track tracing claim. Short Module 6 explorations can still retain partial
evidence; this is not an implementation task or a rote checklist for every
session.

An author-run source simulation confirmed that the after hunk matches the
downloadable source. With the same dummy notes, `spill` predicts counts 0 → 1,
`Spill` predicts 1 → 0, uppercase `SPILL` predicts 0 → 0, and padded lowercase
predicts 0 → 1. These are checks of the supplied source excerpts, not execution
of historical deployment versions or evidence of human learning. Ignored output
is in `.scratch/module6-r2-source-trace.json`.

After remediation, the fixture SHA-256 is
`9a21c6f92aa8d9b87edcb0577398b6d2bce6a94798693e1b28659baaa472438d`.
`npm run build`, `check:links` (22 HTML files / 935 links, fragments and
assets), `check:skills`, lint and diff whitespace checks passed. The focused
Module 6 desktop/phone suite passed **4 tests (8.6 seconds)** against the final
rebuilt pages and exports. Shared files, other authors' modules, package
dependencies and publication state are unchanged. The new Python regression runs
separately from the unchanged shared npm script; the integrator can include this
command in the final runtime verification.
