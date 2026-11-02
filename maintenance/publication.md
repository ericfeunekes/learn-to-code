# Publication and content boundary

The public repository and GitHub Pages site contain general course material,
website source and reusable teaching skills. Private learner records, personal
details, transcripts, source research and internal author-review notes stay
outside the public repository and its history.

## Published source inventory

- `docs/course/`: thirteen generated course pages, including the shared GitHub
  foundation, setup, overview/map, practice/teaching guidance and building
  modules.
- `docs/understand-code/`: the understanding path, six modules and their
  examples.
- `docs/companions/`: preserved entry pointers and the fictional Fieldnotes
  packet.
- `docs/for-ai.md`: plain-text reading and evidence guidance.
- `skills/`, regular `.agents/skills/` and `.claude/skills/` mirrors, and shared
  `AGENTS.md`/`CLAUDE.md`: learning and evidence-review instructions.
- `static/exercises/` and `static/labs/`: fictional downloadable practice code.
- Website source, locked dependencies, checks, maintenance and license
  documents.

These sources generate 33 reading exports. Internal author reports, learner
records and development scratch evidence are excluded from both publication
sources and reading/search/raw exports. Publishing a development branch's
history merely after deleting private files is insufficient: use a clean public
change based on the current published branch, retaining private development
branches separately.

## Course sources and registered revisions

`maintenance/course-source.json` identifies the thirteen original canonical
snapshots by filename and hash. `maintenance/course-refinements.json` registers
the seven shared revisions under `course-revisions/`. The importer verifies each
original hash before applying a revision, prepares all outputs before writing,
and records the revision in generated metadata.

Refresh with the canonical general source folder available locally:

```sh
npm run content:refresh -- /path/to/maintained/course
npm run format
npm run check
```

A changed original source stops refresh for reconciliation. When a revision is
incorporated into the canonical source, update provenance and remove its
override in the same reviewed change. Do not weaken guards or admit learner
records, research, books or personal data through the importer. Directly
authored understanding pages remain outside it. Preserve individual module
labels and existing outcomes; do not invent detailed content for outlines.

## Skills and separate workspaces

Edit canonical skills under `skills/`, run `npm run skills:sync`, then
`npm run check:skills`. Discovery copies are regular byte-equal files, and root
instructions match. File presence alone does not establish client use.

Build applications in the learner's own repository. Enterprise course references
may use an approved update source as `upstream` and save destination as
`origin`; their Git history, dependencies and private records stay separate from
learner apps and investigated workplace repositories. Local Git ignore rules are
not a backup and do not untrack previously committed files.

## Release and recovery

The existing [Pages workflow](../.github/workflows/pages.yml) runs jobs only in
`ericfeunekes/learn-to-code`. It validates pushes and pull requests in the
upstream repository. On `main`, with `PAGES_PUBLISH_ENABLED=true`, eligible
pushes or manual dispatch build and deploy through the existing GitHub Pages
configuration. Imported reference repositories skip these jobs. No additional
hosted runner, service or permission is required by the course.

Before a public push, inspect the exact source/history boundary and diff, run
required checks, and obtain the user's release authorization. Prefer a draft PR
when a PR is used. Confirm the workflow result and actual reader journey after
publication. Source/publication actions require separate authorization; running
local checks does not publish.

For an authorized correction, revert the offending public source change and
redeploy. `PAGES_PUBLISH_ENABLED=false` pauses future publication without
unpublishing the current site. Any audience or access change requires its own
authorization.

## Rights and privacy

Repository-owned code, documentation and teaching skills use the root MIT
license. Preserve third-party terms and notices, including the Docusaurus
component attribution and emitted dependency notices. Links do not grant rights
to republish external source material. No private research source, book, learner
identity, record or transcript belongs in the public history.
