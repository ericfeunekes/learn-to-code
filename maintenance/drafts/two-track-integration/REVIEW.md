# Two-track integration review handoff

Status: **combined local candidate for independent whole-path recheck and
course-author review**. This report records integration and software evidence;
it is not the independent reviewer's signoff or evidence of human learning. No
push, main merge, Drive edit, public deployment or access change is included.

## Source and ownership

Base: `d3c8cdb5631141ace2528326f7190e39073b23ac`. The isolated branch is
`course-two-tracks-integration` in `/tmp/learn-to-code-two-tracks`. Original
checkout and module-author branches remain intact.

Integrated module sources:

| Module                  | Original author commit                     | Incremental remediation                    |
| ----------------------- | ------------------------------------------ | ------------------------------------------ |
| 1, software parts       | `942dfd6186c4ddea0bb404d5b49e861642cc26c4` | Shared-foundation link/context only.       |
| 2, navigation           | `f8e51fe105f9b580dcfcf4d42e897ea29c60ee6f` | Track links only.                          |
| 3, run/investigate      | `b200afbe3cbb5ffa62d26517cb78447d2d906cd7` | `9facaba99ad5cea407958744fb11352c0e9bf181` |
| 4, feature/change       | `683170fd5982625f9b19adfe0dce33b370ea34a3` | Track links only.                          |
| 5, correctness evidence | `9d00978e8b5af943ca1e5dbec1122c1b6789732f` | Consistent folder/route and test paths.    |
| 6, evolving project     | `0c53c8f91e573fde3e1e127f797565674d2a2dc4` | `942dba6b2e622e1fc8ff3101d909f24e5ed31415` |

All fourteen second-track reading files are directly authored sources under
`docs/understand-code/`, not Drive exports. They comprise the guide, six
modules, packets, practice and Module 3 teacher notes. Module 3 was moved from
maintenance into reading sources with deliberate relative links and downloadable
fixtures. Modules 5–6 were consolidated from `docs/understand/`. Existing
building-track Modules 1–7 remain byte-identical to the base. The thirteen
original canonical source hashes and importer guards are unchanged; general
shared revisions remain registered authoring inputs, and refresh reproduces all
thirteen snapshots.

The old companion entry and module URL are pointers into Module 6. Fieldnotes
remains supplemental fictional evidence, preserving its read-only boundary.
There is no third track or separate set of companion completion criteria. All
six new modules and shared GitHub0 remain drafts; author acceptance and real
learner use remain unestablished.

## Shared scope decisions

- Shared GitHub0 introduces repositories, files/history/versions, branches, PRs,
  issues and releases. Both tracks follow it; an understanding learner needs no
  app idea, implementation repository or full-stack setup.
- Building setup retains independent project repositories and three appropriate
  next choices. An explicit operational setup request is not blocked on a full
  Git lesson. The root/teacher/skill routes select the actual track and qualify
  outcome IDs because numbering overlaps. Author outcome prefixes are preserved.
- Teaching uses a small general model, a concrete example, then independent
  application with just-in-time language/framework detail. Investigation can be
  active API/MCP/browser QA but stays within understood target/data/effects.
  Staging and local software are not presumed safe.
- Accessible excerpts/results support review without external-chat assumptions.
  Learner judgment, agent output, fictional packets, reported execution and
  inspected results remain distinct. No implementation is required to prove
  investigation learning.
- Module 6's familiar capitalization mismatch alone is not novel transfer. Its
  added synthesis is source tracing, dated project/history/runtime/rollout
  reconciliation and a new-record update. The learner may use an unfamiliar
  authorized case for a stronger transfer claim.

## Accepted review findings and integration dispositions

The independent review artifact remains in the review owner's worktree:
`/tmp/learn-to-code-understand-review/maintenance/drafts/understand-whole-track-review/REVIEW.md`
(initial review-only commit `626ffef1171b3ee621a016416fa615ce6c86343d`). The
reviewer must recheck this exact final candidate; the following are integrator
dispositions, not approval on their behalf.

- **R1:** incorporated both authors' concurrent HTTP-server fixes. Module 3's
  idle-connection, concurrent request-ID/log, effects and shutdown tests pass;
  Module 6's idle-connection/identity/shutdown regression passes. Intentional
  educational search defects remain.
- **R2:** incorporated Module 6's H4a before/after source hunk,
  input-to-response trace/prediction task, return requirements and assessment
  limit. The after lines match the executable fixture. Source predictions are
  not before-version or historical runtime observations.
- **I1:** revised shared GitHub0, overview/map/setup/practice/teacher/AI
  guidance, root instructions and byte-equal skill mirrors for both tracks.
- **I2:** one six-module guide and ordered navigation; Module 3 reading pages
  and exact Python downloads are accessible without a course checkout. Legacy
  companion URLs point to the coherent second track.
- **I3:** explicit inventory names all 31 admitted reading pages. Tests compare
  the exact exported source set, each raw body, all served routes and index
  entries; no count or error assertion was removed.
