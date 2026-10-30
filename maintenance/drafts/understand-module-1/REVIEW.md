# Second-track Module 1 review handoff

Status: **local authored draft, pending course-author and independent
whole-track review**. No push, merge, public publication, deployment or
canonical Drive edit is included. This is second-track Module 1, not the
building track's existing Module 1 on Testing and QA.

## Deliverable and authoring boundary

- [How software fits together](../../../docs/understand-code/01-how-software-fits-together.md)
  supplies the proposed outcomes, small exercises, agent prompts, independent
  application, assessment criteria, incomplete-evidence handling and handoffs.
- [Shelf summary](../../../docs/understand-code/fixtures/module-1-shelf-summary.md)
  supplies a tiny language-neutral example, changed conditions, a fresh fallback
  example and a worked interpretation after the attempt.

These new files are direct local authoring sources requested by the user, not
canonical-source exports. They live outside `docs/course/`, its thirteen
generated snapshots and the guarded importer. No private repository, Drive
content, workplace data or real learner evidence was used. All source excerpts,
version labels, helper names, records and observations in the packet are
explicitly fictional. No tests were actually executed inside the fictional Shelf
summary scenario.

Base: `d3c8cdb5631141ace2528326f7190e39073b23ac`, isolated worktree
`/tmp/learn-to-code-understand-module-1`, branch
`course-understand-module-1-software-map`. Original checkout, other branches,
shared navigation, overview, existing core modules, dependencies, skills and
source manifests are unchanged. Shared Module 0 is a prerequisite by user
direction; no implementation-repository setup is required. The current Git draft
is linked as background, with its setup emphasis explicitly marked for the
parent's two-track integration work.

## Coverage and scope

| Proposed outcome                              | Exercise and observable judgment                                                              | Boundary                                                |
| --------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| U1.1 Explain roles and connections            | Connect rules, settings, books, helper, tests and process; predict changed text               | No syntax, tool installation or six-folder assumption   |
| U1.2 Separate repository and running instance | Correct the agent's current-version claim with a dated run record; preserve later uncertainty | No real deployment investigation or debugging           |
| U1.3 Apply a small map                        | Use teacher-supplied real-repository excerpts or label fictional fallback practice honestly   | No assumed code-path discovery skill or invented access |

The general map precedes a tiny example and a small real-repository application.
The teacher is directed to use short exchanges and one missing connection at a
time; exercises are optional ways to produce evidence, not a fixed lecture or a
compulsory checklist. The learner contributes predictions, explanations and
corrections while an agent may help. Agent-generated maps or PASS records alone
leave learning unassessed. A fallback packet demonstrates practice, not actual
transfer to a real repository.

The map acknowledges different execution arrangements without teaching them:
one-shot programs, built artifacts and browser/server processes. The module
distinguishes code/configuration/data by role, names runtimes and libraries as
dependencies, and avoids asserting that latest files are running. Reading a
runtime observation at its stated time precedes later hands-on QA. Module 2 owns
finding the relevant files; Module 3 owns starting or accessing an authorized
environment, API/MCP/browser checks and operational side effects. Later modules
own feature tracing, depth of correctness evidence and evolving work. This
module does not require those skills to explain its small example.

## Author-generated learner/evidence simulations

These are the module author's manual desk checks against the packet and proposed
criteria. They are **synthetic exercises**, not independent review, actual human
learner evidence, observed teaching-agent behavior or executed software results.
The supplied worked answer was available to the author; no blind-test claim is
made.

1. **Basic prediction and changed conditions:** S2 counts Islands and Stars;
   label-kit produces `2 books`; S3 adds `To read:`. Changing the prefix alone
   produces `Remaining: 2 books`; changing all three books to finished then
   produces `Remaining: 0 books`. Each answer follows from a named rule and
   input rather than vocabulary matching. This exercises U1.1.
2. **Runtime/version misconception:** S6 establishes `Shelf: 3 books` at 08:55
   with version A. S1's selected B snapshot and S5's 09:00 check establish no
   change to that process, nor its 09:05 state. A proposed answer asserting it
   still runs A now also overclaims. Request a relevant later runtime
   observation rather than teaching restart commands. This exercises U1.2.
