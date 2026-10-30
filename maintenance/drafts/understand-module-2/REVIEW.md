# Second-track Module 2 review handoff

Status: local draft for course-author and independent whole-track review. No
real learner has been assessed. This addition does not change the building
track's Module 2 or promote new outcomes into agreed completion criteria.

## Source and intended result

Directly maintained draft sources:

- [Find your way through a codebase](../../../docs/understand-code/02-find-your-way.md)
- [Fictional navigation evidence](../../../docs/understand-code/02-navigation-evidence.md)

These are new user-directed authoring files outside `docs/course/` and its
thirteen generated snapshots. They are not Drive exports. No canonical hashes,
guarded replacements, importer, overview, sidebar, dependency, skill or existing
module files were edited. Builds include these draft pages in local search and
Markdown exports, so the integrated site must remain private until authorized.

The learner's deliverable is a question-led map with a few sourced file roles,
one immediate connection, a challenged agent claim and useful unknowns. Five
proposed outcomes cover scope; selecting relevant sources; checking immediate
connections and boundaries; verifying an agent explanation; and producing and
adapting the map. The learner need not create an implementation repository or
execute project code. Shared GitHub Module 0 and second-track Module 1 supply
the prior concepts; one missing concept can be addressed with a short example.

General concepts precede an optional tiny example, a static multi-program packet
and independent use on an authorized unfamiliar repo. API, MCP and React appear
as different routes into software rather than stack courses. Reading a route or
schema is orientation, not runtime QA or an end-to-end feature trace. The
learner can use a file browser, editor or read-only agent and explain only the
syntax needed for the current question.

## Teacher reference for the packet

Consult after the learner contributes; do not prefill their map. Accept any
bounded map supported by the packet, rather than require a prescribed file count
or vocabulary. A question about browser search may use P1/P2 for scope,
`SearchPanel.jsx` and `search-client.js` for the UI connection, and the API
route/handler for where to inspect next. A provider-focused map may select the
handler, provider client and example configuration instead. Neither must trace
all paths or explain omitted behavior.

- P1's README is an outdated lead: the tree lacks its stated source path, while
  P2 describes the current three-program organization. Recency alone is not the
  reason; the excerpts support that organization.
- P2 and P3 identify `dist/search.js` as generated older output. A matching word
  does not make it the maintained implementation. The test is another relevant
  match but serves a different purpose from runtime source.
- P3's UI calls `findBooks`, whose excerpt requests the API path. P4 supplies a
  matching route registration and handler. The mounting code is only reported in
  a comment, not inspected; qualify any conclusion about complete routing.
- P4's API and MCP handlers both import `lookupBooks`. The supplied MCP handler
  does not call the HTTP route. Shared dependency does not establish identical
  behavior or coverage. Omitted setup and output adaptation remain unknown.
- P4's provider uses a configuration variable; P5 supplies an example only. No
  active environment, deployed version or provider behavior is established.
- P5 locates a test using a fake provider. It is neither an inspected passing
  run nor evidence of users' runtime success. At this stage the learner needs to
  locate and limit this source, not perform Module 5's correctness review.

For the changed-question exercise, expect the learner to replace the browser
entry files with `apps/mcp/server.js`, retain the provider reference if useful,
and identify missing startup, full schema or output adaptation as possible next
sources. The learner must explain the selection. A different supported choice is
valid; this is not a hidden answer-matching exercise.

## Review the learner's evidence

Inspect supplied paths/excerpts and the learner's own explanation, correction or
selection. Ask one small follow-up tied to a gap: “Why set aside that match?” or
“What would change if you only had the README?” Do not demand every outcome in
one session or count an agent's polished map as demonstrated judgment. Credit
partial work, distinguish what was inspected from what was reported, and keep
inaccessible links or omitted files as explicit limits. Use fictional evidence
when workplace material cannot be shared. Private learning records stay outside
these authoring files.

## Integration instructions

Cherry-pick this module's commit onto the integration branch. The only
maintained paths added are this note and the two pages above. Keep all six
workers' module files separate until whole-track review resolves consistent
names and routes. There is no shared wiring to reconcile in this commit.

When the track overview/sidebar is authored, place this module after How
software fits together and before Run and investigate software, following shared
Module 0. Link the evidence packet from the module, not as a separate numbered
module. Stable proposed routes are `/understand-code/find-your-way/` and
`/understand-code/navigation-evidence/`. The new pages deliberately refer to
neighboring modules by title until their filenames are settled. They have no
cross-worker broken links.

