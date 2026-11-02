---
title: Module 2 navigation evidence
description:
  Fictional project packet for finding docs, code and work records, explaining
  current work and checking an agent's claim.
slug: /understand-code/navigation-evidence
---

# Module 2 navigation evidence

Use with [Find your way around a project](02-find-your-way.md). **Pocket
Library** is an invented project. This packet contains fictional files and work
records as of February 18 in its story, at branch `main`, revision label
`navigation-snapshot-2`. The label is not a real Git commit. No real company,
team, service, learner or execution is represented.

These selected excerpts are text to inspect, not a runnable app. No install,
credentials, live calls or online repository search is needed. Other code,
private conversations, provider implementation and deployment records are
unavailable. Dates below belong to the fictional project.

Try this question before reading the teacher notes: **What does Pocket Library
do, where would you look to understand book search, and how far has the request
for author search got?** You can start with the docs and work records, then
check one important claim. You do not need to trace the whole behavior.

## Project home and file leads

`README.md`, January 4:

```text
Pocket Library helps readers find books by title. This repository contains our
browser app; src/search.js handles book search. See docs/architecture.md.
For local setup see docs/local.md.
```

An **API** is an interface one program uses to ask another for information or an
action. In this project, the browser uses one to ask for books.

Selected tree at `navigation-snapshot-2`:

```text
README.md
package.json
apps/
  web/src/SearchPanel.jsx
  web/src/search-client.js
  api/search.js
packages/
  books/provider-client.js
docs/
  architecture.md
  local.md
config/example.env
tests/api/search.spec.js
dist/search.js
```

`docs/architecture.md`, February 10:

```text
The repository now holds the browser app and an HTTP API. The browser asks the
API for books; the API uses packages/books/provider-client.js to query a
separately operated book catalogue. The catalogue's implementation is elsewhere.
The old src/ folder was replaced by apps/ and packages/.
dist/ contains generated output from an earlier build; use maintained source.
```

`package.json`, selected excerpt:

```json
{
  "private": true,
  "workspaces": ["apps/*", "packages/*"]
}
```

The manifest identifies package organization. It does not establish a running
version. `docs/local.md` exists in the tree but its contents are not supplied.

Selected search results for `search`:

```text
README.md: src/search.js handles book search.
apps/web/src/SearchPanel.jsx: <button>Search books</button>
apps/web/src/search-client.js: fetch('/api/books/search?q=' ...)
apps/api/search.js: export async function searchRoute(request, response)
tests/api/search.spec.js: test('search returns titles', ...)
dist/search.js: // GENERATED from an older source tree; do not edit
```

Search results give you leads; open a relevant source before describing its
role. The test's contents and results are not provided. A test name alone does
not establish behavior or learner understanding.

## Current source excerpts

All excerpts here belong to the selected `main` snapshot. Surrounding code and
error handling are omitted.

`apps/web/src/SearchPanel.jsx`:

```jsx
import { findBooks } from './search-client.js';

async function onSearch(query) {
  const books = await findBooks(query);
  setResults(books);
}
// Other rendering omitted.
<button>Search books</button>;
```

`apps/web/src/search-client.js`:

```js
export async function findBooks(query) {
  const response = await fetch(
    '/api/books/search?q=' + encodeURIComponent(query),
  );
  return response.json();
}
```

`apps/api/search.js`:

```js
import { lookupBooks } from '../../packages/books/provider-client.js';

export async function searchRoute(request, response) {
  const books = await lookupBooks(request.query.q);
  response.json(books);
}
```

`packages/books/provider-client.js`:

```js
export const SEARCH_FIELDS = ['title', 'author'];

export async function lookupBooks(query) {
  const url = new URL('/books', process.env.BOOKS_PROVIDER_URL);
  url.searchParams.set('q', query);
  url.searchParams.set('fields', SEARCH_FIELDS.join(','));
  const response = await fetch(url);
  return response.json();
}
```

For orientation, `import` makes another file's named code available; `fetch`
makes a request. Here the provider client sends a query and a list of fields.
You can ask for an explanation of that excerpt without following every call. The
provider's actual matching behavior is outside the packet.

