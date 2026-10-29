# Learn to Code

Learn to understand, question and improve software by directing AI. The course
includes draft setup and Git/GitHub guidance, detailed Module 1 outcomes and six
future outlines.

## Set up your learning workspace

Fork or reuse [this repository](https://github.com/ericfeunekes/learn-to-code),
clone your fork, then open that folder in Codex or Claude Code. See the
[setup guide](docs/course/SETUP.md) for the full instructions and a copyable
pre-clone AI prompt. You do not need an app idea, a Git lesson or a local
website installation to finish setup.

Once it is open, ask: “I'm set up. What's next?” Choose one:

- [Define a project](docs/course/OVERVIEW.md#choose-and-outline-your-project).
- [Learn Git/GitHub](docs/course/00-project-and-git.md) using this repository.
- Continue existing work and choose a useful next learning step with your AI.

The AI should wait for your choice. Setup and Module 0 remain drafts for human
review; they are not agreed learning-completion gates.

Build applications in [`app/`](app/README.md). Bundled learning skills use
outcomes and evidence flexibly. `AGENTS.md` and `CLAUDE.md` share guidance;
`skills/` is canonical and regular discovery copies live in `.agents/skills/`
and `.claude/skills/`. Their presence does not prove a client loaded them. After
reopening this folder, ask a natural question and check the actual response.

Private progress and learning logs belong in the ignored root `.learning/`
directory, or an established private record home. For example, keep current
status in `.learning/progress.md` and useful resumption notes in
`.learning/log.md`. Keep partial progress, evidence, AI assistance and
uncertainty visible. These files are local and not backed up by a push; ignore
rules do not untrack an already committed file. Never commit personal
information or secrets. Successful AI output and passing tests alone do not
prove learning.

## Run the course website locally

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
[`docs/`](docs/course/OVERVIEW.md). `docs/course/` contains reviewed generated
snapshots of the content owner's maintained course. Refresh those snapshots
through the [content workflow](maintenance/publication.md); do not edit them as
a separate guide. The original course and all private learner records remain in
their established home. Build output and local scratch files stay out of Git.

## License

Repository code, documentation and bundled teaching skills are available under
[MIT](LICENSE), approved October 26, 2026. Third-party code, dependencies and
linked material retain their own copyrights, licenses and notices. Links and
citations do not grant rights to republish their targets.
