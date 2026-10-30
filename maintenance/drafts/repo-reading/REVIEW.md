# Read an Active Repository review handoff

Status: **reviewable companion draft, pending course-author review and real
learner use**. No push, merge, public publication or canonical Drive edit is
included.

## Deliverable and source ownership

The standalone [companion section](../../../docs/companions/index.md) contains
[Read an Active Repository](../../../docs/companions/read-active-repository.md)
and
[Fieldnotes practice evidence](../../../docs/companions/fieldnotes-evidence.md).
They are maintained directly in `docs/companions/`, outside the thirteen
imported course snapshots. The user directed this addition; it is not attributed
to an existing canonical Drive source. Its separate sidebar and pagination do
not insert it into the core module sequence or make it a prerequisite.

Six proposed outcomes cover product/repository orientation; feature status;
bounded progress and delivery pace; priority and direction; directing and
challenging a read-only agent; and producing a useful source-backed brief. Each
includes an optional short exercise and observable learner judgment. The module
explains relevant Git terms as needed without requiring coding, setup, an app, a
local checkout or completion of core modules.

The fictional packet includes a stale README, a current product note, an older
roadmap, a current maintainer decision, an inaccessible board, an urgent repair,
merged/released but unactivated saved views, a privacy-blocked export draft,
unmerged closed work, a milestone past its due date and misleading bot-heavy
activity totals. The learner challenges a flawed AI summary and updates a brief
when deployment and enablement evidence changes. No workplace repository or
private board was accessed. No real learner evidence is included.

Overview and curriculum links were added to their existing authored revisions
and refreshed through the guarded importer. All thirteen preserved canonical
inputs matched the existing SHA-256 manifest. All seven core module pages,
`course-source.json` and `course-refinements.json` are byte-unchanged from base
`76d0baa29d7e08db68a015af662696ac0c52ceb4`. Other core content and skill bodies
remain unchanged. Root guidance adds only companion routing and draft status.

## Independent review and findings

Three fresh read-only perspectives covered novice/whole-artifact craft, evidence
interpretation, and navigation/configuration/test implementation. All completed
and returned no unresolved material defect after focused review of the
corrections:

- Define fork, archived repository, component, architecture, draft/prototype,
  generated files and acceptance evidence at beginner level.
- Distinguish unknown availability from known disabled availability in the
  changed-rollout example.
- Date the new October 26 update explicitly and preserve the historical October
  25 account and comparison.
- Keep the brief instructions generic rather than supplying the specific worked
  answer there.
- Scope browser test links to the article so a same-named table-of-contents
  anchor does not cause a strict-mode failure. Use the phone menu's existing
  back-to-main control before selecting primary navigation.

The independent navigation review confirmed separate companion sidebar and
pagination, unchanged Module 7 continuation to Project practice, base-prefixed
links/search/export routes and final desktop/phone test coverage. The evidence
review verified official GitHub issue, PR, release and deployment references and
the primary SPACE research reference. The review judgment is fitness as an
author-review draft, not learner validation or release authorization.

## Synthetic reader and evidence simulations

A separate agent independently read the module and E1–E7 before consulting the
worked interpretation. It wrote a five-sentence brief, challenged shipment and
threefold-productivity claims using source IDs, compared delivery outcomes in
the two seven-day windows, identified current visible priorities and missing
planning context, and asked what would establish production activation and pilot
enablement. It correctly preserved the October 25 history when considering the
October 26 counterfactual. The worked interpretation added a missed explicit
point: the passed milestone date and unresolved work undermine “on schedule.”

A separate reviewer-generated evidence simulation corrected all E7 claims: saved
views was released but production activation failed; export remained a blocked
draft despite green prototype checks; activity counts did not establish
productivity; an old priority label promised no next-week date; offline capture
remained an idea; and no completion percentage or on-schedule claim followed.
Under the changed condition, deployment is supported while pilot availability is
known absent because the feature is disabled for those users.

These are synthetic agent exercises, not real human learner testing. Much of the
packet is explicit teaching evidence, so successful interpretation does not
establish independent discovery or transfer. Actual live repository navigation,
workplace source discovery, real learner comprehension and unaided judgment
remain untested. The final brief and outcome wording still need the course
author's judgment before the proposed criteria become agreed.

## Verification

The original shared worktree experienced concurrent edits/builds, occupied test
ports and stale-source export comparisons. No passing claim relies on those
runs. The final candidate was frozen in the separate
`course-companion-repo-reading-task4` worktree, based on the combined candidate.
Original branches and private evidence were preserved.

Final isolated checks:

- `npm run check:skills`, `npm run lint` and `git diff --check`: passed.
- `npm run build`: passed at `/learn-to-code/`.
- `npm run check:links`: **20 generated HTML files, 853 local links, assets and
  fragments** at that prefix.
- `npm test -- --config .scratch/playwright-isolated.config.js`: **22 passed
  (37.9s)** across desktop and phone. The disposable config changes only the
  test/server port to 4193 and resolves its working/test/output directories; it
  exercises the same committed tests and production build. The default port was
  in use by another course process.
- Production build and the same 853-link check also passed at
  `/present/learning/learn-to-code-repo-reading-review/`.
- The existing private HTTPS preview's seventeen raw pages were compared with
  this candidate and all matched. A separate browser probe passed for desktop
  and iPhone-sized viewports: HTTPS 200, hydrated pages, standalone navigation,
  six outcomes and draft status, practice links, search, three companion raw
  exports equal to source, no page overflow, no serious/critical Axe violations
  in light/dark themes, and no page or asset errors. Screenshots of the phone
  and desktop reading views were inspected.

The HTTPS probe is not a physical phone test. It reused the existing private
presentation route without changing access or service configuration. The link
requires Tailscale and the iMac online. Root and a second renamed-repository
prefix were not separately exercised because the base-path mechanism was not
changed; both the standard and private presentation prefixes were checked.
Builds emitted nonfatal Docusaurus update-check and Node localStorage warnings.
No dependency versions, workflow, accounts, permissions or hosting were changed.

Task-local logs, screenshots, browser probe and disposable config are retained
under ignored `.scratch/`; Playwright evidence is in ignored `test-results/`.
They are review evidence, not published learning records. New maintained tests
cover the companion journey and exports; one-off probe scripts are not
committed.

## Author decisions remaining

The course author should judge the proposed six outcomes, companion grouping,
level of workplace emphasis and whether the fictional practice is a useful
starting point. Real learners should try orientation and source discovery on a
safe repository before claiming human usability or readiness. Promotion into the
canonical curriculum, public publication and merge remain separately authorised
steps. The local draft and private preview are ready for that review.
