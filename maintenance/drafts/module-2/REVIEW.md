# Module 2 review handoff

Status: **reviewable draft, pending course-author review and real learner use**.
No push, merge, publication or canonical Drive edit is part of this change.

## Deliverable and source boundary

The candidate source is `02-error-handling-and-recovery.md` in this directory.
Its relative lesson links are resolved in the generated course location. The
reader-facing candidate is
[the generated Module 2 page](../../../docs/course/02-error-handling-and-recovery.md).
It contains six proposed outcomes, prerequisites and scope, concrete
misconceptions, optional short comparisons, independent application and
observable evidence with partial-credit limits.

The draft develops the existing four-part outline: diagnosis; response and retry
choices; useful feedback with appropriate diagnostics; interruption, uncertain
outcomes and recovery. It does not require unaided coding, a backend, completion
of all testing outcomes or a long lesson. It explicitly places app
implementation in a separate learner-owned repository and conversation, with
excerpts/diffs/results available when a teacher cannot open links.

All thirteen canonical general source files matched their SHA-256 entries in
[the existing provenance manifest](../../course-source.json). A task-local
staging directory contains those general files with only Module 2 replaced by
this candidate. The supported `content:refresh` importer and Prettier generated
the snapshot. The other twelve generated pages are byte-identical to base
`ec48f0937cfe4fe20bd4f0e030269258522887f6`. The manifest continues to describe
the original canonical sources; it does not claim this draft came from Drive.

To revise before integration, edit the candidate source, copy it into the staged
source directory, run `npm run content:refresh -- SOURCE_DIR`, then format the
generated course pages. Review the complete diff. A refresh from unchanged
canonical Drive material will restore the original outline; promotion of this
candidate into the maintained course is still a separate integration decision.

## Independent review and simulation

Two fresh, read-only perspectives returned **pass with no actionable findings**:
pedagogy/whole-artifact coverage, and craft/novice clarity/technical reasoning.
They checked the whole draft against its scope, teaching and evidence purpose,
not just formatting. They found no consequential missing risk or misleading
recovery claim. The lead's synthesis is pass **for course-author review as a
draft**, not approval for publication or a learner-validation claim.

A separate teacher and novice agent exchanged four turns each. The novice began
with “timeout means nothing saved,” questioned whether a list could update
later, transferred to a read-only failure, and independently phrased a bounded
retry request, prediction and proposed evidence. The teacher used short feedback
and credited only partial reasoning. Delay and ordinary-success checks needed a
reminder; determining an uncertain save's result remained open. The draft
already covers those points, so no remediation was requested.

This simulation exercised explanations, a changed-assumption comparison and
application planning. No real learner, app implementation, client result or
remote recovery was observed. Synthetic answers cannot validate human
comprehension, independent implementation or mastery. Actual learner use and
course-author judgment remain necessary before readiness claims change.

Detailed task-local evidence is retained under ignored `.scratch/module-2/`:
`independent-review.md`, `teacher-learner-simulation.md`, `check.log`,
`browser-check.log`, `browser-probe.log`, `browser-probe-results.json`,
`desktop-module-2.png` and `phone-module-2.png`. These are author-review
artifacts, not private learner records or published curriculum.

## Verification results

- `npm run check`: skill-copy consistency, repository formatting, production
  build and link checks passed. Link check: **17 generated HTML files, 637 local
  links/assets/fragments** at `/learn-to-code/`. The browser stage initially
  timed out because the sandbox denied binding localhost; a direct bind probe
  confirmed `PermissionError: Operation not permitted`.
- `npm test` with permitted localhost access: **16 passed (18.8s)** across
  desktop and phone. No application or website source changes were needed to
  resolve that environment restriction.
- A separate Module 2 browser probe passed on desktop and phone: HTTP 200,
  visible draft notice, six outcome headings, no page overflow, no browser
  errors, no serious or critical Axe findings, working search navigation and
  keyboard scrolling of the phone examples table. Full-page screenshots were
  retained; the phone screenshot was inspected.
- Source-to-snapshot body parity, unchanged canonical source hashes, unchanged
  other course pages and `git diff --check` were verified.

The sandboxed build emitted nonfatal cache-write/update-check warnings while
using the existing dependency installation. Compilation and link generation
succeeded. Browser checks used the existing managed Chromium. No dependency,
configuration, shared skill or navigation changes were made.

## Integration needs owned by the overview thread

The overview/setup/practice/shared skills still describe the prior course-fork
and `app/` model, and describe Modules 2–7 collectively as broad outlines. That
work belongs to the separate overview task. Coordinate its readiness wording so
Module 2 is described as a detailed **draft for review**, while Modules 3–7
remain outlines. Module 2's objectives are not yet agreed completion criteria.

Combine this Module 2 source with the overview task's source inputs before any
full importer refresh. Do not use this task's isolated thirteen-file staging
directory to overwrite the overview task's new general guidance. Search and
Markdown exports are generated by the existing build workflow and are not
committed. The homepage, setup, README, global navigation, shared skills and the
other checkout were not edited in this task.
