---
title: Module 6 — Structuring a program
description:
  'Explain responsibilities and dependencies, and plan coherent changes.'
slug: /modules/structuring-a-program
source_file: 06-structuring-a-program.md
---

# Module 6 — Structuring a program

As your app grows, agents start making changes that touch several parts at once,
and each new session starts without remembering the last one. This module is
about understanding how the parts of your app fit together, so you can plan a
change across them, judge whether an agent's new structure helps, and keep the
project understandable to the next agent and to you.

Returns to dependency injection (1.6) at greater depth: where dependencies
should come from, and how that shapes a program. Also returns to the rough map
from 2.1, the data paths from 3.2, rule ownership from 4.3, the contracts from
5.3, and reading what changed (0.4) for larger diffs.

## Choose your lane

The outcomes are the same in both [lanes](OVERVIEW.md#choose-your-lane). What
changes is the evidence.

- **Direct agents:** you show it through a map of your app you can explain, a
  change plan that names what must stay the same, and judgments about whether an
  agent's restructuring was worth it.
- **Write code:** you also follow a call through the code from one file to the
  next, and read a multi-file diff and explain how the pieces fit.

## Learning objectives

By the end of this module, you should be able to:

### 6.1 Trace components, responsibilities and flow

- Trace one user action from where it starts to its visible result. Say what
  each part does, what passes between parts, and where data is written or an
  outside service is called.
- Distinguish a part's responsibility from the file that contains it. Say where
  a failure could interrupt the flow or leave work half done.
- Direct an agent to diagram this path, then check the diagram against the code
  and the app's behavior. Connect it to where data lives (Module 3) and where
  rules are enforced (Module 4).

### 6.2 Assess cohesion, coupling and shared-rule ownership

- Explain cohesion as how well a part's jobs belong together, and coupling as
  how much one part depends on another's details. Use a real change to show how
  they make work easier or harder.
- Name the one place that should own an important rule, and every path that must
  obey it. Distinguish duplicated code that is the same rule from similar code
  that serves different purposes.
- Ask an agent to compare the current structure with one alternative. Decide
  whether a change fixes a real problem, counting the extra indirection it adds,
  and keep the current design when it serves the app.

### 6.3 Explain dependency direction and use interfaces

- Say which part depends on which, and what each caller has to know about the
  other. Distinguish depending on a specific implementation from depending on an
  agreed contract.
- Revisit dependency injection: supplying a dependency from outside lets the
  caller use the real thing or a controlled substitute. Distinguish how it's
  supplied from what its contract promises.
- Direct an agent to show the current arrangement and, where useful, a small
  interface-based alternative. Decide whether the benefit justifies it over the
  simpler direct dependency.

### 6.4 Plan and review a change across several parts

- State a small change, its limits and the behavior that must not change. Name
  the parts, callers and promises it affects, including saved and exchanged
  formats.
- Split it into steps an agent can do one at a time, each with its own check, in
  an order that keeps the app working between steps.
- Review the combined diff: which files changed and why, whether anything
  outside the plan was touched, and whether callers that depend on a changed
  promise were updated. Get checks across the changed boundaries and of the
  preserved behavior.

### 6.5 Keep the project understandable to the next agent

- Explain what an agent can see at the start of a session: the files, any
  instruction files such as `AGENTS.md` or `CLAUDE.md`, and nothing from earlier
  conversations. Keep a short project notes file with the structure, the rules
  that matter and the decisions you've made, and update it when they change.
- Decide when to start a fresh session instead of continuing a long one that has
  drifted.
- Judge a new package or library before accepting it: does it exist, is it
  maintained, is it needed, and what does it get access to? An agent may suggest
  a package that doesn't exist or isn't the one you think.

## Agent mistakes to watch for

These add to the general list in [Module 0](00-project-and-git.md).

- **Over-engineering.** Adding layers, interfaces, factories or a framework for
  a small app with one implementation. More files isn't better structure.
- **Copying a rule instead of reusing it.** The same check pasted into three
  places, which will drift apart.
- **Breaking a caller.** Changing what a function accepts or returns without
  updating everything that calls it, or a saved format without its readers.
- **Big-bang refactors.** Restructuring and changing behavior in the same step,
  so you can't tell which caused a failure.
- **Unvetted dependencies.** Adding a package for something a few lines would
  do, or one with a near-miss name of a popular package.
- **Stale project notes.** Instruction files that describe an old structure, so
  the next agent follows the wrong map.

## By lane, and checks without AI

Each check without AI is something the learner does with the agent closed.

| Objective | Check without AI                                                                                    | Write-code lane adds                                                                           |
| --------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 6.1       | Draw the path of one user action through your app, including where data is saved.                   | Name the file and function for each step on the path.                                          |
| 6.2       | Name one rule and the single place that should own it, and every path that must obey it.            | Find duplicated logic in your code and say whether it's really the same rule.                  |
| 6.3       | Draw which parts depend on which for one feature, and mark one you'd want to swap in tests.         | Read how one dependency reaches its caller and change it to be supplied from outside, by hand. |
| 6.4       | Write a step plan for a change across two parts, with a check per step and what must stay the same. | Read a multi-file diff and explain how each changed file relates to the others.                |
| 6.5       | Write or update your project notes file from memory, then compare it with the code.                 | Check a suggested package: its real name, its maintainers and recent releases.                 |

## Practice tasks

Pick one that fits your app. Each runs through the
[teach, build and review loop](PRACTICE.md).

- **Trace and diagram.** Teach: what happens when you press this button? Build:
  hand off a task to diagram that path from the code without changing anything.
  Review: does the diagram match what you predicted and what the app does?
- **Planned multi-step change.** Teach: what must stay the same? Build: hand off
  your 6.4 step plan one step at a time, with a commit per step. Review: does
  each commit do one thing, and did any step touch something outside the plan?
- **Project notes for the next agent.** Write the notes file, then start a fresh
  agent session and ask it to explain the project from the notes alone. Correct
  whatever it gets wrong.
- **Planted mistake.** Review a change where the agent added an abstract base
  class, a factory and a new package to support one storage implementation.
  Decide what to keep.

## Notes for the teaching AI

- This is a first pass, following
  [broad first, then deep](OVERVIEW.md#broad-first-then-deep). It goes deeper
  than 1.6 on dependencies, but it isn't an architecture course. Real callers
  come before pattern names.
- Neither an interface nor dependency injection is automatically an improvement.
  A defended simple structure meets the objective.
- A tidy folder structure doesn't show that every path enforces the rule.
  Behavior and boundary checks show the wiring works; a diagram only explains
  it.
- 6.5 matters most for the direct-agents lane: that learner relies on agents
  understanding the project, so good notes are their main way to shape the
  structure.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
