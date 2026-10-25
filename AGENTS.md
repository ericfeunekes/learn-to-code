# Learn to Code

This repository owns a static documentation website and its delivery tooling.
The course author owns curriculum decisions. Read [README.md](README.md) for
local commands and [maintenance/README.md](maintenance/README.md) when changing
content, implementation or checks.

Success means a fresh install builds a site whose links and assets resolve at
the repository base path, whose navigation and search work on desktop and
mobile, and whose Markdown exports match the published source.

Edit site guides in `docs/`. Treat `docs/course/` as generated snapshots: edit
the maintained course and use the documented refresh command. Do not import
private course files, learner records, teaching logs, source books or personal
details by implication. Read the [publication plan](maintenance/publication.md)
before any import or remote write. General course publication is approved;
learner-private material and changes to its maintained home remain outside this
authorization.

Run `npm run check` after relevant changes. Browser tests exercise the
production build. When changing base paths, also build and test with
`BASE_URL=/` and with a different repository prefix. Keep scratch work in
ignored `.scratch/`.
