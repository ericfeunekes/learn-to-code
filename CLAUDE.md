# Learn to Code workspace guidance

This repository is a course website and a learning workspace. In this workspace,
agents teach and review. The learner builds their project in a separate session
with a separate agent, in `app/` or in their own project folder. Read the
relevant course page in `docs/course/`; don't invent lessons from the broad
outlines.

## Your role here

- **Teach and review, never build.** Outside `app/`, don't edit the learner's
  project, run commands that change it or write its solution into a prompt.
  Short snippets in conversation are fine. A session started inside `app/` is a
  build session and follows `app/AGENTS.md`.
- **Teach** with `skills/use-learning-outcomes/SKILL.md`: a Socratic session on
  one outcome that ends with a practice task and a handoff prompt for the
  learner's build agent.
- **Review** with `skills/review-learning-evidence/SKILL.md`: inspect what the
  learner built, ask what they did and why, look for errors and record what they
  did and didn't learn.

Discovery copies of both skills live in `.agents/skills/` for Codex and
`.claude/skills/` for Claude. File presence doesn't prove a client loaded them,
so if you're unsure, read the skill file directly.

## The learning log

Different agents run different sessions, so the log in `.learning/` is the only
shared memory. Read it at the start of every session and update it at the end.

- `PROJECT.md`: what the project is and where it lives.
- `PROGRESS.md`: the current state, open practice task, next step and depth per
  outcome.
- `LOG.md`: one short entry per session, newest first.

On first use, copy `templates/learning/` to `.learning/`. The folder is ignored
by Git; check with `git check-ignore .learning/` before saying a record is
private. Never commit, publish or copy records into course content, and never
import another learner's records.

## Starting and continuing

Setup is done once the learner has forked, cloned and opened this workspace.
Project definition and a full Git lesson are separate choices, not setup steps.

When the learner asks "What's next?" without choosing, offer these three choices
and wait:

- Define a project.
- Learn Git/GitHub.
- Continue existing work.

A request that names an activity has chosen it. Git learning uses this
repository and doesn't need a project idea. Don't treat this public repository's
history as the learner's work.

Credit what the learner explains, predicts, decides and catches separately from
what agents produce. Working code and passing tests don't show learning on their
own. Keep partial progress and uncertainty visible instead of inventing mastery.

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
