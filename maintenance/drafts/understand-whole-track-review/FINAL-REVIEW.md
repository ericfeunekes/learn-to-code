# Final independent whole-track review

**Verdict: PASS for the combined private review draft at exact commit
`5820c3d9f66a538fcca667d645ffd359fe916873`. No blocking findings remain within
the agreed scope.** This evaluates the teaching design, assessment procedures,
exercise feasibility and delivered course path. It is not evidence that real
learners have achieved the outcomes, agreement to draft completion criteria, or
authorization to publish.

## Artifact, audience and independence

The course serves two ways of working with code after a common introductory
GitHub module: building implementations and understanding/investigating existing
software. The second track should equip a learner to explain software parts,
find relevant code, operate or access an authorized environment, run QA, trace a
change, judge correctness evidence and reconcile an evolving project's state. No
feature implementation, product brief or new implementation repository is
required for investigation.

The candidate is `course-two-tracks-integration`, assembled by the integrator in
`/tmp/learn-to-code-two-tracks`. Review used a separate detached worktree at
`/tmp/learn-to-code-understand-final-review` on the exact commit above. No
tracked candidate sources were edited. The prior three independent perspectives
were resumed against the complete current artifact with the original findings
and dispositions: pedagogy/learner paths; practical runtime/code/evidence; and
whole-contract/craft/provenance. All completed; no consequential disagreement or
uncovered material review domain remains. Author claims and passing software
checks were not treated as proof of learner success.

## Finding dispositions

| Finding                                                      | Final disposition and inspected evidence                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R1: idle connections stall Modules 3/6                       | **Closed.** Both concurrent servers and their real HTTP/process regressions are retained. Module 3's moved static files are byte-equal to the fixed author version. Actual four-test Module 3 suite and one-test Module 6 regression pass on this candidate.                                                    |
| R2: capstone cannot substantiate source/change tracing       | **Closed.** Harbor H4a supplies a PR-linked before/after hunk. The learner chooses an input, predicts both revisions and explains changed/unchanged connections. Return and teacher criteria require this evidence; history summaries alone leave tracing unassessed.                                           |
| I1: implementation-oriented shared entry and teacher routing | **Closed.** Shared GitHub 0 covers repositories/files/history/versions/branches/PRs/issues/releases; then the request selects a track. Root guidance, public shared pages and both teaching skills remove implementation setup from investigation. Track identity qualifies overlapping module/outcome numbers. |
| I2: inconsistent navigation and Module 3 delivery            | **Closed.** One guide/sidebar orders all six modules, each with working foundation/guide/next links. Module 3 is reading content with standalone static downloads. Modules 5/6 use the common folder/routes. Legacy companion pages point into Module 6 and preserve the Fieldnotes read-only boundary.         |
| I3: incomplete export inventory                              | **Closed.** The owning test names the exact 31-file source set, checks set equality, raw bodies and served routes. Both desktop and phone inventory tests pass; no count or error assertion was weakened.                                                                                                       |
| I4: shared mobile code-block null-ref exception              | **Closed.** The mounted-element hook guards ref identity before measuring, removes listeners and disconnects its observer. The actual detach-boundary trigger and dark-reload/viewport regressions pass independently on desktop and phone. The full suite and HTTPS path capture no browser errors.            |

Useful final locators:

- Shared entry: `docs/course/OVERVIEW.md:21`,
  `docs/course/00-project-and-git.md:14`, `docs/course/SETUP.md:20`,
  `AGENTS.md:11–32`.
- Teaching/review selection:
  `skills/use-learning-outcomes/SKILL.md:12–30,47–57`,
  `skills/review-learning-evidence/SKILL.md:11–34`,
  `docs/course/PRACTICE.md:43–84`, `docs/course/AI-TEACHER.md:44–83`.
- Ordered delivery: `docs/understand-code/index.md:15–37`, `sidebars.js:57–112`,
  `docs/understand-code/03-workshop-practice.md:28–62`.
- Tracing/transfer credit:
  `docs/understand-code/module6-harbor-log-lab.md:95–122`,
  `docs/understand-code/06-read-evolving-project.md:170–200,249–252`.
- Renderer/owning proof: `src/theme/CodeBlock/Content/String/index.jsx:20–46`,
  `tests/site.spec.js:588–677`.
- Complete reading inventory: `tests/site.spec.js:200–262`.

## Whole-path teaching judgment

The progression remains coherent and general-to-specific:

| Stage                   | Observable capability and handoff                                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Shared GitHub 0         | Identify a repository/version and distinguish files, changes, issues, releases and running software without creating a project.    |
| 1. Software parts       | Explain a result using code/configuration/data/dependencies/tests/process and preserve an unknown runtime fact.                    |
| 2. Navigation           | Justify a question-led file map and inspect a connection rather than trust names or an agent summary.                              |
| 3. Run/investigate      | Establish target/effects, start or access a suitable environment, choose a repeatable check and interpret observation/diagnostics. |
| 4. Feature/change       | Connect an input to a result, compare a source change and explain impact on unchanged callers without implementing a repair.       |
| 5. Correctness evidence | Inspect actual assertions and substituted boundaries, associate results with versions and judge a limited confidence claim.        |
| 6. Evolving project     | Combine those skills with dated history/status/rollout evidence, a QA finding and an account updated by new evidence.              |

The guide, modules and shared instructions permit short adaptive exchanges,
existing knowledge, learner questions and partial results. Definitions and
language/framework details appear where the task needs them. Repeated version,
effects and evidence distinctions support different decisions as the tasks grow.
The building module bodies remain unchanged. No product-development sequence,
mandatory implementation task, code-approval authority or employee-productivity
assessment was introduced into the investigation track.

