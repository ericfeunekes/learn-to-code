---
title: 'Module 6 lab: Harbor Log'
description: >-
  Fictional project records and a local API for independently investigating
  project state and observed behavior.
slug: /understand-code/module6-harbor-log-lab
---

# Module 6 lab: Harbor Log

Use with [Read an evolving project](06-read-evolving-project.md). Everything
below is invented training material: records, versions, people and data. Do not
search for this project. There are no credentials, real users or external
services in the executable fixture. The supplied records and observations are
fictional teaching evidence.

Your question: **What changed for pilot users over these two weeks, and what can
we confirm about search?** Scope: `harbor-log-api`, `main`, October 12–25, 2026,
UTC. The account describes the period ending October 25; the evidence snapshot
is October 26 at 09:00 UTC. The supplied repository records cover this window.
The private planning board and the external identity service's repository are
unavailable. The local fixture represents the release at the snapshot; running
it now is a new local observation, not a historical production observation.

Start by explaining the project and what appears to be changing in a few
sentences. Use the H1–H7 headings to point to evidence, adding a revision or
date when it matters. You can ask an agent to gather and explain material, but
make your own choice of claim, prediction and check. Keep one short account; add
the source trace and observation to it, then ask your teacher for a later
record.

For orientation, the small path here is **supervisor's search → API → matching
notes → response**. Work records describe proposed and completed changes to that
software; deployment records help establish which version pilot users receive.
H2 describes the intended search rule, H4a shows what changed in its source, and
H7 lets you investigate the supplied after version locally. Read the records
before deciding what they establish.

## H1 Repository home and files

README, September 30: “Harbor Log helps dock supervisors record and search
inspection notes. CSV downloads are available to pilot supervisors.”

The fictional repository tree at `main`, abbreviated revision `c930`:

```text
README.md                  project introduction above
docs/search-contract.md    H2
docs/decisions.md          H3
src/server.py              local fixture source below
tests/search-checks.md     check record in H4
.github/workflows/ship.yml deployment description in H5
```

These are the supplied extracts of the fictional repository, not files in a
hidden remote. The runnable `server.py` is the actual local fixture source.
Documentation, issue and workflow extracts describe the invented project; they
do not execute deployments or confer access to an environment.

## H2 Search contract, updated October 19

For an authorized supervisor, `GET /api/search?q=TEXT` returns matching notes.
Search ignores letter case and surrounding whitespace. A blank or omitted query
returns every note. Results have `id` and `text`; the JSON `count` is the number
returned. Use dummy records for checks. The sample note `N1` is “Spill near
gate.”

`GET /version` identifies the version and revision of the responding instance,
its environment and whether CSV export is enabled. This endpoint identifies that
instance only. Search does not send messages or write data. CSV export would
read shared free-text notes in a real deployment; its use requires review.

## H3 Work and decisions at the cutoff

- Issue #12, duplicate saves: closed October 15 by merged PR #31. Acceptance:
  retrying the same save must create only one note.
- Issue #18, consistent search: closed October 22 by PR #36. Acceptance links
  H2.
- Issue #20, CSV export: open; label `priority-high` from September 28. Draft PR
  #38 links it. October 21 update: “Blocked on privacy approval. Do not enable
  downloads until approved.” No approval record is supplied.
- Issue #23, offline capture: idea opened October 24; no assigned milestone,
  accepted scope or linked PR.
- Decision October 14: “Repair duplicate saves first, finish search next, hold
  export for privacy review.” Maintainer reaffirmed it October 24. It links the
  unavailable private board. A milestone due October 23 remains open and
  includes #18 and #20. Its date is a target, not a revised commitment.

## H4 Changes and checks

- PR #31 merged October 15, revision `b810`. Its observed repeated-save check
  recorded one note after retry. No case-insensitive search check is supplied.
- PR #33, dependencies, merged October 17, revision `b830`; no feature claim.
- PR #36, consistent search, opened October 9 and merged October 22 to `main`,
  revision `c930`. Earlier work start is unknown. Check record: lowercase query
  `spill` returned N1; empty query returned all records. Both passed on `c930`.
  The record contains no uppercase or padded-query case. Review says rollout
  follows deployment. The fixture represents this source revision.
- PR #37, search suggestions, closed October 23 without merge after a design
  discussion. It did not enter `main`.
- PR #38, export prototype, opened October 20 and remains draft/open. Prototype
  checks pass; it is blocked by H3 and remains outside `main`.

### H4a Trace one source change

This is the supplied search hunk (a block of changed lines in a diff) from PR
#36 in `src/server.py`, before at `b830` and after at `c930`. Lines beginning
`-` were removed; lines beginning `+` replaced them. The route and response line
stayed the same. The unchanged request comes from a client using the H2
endpoint.

```text
 elif url.path == "/api/search":
-    query = parse_qs(url.query, keep_blank_values=True).get("q", [""])[0]
-    found = [note for note in NOTES if query in note["text"]]
+    query = parse_qs(url.query, keep_blank_values=True).get("q", [""])[0].strip()
+    found = [note for note in NOTES if query in note["text"].lower()]
     self.reply(200, {"notes": found, "count": len(found)})
```

