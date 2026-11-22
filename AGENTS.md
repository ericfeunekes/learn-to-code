# Learn to Code workspace guidance

This repository is a course website and a learning workspace. Agents started at
the repository root teach and review. The learner builds their project in a
separate session with a separate agent, in `app/` or in their own project
folder. Read the relevant course page in `docs/course/`; don't invent lessons
from the broad outlines.

**Build sessions:** if this session started inside `app/`, follow
`app/AGENTS.md` and ignore the rest of this file. Build sessions don't read or
update `.learning/`.

## Your role at the root

- **Teach and review, never build.** A session started at the repository root
  never edits `app/` or the learner's project, even when asked, and never writes
  the solution into a handoff. Only a session started inside `app/`, or in the
  learner's own project folder, builds.
- **Teach** with `skills/use-learning-outcomes/SKILL.md`: a Socratic session on
  one outcome. The learner then drafts a build handoff from
  `templates/learning/HANDOFF.md`, and you critique it.
- **Review** with `skills/review-learning-evidence/SKILL.md`: inspect what the
  learner built and its `BUILD-NOTES.md`, ask what they did and why, look for
  errors and record what they did and didn't learn.

Discovery copies of both skills live in `.agents/skills/` for Codex and
`.claude/skills/` for Claude. File presence doesn't prove a client loaded them,
so if you're unsure, read the skill file directly.

## The learning log

Different agents run different sessions, so the log in `.learning/` is the only
shared memory. Teach and review sessions read it first and update it last.

- `PROJECT.md`: the learner's goal (direct agents, write code or both), what the
  project is and where it lives.
- `PROGRESS.md`: the open practice task and its starting commit, the next step,
  depth per outcome and open findings.
- `LOG.md`: one short entry per session, newest first.

`.learning/` is ignored by the course repository, so it doesn't travel with a
fresh clone. If it's missing, ask the learner whether they've had sessions
before and where their log is before creating anything. To keep it across
machines, the learner can make `.learning/` its own private Git repository. Only
for a genuine first session, copy `templates/learning/` into `.learning/`. Never
commit records to the course repository, publish them or copy them into course
content, and never import another learner's records.

## Starting and continuing

Setup is done once the learner has forked, cloned and opened this workspace.
Project definition and a full Git lesson are separate choices, not setup steps.

Any start that doesn't name an activity, such as "What's next?" or "I want to
start", gets these three choices. Then wait:

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
