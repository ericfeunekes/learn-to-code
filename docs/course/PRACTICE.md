---
title: Practice and review
description: >-
  Apply an outcome in a separate build session or bring work back, then review
  the evidence.
slug: /practice
source_file: PRACTICE.md
source_refinements:
  - practice-separate-build-2026-11-22
---

# Practice and review

Every outcome is practised the same way. Your teaching agent never builds; you
build in a separate session, then bring the work back.

## The practice loop

1. **Teach.** In the course folder, a teaching session on one outcome. It asks
   questions more than it explains.
2. **Draft the handoff.** Copy `templates/learning/HANDOFF.md` to
   `.learning/handoffs/YYYY-MM-DD-<short-name>.md` and fill in "My task" in your
   own words: the task, what you expect and why, and how you'll check it. The
   teaching agent critiques your draft but doesn't write it.
3. **Build on a practice branch.** Open a new session in your project folder, or
   in `app/`, starting from an up-to-date `main`, and paste the whole handoff.
   The build agent works on a `practice/<short-name>` branch, commits locally
   and adds an entry to `BUILD-NOTES.md`. Run your own check before you leave.
4. **Review.** Back in the course folder, a review session reads the handoff,
   the commits and `BUILD-NOTES.md`, asks what you did and why, and looks for
   errors. It needs to read your project:
   [here's how](SETUP.md#let-the-review-agent-read-your-project).
5. **Merge to main.** Once any review fixes are done, merge the practice branch
   into `main` yourself, or ask the build agent to, and check the app still runs
   from `RUNNING.md`. The next handoff starts from this `main`, so the app keeps
   growing.
6. **Log.** The review session updates your learning log in `.learning/`, with
   the newest entry at the top of `LOG.md`.

On the [Understand code and changes](../understand-code/index.md) track there's
no build: you bring back what you investigated instead.

### A worked example

Priya's app tracks vendor contract renewals for her team.

- **Teach (1.2).** She works out, from her team's renewal policy, that a
  contract ending on 30 June with 60 days' notice must be flagged by 1 May.
- **Handoff.** She writes the task "check the notice-date rule" with five cases,
  each with its expected date and the policy line it comes from.
- **Build.** In her project folder, the build agent writes the checks on
  `practice/notice-date`. One fails: the app counted from the wrong end of the
  contract. The agent records this in `BUILD-NOTES.md`.
- **Review.** The reviewer asks why 1 May and not 2 May, and she explains the
  policy. She also spots that one check's expected date matches the app's
  output, not her table, and has it fixed.
- **Merge and log.** She merges the branch into `main`, starts the app from
  `RUNNING.md` to confirm, and the log records 1.2 as applied.

## How deep you've got

Your log records each outcome at one of four depths:

- **Introduced:** the idea was taught or discussed.
- **Explained:** you explained it in your own words or predicted a new case.
- **Applied:** your committed work shows the idea, and the decisions that carry
  it were yours, not the agent's.
- **Defended:** in review, you explained why you chose what you did and found or
  judged a problem.

## Evidence of understanding

An explanation in your own words, a prediction, or a comparison can show how you
understand an idea and its limits. Receiving an explanation or repeating AI's
answer establishes less than reasoning about a different case. Record what is
actually shown and what remains open.

## Evidence of application

Choose a small relevant task in your app, often the next feature from your Plan
outline, or bring existing work. Apply the concept in a separate build session,
not in the teaching conversation. Draft the handoff yourself from
`templates/learning/HANDOFF.md`: your intended behavior, expectations, success
check and constraints. Then make choices, question proposals and check the
results. In the direct-agents lane the build agent may write all the code; in
the write-code lane you write the parts you named. Your requests, decisions and
follow-ups can show how you applied the outcome; code and observed results show
what the app does.

The handoff carries the selected outcome, task, your expectations, constraints
and the decisions that are yours, and asks the build agent to record what it did
in `BUILD-NOTES.md`. Leave room for your own decisions rather than supplying a
fully solved prompt. Build in `app/` in your fork or in your own project folder.
Learning and review do not require installing or running this documentation
website.

## Bring work back for review

Bring back what a reviewer needs to see your part in the work, not just the
result:

- **Build track:** the handoff you drafted, the build agent's `BUILD-NOTES.md`
  entry, the commits on your `practice/` branch, and what you ran and observed
  yourself.
- **[Understand code and changes](../understand-code/index.md) track:** your
  question, the repository, pull requests or records you looked at and which
  version, any commands you ran and their results, your explanation or finding,
  and what the agent did for you.

The review agent needs read access to your project folder; see
[Let the review agent read your project](SETUP.md#let-the-review-agent-read-your-project).
A link to another conversation or a private repository may not open for the
reviewer. Paste or export the relevant parts instead, with credentials, personal
data and confidential work details removed. Say what's fictional practice
material and what's real.

## Feedback against the outcome

Use the bundled **review-learning-evidence** skill with the relevant
explanation, project/code, prompts or actual implementation conversation and
available results. You can request review without taking a lesson first. If a
conversation link is inaccessible, provide the relevant pasted or exported
portion; keep credentials and private details out of shared material.

Feedback should identify specific demonstrated judgment, explain its effect on
the AI's work and outcome where visible, and name the most useful gap or
improvement. A strong AI-produced artifact alone does not show who supplied the
reasoning. Partial evidence supports a limited conclusion, not a mastery claim.
A focused question or small retry can clarify a genuine gap without repeating
checks that already answer it.

Keep progress and the learning log private in the fork's ignored local record
folder or your established record home. Preserve evidence of partial progress
and choose a useful next step. Use recoverable experiments and disposable data.
The [AI guide](AI-TEACHER.md) explains the outcome and evidence distinctions.

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
