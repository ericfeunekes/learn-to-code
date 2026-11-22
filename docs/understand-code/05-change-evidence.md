---
title: 'Module 5 optional practice — Note Finder change evidence'
description:
  A fictional search-limit change for comparing caller impact and judging the
  limits of supplied observations.
slug: /understand-code/follow-feature-or-change/evidence
---

# Note Finder change evidence

Use with
[Module 5 — Understand a change and its evidence](05-evidence-of-correctness.md).
This optional alternative is useful when your question concerns changed settings
and compatibility. Choose one caller; there is no requirement to study all three
interfaces. Start with the diff in S5 and use the other excerpts as needed.
Everything here is invented training material: names, revision labels, files,
diff, records and observations. These are supplied excerpts, not an executable
repository or actual QA results. No server, accounts, installation or live
requests are needed. Section IDs stand in for evidence links; fictional paths
are evidence labels, not files to locate on your computer.

## S1 Scope, revisions and question

Question: **How would this proposed search-limit change affect someone asking
for 80 notes, and what else needs clarification?**

The `note-finder` repository has base revision `n100` and proposed head `n101`.
These are fictional labels, not usable Git hashes. All excerpts below are
identical at both revisions unless S5 shows a difference. The change is
proposed; no merge, production deployment or user availability is established.

At the initial snapshot, October 30, 2026, 10:00 UTC, an authorized staging
inspection identifies server revision **`n100`** with its checked-in settings,
80 synthetic notes in its data store, and no real users or external messages.
The supplied record authorizes only the listed search checks. It grants no
permission for other requests or environments. Production configuration,
external clients and the data-store implementation aren't available.

## S2 Shared search operation

`server/search.js`, function `findNotes`:

```text
import { DEFAULT_LIMIT, MAX_LIMIT } from './limits.js';
import { store } from './store-client.js';

export async function findNotes(requestedLimit) {
  const limit =
    requestedLimit === undefined ? DEFAULT_LIMIT : Number(requestedLimit);
  if (!Number.isInteger(limit) || limit < 1 || limit > MAX_LIMIT) {
    throw new Error('LIMIT_OUT_OF_RANGE');
  }
  return store.listNotes({ limit });
}
```

For this trace: `undefined` means the input was omitted, `Number` converts text
such as `"80"` to a number, and `throw` stops this path with an error. A default
is used only when the input is omitted. You can ask an agent to explain the
condition without learning the rest of JavaScript first.

`server/store-client.js` exports `store`. Its interface says
`listNotes({limit})` returns up to that many matching notes. The underlying data
store is outside the packet. It isn't possible to inspect how it queries, how
much a query costs, or what its performance would be with real data. No other
side effects are shown by these excerpts; that isn't a guarantee about missing
code.

## S3 API and browser callers

`server/routes.js`, function `getNotes`, registered as `GET /notes`:

```text
import { findNotes } from './search.js';

export async function getNotes(req, res) {
  try {
    const rows = await findNotes(req.query.limit);
    res.status(200).json({ notes: rows });
  } catch (error) {
    if (error.message === 'LIMIT_OUT_OF_RANGE') {
      res.status(400).json({ error: 'Choose a supported limit' });
      return;
    }
    throw error;
  }
}
```

`web/Search.jsx`, relevant React handler and choices:

```text
const limitChoices = [10, 20, 80];

async function loadNotes(limit) {
  const response = await fetch(`/notes?limit=${limit}`);
  if (!response.ok) {
    setMessage('Search failed');
    return;
  }
  const body = await response.json();
  setNotes(body.notes);
}
```

The supplied UI wiring renders those choices and calls `loadNotes` with the
selected number. `setMessage` displays a message; `setNotes` replaces displayed
rows. The web server forwards `/notes` to this API in the fictional setup. The
excerpts don't show clearing previously displayed rows on error.

## S4 MCP caller and declared inputs

MCP (Model Context Protocol) exposes operations as tools with declared inputs
that AI tools can call. In this repo, `mcp/tools.js` registers tool `find_notes`
with an input schema whose optional integer field `limit` has minimum 1 and
maximum 100. The registered handler is:

```text
import { findNotes } from '../server/search.js';

export async function handleFindNotes(args) {
  return findNotes(args.limit);
}
```