`config/example.env`:

```text
# Example only; this reserved address is not a live service.
BOOKS_PROVIDER_URL=https://books.example.invalid
```

This names a setting expected by the source. It does not reveal the address or
version used by a running app.

## Work records

These records are also fictional. Their titles identify them within this packet;
there are no real GitHub links to open.

### Issue: Find books by author

Opened February 14; still open at the snapshot date:

```text
Request: searching an author's name should find their books, alongside title
search. Readers also need a clear message when the catalogue is unavailable.
Related PR: Match title or author.
```

### Pull request: Match title or author

Opened February 15; merged into `main` February 17:

```text
Adds author to the fields sent by the provider client. Previously it sent only
title. No browser layout change. This addresses the author-search part of
“Find books by author”; catalogue-unavailable messaging remains separate work.
Target: a future release after v0.4. No release date is recorded here.
Changed file: packages/books/provider-client.js
```

This is a statement of the change and scope, with a recorded merge. The current
source excerpt is available to check one part of it. No review discussion, check
results or observed behavior is supplied.

### Release: v0.4

Published February 12; latest release supplied in this packet:

```text
Readers can search by book title in the browser.
The HTTP API is also included.
```

The supplied release predates the author-search merge. There is no release
record containing that change and no deployment or rollout information. Missing
records do not prove that the change is absent everywhere; they limit what you
can establish from this packet.

## An agent's unverified account

```text
Pocket Library is a browser-only app, with search in src/search.js.
The author-search issue is open, so no implementation has been merged.
The merged PR completed the whole issue, including unavailable messages.
The current provider client asks for both title and author fields.
Author search is now available to every reader because the PR merged.
Use dist/search.js as the maintained source because it contains search code.
```

Choose one consequential claim to check. Identify the file or record you
inspected and explain whether to accept, narrow or correct it. The account
contains a supported claim as well as errors: challenge the evidence, not merely
the agent's confidence. Revise your short project account and ask one next
question that would reduce an important uncertainty.

## Teacher notes

Let the learner choose relevant sources and explain a claim before offering a
worked answer. For a small start, use only the README, architecture note and
work records. The provider excerpt is a short possible source check; a complete
browser-to-provider trace is unnecessary. If choosing locations is the hard
part, model one search result and let the learner choose the next.

A map might include the README for purpose, architecture for the moved paths and
API, the provider client for requested fields, and the issue, PR and release for
the work account. Another selection can work if its roles are supported. Opening
the architecture note explains why the old README path and generated output are
poor guides to maintained implementation.

The provider excerpt supports the claim about fields sent by the client. It does
not prove that a live provider honors them or that readers have that code. The
open issue bundles two requests; its status alone does not negate a merged
partial change. The PR explicitly leaves unavailable messaging outside its
scope. A useful next question could ask which version is deployed to the
relevant readers, or how the provider interprets the fields. Let the learner
explain which uncertainty their question would resolve.

### Simulated learner response

The following is an author-written illustration, not evidence of a person
learning or tools being run:

> Pocket Library helps readers find books. The architecture note says this repo
> contains a browser app and an API, updating the older README. I'd start with
> that note and the search panel for orientation, then the provider client for
> search fields. The author-search issue links to a PR merged into main on
> February 17, but the PR leaves unavailable messaging for separate work. I
> checked the agent's “both fields” claim against SEARCH_FIELDS: it names title
> and author. That supports what this source asks for. The release supplied is
> older than the merge, and I have no deployed-version evidence. Which version
> are readers actually using, and does it include this change?

This illustrates source selection, a bounded work account and one checked claim.
A useful follow-up is: “If you wanted to understand how a search request uses
those fields, where would you look next?” The learner need only choose and
explain a starting point; Module 3 develops the trace.

If the learner only finds the source files, credit that navigation and ask them
to connect one work record. If they can explain the work but assume merged means
available, ask what the supplied release and missing runtime evidence establish.
If they repeat the illustration or agent account, invite a different claim to
check. No packet answer establishes real-project transfer, correctness of the
software or independent human learning.
