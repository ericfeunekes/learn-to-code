---
title: Module 7 — Concurrency
description: Reason about overlapping and repeated work and suitable controls.
slug: /modules/concurrency
source_file: 07-concurrency.md
---

# Module 7 — Concurrency

Someone double-clicks Save. Two tabs edit the same record. A request times out
and gets retried. These are everyday cases of work overlapping or repeating, and
they cause bugs that ordinary tests rarely catch. This module is about spotting
where that can happen in your app, showing it on purpose, and choosing the
smallest protection that works.

Returns to judging evidence (1.7): a passing test can miss a problem that only
shows up when work overlaps. Also returns to retries and lost replies (2.2,
2.4), the source of truth (3.2) and rules that must stay true (4.3).

## Choose your lane

The outcomes are the same in both [lanes](OVERVIEW.md#choose-your-lane). What
changes is the evidence.

- **Direct agents:** focus on 7.2 and 7.4, the cases users actually hit: double
  submits, two people editing, retries. Show it by naming the risk, asking for a
  controlled demonstration and judging the protection. 7.1 and 7.3 can stay at a
  recognize-and-ask level.
- **Write code:** you also follow the order of steps in two overlapping runs,
  read where a lock or transaction starts and ends, and write a controlled test
  of the overlap.

## Learning objectives

By the end of this module, you should be able to:

### 7.1 Distinguish concurrency, parallelism and scheduling

- Explain concurrency as work whose progress overlaps, parallelism as work
  running at the same instant, and scheduling as deciding when work runs.
  Overlapping work can interleave without running in parallel.
- Name what kind of overlapping work your app has, such as async requests,
  background jobs, several browser tabs or several users, and what they share.
- Ask an agent to trace a plausible overlap, such as a user repeating an action
  before the first finishes, and predict how the order of completion could
  change the result.

### 7.2 Explain and expose a race

- State a rule that must stay true, and describe a concrete order of steps that
  breaks it, such as two actions reading the same old value before either
  writes.
- Name the shared place where the conflict happens: browser state, a file, a
  database or a service. Say which tabs, requests or processes reach it.
- Direct an agent to arrange the steps in that order on purpose and show the
  race or the safeguard that prevents it. Running something many times without
  seeing a failure doesn't show it's safe.

### 7.3 Compare locks, atomic operations and transactions

- Explain a lock as limiting who can do protected work at once, an atomic
  operation as one that can't be split, and a transaction as changes saved all
  together or not at all. All-or-nothing isn't the same as stopping two
  transactions from interfering.
- Assess each option's reach. A lock inside one process may not stop another
  process, and a separate check followed by an update can still race.
- Direct an agent to compare options, choose or keep the smallest one that
  protects the rule, and test it under a controlled overlap.

### 7.4 Make retries and repeats safe

- Distinguish a retry of the same operation from a new intended action. Explain
  idempotency: repeating an operation has the same effect as doing it once.
- Explain why disabling a button isn't enough on its own: a retry, a second tab
  or a restart can still repeat the effect.
- Direct an agent to test a duplicate or lost-reply case where the effect
  happens. Explain how the design recognizes the same operation, and whether
  that memory must survive a restart.

## Agent mistakes to watch for

These add to the general list in [Module 0](00-project-and-git.md).

- **Adding a sleep or delay.** "Fixing" a race or a flaky test by waiting
  longer. It hides the problem until the timing changes.
- **Retrying a flaky test until it passes.** Treating an intermittent failure as
  noise when it may be a real race.
- **A lock that doesn't reach.** Protecting code inside one process when the
  conflict happens across processes, tabs or machines.
- **Check-then-act.** "If the item is still available, then reserve it" as two
  separate steps, which two requests can both pass.
- **Disable-the-button as the whole fix.** It helps the user but doesn't stop a
  retry or a second client.
- **Claiming safety from a stress run.** "I ran it 100 times and it passed"
  isn't evidence the race can't happen.

## By lane, and checks without AI

Each check without AI is something the learner does with the agent closed.

| Objective | Check without AI                                                                         | Write-code lane adds                                                      |
| --------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 7.1       | List the kinds of overlapping work in your app and what each shares.                     | Find where async work or background jobs start in your code.              |
| 7.2       | Write a step-by-step order of two actions that breaks one of your rules.                 | Write that order as a controlled test, by hand or by directing each step. |
| 7.3       | For that race, say which protection fits and how far it reaches.                         | Find where a lock or transaction begins and ends, and what it covers.     |
| 7.4       | Name one action in your app that must not happen twice, and how a retry could repeat it. | Read how the code recognizes a repeated request, or show that it doesn't. |

## Practice tasks

Pick one that fits your app. Each runs through the
[teach, build and review loop](PRACTICE.md).

- **Double submit.** Teach: what happens if this is sent twice? Build: hand off
  a task to show the effect of two quick submits on disposable data, with your
  predicted result. Review: was the prediction right, and does any fix stop a
  retry as well as a double click?
- **Two tabs.** Teach: which copy wins? Build: hand off a controlled
  demonstration of two tabs editing the same record. Review: is losing one edit
  acceptable for your app, and if not, what's the smallest protection?
- **Planted mistake.** Review a change where the agent fixed an intermittent
  test failure by adding a one-second wait. Say what might really be wrong and
  what you'd ask for instead.

## Notes for the teaching AI

- This is a first pass, following
  [broad first, then deep](OVERVIEW.md#broad-first-then-deep). The long-running
  work and scaling directions in the
  [learning path](CURRICULUM.md#future-directions) go deeper.
- In the direct-agents lane, prioritize 7.2 and 7.4. Small single-user tools
  rarely need more, but every app with a Save button can double-submit.
- Keep live safeguards. A controlled demonstration can show why existing
  protection works without adding a new one.
- Keep concurrency control and duplicate-effect handling distinct even when one
  operation needs both.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
