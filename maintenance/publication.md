# Publication and content boundary

The owner approved a public `ericfeunekes/learn-to-code` repository and GitHub
Pages website on October 25, 2026 for general course material. Learner-private
material remains excluded. No account or optional app permissions are changed by
this project.

## Published content manifest

- `docs/for-ai.md`: the original AI reading guide. The maintained course
  overview supplies the single homepage; the earlier separate introduction is
  retired.
- `docs/course/OVERVIEW.md`, `CURRICULUM.md`, `PRACTICE.md` and `AI-TEACHER.md`:
  reviewed course outcomes, map and general practice/teaching context.
- `docs/course/SETUP.md` and `00-project-and-git.md`: current setup and Module 0
  drafts for human review.
- `docs/course/01-*.md` through `07-*.md`: the current seven module pages.
- `AGENTS.md`, `CLAUDE.md`, `app/` guidance and the two bundled teaching skills
  in `skills/`, with regular byte-equal Codex/Claude discovery copies.
- Website code, dependency lock, tests and contributor documentation.

The website, search index, raw Markdown and `llms.txt` derive from these pages.
Module 1 retains its detailed material. Modules 2–7 are short **Being built**
outlines; their detailed outcomes and examples require development and human
review. The owner approved release of this current version on October 25, 2026.
The October 26 approval includes repository-wide MIT licensing and public
distribution of the bundled teaching skills, superseding the earlier exclusion.
The ledger, teaching log, sessions, learner identities, personal details,
private source links, research archives, books and earlier course snapshots are
outside the public repository and its history.

## One maintained curriculum source

The content owner continues to maintain the current course in its established
Learning workspace. `docs/course/` contains generated publication snapshots, not
an independently editable course. Edit the maintained source, then run:

```sh
npm run content:refresh -- /path/to/maintained/course
npm run format
npm run check
```

The importer admits exactly thirteen named general files. It removes the private
research provenance section, rejects private references, adds website metadata,
generalizes personal author-review references, adjusts one heading level and
formats source-authored prompts as copyable text without changing their words.
It does not revise learning objectives. The two repository skills are maintained
in `skills/`; run `npm run skills:sync` after editing them.
`npm run check:skills` requires regular byte-equal discovery copies and shared
root guidance. The positive allowlist is not a substitute for reviewing new text
and the diff: check examples, links, rights and personal information on every
refresh.

## Release and recovery

The native [Pages workflow](../.github/workflows/pages.yml) validates pushes and
pull requests. With `PAGES_PUBLISH_ENABLED=true`, pushes to `main` deploy
through GitHub Actions; manual dispatch can redeploy `main`. Pages uses GitHub's
configured origin/base path. Inspect the workflow's deploy result and actual
site URL; then check the reader journey separately.

For a regression, revert the offending source commit and push the correction to
`main`. To pause future deploys, set `PAGES_PUBLISH_ENABLED=false`; this does
not unpublish the current site. Any unpublishing or audience change needs its
own authorization. Repository-owned code, documentation and bundled skills use
the root MIT license, as approved October 26. Preserve third-party rights,
copyright and license notices; dependencies and linked references retain their
own terms.

## Current cloud change boundary

The October 29 branch is a fresh implementation from public main, independent of
the offline Mac branch. It does not claim to recover that branch. Source hashes
and modification times for the thirteen admitted files are recorded in
`course-source.json`; private source identities and transfer details belong in
the separate review handoff. No learner ledger, log or research was imported.
The branch is local only. Push, deployment and merge need separate
authorization. Do not add hosted CI or self-hosted runners for this work;
existing workflow configuration is unchanged.
