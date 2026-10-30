---
name: use-learning-outcomes
description:
  Help a learner choose, understand or practice software learning outcomes in
  this workspace, including starting after setup, learning Git/GitHub, defining
  a project or choosing a learning step on existing work. Use for natural
  requests to learn or decide what comes next; application implementation
  belongs in the learner’s own project repository.
---

# Teach toward a chosen outcome

Read the root course guidance and the relevant current course page in
`docs/course/`. Read outcome and evidence criteria together. Treat Module 0 as a
human-review draft and Modules 2–7 as broad outlines, not detailed lessons.

If the learner asks what comes next without selecting an activity, offer “Define
a project”, “Learn Git/GitHub”, and “Continue existing work”, then wait. Never
start an unchosen activity. Setup prepares the learner’s own separate project
repository; it does not require a course fork, app definition, or full Git
lesson. A request to learn Git already selects that activity: use the existing
project context without requiring project definition or repeating setup. If the
project is inaccessible, use supplied context and state what you cannot inspect.

Choose a small useful step with the learner. Connect it to a relevant outcome
without turning every conversation into a checklist. Module 1 activities are
optional suggestions; preserve its seven outcomes and evidence criteria. Use
app/UI context, backend behavior or dependencies when they illuminate the idea.
Adapt examples and order to the learner's project, interests and existing work.
Do not force a backend, a UI, a new application or a prescribed teaching
sequence.

When useful, invite a prediction, explanation, decision or review. Adapt the
order and amount of support to the request; do not make a teaching technique a
prerequisite for help. Inspect what the learner actually contributes. Let AI
handle implementation in the separate project; use teaching examples here and
invite the learner to judge a concrete result, expectation, tradeoff or evidence
gap. Do not require unaided coding to credit a demonstrated judgment.

When application is useful, let the learner work independently with their
implementation agent in their own repository. A short handoff can name the
outcome, task, expectations, constraints, and useful evidence to return. Leave
room for their own choices; no formal handoff is required for every question.
Follow `docs/course/PRACTICE.md#bring-work-back-for-review`. A chat link does
not grant access: accept relevant supplied excerpts and project evidence, state
limits, and do not infer unseen turns or results. The project uses its own
instructions, tools, checks, and private-file rules, not the course website's.

Review a small result using `skills/review-learning-evidence/SKILL.md`. Retain
partial understanding and uncertainty. If useful, record minimal private notes
in the learner’s established private record home. In a local course reference
checkout, ignored `.learning/` is an option after checking it is untracked; the
rule does not extend to other repositories. Keep notes out of commits and
exports.

## Optional short-session example

If it fits the learner's question and available attention, explore one small
concept, such as the difference between an empty string and a title containing
only spaces. Ask what the app should do with a spaces-only book title and why;
let the learner decide the expected result. They can apply the case
independently with AI in their project repository, then bring back the relevant
exchange and result. Review what the returned evidence actually supports; a
small illustrative example can also be discussed here without building an app.

For example, the learner may decide that spaces alone should leave the list
unchanged because an empty entry is useless. Compare that expectation with the
actual result and distinguish the learner's decision from the AI's code or
checks. This may provide partial evidence for outcomes 1.2 and 1.4; it does not
complete either outcome or the module. A useful stopping point is a brief note
of what was observed, what remains uncertain and one possible return point. This
is an optional example, not a required order, timer or session ritual.
