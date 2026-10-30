# Module 3 review and integration handoff

Status: **private author-review draft; initial independent whole-track review
completed, with R1 remediation awaiting independent recheck. Real learner use
remains pending.** No push, merge, public publication, deployment, or canonical
Drive edit is included.

## Integration location

The integration candidate moves the authored module, practice, and teacher notes
into `docs/understand-code/` and the two original fixture files into
`static/exercises/understand-module3/` for direct downloads. Their outcomes and
fixture behavior are preserved; practice paths and page metadata are adapted.
The isolated-task history below describes the original maintenance-only layout.
Current shared routing and aggregate checks belong to the integration result.

## Deliverables and ownership

- [Module](../../../docs/understand-code/03-run-and-investigate.md): five
  proposed outcomes covering target/effects boundaries, environment operation,
  repeatable checking, diagnostics, and reproducible findings. General concepts
  precede API/MCP/browser-specific tools.
- [Practice](../../../docs/understand-code/03-workshop-practice.md): a runnable
  fictional local API; optional supplied MCP and browser packets; transfer to an
  authorized real repo; evidence return.
- [Teacher notes](../../../docs/understand-code/03-teacher-notes.md): adaptive
  teaching, proposed assessment evidence, fixture interpretation, gaps, and
  handoffs.
- `static/exercises/understand-module3/module3_server.py`: Python
  standard-library HTTP service, loopback only, fictional in-memory data, no
  outbound services or data writes.
- `static/exercises/understand-module3/module3_fixture_test.py`: actual local
  HTTP/process checks of the teaching fixture, including the intentionally
  defective capitalization search.

The new sources live only in `maintenance/drafts/understand-module-3/`. They are
independent authoring material created for the user's October 30 direction, not
Drive exports, generated course snapshots, or an approved replacement for any
building-track page. No source manifest, original content guard, navigation,
shared skill, dependency file, website code, or existing module is edited.

## Teaching and scope review

Shared GitHub Module 0 precedes both tracks. This module expects the general
software map and file-navigation skills of second-track Modules 1 and 2; no
learner implementation project or product brief is required. It teaches active
investigation without requiring feature implementation. One interface is enough;
the MCP/browser alternatives do not imply live MCP or React execution.

The module begins with environment/dependency/configuration/log concepts, makes
them concrete with a small fixture, then transfers to one question in an
authorized repo. It leaves detailed code/change tracing to Module 4 and formal
confidence/coverage reasoning to Module 5. Its output can support Module 6's
version/deployment account but does not infer progress, priorities, or shipping
readiness. Cross-module terminology and progression must still be independently
reviewed against the other five workers' final artifacts.

The module and teacher note explicitly distinguish learner choices and
interpretation, AI assistance, inspected results, reported results, and
fictional packet evidence. An inaccessible chat link is not automatic evidence
access. Blocked execution can leave useful partial understanding while
environment operation remains unassessed. Private learner records do not belong
in this folder or website exports.

## Author walkthrough and verification

An author-generated exercise walkthrough used a different search input from the
worked example: `wood` and `WOOD`, with the requirement-based expectation that
both find wood carving. The local HTTP results were 200 with one workshop and
200 with none, respectively, under `module3.1`, ready mode. This supports the
exercise's reproducible mismatch without establishing its root cause or behavior
in any other environment. The owned process was stopped. Its task-local evidence
is in ignored `.scratch/module-3/author-walkthrough.json`.

This is a synthetic author simulation, not independent learner testing. No real
learner, private repository, workplace staging system, actual MCP client/server,
or React app was used. It verifies mechanics and provides a plausible exercise;
it does not establish human comprehension, independent discovery, or transfer.

Checks on the isolated worktree:

- Three fixture boundary tests passed: ready search/request-log association and
  clean shutdown; unavailable catalog versus successful empty result; refused
  mutation methods with unchanged data. The fixture deliberately fails its
  fictional case-insensitive search requirement; green author checks preserve
  that educational defect rather than certify the directory as correct.