For reading this hunk: `parse_qs` extracts the query values; `.strip()` removes
surrounding whitespace; `.lower()` makes a string lowercase; `in` checks whether
one string occurs in another. H7's downloadable source is the after version.

The fixture has two dummy notes: `N1`, “Spill near gate.” and `N2`, “Light
repaired at berth two.” Choose one H2 request and follow its value through
**request → query → selected notes → response**. Predict the response before and
after this hunk. Explain the changed operation and an unchanged connection that
account for your prediction. Include which notes and count you expect; the
unchanged route and response shape still matter to the requesting client. Then
choose a different letter-case or whitespace input to probe the H2 claim. Keep
this reasoning with the hunk in your account. These are source-based
predictions; only the after version is runnable here. Do not report a
before-version execution or historical production observation that you did not
perform.

## H5 Versions, environments and availability

The fictional ship workflow builds a selected revision and records its
environment and activation result. A workflow definition alone establishes no
deployment happened. These are the supplied execution records:

- Release 0.8, October 17, tag `v0.8` at `b830`: duplicate-save repair and
  dependencies. Production activation succeeded October 18 at 10:00 UTC for
  pilot supervisors. A same-day pilot check observed one note after a retry.
- Release 0.9, October 23, tag `v0.9` at `c930`: consistent search; export is
  excluded. Staging activated `c930` October 23 with export disabled. Production
  activation failed October 24; the record explicitly says **0.8 / `b830`
  remains active**, export disabled. No later activation appears in the window
  or up to the snapshot. The local fixture runs 0.9 / `c930`, export disabled.
- Staging has a real mail integration and shared pilot data in this invented
  project. You have no permission or endpoint for using it. The lab authorizes
  only the local fixture and dummy data; do not attempt a staging test.

## H6 An agent's proposed account

This is an **authored fictional agent response**, not an actual investigation:

> The new search is available to pilot supervisors. The two passing search
> checks prove that it handles every query described by the contract.

Choose one important claim here to investigate. Compare it with the relevant
record yourself, and explain what narrower conclusion is justified. Your own
account may need a correction too. Use the source trace and local observation to
investigate search, while keeping production availability tied to H5.

## H7 Run the local fixture

Python 3.10 or newer is sufficient; there are no third-party packages to
install. Use a disposable folder outside private projects. Download or save
[server.py](pathname:///labs/track2-module6/server.py) there (right-click, “Save
link as…”) and inspect it before execution. No copy of the course or app
repository is needed. Follow your organization's tool policy; inspect it with an
agent if useful. New to terminals? See Module 4's
[“Never used a terminal?” box](04-run-and-investigate.md#one-question-one-environment-one-check),
or ask your agent to run each step and explain it.

Permitted actions are to read the fixture, start and stop your own server, and
send local GET requests to `/version` and `/api/search` with fictional inputs.
The exercise needs no save, export, staging or external-service operation.

The file serves dummy records in memory, binds only to `127.0.0.1`, makes no
outbound requests, writes no files, and accepts only read requests. It does not
use credentials. Export is disabled. It prints request paths to the terminal, so
keep your inputs fictional. Do not change the binding or connect live data.

In that disposable folder, start it in a terminal:

```sh
python3 server.py --port 0
```

It prints an operating-system-selected port, for example
`Harbor Log fixture: http://127.0.0.1:54321 (Ctrl+C to stop)`. Use your actual
printed port. An agent may help with the command and requests; it must return
the actual output and your choices must remain visible. If Python or command
execution is unavailable, ask for the source and relevant captured responses;
mark the runtime exercise unobserved until you can perform it.

Open `/version` at that address first. Expected setup result:

```text
{
  "version": "0.9",
  "revision": "c930",
  "environment": "local-fixture",
  "export_enabled": false
}
```

Read the source to locate dummy data, search handling and configuration. Choose
a query from H2 and state its expected result before sending it. Use a browser,
an agent's local request tool, or this optional request shape, replacing `PORT`
and the fictional query:

```sh
curl --include --get --data-urlencode 'q=your fictional query' 'http://127.0.0.1:PORT/api/search'
```

`curl` sends a web request from the terminal. `--include` prints the response
status as well as the body. `--get --data-urlencode 'q=…'` adds your query to
the address, safely encoding spaces and special characters.

Record the actual JSON and HTTP status, input, version, environment and time.
One query is not complete search coverage. If a check surprises you, choose one
small comparison that distinguishes a useful alternative explanation. Stop the
server with Ctrl+C when finished; closing a browser tab does not stop it.

## Bring the account back, then update it

Keep the H4a hunk and your before/after explanation, chosen input and
expectation, and actual output with the account. Explain what your finding
changes about the agent's claim and what you would still need to know. Your
observation is dated when you run the fixture; it is not an observation of
production on October 25. The supplied save-check record is historical evidence,
not a save operation you can reproduce with this search-only lab.

Ask the teacher for one later record and add a dated update explaining its
effect on your account. Keep the original cutoff intact. If you could not run
the fixture, return the source reasoning and proposed check as partial evidence;
label runtime operation unobserved. There is no need for a second report.

[Read an evolving project](06-read-evolving-project.md)
