---
title: Module 4 — Modeling data and behavior
description: 'Describe identities, relationships, states and rules.'
slug: /modules/modeling-data-and-behavior
source_file: 04-modeling-data-and-behavior.md
---

# Module 4 — Modeling data and behavior

You have observed behavior, failures, and storage; now describe the things and
rules those mechanisms are meant to serve. Use the intended meaning of your app
to judge its implementation, including when the existing design is sound.

## Learning objectives

By the end of this module, you should be able to:

### 4.1 Model identities and relationships

- Describe the real things the app represents independently of its table, class,
  or variable names. Explain what makes two records refer to the same thing, how
  things relate, and whether a relationship permits one or several related items
  where that matters.
- Distinguish values that look alike but mean different things, such as a user
  ID and an order ID, a quantity and its unit, or a calendar date and a
  particular moment. Decide which distinctions the app must preserve and explain
  a concrete consequence of confusing them.
- Direct AI to compare that account with the app’s data and code, tracing a
  meaningful relationship or distinction. Explain whether the representation
  preserves the intended meaning and justify retaining it or making a focused
  correction.

### 4.2 Describe states and transitions

- Choose an actual lifecycle or UI state and describe its reachable states, the
  events that change them, and who or what can cause each change. Explain a
  transition as a change from one state to another, rather than merely listing
  status labels.
- Explain the conditions that permit a transition—its guards—and what should
  happen when a condition fails or the operation is interrupted. Decide which
  transitions should be allowed, rejected, or reversible based on the app’s
  intended behavior.
- Direct AI to trace or diagram the lifecycle and demonstrate a meaningful
  permitted and forbidden transition. Compare the observed result with the
  model, including what remains true when the transition fails.

### 4.3 Define invariants and compare the model with behavior

- State an invariant: a rule that must remain true across the relevant states
  and actions. Distinguish that continuing rule from a condition for one
  transition; explain which values, relationships, or writers could affect it
  and why it matters to the app.
- Establish expected valid and invalid cases from the intended behavior before
  accepting the implementation’s answer. Direct AI to check a case that
  preserves the rule and a meaningful attempt that would violate it, observing
  the boundary that actually enforces the rule.
- Explain any agreement or difference between the model and observed behavior.
  Decide whether the model needs clarification or the code needs correction
  using the accepted purpose and evidence; defend sound existing behavior
  without manufacturing a change.

## Guidance for the teaching AI

- Keep the model independent of the implementation. Table names and current
  output can help locate representations, but cannot establish the intended
  rules by themselves.
- Use a lifecycle the app actually has. Artificial bookkeeping states add no
  useful understanding.
- Connect model distinctions to types and runtime validation in Module 5. Note
  rules that several writers or overlapping actions could bypass for Module 7; a
  successful sequential check does not settle that question.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
