---
title: Module 2 — Modeling data and behavior
description: >-
  Describe identities, relationships, states and rules, and write a spec an
  agent can build from.
slug: /modules/modeling-data-and-behavior
source_file: 02-modeling-data-and-behavior.md
---

# Module 2 — Modeling data and behavior

An agent can only build what you can describe. This module is about describing
the things your app represents and the rules they follow, precisely enough that
an agent can't fill the gaps with its own guesses. That description is your
spec. It's also how you judge an implementation: you compare what the app does
with what you said it should do, not with what the code happens to do.

Returns to briefing an agent (0.1), expected results from domain rules (1.2) and
properties that must stay true (1.4). Builds on the spec and data notes from
[Plan your app](PLAN.md). Module 4 comes back to this model when you look at how
the data is saved.

## Choose your lane

The outcomes are the same in both [lanes](OVERVIEW.md#choose-your-lane). What
changes is the evidence.

- **Direct agents:** you show it through the model you write in plain language,
  the states and rules you define, and the permitted and forbidden cases you
  check.
- **Write code:** you also find where each rule is enforced in the code and
  compare the data structures with your model.

## Learning objectives

By the end of this module, you should be able to:

### 2.1 Model identities and relationships

- Describe the real things the app represents, separately from table, class or
  variable names. Say what makes two records the same thing, how things relate,
  and whether a relationship allows one or many.
- Distinguish values that look alike but mean different things, such as a user
  ID and an order ID, a quantity and its unit, or a date and a moment in time.
  Decide which distinctions your app must keep, and give a concrete consequence
  of mixing them up.
- Direct an agent to compare your description with the app's data and code.
  Decide whether the representation keeps your meaning, and defend keeping it or
  making a focused correction.

### 2.2 Describe states and transitions

- Choose a real lifecycle in your app, such as a task, an order or a form, and
  describe its states, the events that change them and who can cause each
  change.
- Say what conditions must hold before a change is allowed, and what should
  happen when one doesn't or the change is interrupted. Decide which changes are
  allowed, rejected or reversible.
- Direct an agent to diagram the lifecycle and show one allowed and one
  forbidden change. Compare the result with your model.

### 2.3 Define rules and compare the model with behavior

- State a rule that must stay true across every action, such as "a balance never
  goes negative" or "every task belongs to exactly one list". Distinguish that
  from a condition for a single change, and name what could break it.
- Write valid and invalid cases from your model before you look at the
  implementation's answers. Direct an agent to check a case that keeps the rule
  and an attempt that would break it, at the place that actually enforces the
  rule.
- Explain any difference between the model and the behavior, and decide whether
  the model or the code needs to change. Defend sound existing behavior without
  inventing a change.

### 2.4 Turn the model into a spec an agent can build from

- Write a short spec for a new behavior: the things involved, the states, the
  rules, the cases that must work, the cases that must be rejected and what must
  stay the same. Keep it about behavior, not code.
- Hand that spec to a fresh agent and see where it asks questions or guesses.
  Each guess is a gap in the spec. Tighten it and record which decisions you
  made.

## Agent mistakes to watch for

These add to the general list in [Module 0](00-project-and-git.md).

- **Reading the model back from the code.** Asked "what are the rules?", the
  agent describes what the code does and presents it as what it should do. Bugs
  become requirements.
- **Status labels without rules.** Adding a `status` field with several values
  but nothing that stops an impossible change, such as "done" back to "draft"
  when that shouldn't happen.
- **Mixing up look-alike values.** Using a user ID where an order ID belongs, or
  mixing units or time zones, because both are just strings or numbers.
- **Enforcing a rule in one place only.** Checking the rule in the form but not
  in the import, the API or a background job.
- **Filling spec gaps silently.** When the spec doesn't say, the agent picks
  something reasonable-looking and doesn't mention it. Ask it to list the
  decisions it made.

## By lane, and checks without AI

Each check without AI is something the learner does with the agent closed.

| Objective | Check without AI                                                                                                  | Write-code lane adds                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 2.1       | Sketch the main things in your app and how they relate, and name two look-alike values that must not be mixed up. | Find the data structure for one of those things and compare it with your sketch.         |
| 2.2       | Draw one lifecycle with its states, the events between them and one change that must be rejected.                 | Find the code that allows or rejects that change.                                        |
| 2.3       | Write one rule that must always hold and three cases: one that keeps it and two that try to break it.             | Find every place in the code that could break the rule.                                  |
| 2.4       | Write a one-page spec for a small feature and mark the decisions you made rather than left open.                  | Add the type or field names you expect, and check them against the agent's result later. |

## Practice tasks

Pick one that fits your app. Each runs through the
[teach, build and review loop](PRACTICE.md).

- **Model before code.** Teach: what are the things, states and rules in your
  app? Build: hand off a task asking the agent to compare your written model
  with the code and report differences without changing anything. Review: which
  differences are bugs and which are gaps in your model?
- **Forbidden transition.** Teach: what change must never happen? Build: hand
  off a check that tries it and expects a rejection, with the expected result
  coming from your model. Review: where was it stopped, and is every path
  covered?
- **Spec gap hunt.** Give your 2.4 spec to a fresh agent and ask it only to list
  its questions and assumptions. Review the list and tighten the spec before any
  building.

## Notes for the teaching AI

- This is a first pass, following
  [broad first, then deep](OVERVIEW.md#broad-first-then-deep). Types and runtime
  validation in Module 5 and rule ownership in Module 6 return to this model.
  Rules that several writers could break at once come back in Module 7.
- Keep the model independent of the implementation. Table names and current
  output help locate things but can't establish the intended rules.
- Use a lifecycle the app really has. Invented states teach little.
- 2.4 is the direct-agents lane's main deliverable from this module. A clear
  spec plus checks is how that learner directs a build without reading code.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
