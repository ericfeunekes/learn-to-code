# Learn to Code

Learn to understand, question and improve software by directing AI. The course
has two tracks that share Module 0, Directing an agent:

- **Build an app:** for business users who direct AI to build a useful work app.
  Plan your app, then Modules 1 to 9, ending with sharing and maintaining the
  app and a capstone.
- **Understand code and changes:** for product managers and risk and control
  reviewers who need to follow a team's software, work with its engineers, run
  their own QA and contribute. Seven modules in `docs/understand-code/`.

## Set up your learning workspace

Fork or reuse [this repository](https://github.com/ericfeunekes/learn-to-code),
clone your fork, then open that folder in Codex or Claude Code. See the
[setup guide](docs/course/SETUP.md) for the full instructions and a copyable
pre-clone AI prompt. At work, check that the AI tool is approved before you
install it ([Before you start](docs/course/SETUP.md#before-you-start)). You do
not need an app idea, a Git lesson or a local website installation to finish
setup.

Once it is open, ask: “I'm set up. What's next?” Choose one:

- [Define a project](docs/course/PLAN.md) (Plan your app).
- [Learn Git/GitHub](docs/course/00-project-and-git.md) using this repository,
  as the start of Module 0, Directing an agent.
- Continue existing work and choose a useful next learning step with your AI.

On the Understand track, start with the
[track guide](docs/understand-code/index.md) instead. The AI should wait for
your choice; setup isn't a gate (see
[where to start](docs/course/CURRICULUM.md#where-to-start)).

Agents in this workspace teach and review; they don't build your project. Build
in [`app/`](app/README.md) or your own project folder, in a separate session
with your build agent, then come back for a review. The
[practice loop](docs/course/PRACTICE.md#the-practice-loop) lists the steps.
Bundled learning skills handle teaching and review. `AGENTS.md` and `CLAUDE.md`
share guidance; `skills/` is canonical and regular discovery copies live in
`.agents/skills/` and `.claude/skills/`. Their presence does not prove a client
loaded them. After reopening this folder, ask a natural question and check the
actual response.

Your learning log lives in the ignored root `.learning/` folder: `PROJECT.md`,
`PROGRESS.md` and `LOG.md`, started from `templates/learning/`. Teach and review
agents read it first and update it last, so a different agent can pick up each
session. It isn't pushed with your fork. To keep it across machines, make
`.learning/` its own private Git repository. Never commit personal information
or secrets. Successful AI output and passing tests alone don't prove learning.

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
