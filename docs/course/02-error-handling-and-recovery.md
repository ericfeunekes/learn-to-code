---
title: Module 2 — Error handling and recovery
description: Diagnose failures and choose responses and recovery.
slug: /modules/error-handling-and-recovery
source_file: 02-error-handling-and-recovery.md
---

# Module 2 — Error handling and recovery

Testing gives you expected behavior; now explain failures from evidence and
decide what the app should do next. Start with an error source your app has,
then revisit recovery as you learn about saved state and concurrency.

## Learning objectives

By the end of this module, you should be able to:

### 2.1 Diagnose a failure from evidence

- Explain the difference between an observed symptom, a proposed cause, and
  evidence supporting that cause. Use errors, logs, visible state, or inspected
  values to describe what happened and where the failure appeared; an error’s
  location may differ from its original cause.
- Direct AI to reproduce a failure and test a specific explanation with an
  observation that could contradict it. Explain why the result supports or
  weakens that explanation, then direct a narrow repair when needed and rerun
  the original case.

### 2.2 Choose how to handle a failure

- Distinguish invalid input the caller can correct, a temporarily unavailable
  dependency, and a defect in the app. Decide what should stop, what can
  continue, and where an error should be handled or passed to a caller that can
  make the decision.
- Explain when retrying could help and when it would repeat invalid work or an
  unwanted effect. Set meaningful limits on waiting and retries, including when
  to stop and tell the user. Direct AI to demonstrate an applicable failure
  response and explain the choice against a plausible alternative.

### 2.3 Make failure understandable and observable

- Distinguish feedback that helps a user act from diagnostic information that
  helps explain a failure. Decide what the user needs to know about the outcome,
  preserved work, and available next action, without presenting an internal
  traceback as the whole response.
- Direct AI to demonstrate both the user-visible failure and the diagnostic
  evidence. Explain how context such as the failed operation, relevant values,
  and timing helps locate the problem, and identify credentials or private data
  that must stay out of messages and logs.

### 2.4 Reason about interruption and recovery

- Explain what completed, what did not, and what remains uncertain when an
  operation stops partway through. Distinguish an operation failing from its
  reply being lost: a missing reply does not establish that no effect occurred.
- Decide whether to retry, resume, undo, or investigate before acting, based on
  the risk of lost work or repeated effects. Direct AI to demonstrate an
  applicable interruption and recovery with disposable data; explain the
  resulting state and any uncertainty that remains.

## Guidance for the teaching AI

- A file operation, calculation, or input error can supply the example; an
  external service is not required.
- Keep diagnosis, user feedback, and recovery distinct. A clear message does not
  establish that recovery preserved the data.
- Identify recovery questions that need durable state, valid transitions, or
  coordination between writers; revisit them in Modules 3, 4, and 7 without
  requiring those mechanisms now.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
