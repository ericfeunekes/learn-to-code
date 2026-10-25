---
title: Module 1 — Testing and QA
description:
  Define expected behavior and judge tests and the actual client outcome.
slug: /modules/testing-and-qa
source_file: 01-testing-and-qa.md
---

# Module 1 — Testing and QA

Learn to decide what correct behavior means, direct AI to check it, and judge
the evidence. Start with a small working behavior in your app; later modules
give you more demanding situations to test.

## Learning objectives

By the end of this module, you should be able to:

### 1.1 Distinguish software testing and quality assurance

- Explain testing as evaluating software against expectations and looking for
  defects. Explain QA as the broader work of building confidence in quality,
  including how requirements, development, review, and testing are handled.
  Neither term means simply manual or automated work. See
  [ASQ’s account of quality assurance](https://asq.org/quality-resources/quality-assurance-vs-control).
- Distinguish “the code passes its checks” from “the app meets the intended
  need.” For your app, identify a quality question and explain what evidence
  would answer it, including whether the person or client can complete the
  intended action.

### 1.2 Define expected results independently of the implementation

- Explain where an expected result comes from: an agreed requirement, a domain
  rule, or an independently checked example. Explain how copying the
  implementation’s calculation or branches into the test can reproduce the same
  mistake in both.
- State inputs, expected results, and the basis for those results before asking
  AI to create assertions. Recognize that recording current behavior can detect
  later changes without establishing that the original behavior was correct.

### 1.3 Choose tests at appropriate levels

- Distinguish a unit or component check of local behavior, an integration check
  of collaborating parts, and a system or end-to-end check of a complete path
  through the app. Describe what actually runs and what is substituted; the
  label alone does not establish coverage.
- Explain why pure calculations are suited to focused unit tests, while database
  queries, HTTP exchanges, serialization, or connected UI behavior need checks
  that exercise the relevant collaboration. A pure function depends on its
  inputs without changing them or outside state.
- Direct AI to choose checks for a concrete claim, balancing speed,
  repeatability, diagnosis, and realistic coverage. Explain what a narrower test
  would miss and when an existing check already supplies the needed evidence.
  See
  [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html).

### 1.4 Design meaningful cases and properties

- Choose ordinary, boundary, empty, invalid, and failure cases relevant to a
  requirement. Explain the setup, action, and assertion for a case, and why an
  assertion checks intended behavior rather than merely whether code ran.
- Distinguish explicit input/result examples from generated cases that check a
  property across many inputs. State a meaningful property and its assumptions;
  generating more inputs cannot repair a wrong expectation or a weak assertion.
- Direct AI to implement useful cases, run them, investigate failures, and keep
  a regression check for a reproduced defect. Explain why a failing check may
  reveal a code defect, a wrong expectation, or a broken test setup.

### 1.5 Use realistic fixtures and test doubles

- Explain a fixture as a known test context: data, files, recorded responses, or
  a prepared dependency. Distinguish a stub’s supplied responses, a fake’s
  working substitute behavior, and a mock’s expectations about interactions.
- Direct AI to arrange realistic inputs and controlled variations, such as a
  captured website response with missing data or a disposable database with
  known rows. Keep tests independent by controlling initial state and cleanup.
  See
  [pytest’s explanation of fixtures](https://docs.pytest.org/en/latest/explanation/fixtures.html).
- Explain what the substitute preserves and omits. A mock receiving the expected
  call does not establish that the real service accepted it or that the user
  obtained the intended result.

### 1.6 Explain and apply simple dependency injection

- Identify a dependency such as a database client, HTTP client, clock, or file
  reader. Explain the difference between a function creating that dependency
  internally and receiving it from outside: for example, accepting `client` as
  an argument.
- Explain how this lets ordinary execution supply a real client and tests supply
  controlled responses, including failures or unusual data. Supplying a real
  client can also support an integration test. Injection does not make a
  function pure or remove its effects.
- Direct AI to introduce or use this small seam, explain how the dependency
  reaches the function, and assess a test using it. No injection framework is
  required. See
  [Fowler on dependency injection](https://www.martinfowler.com/articles/injection.html).

### 1.7 Judge evidence and test sensitivity

- Explain what observed results establish and leave uncertain. Test counts, code
  coverage, a healthy server, and an AI’s “all passed” summary are not
  sufficient evidence that the required behavior works.
- Direct AI to demonstrate that a relevant check rejects a known wrong result or
  controlled fault, then restore correct behavior. Explain that this establishes
  sensitivity to that fault, not correctness in every situation.
- Assess the actual user or client outcome with relevant existing evidence,
  including an applicable empty, loading, or error state. Identify a remaining
  gap when one exists; request another check only when it answers a different
  unresolved question.

## Guidance for the teaching AI

- Teach these as a first working foundation. Use a few examples to establish the
  distinctions; revisit advanced case generation, protocols, persistence, and
  concurrency when later modules make them useful.
- Do not teach “automated tests versus manual QA” or “unit tests prove the whole
  app.” Acceptance and exploratory testing can themselves examine the user’s
  outcome.
- Use a supplied database or HTTP client for the first injection example. Keep
  assertions focused on the promised behavior; only require a particular call
  when that interaction is itself part of the promise.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