- `npm run check:skills`, `npm run lint`, and `git diff --check` passed.
- All nine relative file/fragment links in the module's authored Markdown
  resolve; both Python files compile.
- `npm run build` passed at `/learn-to-code/`; `npm run check:links` passed for
  20 generated HTML files and 853 local links/assets/fragments. These are checks
  of the existing site; private draft content is not built into that site.

The HTTP fixture needs local socket access, which the execution sandbox
initially blocked. Approved escalation allowed its disposable loopback tests and
walkthrough to finish. No action remains denied or of uncertain outcome. Site
build emitted nonfatal cache permission, localStorage, and update-check
warnings; dependencies were reused read-only from the original checkout with a
temporary symlink.

The existing desktop/phone Playwright suite uses a task-local isolated config on
port 4313 to avoid other workers' servers. The first config wrapper unexpectedly
ran 11 unnamed tests; that run is not treated as desktop/phone evidence. The
corrected config is derived directly from the baseline and lists all 22 tests.
The final corrected run passed **22 tests across desktop and phone (1.2m)**.
That checks the unchanged site's regression surface, not a rendered version of
the new maintenance-only draft. Its temporary config and browser artifacts
remain in ignored task-local scratch/test-results folders.

## R1 remediation — idle browser connections

The independent whole-track review at `626ffef1171b3ee621a016416fa615ce6c86343d`
found that the fixture's synchronous HTTP server could wait indefinitely for an
idle browser connection and block an ordinary request on another connection. A
new regression first reproduced the defect on the original service: `/about`
timed out after three seconds while the first connection had incomplete headers.
Its owned process was cleaned up.

The fixture now uses `ThreadingHTTPServer` with explicit daemon handler threads,
so idle connections neither block other requests nor hold the process open on
Ctrl+C. This matches the browser-preconnection use described in
[Python's server documentation](https://docs.python.org/3/library/http.server.html#http.server.ThreadingHTTPServer).
Request-number allocation and structured log writes are protected with locks.
The response event is logged before the response body completes, making it
available when a client finishes reading the result.

The new boundary regression holds both a silent connection and an incomplete
request open, receives `/about` on another connection, completes four additional
concurrent requests, and verifies distinct request IDs with matching JSON log
records. With both idle clients still open, SIGINT exits with code zero and a
final `stopped` event; a new connection to the closed listener is refused. All
four fixture tests passed after the fix, including the original ready,
unavailable, and refused-mutation cases. The intentional search mismatch is
preserved. Python syntax, authored Markdown formatting, and `git diff --check`
also passed.

This remediation changes only the fixture, its tests, and this handoff. The
site's source and routing are unchanged, so the earlier site checks above were
not rerun or presented as new evidence. No task-owned service remains running.
This is an author-confirmed fix pending the independent reviewer's recheck; it
does not resolve shared integration obligations or demonstrate learner success.

## Integrate after whole-track review

The branch starts at exact commit `d3c8cdb5631141ace2528326f7190e39073b23ac` and
touches only this module's new folder. Cherry-pick the module commit supplied in
the task's final handoff onto the intended integration branch. Do not merge or
copy the temporary dependency symlink, ignored build outputs, or task-local
evidence into curriculum content.

Use the linked run-and-investigate module page as the draft entry point. Keep
its second-track identity explicit to avoid confusion with building-track
Module 3. The integrator owns shared overview/navigation/source-policy changes
and reconciliation of the earlier read-only companion with the new track. This
task does not silently replace that companion's read-only permission boundary.

If admitted to website reading content later, provide accessible fixture files
or a module download and adjust the practice source paths deliberately; do not
publish broken links from `docs/` to maintenance-only Python files. Keep teacher
interpretation separate from the learner's first attempt where useful. Recheck
site source links, search, exports, desktop and phone behavior after that shared
wiring changes. Canonical promotion and publication remain separate decisions.

In the integrated candidate, fixture author checks run from the repository root
with:

```sh
python3 -B static/exercises/understand-module3/module3_fixture_test.py -v
```

Local startup and stop instructions remain in practice. No task-owned server is
intended to stay running after verification.