- **I4:** controlled viewport-resize-at-detachment probes reproduced five
  null-`scrollWidth` errors both on the new candidate before remediation and on
  unchanged private preview `76d0baa29d7e08db68a015af662696ac0c52ceb4`. The
  probe emits resize during actual route DOM detachment, before passive listener
  cleanup; it is a deterministic lifecycle-boundary simulation, not a claim to
  reproduce a particular physical-phone event sequence.
  `src/theme/CodeBlock/Content/String/index.jsx` now uses a mount-aware wrap
  listener, guards ref identity, and cleans up resize/tab observers. The owning
  browser test failed on old behavior on both sizes and passes with the fix.
  Additional wrap toggling, dark reload and viewport checks pass; page-error
  assertions remain intact. Third-party attribution is preserved.

## Verification and limits

Local fixture checks on the integrated tree:

- Module 3: four actual loopback HTTP/process tests pass, including idle socket,
  concurrent IDs/log association, ready/unavailable distinction, refused
  mutation methods and cleanup.
- Module 5: six CLI modes match their defined contracts: weak checks pass both
  versions; focused baseline passes; focused candidate deliberately exits 1;
  observation modes report 400/no-save versus 201/one saved note. This proves
  fixture mechanics and preserves the teaching defect, not app correctness.
- Module 6: idle connection regression passes. H4a after-lines match the Python
  fixture; predictions for case/whitespace/empty inputs preserve the intended
  visible mismatch. Predictions are separate from actual HTTP execution.
- Source refresh reproduces thirteen generated pages; changed shared0 canonical
  input rejects before writes. Original canonical hashes and building modules
  are unchanged. Documentation graph contains no broken links after excluding
  declared authoring templates and ignored generated/scratch artifacts.
- Root URL checks: build/link check passes (34 HTML files, 1,986 links/assets/
  fragments); twelve desktop/phone route/export/lab/foundation/wrap checks pass.
  These root route checks preceded the final Module 6 text/runtime amendment;
  the amendment did not change route machinery.
- Focused word-wrap remediation checks: eight desktop/phone checks pass,
  including production page checks, wrap toggling, detach-boundary events and
  dark reload/resizing.

Final aggregate, normal-prefix and private HTTPS preview results are recorded in
the final task handoff after their runs finish. Temporary evidence remains under
ignored `.scratch/two-track-integration/` and browser test outputs. No real
learner, authenticated workplace repo, live MCP/React target or staging system
was used. Simulations and green delivery checks cannot establish human
comprehension, broad transfer, client instruction loading or universal mastery.
The independent reviewer owns the final whole-path verdict.

## Final aggregate and delivered preview

- Full `npm run check` at `/present/learning/learn-to-code-two-tracks-review/`
  passed on the remediated candidate: skill parity, formatting, production
  build, 34 HTML files, 1,988 links/assets/fragments, and **34 desktop/phone
  browser tests (51.3 seconds)**. The earlier failing detach test now passes
  without weakening its error assertion or retrying away the defect.
- At `/learn-to-code/`, build and 1,988-link check passed. Four desktop/phone
  inventory and full-foundation-to-six-module navigation checks passed after the
  final Module 6 amendment. The root-prefix checks above also passed.
- The tested static export was copied to the existing private presentation
  route, without modifying routes, access, services, accounts or public hosting.
  The delivered HTTPS URL is
  `https://robie-imac.tailae8a7b.ts.net/present/learning/learn-to-code-two-tracks-review/`.
  It requires the phone's Tailscale connection and this iMac online. Keep it
  available for the pending review; delivery does not prove it has been viewed.
- The actual HTTPS preview passed a phone-sized browser check: page identity,
  shared0→all six modules→guide, viewport bounds, all 31 reading routes and raw
  exports, four byte-equal fixture downloads, builder-prompt copying, controlled
  resize at detachment, and dark reload/viewport changes with no captured page
  or asset errors. The probe initially read its detach counter before route
  navigation settled; awaiting the URL corrected that probe synchronization
  without changing the course or relaxing assertions. This is browser emulation,
  not a physical-phone test.

## Integration route simulations

These are integrator-authored desk checks of the actual shared instructions, not
executed teaching-client tasks, independent review, or human learner data. The
module authors' and independent reviewer's separate simulations remain in their
own handoffs; none establish comprehension or transfer by a real learner.

1. **Novice wants to understand an existing repository:** the shared route
   introduces GitHub0, then the second-track model and small example before a
   question-led map. No app definition, implementation repository, account
   creation or feature work is a prerequisite. If real source cannot be shared,
   use safe excerpts or label the fictional packet as practice.
2. **Can inspect files but cannot start the environment:** navigation evidence
   and a reasoned environment/effects decision can be credited partially. Module
   3 operation remains unassessed; a supplied MCP/browser packet does not become
   a real call or runtime success. Continue safe inspection and identify only
   the missing access/setup needed for the chosen action.
3. **Agent says tests pass and a private chat link is inaccessible:** select
   understanding Module 5 rather than building Module 5, inspect the smallest
   relevant assertion/version/result excerpt, and ask for one learner
   interpretation. Do not infer hidden execution or mastery, require a feature
   fix, or discard partial evidence because the link cannot be opened.
4. **Local frontend calls a stage API with a messaging tool:** the
   target/effects checks prohibit carrying fixture permission into that service.
   A read-only annotation or the word staging does not establish safe effects.
   Pause the uncertain call, retain the source/network evidence, and request the
   specific missing authorization or configuration fact rather than rerunning
   blindly.

No final independent whole-path verdict is claimed here. The parent should give
this report and the immutable final integration commit to the existing reviewer
for their accepted-finding and material-regression recheck.
