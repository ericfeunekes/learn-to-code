---
title: 'Module 5 — Typing, protocols, and data validation'
description: 'Express shapes and shared promises, and check actual data.'
slug: /modules/typing-protocols-and-data-validation
source_file: 05-typing-protocols-and-data-validation.md
---

# Module 5 — Typing, protocols, and data validation

Module 4 described what your data means. This module is about how code writes
that meaning down, and how the app checks data coming in from outside before
trusting it. Anything from outside, whether a form, a file, an API response or a
pasted value, can be wrong or hostile. Checking it at the right place is both a
correctness rule and your first real security boundary.

Returns to test doubles (1.5): a fake or stub is only useful if it keeps the
same promises as the real thing. Also returns to dependency injection (1.6), the
model from Module 4 and keeping secrets out (0.6).

## Choose your lane

The outcomes are the same in both [lanes](OVERVIEW.md#choose-your-lane). What
changes is the evidence.

- **Direct agents:** you show it by naming where outside data enters, deciding
  what must be checked there, and testing it with good, malformed and
  well-formed-but-wrong input.
- **Write code:** you also read type definitions and validation code, run the
  type checker yourself, and write a small type or check by hand.

## Learning objectives

By the end of this module, you should be able to:

### 5.1 Explain what types communicate and what checking they provide

- Explain a value's type as its shape, what you can do with it and which values
  are allowed. Two IDs can both be strings and still mean different things.
- Distinguish checks before the program runs (static checking) from checks on
  actual values while it runs. Say what your app's language and tools check,
  what annotations only document, and which mistakes are still possible.
- Direct an agent to show a type that catches a meaningful mix-up, and say
  whether the protection comes from a checker, a runtime check or just a
  convention.

### 5.2 Represent valid values and states

- Explain when missing, optional, empty and zero mean different things in your
  app, and which are allowed.
- Describe the valid combinations in a record or lifecycle from Module 4, and
  name a combination that breaks your rules.
- Ask an agent for a small type sketch that rules out invalid combinations.
  Compare it with the current representation and decide whether a change is
  worth it.

### 5.3 Specify a promise independently of its implementation

- Explain an interface or protocol as the operations a caller needs and what
  they promise: inputs, results and how failure looks, without saying how it
  works inside.
- Write a small contract, for example a store with `get` and `set`, including
  what "not found" means. Explain how a real database, a file or a test fake
  could each keep that promise.
- Direct an agent to show a caller that uses only the promised operations and
  receives the implementation from outside. Explain why matching method names
  alone don't show two implementations are compatible.

### 5.4 Validate outside data at the boundary

- Find every place outside data enters the app. Distinguish checking shape (is
  this a number?) from checking meaning (is this quantity allowed?).
- Decide where validation must run before the app acts on the data. Browser
  checks help the user but anyone can bypass them, so the check that protects
  your data runs where the data is accepted.
- Recognize the basic security risks of trusting input: text that's run as a
  database query or a command (injection), shown to other users as page content,
  or used to reach files or records the user shouldn't see. Know that the fix is
  to validate and to use the safe tool for the job, such as parameterized
  queries, rather than cleaning strings by hand.
- Direct an agent to show accepted input, malformed input and a well-formed but
  invalid value at the boundary, and explain the behavior in each case.

## Agent mistakes to watch for

These add to the general list in [Module 0](00-project-and-git.md).

- **Silencing the type checker.** Adding `any`, a cast or an ignore comment to
  make an error go away instead of fixing the mismatch it found.
- **Validating only in the browser.** The form rejects bad input, but the server
  or the import accepts anything.
- **Building queries or commands from strings.** Pasting user input into SQL, a
  shell command or HTML. It works in the demo and is an injection risk.
- **Trusting an annotation.** Treating a type hint on incoming JSON as if it
  checked the data. Annotations alone often check nothing at runtime.
- **Fakes that break the promise.** A test fake that never fails, never returns
  "not found" or accepts values the real thing would reject, so tests pass
  against behavior that doesn't exist.
- **Error messages that leak.** Returning the internal error, query or stack
  trace to the user when validation fails.

## By lane, and checks without AI

Each check without AI is something the learner does with the agent closed.

| Objective | Check without AI                                                                                       | Write-code lane adds                                                             |
| --------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| 5.1       | For one value, say what its type allows and one mix-up a type could catch.                             | Run the type checker and explain one error it reports, or why it reports none.   |
| 5.2       | List which of missing, empty and zero are valid for three fields, and one invalid combination.         | Write a small type that rules out that combination.                              |
| 5.3       | Write a contract for one dependency: operations, results and failures, with no implementation details. | Read a fake and check it keeps every part of that contract.                      |
| 5.4       | List every entry point for outside data and the check each needs, including one security risk.         | Find the validation for one entry point and try a value that should be rejected. |

## Practice tasks

Pick one that fits your app. Each runs through the
[teach, build and review loop](PRACTICE.md).

- **Map the entry points.** Teach: where does outside data come in? Build: hand
  off a task to list every entry point and what each checks, without changing
  code. Review: which are unchecked, and which matter most?
- **Three-input test.** Teach: shape versus meaning. Build: hand off validation
  for one entry point with your own good, malformed and wrong-but-well-formed
  examples and the expected result for each. Review: does the check run at the
  boundary, and what does the user see on rejection?
- **Planted mistake.** Review a change where the agent added a search box that
  builds a database query by joining strings, and silenced a type error with a
  cast. Name both problems and what you'd ask for instead.

## Notes for the teaching AI

- This is a first pass, following
  [broad first, then deep](OVERVIEW.md#broad-first-then-deep). Module 6 returns
  to interfaces and dependency direction. The security direction in the
  [learning path](CURRICULUM.md#future-directions) goes deeper on access
  control.
- Keep type expressiveness, checker guarantees and runtime validation distinct.
  Their relationship depends on the language and tools.
- Security here is basic and practical: untrusted input, injection, not leaking
  internals. Don't turn it into a security course, but don't skip it either; an
  agent-built app reachable by others needs it.
- A suitable type or protocol doesn't need a framework or a rewrite of sound
  existing code.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
