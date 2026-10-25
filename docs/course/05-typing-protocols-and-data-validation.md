---
title: 'Module 5 — Typing, protocols, and data validation'
description: 'Express shapes and shared promises, and check actual data.'
slug: /modules/typing-protocols-and-data-validation
source_file: 05-typing-protocols-and-data-validation.md
---

# Module 5 — Typing, protocols, and data validation

Use Module 4’s model to explain how code expresses data and promises, then
examine checks on incoming values. AI writes the definitions and checks; you
judge what they communicate and enforce.

## Learning objectives

By the end of this module, you should be able to:

### 5.1 Explain what types communicate and what checking they provide

- Explain a relevant value’s type: its shape, available operations, and allowed
  values. Distinguish structural similarity from meaning: an order ID and a user
  ID may both be strings while identifying different things.
- Distinguish static checking, performed before execution, from runtime checks
  on actual values. Explain what the app’s language and tools check, what
  annotations merely communicate, and which mistakes remain possible.
- Direct AI to show or sketch a suitable type and a meaningful mix-up it can
  catch. Explain whether the protection comes from a checker, runtime
  enforcement, or a convention the programmer must follow.

### 5.2 Represent valid values and states

- Explain when missing, optional, empty, and zero values have different meanings
  in the app. State which are permitted and how a caller should interpret them,
  rather than treating them all as “no data.”
- Describe alternatives and combinations in a record or lifecycle. Identify a
  combination that violates your app’s rules, and explain why; whether a pending
  operation may carry an earlier result depends on the model. Connect those
  choices to its states and rules.
- Ask AI for a small type sketch that expresses the valid alternatives using the
  app’s language. Compare it with the existing representation, explain what
  invalid states each permits, and decide whether a change would be useful.

### 5.3 Specify a protocol independently of its implementation

- Explain a protocol or interface as the operations a caller needs and the
  behavior those operations promise. State inputs, results, and relevant failure
  behavior without describing the implementation’s internals.
- Specify a small cache contract with `get` and `set`, including the meaning of
  a missing value and any freshness promise needed by the caller. Explain how an
  adapter backed by Redis or Postgres, or a test fake, could fulfill that
  contract despite different internals.
- Direct AI to show how a caller uses only the promised operations and receives
  the implementation from outside. Connect this to dependency injection from
  Module 1, and explain why matching method names alone does not establish
  compatibility.

### 5.4 Validate external data at runtime

- Identify where a form, file, API response, or other external value enters the
  app. Distinguish checking shape and basic types from checking business
  meaning, such as an allowed quantity or valid state combination.
- Decide where validation must run before the app trusts or acts on the data.
  Explain how a caller can bypass browser validation and why an annotation alone
  may leave incoming values unchecked.
- Direct AI to demonstrate accepted input, malformed input, and a well-formed
  but invalid value at the responsible entry boundary. Explain the resulting
  behavior and whether it enforces the intended rule.

## Guidance for the teaching AI

- Keep type expressiveness, checker guarantees, and runtime validation distinct;
  their exact relationship depends on the language and tools.
- Revisit Module 4’s meaning and Module 1’s supplied clients. A suitable type or
  protocol need not introduce a framework or replace sound existing code.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
