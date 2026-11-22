---
title: Module 0 — Directing an agent
description: >-
  Draft for human review: brief an agent, check its work and use Git to keep or
  undo it.
slug: /modules/project-and-git
source_file: 00-project-and-git.md
---

# Module 0 — Directing an agent

**Draft — for review.** These proposed outcomes need human review before being
treated as the agreed Module 0.

This module comes first because every later module depends on it. AI agents
write the code; this module is about running that work well. You brief an agent,
keep each step small, check what actually happened, and use Git to keep or undo
the result. Git is part of this module because it's your undo button and your
record of what changed.

It's a learning option after [workspace setup](SETUP.md), not part of setup. You
can learn it with this repository before choosing an app, or on your own
project.

## Choose your lane

The outcomes are the same in both [lanes](OVERVIEW.md#choose-your-lane). What
changes is the evidence.

- **Direct agents:** you show it through briefs you write, checks you run, and
  what you notice in an agent's summary and the list of changed files.
- **Write code:** you also read the change itself, trace what a few lines do,
  and make small edits by hand.

Each outcome ends with a **check without AI**: something you can do on your own,
with the agent closed, to show the idea is yours.

## Learn with your AI

```text
Help me understand Git and GitHub using this repository.
Then help me practise directing an agent: writing a brief, keeping
each step small, reading what changed, and keeping or undoing it.
```

## Proposed practical outcomes

These are capabilities to develop through useful work, not an entrance exam. You
can return to a concept when it becomes relevant.

### 0.1 Brief an agent

- Write a brief an agent can act on without guessing: the goal, where in the
  project it applies, what must stay the same, your expected result and where
  that expectation comes from, how you'll check it, and what's out of scope.
- Keep the judgments that matter to you. Decide which decisions are yours, and
  say so in the brief, instead of letting the agent choose and tell you
  afterwards.
- Spot what's missing from a vague request such as "make the list better" before
  an agent fills the gap with its own guess.
- **Evidence:** a brief you wrote that a fresh agent followed without asking for
  missing basics, or a gap you found in someone else's brief. Write code: the
  brief also names the file or function to change and the part you'll write.
- **Check without AI:** rewrite a vague request on paper and list what an agent
  would otherwise have to guess.

### 0.2 Keep each step small and run the loop

- Split work into agent-sized steps: one behavior and one check per step.
- Run the loop: brief, the agent's plan, your approval, the change, you run it
  yourself, you read what changed, then keep it or undo it.
- Notice when a step has grown, for example many files changed for a one-line
  request, and stop to split it.
- **Evidence:** a run of small commits, each with one purpose and a check you
  ran yourself, including at least one change you undid because it was wrong.
  Write code: you also predicted what one step would change before the agent
  made it.
- **Check without AI:** break a feature you want into three to five steps, each
  with its own check.

### 0.3 Use Git as your undo and your record

- Distinguish the original course, your GitHub fork and the local clone where
  you work. Explain that saving a file, making a local commit and pushing to
  GitHub are different actions, and that your fork is public.
- Use a commit as a checkpoint and a branch as a safe place to try something.
  Ask the agent to take you back to the last good commit, and check that it did.
- Explain merging as bringing work together. When work needs combining, say what
  must be preserved, and don't let an agent discard work to make an operation
  succeed.
- **Evidence:** you returned to a known good state after a bad change, or chose
  correctly what to commit and what to share. Write code: you also read
  `git log` and `git diff` yourself.
- **Check without AI:** from your project's history, say what the last three
  commits did and which one you'd go back to if the newest broke something.

### 0.4 Check what the agent actually changed

- Compare an agent's summary with what changed: which files, how much, and
  whether anything unexpected was touched. Pay particular attention to tests
  that were edited or deleted.
- Run the result yourself instead of relying on the agent's report.
- Write code: read the diff for one small change and explain it line by line.
  Trace a short function with a concrete input and predict what it returns.
- **Evidence:** you caught a difference between the summary and the change, or
  confirmed they match with a reason. Write code: a correct prediction you made
  before running the code.
- **Check without AI:** given a summary and a list of changed files, say what
  you'd check first and why. Write code: predict the output of a short function
  you didn't write.

### 0.5 Recognise common agent mistakes

- Know the usual ways an agent goes wrong: claiming results it didn't observe,
  such as "all tests pass"; weakening or rewriting a test so it passes; copying
  expected values from the program's own output; changing things you didn't ask
  for; deleting or rewriting working code; inventing a package, option or
  function; and explaining confidently but wrongly.
- Ask for the evidence behind a claim, such as the actual test output or a run
  of the app.
- **Evidence:** you caught one of these mistakes in your own work or in a
  practice example with a planted mistake.
- **Check without AI:** review a short practice transcript or change and find
  the planted mistake.

### 0.6 Keep secrets and private data out

- Keep passwords, API keys and real personal data out of prompts, commits and
  logs. Your course fork is public, so practise with synthetic data.
- Know what to do if a secret is committed: treat it as exposed, revoke or
  replace it, then clean up.
- **Evidence:** you made a sound choice about what to share, or caught a secret
  or personal detail before it was committed.
- **Check without AI:** list every place in your project where a secret or
  personal data could leak.

## Notes for the learning AI

Use the existing workspace as context. Don't restart fork/clone setup or require
project definition just because the learner asked about Git/GitHub. If setup is
actually incomplete, explain the missing piece and use
[the setup guide](SETUP.md).

Teach these outcomes through the learner's own briefs and build sessions. The
handoff the learner drafts is practice for 0.1, and reviewing a returned build
is practice for 0.2, 0.4 and 0.5. Practice examples with planted mistakes work
well for 0.5 in both lanes.

Credit only what the learner shows. An AI-run setup, a successful command or
your own explanation establishes little about the learner, and one good example
isn't mastery. Don't award completion against this draft as though its outcomes
were agreed.

## Reference explanations

Consult these as needed; reading them all is not a prerequisite:

- [GitHub: fork and clone a repository](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo)
- [Git: record and select changes](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
- [Git: undoing things](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things)
- [Git: branches and merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

[What's next?](SETUP.md#whats-next) · [Course overview](OVERVIEW.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