The capstone now supports source-change tracing as well as project synthesis.
Its familiar capitalization defect is expressly practice if already encountered
in Module 3. Transfer credit relies on different history/version/rollout/update
decisions or a chosen unfamiliar authorized behavior, rather than merely finding
the same bug again. Learner reasoning must remain visible; a polished agent
brief, green check or successful script alone earns no blanket mastery claim.

### Representative reviewer simulations

These are tabletop applications of the actual shared instructions, not human
learner trials or proof that a teaching client loaded them.

- **Novice:** enter through shared GitHub 0 using a small supplied example;
  predict Shelf's unfinished-book count and distinguish it from a dated run;
  select Pocket Library files and reject the generated/stale search lead;
  investigate Workshop only after target/effects checks. No app definition or
  new implementation repository is needed.
- **Experienced:** use existing Git knowledge and a current question to enter
  understanding Module 4 directly. Explain explicit 80 versus omitted limit
  before/after the change, then use Module 5's actual assertions to separate a
  source prediction from tested behavior and deployment evidence.
  Track-qualified assessment avoids confusing these with building Modules 4/5.
- **Incomplete evidence:** an inaccessible private-chat link and “all tests
  passed” are a pointer and reported result. Request the smallest relevant safe
  excerpt, expectation/assertion/version/output and learner interpretation.
  Credit visible reasoning and leave unavailable execution unassessed.
- **Environment mismatch:** a local frontend's stage API target or MCP booking
  tool can have shared effects. Pause that uncertain call, preserve the supplied
  network/schema evidence and ask for the missing target/authorization fact;
  fixture permission does not transfer to staging.
- **Capstone:** `Spill` predicts one match before the H4a change and none after;
  padded lowercase `gate` predicts none before and one after. Explain how the
  changed query/text operations feed the unchanged response. Reconcile release
  and staged `c930` with production retaining `b830`, then update only relevant
  claims when the teacher supplies a later activation record. These are source
  predictions and fictional-history judgments, not before-version execution or
  historical production observations.

## Independent software and delivery verification

All checks below use the exact candidate, not an author's earlier tree.

- **Passed:** skill-discovery parity, formatting, production build and link
  check at `/present/learning/learn-to-code-two-tracks-review/`: **31 reading
  exports, 34 HTML files and 1,988 local links/assets/fragments**.
- **Passed:** complete existing combined browser suite on an isolated localhost
  port: **34/34 desktop and phone checks, 56.2 seconds**, without retries.
  Coverage includes both track routes, shared0→all six modules, search,
  keyboard/skip access, theme/mobile layout, exact exports/downloads, evidence
  return, capstone lab navigation and renderer regressions. The assertions that
  previously failed remain present.
- **Passed independently by the resumed practical reviewer:** four focused
  desktop/phone renderer checks (11.6 seconds), including a resize dispatched at
  actual route detachment, wrap toggling, dark reload and viewport changes.
- **Passed:** Module 3's **four** actual loopback HTTP/process tests from its
  new static download location; Module 6's **one**
  idle-connection/identity/shutdown test. These retain the intentionally
  defective search behavior for teaching.
- **Passed:** all six Module 5 CLI modes match their intended mechanics. Weak
  checks pass both versions; focused baseline exits 0, focused candidate exits 1
  with 201/one saved note versus expected 400/no save; observation modes exit 0
  while reporting each actual result. An observation command's success is not
  evidence of correct note behavior.
- **Passed:** independent check of the actual private HTTPS preview in a
  phone-sized browser. Its search index exactly matches the reviewed build; all
  **31** reading routes respond and raw bodies match candidate sources; all
  **four** fixture downloads match candidate bytes. Browser navigation went
  homepage→shared0→all six modules→Harbor H4a→guide→shared evidence-return
  anchor, checking hydration, viewport bounds and captured page/asset errors.
  **1/1 custom check passed (5.4 seconds).** No page or asset errors were
  captured. A phone-sized capstone screenshot was visually inspected: the
  single-column prose, headings, source hunk, links and startup example remained
  legible.

The private URL inspected was:
`https://robie-imac.tailae8a7b.ts.net/present/learning/learn-to-code-two-tracks-review/`.
This is verification of the existing private delivery, not a new publication.
The reviewer used browser emulation, not a physical phone. Temporary configs,
outputs and screenshot remain ignored under the final review worktree's
`.scratch/whole-track-final-review/` and test-result folders.

Source inspection also confirmed byte-equal root/client instructions and skill
mirrors, unchanged original provenance manifests/hash guards/dependencies and
building-module bodies, explicit directly authored second-track ownership, and
matching maintained/generated shared revision bodies. The final review did not
rerun a canonical-source refresh from private original material or fabricate
canonical exports. The independent final browser run used the private-preview
mount; root/normal-prefix checks described by the integrator were not rerun
merely to duplicate route-machinery evidence.

## Residual limits and completion boundary

No blocking findings remain and no action is denied, pending or of uncertain
execution outcome. The candidate is fit for course-author review and carefully
labelled draft use within its stated boundaries.

Actual human comprehension, teaching-client instruction loading, unfamiliar
real-repository transfer and broader learner retention remain untested. Actual
MCP/React application or shared staging execution was not performed; packets and
API fixtures cannot establish those capabilities. Automated accessibility checks
and one visual inspection are bounded evidence, not complete accessibility
certification. The draft says these things honestly and does not award universal
mastery from the exercises.

No source fix, remote push, merge, Drive change, public deployment or audience
change was made during review. Publication and agreement to proposed outcomes
remain the course owner's decisions. Further changes to the reviewed candidate
need proportionate recheck of their affected behavior and any accepted finding,
not an expansion of this completed review's scope.