No MCP host execution record is supplied. The schema permits 80, and the handler
passes it to the same operation as the API. An exception's presentation to the
MCP user depends on host/error handling omitted from this packet. Don't invent
the host's message from the browser's message.

## S5 Proposed diff and stated expectations

Complete changed-file list between `n100` and `n101`: `server/limits.js` only.
The complete diff is:

```text
--- a/server/limits.js
+++ b/server/limits.js
@@ -1,2 +1,2 @@
-export const DEFAULT_LIMIT = 20;
-export const MAX_LIMIT = 100;
+export const DEFAULT_LIMIT = 50;
+export const MAX_LIMIT = 50;
```

`docs/api.md`, unchanged at both revisions: “Search accepts integer limits from
1 to 100. Omitting the limit returns up to 20 notes.” This is the supplied
documented expectation; there is no approved replacement contract in the packet.

PR description: “Reduce large queries to protect the shared store; show more
notes by default.” There are no measurements or approved compatibility decision
attached. This describes intent, not proof that load improves or callers agree.
Increasing a default and lowering a maximum can affect different requests.

## S6 Supplied observations

These are fictional recorded results supplied for interpretation. The `n101`
checks used a separate local copy with the same 80 synthetic notes and the
checked-in settings. No learner or course author actually executed them.

| Context                    | Action                              | Recorded result                               |
| -------------------------- | ----------------------------------- | --------------------------------------------- |
| Initial staging, `n100`    | API search, `limit=80`              | 200; 80 notes                                 |
| Local copy, `n101`         | API search, `limit=80`              | 400; `Choose a supported limit`               |
| Local copy, `n101`         | API search, no limit                | 200; 50 notes                                 |
| Local copy, `n100`         | API search, no limit                | 200; 20 notes                                 |
| Local copy, `n101` browser | Choose 80 after a successful search | `Search failed`; previous notes still visible |

No MCP host, production, performance or real-user observation is supplied. One
successful request establishes that particular result in its context; it doesn't
establish all behavior or whether the change meets its intent.

## S7 Search scope and missing context

An agent searched tracked source files at `n101` for the exact symbol
`findNotes` and inspected its imports. It found the API route and MCP handler
above. A search for `/notes` found the browser handler above. The searches
omitted ignored files, generated clients and all other repositories.

An integration note says an external reporting client also uses `GET /notes`.
Its code, input choices, configuration and release process are unavailable.
There may be other clients. The packet doesn't establish whether the reporter
asks for 80, omits the limit, or uses another accepted value.

## S8 Agent summary to challenge

> Only a configuration file changes, so callers are unaffected. The default
> increases, meaning requests for 80 will return 50. Staging successfully
> returned 80, proving the proposed revision is compatible. The MCP schema is
> unchanged, so that tool is safe too. These changes definitely reduce load.

Pick two claims and write your own corrections with section IDs. Then explain
one remaining question without prescribing the implementation.

## S9 A later record

After your initial account, receive a new fictional staging record dated October
30, 2026, 13:00 UTC: server `n101` is now active with its checked-in settings.
An authorized search check with 80 synthetic notes and `limit=80` returned 400.
The browser and MCP host versions weren't recorded. No production record is
provided.

Update the current staging account. Preserve the 10:00 historical observation.
Which version discrepancy is resolved, and which caller, compatibility and
production questions remain?

## Use the observations as evidence

Before reading S6, predict the result of asking for 80 and of omitting the limit
at each revision. Explain why a caller whose code is unchanged can be affected.
Then choose one supplied observation and say exactly what it establishes. These
are recorded examples, not test source: no automated assertions are supplied.
You cannot conclude that a regression suite would catch the change.

If someone offers a check that asserts only status 200 for `limit=20`, would it
catch the changed response to 80 or the new default? State the comparison you
would need for the particular effect you chose. The documented contract in S5
supplies an expectation; the PR intent does not establish approval to replace
it. An outcome can match the new implementation while conflicting with the
existing promise.

For a short independent account, connect one before/after effect to an unchanged
caller, judge one piece of evidence and name the next useful question. Missing
external-client evidence should narrow your claim rather than stop the whole
exercise. S9 is an optional update after that account, not another required
report. These prompts and fictional observations are not learner results.
