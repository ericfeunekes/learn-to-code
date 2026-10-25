# Learn to Code

A simple Docusaurus course website for GitHub Pages. Seven modules help you
understand, question and improve software by directing AI on a useful project.

## Run locally

Use Node 24 LTS and npm 11, then:

```sh
npm ci
npm start
```

Open the address printed by Docusaurus. The default repository base path is
`/learn-to-code/`. To preview the production build:

```sh
npm run build
npm run serve
```

Run the complete checks after installing Chromium once:

```sh
npx playwright install chromium
npm run check
```

Python 3 is needed for the generated-site link check. CI installs the browser
and its system dependencies. The Playwright server starts and stops with the
tests; a manually started preview stops with Ctrl+C.

## Work on the site

- [Contributor guide](maintenance/README.md): architecture, content authoring,
  verification and dependency updates.
- [Publication and content boundary](maintenance/publication.md): admitted
  content, exclusions and the GitHub Pages release procedure.
- [AI instructions](AGENTS.md): entry point for repository work.

The website, local search, plain Markdown exports and `llms.txt` derive from
[`docs/`](docs/welcome.md). `docs/course/` contains reviewed generated snapshots
of the content owner's maintained course. Refresh those snapshots through the
[content workflow](maintenance/publication.md); do not edit them as a separate
guide. The original course and all private learner records remain in their
established home. Build output and local scratch files stay out of Git.
