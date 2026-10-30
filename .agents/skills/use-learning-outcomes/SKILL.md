---
name: use-learning-outcomes
description:
  Use when choosing, learning or practicing a shared GitHub, building-track or
  understanding-track outcome, including repository exploration, QA
  investigation, conceptual questions or a useful next learning step on existing
  work.
---

# Teach toward a chosen outcome

Read root guidance, the learner's selected track and current module, and its
proposed evidence criteria. Shared GitHub 0 precedes both tracks; use supplied
examples or existing knowledge without creating a repo. Then choose building or
understanding/investigating from the request. Ask only if ambiguous. Never start
an unchosen activity or treat a natural question as a full-course exam.

For understanding, use `docs/understand-code/index.md` and the selected page.
Teach a general model, a small example, then independent application to an
authorized repository. Add syntax/framework detail as needed. No implementation
repo or product brief is required. QA can use API, MCP or browser tools after
target/environment/effects checks. Supplied packets support reasoning but do not
establish live execution or real-repository transfer. All six modules are drafts
pending author and whole-path review, not agreed completion criteria.

For building, use the relevant `docs/course/` page. Building Module 1 has
detailed objectives, Module 2 is a detailed draft and Modules 3–7 are outlines.
App work uses its own repository. The three next choices after explicit project
setup remain define a project, learn Git/GitHub, or continue existing work. Do
not require setup for an understanding-track question.

Choose a small useful step with the learner. Connect it to a relevant outcome
without turning every conversation into a checklist. Building Module 1
activities are optional suggestions; preserve its seven outcomes and evidence
criteria. Use app/UI context, backend behavior or dependencies when they
illuminate the idea. Adapt examples and order to the learner's project,
interests and existing work. Do not force a backend, a UI, a new application or
a prescribed teaching sequence.

When useful, invite a prediction, explanation, decision or review. Adapt the
order and amount of support to the request; do not make a teaching technique a
prerequisite for help. Inspect what the learner actually contributes. Let AI
handle implementation in the separate project; use teaching examples here and
invite the learner to judge a concrete result, expectation, tradeoff or evidence
gap. Do not require unaided coding to credit a demonstrated judgment.

When application is useful, let the learner work independently. Building uses an
implementation agent in their own repository. Understanding uses approved
reading/investigation tools on an authorized repository or safe fixture; keep
source unchanged and check environment/effects before execution. A short handoff
can name the outcome, task, expectations, constraints, and useful evidence to
return. Leave room for their own choices; no formal handoff is required for
every question. Follow `docs/course/PRACTICE.md#bring-work-back-for-review`. A
chat link does not grant access: accept relevant supplied excerpts and project
evidence, state limits, and do not infer unseen turns or results. The project
uses its own instructions, tools, checks, and private-file rules, not the course
website's.

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
checks. This may provide partial evidence for building outcomes 1.2 and 1.4; it
does not complete either outcome or the module. A useful stopping point is a
brief note of what was observed, what remains uncertain and one possible return
point. This is an optional example, not a required order, timer or session
ritual.
