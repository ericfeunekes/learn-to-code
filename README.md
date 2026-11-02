# Learn to Code

Learn to work with code, agents, and repository tools. Start with
[the two-track overview](docs/course/OVERVIEW.md) and shared
[Module 0 — GitHub for everyone](docs/course/00-project-and-git.md):
repositories, files, history, branches, PRs, issues, and releases. A new repo,
app idea, clone, and command memorization are not prerequisites.

## Choose how you want to work

- **[Build and improve software](docs/course/CURRICULUM.md#build-and-improve-software):**
  direct implementation in your own separate project repository. Use
  [project setup](docs/course/SETUP.md#setup-with-ai) when needed. Building
  Module 1 has detailed objectives; Module 2 is a detailed draft; 3–7 are
  outlines.
- **[Understand code and changes](docs/understand-code/index.md):** explain,
  navigate, run authorized QA, investigate, trace changes, and assess software
  without implementing its features. General models lead to small examples and
  then exploring an existing repository or broader project over time. Start with
  orientation even without a precise question, follow different interests and
  changes, and build a richer picture with each visit. No implementation
  repository is required.

These are two ways of working with software, not product-development or project
management certifications. Use short adaptive teaching and learn language or
framework detail when useful. Existing experience can support a shorter route.
Individual modules show any draft or outline status. The former companion URLs
are reference pointers into the second track, not a third prerequisite-free
path.

## Enterprise setup without a fork

Use approved AI tools, sources and storage. An optional course reference copy
can be cloned with `upstream` for course updates and `origin` for saving to an
approved internal host or local Git repository. Follow the
[no-fork setup and update instructions](docs/course/SETUP.md#enterprise-use-without-forking).
Your application or workplace repository remains separate and follows its own
team process. Neither track requires a personal GitHub fork or installing this
course website.

## Apply independently and return evidence

Use the selected module's learning outcomes and evidence criteria. An agent can
help search, explain, write a local check, or implement in a builder's project.
Your expectation, decisions, corrections and interpretation show your judgment.
A polished agent explanation or passing checks alone do not establish learning.

[Return relevant excerpts and results](docs/course/PRACTICE.md#bring-work-back-for-review)
for teacher review. A chat/private repository link may be inaccessible; safe
supplied turns, files/diffs, versions, environment and command/result records
work too. Packet reasoning and actual runtime evidence are different. Keep
access gaps and partial evidence visible.

Before execution, understand the target, dependencies, configuration, data and
possible effects. Local code can contact shared services; staging can send
messages or incur costs. Follow authorized limits. Reading a README is not
permission to execute it. Use disposable fictional fixtures for practice.

The course repository holds teacher material. A separate optional reference
checkout bundles teaching skills for Codex and Claude Code: `skills/` is
canonical, regular mirrors are in `.agents/skills/` and `.claude/skills/`, and
`AGENTS.md`/`CLAUDE.md` share guidance. Check actual instruction use; file
presence alone does not prove it. Learning records stay in an established
private home, or ignored untracked `.learning/` in a reference checkout. Ignore
rules do not extend to other repositories and local records are not
automatically backed up. Never commit learner transcripts, secrets or personal
information.

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
