# Second-track Module 4 review handoff

Status: **local author-review draft; independent whole-track review and real
learner use pending**. This work does not approve the proposed outcomes, change
the canonical curriculum or authorize publication.

## Deliverables and ownership

- [Follow a feature or change](../../../docs/understand-code/04-follow-feature-or-change.md)
  is the maintained module source, with four proposed outcomes, optional short
  activities, observable assessment criteria, an investigation prompt,
  independent application and evidence return.
- [Note Finder change evidence](../../../docs/understand-code/04-change-evidence.md)
  is its fictional practice packet. It contains code excerpts, a complete
  two-line settings diff, documented expectations, invented observations,
  incomplete access, a flawed agent summary and a later environment record.

Both are newly authored for the October 30 direction, outside generated
`docs/course/` snapshots and their guarded importer. They claim no canonical
Drive provenance. No workplace repository, private learner record or live
external system was used. All packet observations are explicitly fictional; they
are not execution claims. Scratch consistency checks described below are
separate from those observations.

The isolated worktree starts at exact shared draft
`d3c8cdb5631141ace2528326f7190e39073b23ac`, branch
`course-track2-module4-change-task8`, worktree
`/tmp/learn-to-code-track2-module4-task8`. Only the two module-specific pages
and this handoff are intended for the commit. Shared navigation, overview,
teaching skills, package dependencies, imported snapshots and other modules are
unchanged. No push, merge, deployment or source promotion is included.

## Scope and progression to review

The general model is an action connected to a result through calls,
configuration, data and dependencies. The concrete packet then lets the learner
follow that path, compare before/after, examine unchanged callers, and challenge
an agent. Independent application uses one bounded question in an authorized
repo, with framework syntax introduced only where needed.

Shared GitHub Module 0 is the starting point. Module 2 contributes navigation;
Module 3 contributes runtime/version/authorization habits. This module uses
those skills to explain a behavior and change, without reteaching setup or
requiring app implementation. Its output feeds Module 5's assessment of
correctness evidence, then Module 6's view of work over time. It does not assess
test-suite adequacy, choose implementation design, approve code, predict
delivery or teach product development.

The example connects an API, a browser caller and an optional MCP caller so a
small settings change can have effects outside the changed file. Learners aren't
required to study three stacks. Check during whole-track review whether the
packet's code density is appropriate after the actual Module 2/3 drafts. It is
deliberately a supplied excerpt packet, not a complete runnable sample repo;
real repository discovery and live runtime investigation need separate evidence.

## Author self-simulation and interpretation key

This is an author-generated simulation, not an independent reviewer or a human
learner result. Its purpose is to expose ambiguous instructions and unsupported
conclusions. The author can see the entire packet and its intended outcomes;
success is not proof of novice comprehension or transfer.

The simulated explanation was:

> A browser choice sends a limit to `GET /notes` (S3). The route passes it to
> `findNotes` (S2), which converts and validates it against `server/limits.js`
> (S5). At `n100`, 80 passes and reaches `store.listNotes`; at `n101`, 80 fails
> before the store is called and the route translates that exception to
> HTTP 400. This is rejection, not truncation to the new default. Omitting the
> input selects 20 before and 50 after, subject to available rows. S6 supplies
> matching invented local observations. Initial staging runs `n100` (S1), so its
> successful 80-note result doesn't test the candidate. The unchanged browser
> still offers 80 and its local error observation retains earlier rows (S3/S6).
> The MCP schema still permits 80, but the shared operation at `n101` rejects
> it; the MCP host's user-facing result isn't available (S4). The API document
> also promises the old maximum/default (S5). External reporting may be
> affected, but its actual input and behavior are unknown (S7). Who owns
> agreement on the input contract, and what caller usage or load evidence
> supports this change?

For S9, the simulated update identified `n101` as active in staging at 13:00
with an 80-limit rejection. It preserved the historical 10:00 `n100` success.
This resolves the current server-version discrepancy; it does not establish
production rollout, current browser/MCP host versions, external caller behavior,
approved compatibility changes or load improvement.

The five S8 claims have these limits: changed-file count doesn't bound callers'
behavior; explicit 80 fails validation rather than taking the default; the old
staging revision doesn't validate the proposed one; unchanged schema and changed
validation disagree; lower maximum plus higher default doesn't prove aggregate
load reduction without workload and dependency evidence.

A useful transfer question, not a mandatory quiz: “With only 12 matching notes,
both revisions return 12 when the limit is omitted. Does that disprove a changed
default?” A satisfactory explanation connects the unchanged observed count to
available data and distinguishes it from the configured maximum/default.

Assessment calibration:

- An agent's perfect explanation without the learner's own judgment leaves
  learning unassessed.