3. **Fresh example with missing evidence:** W1 predicts `Hello Jo` from a
   visible rule, greeting and input. Tests, dependencies and running state are
   absent. Filling them in from likely conventions is unsupported. A good
   response marks those gaps and asks a useful question; credit synthetic
   practice but leave actual real-repository transfer unassessed. This exercises
   part of U1.3.
4. **AI-only return:** a pasted correct agent map and “all passed” statement do
   not show learner reasoning. Proposed feedback acknowledges the reported
   artifact and asks one concrete connection question; it awards no mastery.
5. **Partial explanation or inaccessible link:** credit a supported code/data
   connection, retain unknown configuration or runtime facts, and request only
   the relevant safe excerpt. Do not infer unseen chat turns, force a full
   lesson, or treat missing access as learner failure.

## Verification

Isolated checks at the normal `/learn-to-code/` prefix:

- `npm run check:skills`, `npm run lint` and `git diff --check`: passed.
- `npm run build`: passed; 19 reading sources exported.
- `npm run check:links`: passed, **22 generated HTML files and 932 local
  links/assets/fragments**.
- Existing browser suite plus a temporary module-specific probe: **22 passed, 2
  failed** across desktop and phone. Both failures are the same shared export
  inventory assertion at `tests/site.spec.js:226`: it expects the original 17
  pages while the new sources correctly produce 19. That test is a shared file
  and was deliberately not edited under the worker boundary. It must be updated
  once the integrator knows the combined six-module inventory. This is a known
  integration dependency; the unmodified full `npm run check` is not green.
- The new module and packet passed desktop/phone browser probes for HTTP 200,
  hydration, headings, three outcome sections, both cross-links, source/raw
  parity, no page overflow, no page/asset errors, and no serious/critical Axe
  violations. Light checks cover both pages; dark checks cover the module.
  Full-page phone module and desktop packet screenshots were visually inspected
  with no clipping or layout defect found. This is browser emulation, not a
  physical-device or real-learner test.

Browser probes use a temporary configuration on dedicated loopback port 4261.
The initial sandboxed server could not bind a local port; the elevated
local-only QA run succeeded. The abandoned sandboxed preview process was
stopped. No service, permission setting or external hosting configuration was
changed. Builds emitted nonfatal Docusaurus update-check/localStorage warnings;
browser runs emitted color-environment warnings.

The temporary config/probe and browser evidence remain in ignored `.scratch/`
and `test-results/module-1/`. They are supporting local evidence, not curriculum
or learner records. After the small introductory edit explaining that this page
is a reference for short exchanges, the final rebuild and link checks passed
again, and the focused desktop/phone probes passed **2/2 in 10.7 seconds**.
Final probe evidence is preserved separately in `test-results/module-1-final/`.

## Integration instructions and remaining limits

Cherry-pick this task's commit after reviewing it. Only the two new reading
sources and this handoff belong to the change. The worktree's reused
`node_modules` symlink and ignored build/test outputs are temporary, not
deliverables. No dependency or lockfile changes are needed.

The parent integrator should reconcile the six workers' directory/slug and
outcome-ID conventions, register the second-track source boundary in the
publication guide, and add overview, track navigation and previous/next links.
Update the shared exported-page inventory test for all admitted new pages. Keep
this module after the shared GitHub Module 0 and before codebase navigation. Its
stable draft routes are `/understand-code/how-software-fits-together/` and
`/understand-code/practice/shelf-summary/`. The normal build already discovers
both sources for routes, search, raw Markdown and `llms.txt`; they are not yet
linked into shared course navigation. The parent should review what is included
in exports before any separately authorized publication.

The independent whole-track review should check whether Module 0's introductory
depth is sufficient, whether locating excerpts is appropriately supplied here
and taught next, whether six roles are digestible in short exchanges, and
whether Module 3 adds runtime investigation without requiring skills not yet
taught. Real learner comprehension, teaching-client instruction loading,
independent source discovery, real-repository transfer and use of a real running
system remain untested. Draft acceptance and eventual canonical promotion belong
to the course author.