Update the owning publication boundary with the new track's source/status rules
as part of integration. Do not register these files as replacements for the
building track's existing generated modules. Root teaching routes and outcome
IDs also need a whole-track integration decision; `N2.1`–`N2.5` currently
distinguish these proposed navigation outcomes from the building track.

The shared export test in `tests/site.spec.js` enumerates the original seventeen
Markdown pages and asserts that search has exactly that many entries. Extend
that list to include these two files and the other admitted track pages during
integration. This worker leaves the shared test untouched as instructed; its two
count failures are not a passing full-suite result.

## Validation and remaining limits

### Worker-authored learner simulations

These are tabletop examples written and assessed by the module worker, not
observations of a human learner or an independent teacher/learner agent trial.
They check whether the exercises permit a useful answer and discriminate between
a copied answer and explained judgment.

1. **Skimming the README:** simulated answer, “I would open `src/search.js`.” P1
   provides no such path; a useful teacher response is to ask the learner to
   check the tree and P2. A revised answer can locate the web client and qualify
   the README using both sources. Initial evidence is partial N2.1/N2.2, not a
   failure requiring a full Git or JavaScript lesson.
2. **Correct map without visible reasoning:** simulated submission, “Web calls
   API; MCP and API share the provider.” The files support it, but the sentence
   could be copied from the packet or agent. Ask which import supports one
   connection and why `dist/search.js` was excluded. No learner mastery follows
   until the learner supplies an explanation; no extra execution is needed.
3. **Changed question:** simulated reasoned answer, “For MCP I would replace the
   UI files with `apps/mcp/server.js`, keep `provider-client.js`, and inspect
   missing output adaptation or startup next. The imports support the shared
   client; P5's example URL does not tell me production configuration.” This
   supports bounded N2.2/N2.3/N2.5 judgments if supplied by a learner. It still
   leaves runtime behavior and real-repository transfer unproved.

The walk-through found that the packet supports a short browser-focused map and
a distinct MCP-oriented map without a full end-to-end trace, live provider
access, installing tools or building an app. This is feasibility evidence for
the drafted exercise, not learner validation.

### Technical checks

- `npm run check:skills`, `npm run lint`, and `git diff --check`: passed.
- Production build: passed at `/learn-to-code/`. The final link check passed
  **22 generated HTML files and 925 local links/assets/fragments**. There are
  nineteen reading pages, including the two additions.
- Existing unmodified Playwright suite, using the existing desktop and phone
  projects with an isolated localhost port: **20 passed, 2 failed (1.2m)**. Both
  failures are the shared export test's exact page-count assertion (expected 17,
  received 19), described in Integration instructions. All other existing tests
  passed. The required aggregate check is therefore not green.
- Focused draft-page browser probe: **2 passed (11.8s)**, desktop and phone. It
  checked both pages, hydration, no horizontal page overflow, no browser or
  asset errors, serious/critical Axe checks in light and dark themes, practice
  links in both directions, search navigation, five outcome headings, and both
  raw Markdown exports exactly equal to source. Full-page screenshots were
  retained and the phone evidence-page screenshot was inspected.
- The first focused probe exposed low-contrast colors from the shared code
  syntax theme. These new excerpts now use `text` fences so the code remains
  legible without color; the final build and probe passed. Shared CSS and theme
  configuration were not changed.
- Protected source/provenance files, original generated course pages, teaching
  skills, shared wiring, dependencies, importer and existing tests were checked
  byte-unchanged against base `d3c8cdb5631141ace2528326f7190e39073b23ac`.

Checks reused the existing dependency installation through a temporary symlink,
without installing or changing versions. Build cache writes outside this
worktree were denied and emitted nonfatal warnings; compilation succeeded.
Localhost binding required sandbox escalation, which was approved. The final
browser config copies the existing desktop/phone projects, changing only the
isolated port and relative working directories. An initial config-import attempt
ran only a default project; those results are not used as desktop/phone
evidence. Task-local configs and the focused probe remain under ignored
`.scratch/`; screenshots are under ignored `test-results/`.

No root or renamed-prefix build was added because URL mechanisms and shared
navigation were not changed. The independent whole-track review requested by the
user remains a separate task; no claim of independent review is made by this
worker's self-check. Real learner comprehension and transfer to unfamiliar
repositories remain untested. There was no push, merge, publication, deployment
or canonical Drive modification.
