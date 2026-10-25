# Contributor guide

The [root README](../README.md) is the project entry point. This area contains
website operation and authoring guidance. Reading content belongs in `docs/`;
audience decisions and release instructions belong in
[the publication plan](publication.md).

## Design and architecture

Docusaurus supplies the sidebar, table of contents, previous/next links,
responsive menu, syntax highlighting and light/dark appearance. Custom CSS adds
a warm background, green accents and readable system typography. There are no
external fonts, analytics, accounts, database or runtime service. Wide course
tables use a labelled, keyboard-focusable horizontal scroll region.

`sidebars.js` orders the pages. `docusaurus.config.js` owns site configuration.
The small search page downloads a generated text index and filters it in the
browser. The generator in `scripts/` creates this index, raw Markdown and
`llms.txt` from `docs/`. Exports are disposable build output; never edit them.
`llms.txt` is a reading convenience, not a promise that every AI tool supports
it.

Exports are generated into ignored `.generated/` before `npm start` and
`npm run build`. Restart development after editing reading content to refresh
search and text exports. The production preview always uses the built exports.

## Add admitted content

First follow the audience and source rules in
[the publication plan](publication.md). Use ordinary Markdown. Every page needs
a title, description and stable slug:

```yaml
---
title: Example concept
description: What the reader will understand or be able to do.
slug: /modules/example-concept
---
```

Use descriptive filenames. Refresh module pages in `docs/course/` through the
documented importer. Add each module to the ordered sidebar and link it from the
course map. Keep a slug when a title changes so shared URLs survive. Use
headings in order, meaningful link text, fenced code with a language, and alt
text for informative images. Show the expected result with runnable code
examples. Course authors decide objectives, prerequisites, pacing and exercises.

Use relative `.md` links between source pages. For generated text assets, use
Docusaurus `pathname:///` links; the export generator converts that directive to
the configured site prefix for plain-text readers. Markdown exports keep the
same directory structure. Keep private links, absolute machine paths and learner
progress out of public reading material. Custom MDX is intentionally disabled:
plain Markdown stays usable by browsers and text readers from one source.

## Verify a change

Run `npm run check`. It formats-checks maintained files, builds Docusaurus with
broken source links treated as errors, checks every generated HTML link,
fragment and local asset, then serves the production output for Chromium tests.
The tests cover both desktop and phone sizes, navigation, search results and
empty states, theme switching, keyboard access, export parity and accessibility.

After layout changes, inspect desktop and phone screenshots, tab through the
navigation and search, and check the menu and dark appearance. Automated
accessibility checks catch some problems; they do not replace that review.
Screenshots and failure traces go in ignored `test-results/`.

For another Pages mount, set both build and test environment:

```sh
BASE_URL=/another-repo/ npm run build
BASE_URL=/another-repo/ npm run check:links
BASE_URL=/another-repo/ npm test
```

`SITE_URL` is the origin without a path; `BASE_URL` starts and ends with `/`. CI
uses GitHub's Pages metadata for deployment. Pull requests build and test at
their actual repository prefix. See the publication document for the release
switch and recovery path.

## Dependencies and updates

Direct versions are pinned in `package.json`; `package-lock.json` locks the
complete dependency graph. Use `npm ci` for installs and commit intentional lock
changes. Do not run automatic major upgrades as routine maintenance.

The chosen Docusaurus 3.10.2 release supports Node 20 or newer and React 18/19.
Use Node 24 LTS in CI and `.nvmrc`; the local check also runs on Node 26. Check
current package metadata and official documentation before upgrades:

- [Docusaurus installation](https://docusaurus.io/docs/installation)
- [Docusaurus deployment and base URL](https://docusaurus.io/docs/deployment)
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Playwright browser installation](https://playwright.dev/docs/browsers)
- [Codex repository instructions](https://developers.openai.com/codex/guides/agents-md)

## Acceptance criteria

- A clean `npm ci` reproduces the production build.
- Every generated reading page, local link, fragment and asset resolves.
- The site works at `/`, `/learn-to-code/` and a renamed repository prefix.
- Keyboard users can skip to the content and search; the phone menu opens and
  navigates without horizontal overflow.
- Light and dark themes remain readable; the checked pages have no serious or
  critical automated accessibility violations.
- Search finds admitted text and reports empty results; each published page has
  a generated Markdown file listed in `llms.txt`.
- No private curriculum, learner record or third-party source is admitted
  without clearance. Review generated course refreshes before public pushes.
