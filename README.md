# Learn to Code

Learn to understand, question, and improve software by directing AI on a useful
project. [The overview](docs/course/OVERVIEW.md) explains the full destination
and each core topic's role. Module 1 has detailed outcomes; Modules 2–7 are
being built. Setup and Module 0 remain drafts for human review.

## Set up your own project

Use [the setup guide](docs/course/SETUP.md) and its copyable agent prompt to
create or resume **your own GitHub project repository**, in its own local
folder. You do not need a course fork, an app idea, a full Git lesson, or a
local website installation. Existing projects are welcome.

After setup, choose:

- [Define a project](docs/course/OVERVIEW.md#choose-and-outline-your-project).
- [Learn Git/GitHub](docs/course/00-project-and-git.md) using your project.
- Continue existing work and choose a useful next learning step with your AI.

An explicit request already selects an activity. The AI should not launch an
unchosen lesson or app build.

## Learn here, build in your project, return for review

The course site and repository hold teacher material. Explore concepts with the
teaching AI, then work independently with your implementation agent in your
project repository. Use that project's instructions, dependencies, and checks.
Course website Actions and course files belong to course maintenance.

[Bring relevant work back for review](docs/course/PRACTICE.md#bring-work-back-for-review):
your question or outcome, implementation chat link or excerpt, changed code or
commit, and useful test or observed results. A teacher cannot assume access to
another chat or private repository; supplied excerpts and files work too.
Existing work and partial evidence can support a useful review. Agent-written
code and passing tests alone do not establish your understanding.

Give the teaching AI the relevant page, plain Markdown, or supplied text. An
optional **separate course reference checkout** bundles teaching skills for
Codex and Claude Code. `skills/` is canonical and regular discovery copies live
in `.agents/skills/` and `.claude/skills/`; `AGENTS.md` and `CLAUDE.md` share
guidance. Check actual instruction use rather than assuming it from file
presence. There is no need to copy teacher skills or website dependencies into
the project.

Keep learning records in your established private home. In a local teaching
checkout, ignored `.learning/` is an option after checking files are untracked.
That rule does not apply to other repositories, and these local records are not
backed up by a push. Keep private transcripts, personal information, and secrets
out of commits and shared material.

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
