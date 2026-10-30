---
title: Module 2 navigation evidence
description:
  Fictional static repository packet for choosing relevant files, checking
  connections and challenging an unsupported agent map.
slug: /understand-code/navigation-evidence
---

# Module 2 navigation evidence

Use with [Find your way through a codebase](02-find-your-way.md). This is an
invented repository snapshot called **Pocket Library**, revision label
`navigation-snapshot-1`, branch `main`. It is not an actual Git commit, company
or service. All paths and excerpts below are fictional training evidence. They
are text to inspect, not a runnable application; no install, server, credentials
or live calls are needed. Do not search for this repository online.

The packet provides selected files and search results, not a complete checkout.
Omitted code cannot be inferred from it. References such as “P4,
`apps/api/search.js`, `searchRoute`” identify inspectable evidence in this
snapshot. Deployed versions, actual environment values and the external book
provider's source are unavailable.

Try one question before consulting the teacher's interpretation: **Where would
you look to understand book search, and what could these files tell you?**

## P1 Repository home and tree

`README.md`, dated January 4 in the fictional project:

```text
Pocket Library lets readers find books by title. This repository contains our
browser app; src/search.js handles book search. See docs/architecture.md.
For local setup see docs/local.md.
```

The tree at `navigation-snapshot-1`:

```text
README.md
package.json
apps/
  web/src/SearchPanel.jsx
  web/src/search-client.js
  api/routes.js
  api/search.js
  mcp/server.js
packages/
  books/provider-client.js
tests/
  api/search.spec.js
docs/
  architecture.md
  local.md
config/example.env
dist/search.js
```

The listed tree has no `src/search.js`. The browser UI, API and MCP program are
different ways into this software. You will inspect their content below rather
than infer their responsibilities solely from their names.

## P2 Current architecture and manifest

`docs/architecture.md`, dated February 10 in the fictional project:

```text
The repository now holds three programs: browser UI, HTTP API and MCP server.
The browser calls the HTTP API. The API and MCP server each use the books
provider client. The provider itself is a separately operated service; its
implementation is not in this repo. dist/ is generated output from an earlier
build and should not be used to locate maintained implementation.
```

`package.json`, relevant excerpt:

```text
{
  "private": true,
  "workspaces": ["apps/*", "packages/*"],
  "scripts": { "test": "node --test tests/api/search.spec.js" }
}
```

This excerpt identifies package organization and a declared test command. The
packet includes no run results or complete runnable files. `docs/local.md`
exists in the tree, but its contents were not supplied.

## P3 Search leads and the browser files

An exact text search for `search` returned these selected matches. Results for
other terms and files are not supplied:

```text
README.md: src/search.js handles book search.
apps/web/src/search-client.js: fetch('/api/books/search?q=' ...)
apps/api/routes.js: router.get('/books/search', searchRoute)
apps/mcp/server.js: server.registerTool('search_books', ...)
tests/api/search.spec.js: test('search returns titles', ...)
dist/search.js: // GENERATED from an older source tree; do not edit
```

`apps/web/src/SearchPanel.jsx`, relevant excerpts:

```text
import { findBooks } from './search-client.js';
// Other rendering details omitted.
async function onSearch(query) {
  const books = await findBooks(query);
  setResults(books);
}
```

`apps/web/src/search-client.js`, relevant excerpt:

```text
export async function findBooks(query) {
  const response = await fetch(
    '/api/books/search?q=' + encodeURIComponent(query),
  );
  return response.json();
}
```

The excerpts show a call and a request path; request failure handling and the
surrounding UI are omitted. `await` waits for an operation's result here;
`response.json()` reads a JSON response. You do not need to learn the whole
JavaScript language to identify that connection.

## P4 API, MCP and provider excerpts

`apps/api/routes.js`, relevant excerpts:

```text
import { searchRoute } from './search.js';
// This router is mounted at /api by code not included in the packet.
router.get('/books/search', searchRoute);
```

`apps/api/search.js`, relevant excerpts:

```text
import { lookupBooks } from '../../packages/books/provider-client.js';
export async function searchRoute(request, response) {
  const books = await lookupBooks(request.query.q);
  response.json(books);
}
```

`apps/mcp/server.js`, relevant excerpts:

```text
import { lookupBooks } from '../../packages/books/provider-client.js';
server.registerTool(
  'search_books',
  { inputSchema: { query: z.string() } },
  async ({ query }) => asToolResult(await lookupBooks(query)),
);
```

`registerTool` names a tool and connects its input description to a handler. The
excerpt does not include the server's startup, authentication, complete schema
library setup or `asToolResult` implementation.

`packages/books/provider-client.js`, relevant excerpts:

```text
export async function lookupBooks(query) {
  const url = new URL('/books', process.env.BOOKS_PROVIDER_URL);
  url.searchParams.set('q', query);
  const response = await fetch(url);
  return response.json();
}
```

The API and MCP excerpts import the same function. Its file makes a request
using a configured address. The provider's internals are outside the packet.

## P5 Example configuration and a test

`config/example.env`:

```text
# Example only. This reserved example address is not a live service.
BOOKS_PROVIDER_URL=https://books.example.invalid
```

`tests/api/search.spec.js`, relevant excerpts:

```text
test('search returns titles', async () => {
  const provider = fakeProvider([{ title: 'A Small Atlas' }]);
  const api = createTestApi({ provider });
  const result = await api.get('/api/books/search?q=atlas');
  assert.equal(result.body[0].title, 'A Small Atlas');
});
```

The surrounding test helpers are omitted. `fakeProvider` supplies test data in
place of the external provider. There is no test output, deployment record or
real environment configuration in this packet.

## P6 An agent's unverified map

```text
I found the whole system. Search is implemented in src/search.js, as the README
confirms. dist/search.js is the source to edit because it contains search code.
The MCP tool calls the API route, so checking the HTTP route covers both paths.
BOOKS_PROVIDER_URL proves the app uses books.example.invalid in production.
The search test means search works for users. No further evidence is needed.
```

Choose two claims, inspect their evidence and write your own corrections. Keep
the narrower statements you can actually support. You are reviewing the map, not
fixing code or running a test. Bring your reasoning to the teacher before asking
for a worked answer.
