---
title: Module 6 — Structuring a program
description:
  'Explain responsibilities and dependencies, and plan coherent changes.'
slug: /modules/structuring-a-program
source_file: 06-structuring-a-program.md
---

# Module 6 — Structuring a program

Follow an action through the app to examine its responsibilities and
dependencies. Use that understanding to direct a coherent change, or defend a
sound existing structure.

## Learning objectives

By the end of this module, you should be able to:

### 6.1 Trace components, responsibilities, and flow

- Trace one user action or event from its entry point to its observable result.
  Explain what each relevant component does, what data and control pass between
  components, and where a write or external call occurs.
- Distinguish a component’s responsibility from the file that contains it.
  Identify the dependencies it needs and explain where a failure could interrupt
  the flow or leave work partly completed.
- Direct AI to trace or diagram this path, then check it against code and
  observations. Connect it to earlier modules’ storage locations, authoritative
  data, and rules.

### 6.2 Assess cohesion, coupling, and shared-rule ownership

- Explain cohesion as how closely a component’s responsibilities belong
  together, and coupling as how much one component depends on another’s details.
  Use a concrete change to show how those relationships help or hinder
  understanding and maintenance.
- Identify the owner of an important shared rule and every relevant path that
  must obey it. Distinguish repeated code that represents the same rule from
  similar-looking code that serves different purposes and may change
  independently.
- Ask AI to compare keeping the existing boundaries with one plausible
  alternative. Decide whether a focused change would reduce a demonstrated
  problem, accounting for the extra indirection or coordination it introduces;
  retain the existing design when it serves the app.

### 6.3 Explain dependency direction and use interfaces

- Explain which component calls or depends on which other component, and which
  details the caller must know. Distinguish reliance on a concrete
  implementation from reliance on an agreed contract for operations and
  behavior.
- Revisit dependency injection: explain how supplying a dependency from outside
  lets the caller use a real implementation or a controlled substitute.
  Distinguish how the dependency is supplied from what its interface promises.
- Direct AI to show the current dependency arrangement and, where useful, a
  small interface-based alternative. Explain what change or test the alternative
  would make easier and whether that benefit justifies it over the simpler
  concrete dependency.

### 6.4 Plan and assess a coherent change across interfaces

- State a small useful change, its limits, and relevant behavior that must
  remain the same. Identify affected components, callers, and promises,
  including accepted inputs, outputs, failure behavior, and stored or exchanged
  formats.
- Direct AI to make a focused edit from that plan. Inspect the diff and explain
  how the changed parts fit together, including any caller or reader that must
  adapt when a promise changes.
- Obtain realistic checks across changed boundaries and checks of preserved
  behavior. Explain which evidence establishes the outcome and detects an
  incompatible interface or format change.

## Guidance for the teaching AI

- Teach dependency direction through a real caller before introducing
  architecture names. Neither an interface nor dependency injection is
  automatically an improvement.
- Connect rule ownership to validation and state modeling. A tidy folder
  structure does not establish that every path enforces the rule.
- Scope verification to the actual change: a diagram explains structure, while
  behavior and boundary checks establish that the wiring works.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
