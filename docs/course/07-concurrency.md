---
title: Module 7 — Concurrency
description: Reason about overlapping and repeated work and suitable controls.
slug: /modules/concurrency
source_file: 07-concurrency.md
---

# Module 7 — Concurrency

Reason about overlapping and repeated work using the app’s rules and shared
resources. Direct AI to expose a relevant interaction and assess the smallest
adequate protection.

## Learning objectives

By the end of this module, you should be able to:

### 7.1 Distinguish concurrency, parallelism, and scheduling

- Explain concurrency as work whose progress overlaps, parallelism as work
  executing at the same time, and scheduling as deciding when work runs. Explain
  how concurrent work can interleave without running in parallel.
- Distinguish asynchronous work, threads, and processes in the app. Explain how
  they can coexist and what they share or keep separate; they are neither
  interchangeable nor mutually exclusive.
- Ask AI to trace a plausible overlap, including one user repeating an action or
  starting another before the first finishes. Predict how scheduling or
  completion order could affect the result.

### 7.2 Explain and expose a race

- State an invariant—a rule that must remain true—and identify actions whose
  reads, writes, or completion order could violate it. Describe a concrete
  interleaving, such as two actions reading the same old value before either
  writes.
- Identify the shared boundary: browser state, a process, a file, a database, or
  another service. Explain which tabs, requests, processes, or machines reach it
  and which participants a test exercises.
- Direct AI to coordinate the relevant steps deliberately against that boundary
  and observe the race or the existing safeguard. Explain why an uncontrolled
  stress run with no observed failure does not establish safety.

### 7.3 Compare locking, atomic operations, transactions, and isolation

- Explain how a lock limits participation in protected work, an atomic operation
  makes a supported operation indivisible, and a transaction commits
  participating changes together or not at all. Distinguish that all-or-nothing
  guarantee from isolation, which governs interference between concurrent
  transactions.
- Assess the scope of each candidate control. Explain why a process-local lock
  may miss other writers, why a separate check followed by an update can race,
  and when an atomic check-and-update can protect the rule.
- Direct AI to compare suitable controls, choose or retain the smallest adequate
  one, and test the invariant under a controlled overlap. Account for every
  relevant writer and the actual isolation behavior rather than assuming any
  transaction prevents every race.

### 7.4 Distinguish safe retry and idempotency

- Explain what may happen when an operation loses its response, and distinguish
  a retry from a new intended action. Define idempotency as repetition having
  the same intended effect as one successful application; it promises neither
  identical responses nor exactly-once execution.
- Distinguish preserving a state rule from preventing a repeated effect. Explain
  why a lock or disabled button alone may allow a later retry, another caller,
  or a restart to repeat the effect.
- Direct AI to test a duplicate or lost-response case at the boundary that owns
  the effect. Explain how the design identifies the same operation and whether
  any deduplication state must survive a restart; require such state only when
  the operation’s guarantee needs it.

## Guidance for the teaching AI

- Preserve live safeguards. A controlled demonstration may establish why sound
  protection works without requiring a new control.
- Connect ambiguous responses to Module 2 and remembered operations to Module 3.
  Keep concurrency control and duplicate-effect handling distinct even when one
  operation needs both.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
