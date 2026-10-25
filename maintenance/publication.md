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
- `docs/course/01-*.md` through `07-*.md`: the current seven module pages.
- Website code, dependency lock, tests and contributor documentation.

The website, search index, raw Markdown and `llms.txt` derive from these pages.
Module 1 retains its detailed material. Modules 2–7 are short **Being built**
outlines; their detailed outcomes and examples require development and human
review. The owner approved release of this current version on October 25, 2026.
Teaching-skill licensing and public distribution remain separate and excluded.
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

The importer admits exactly eleven named general files. It removes private
record/skill locations and private research provenance, adds website metadata,
generalizes personal author-review references, and adjusts one heading level. It
does not revise learning objectives. The full reusable teaching skill is
maintained separately and is not republished. The positive allowlist is not a
substitute for reviewing new text and the diff: check examples, links, rights
and personal information on every refresh.

## Release and recovery

The native [Pages workflow](../.github/workflows/pages.yml) validates pushes and
pull requests. With `PAGES_PUBLISH_ENABLED=true`, pushes to `main` deploy
through GitHub Actions; manual dispatch can redeploy `main`. Pages uses GitHub's
configured origin/base path. Inspect the workflow's deploy result and actual
site URL; then check the reader journey separately.

For a regression, revert the offending source commit and push the correction to
`main`. To pause future deploys, set `PAGES_PUBLISH_ENABLED=false`; this does
not unpublish the current site. Any unpublishing or audience change needs its
own authorization. No broad license grant is added by this setup; dependency
licenses and linked references retain their own terms.