- A learner's supported correction of the staging inference is partial evidence
  for 4.2/4.4; don't infer that they traced the calls or assessed callers.
- A learner's claim that 80 becomes 50 reveals a specific default/explicit-input
  confusion. Ask them to follow the validation decision in S2/S5 rather than
  repeat the entire module.
- An inaccessible chat leaves its reasoning uninspected. Use a relevant supplied
  excerpt or retain the gap; no new repo or full transcript is required.

## Verification

All temporary scripts, configs, generated exports and screenshots are ignored
task-local material; they are not learner records or maintained course tests.

- `npm run check:skills`, `npm run lint`, and `git diff --check`: passed.
- Final `npm run build`: passed at `/learn-to-code/`, producing 19 indexed
  reading pages. Final `npm run check:links`: passed, **22 HTML files and 929
  local links/assets/fragments**. No base-path mechanism changed; other prefixes
  weren't rerun.
- The unchanged standard browser suite ran on desktop and phone: **19 passed, 3
  failed**. Two failures are the existing export test's hard-coded 17-page
  manifest versus the correctly expanded 19-page index. The other was the
  desktop homepage's five-second hydration wait. A targeted retry of that exact
  navigation test with one worker passed (**1 passed, 5.4s**). The standard
  suite is therefore not claimed fully green: its manifest needs integration.
- A final task-local browser probe passed on desktop and phone (**2 passed,
  23.7s**): both new routes, hydration, module/packet links, search discovery,
  exact raw-source parity for both pages, no page/asset errors or page overflow,
  and no serious/critical Axe findings in either light or dark mode. Theme
  changes use the real site control and wait for CSS animations to finish.
  Earlier scratch probes incorrectly measured during theme transitions; their
  color findings aren't retained as settled-theme failures.
- A genuine light-theme syntax-token contrast problem in the packet was
  corrected by displaying its JavaScript/diff excerpts as plain text. Shared
  theme CSS was preserved. Final phone module and desktop packet screenshots
  were inspected; this is viewport testing, not a physical-device test.
- The disposable `.scratch/track2-module4/check-packet.cjs` evaluated the four
  supplied code excerpts with an in-memory 80-row store and minimal response/UI
  callbacks: **9 grouped consistency checks passed** across explicit 80, omitted
  limit, accepted 20, direct MCP handler behavior, and browser error retention
  at the two revisions. No actual API server, React renderer, MCP host, external
  data store or staging system ran. This checks internal packet consistency, not
  live QA or learner competence.
- A comparison against the shared base confirmed imported course snapshots, root
  guidance, skills, source/refinement manifests, dependencies, sidebar and
  existing tests unchanged. No importer refresh was needed.

Checks used Node 26.0.0, npm 11.12.1 and existing installed dependencies through
a temporary `node_modules` symlink, removed before closeout; no fresh install or
lock change was performed. Browser checks used local Chrome and an isolated
loopback preview port, 4198. The sandbox denied loopback binding, so the local
browser runs used approved escalation. An initial sandboxed suite timed out
before tests; no passing claim relies on it. Nonfatal build warnings concerned
the Docusaurus update check and Node's experimental localStorage. No denied or
uncertain action remains.

Final scratch configs/scripts are under `.scratch/track2-module4/`; standard
failure traces are under `test-results/module4/`, final probe screenshots under
`test-results/module4-probe/`, and navigation retry evidence under
`test-results/module4-navigation-retry/`. These are local validation artifacts,
not part of the commit.

## Integration instructions

Cherry-pick only this module commit onto the assembled draft. Its new filenames
are unique and it has no dependency on the other five workers' commits. Keep its
numbering visibly within the second track; the building track already has a
Module 4. Both page slugs are stable under `/understand-code/`.

The integrator should add the module and practice page to the chosen
second-track sidebar and course map, link actual Module 2/3/5/6 pages after
filenames are settled, and reconcile shared teacher routing so it recognizes the
new track. Those shared edits were intentionally left for integration. Until
then the pages build, link to each other, export and appear in search, but have
no ordered sidebar journey.

Update the shared export test in `tests/site.spec.js` to include the final
assembled page manifest (currently 17 entries, versus 19 for this module alone).
It verifies parity for the old files before failing the index count. The final
module probe independently verifies the two new raw exports; don't suppress the
shared assertion or claim the existing full suite passed.

Register `docs/understand-code/` as locally authored draft content in the shared
publication/source guidance; do not run the core importer to manufacture these
pages or change hash guards. Preserve existing Module 1 and all canonical source
provenance. Run the assembled site's normal checks after wiring. The independent
whole-track reviewer should assess scope, terminology, prerequisites,
progression, exercise feasibility, evidence standards and intended learner
outcomes across all six drafts. Actual human use and course-author acceptance
remain necessary before claiming validated learner readiness.
