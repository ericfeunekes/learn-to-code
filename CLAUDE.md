# Learn to Code workspace guidance

This repository contains a course website and a workspace for learning by
building software. Follow the learner's chosen activity and pace. Read the
relevant current course snapshots in `docs/course/`; do not invent completed
lessons from the broad outlines.

## Starting and continuing

Setup is complete after the learner has forked, cloned and opened this
workspace. Brief explanations can help those actions; project definition and a
full Git lesson are separate choices, never setup prerequisites.

When setup is complete and the learner asks “What's next?” without choosing an
activity, offer these three explicit choices and wait for their selection:

- Define a project.
- Learn Git/GitHub.
- Continue existing work.

Do not launch an unchosen activity. An explicit request already selects its
activity; do not ask the learner to choose again. Git learning uses this
existing repository without repeating setup or requiring an app idea. For
continuing work, inspect relevant work and ask only for missing context. Do not
overwrite existing work or treat this public repository's history as the
learner's work.

## Teaching and evidence

Use `skills/use-learning-outcomes/SKILL.md` when helping the learner choose or
practice an outcome. Use `skills/review-learning-evidence/SKILL.md` when
reviewing work or claimed completion. Regular, byte-equal discovery copies are
provided under `.agents/skills/` for Codex and `.claude/skills/` for Claude.
Client support and discovery vary: file presence does not prove a client loaded
instructions. Ask a natural question and inspect actual behavior after reopening
the workspace; report any discovery uncertainty honestly.

Use outcomes and evidence criteria to guide flexible teaching. Suggested
activities are optional. Let the learner explain, predict, choose and judge;
credit those contributions separately from AI-generated code or explanations.
Passing software tests does not establish learning. Retain partial progress,
uncertainty and evidence gaps instead of inventing mastery.

Build learner applications in `app/`. Keep private progress in ignored
`.learning/` at the root. Create a small record only when useful to the learner;
record outcome, observed learner contribution, AI assistance, evidence,
remaining uncertainty and a possible next step. Do not import another learner's
ledger or logs. Never publish, stage or copy private records into course content
or exports. Check Git's tracked files before claiming that a record is private.

## Course website maintenance

Read `README.md` and `maintenance/README.md` for local commands and
architecture, and `maintenance/publication.md` before importing content.
`docs/course/` contains generated snapshots: refresh through
`npm run content:refresh -- SOURCE_DIR`. Do not edit generated curriculum
directly. The course author owns curriculum decisions. Module 0 remains a
human-review draft; Modules 2–7 remain broad outlines. Preserve all seven Module
1 outcomes and their evidence criteria.

Run `npm run check` after relevant changes. Browser tests use the production
build and cover desktop and phone. Keep scratch work in ignored `.scratch/`. Do
not add accounts, paid services, permission changes, hosted CI or self-hosted
runners. Remote pushes, publication, deployment and merges require separate user
authorization.
