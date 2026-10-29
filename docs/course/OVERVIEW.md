---
title: Learn to Build Software
description: Course outcomes and choices after workspace setup.
slug: /
source_file: OVERVIEW.md
---

# Learn to Build Software

Learn to understand, question, and improve software by directing AI on an app
you want to use. AI can write the code; your work is to understand the relevant
concepts, make choices, and judge the result.

Start with [workspace setup](SETUP.md): fork or reuse the course repository,
clone it locally and open it in your AI client. No app choice or full Git lesson
is required to finish setup, though you can ask about a step as it happens.

Then use [What's next?](SETUP.md#whats-next) on the site, or ask your AI “I'm
set up. What's next?” Choose project definition, Git/GitHub understanding or a
next step on existing work. The [AI guide](AI-TEACHER.md) explains outcome and
evidence context.

## Course status

The setup flow and Module 0 Git/GitHub outcomes are drafts for review. Module 1
has detailed learning objectives. Modules 2–7 are being built and currently show
broad intended coverage. Their objectives and examples will be developed with
the course author and reviewed before they are presented as ready.

## What you will be able to do

You should be able to:

- Turn intended behavior into focused AI requests with clear constraints and
  expected results.
- Explain the relevant behavior, data, states, and program structure well enough
  to question an implementation.
- Compare plausible choices, defend a decision, and direct a small coherent
  improvement while preserving behavior that should stay the same.
- Judge tests and other evidence, including what they establish about failures,
  saved state, and overlapping or repeated actions.
- Investigate an unfamiliar concept with AI, check its explanation, and plan a
  useful next learning step.

## Choose and outline your project

This is one option after [setup](SETUP.md), separate from the Git/GitHub
learning prompt. Ask AI:

```text
Help me choose a small useful app and define its first behavior.
```

If you already have a project, resume it rather than starting again.

Choose a useful, low-stakes app, including an existing one. Define who it is
for, its core behavior, the smallest first scope, and what success would look
like. Write a short plain-language outline.

If you do not yet have a working app, direct AI to make the smallest runnable
version you can use for the testing module. Learn setup tools as needed.

## The core modules

Module 1 sets out detailed learning objectives. The later pages describe
intended coverage and are marked **Being built**.

| Module                                                                                  | Intended outcome                                                                            |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [0. Git and GitHub for your work](00-project-and-git.md) — **Draft for review**         | Understand enough about copies, checkpoints, sharing and merging to direct AI on your work. |
| [1. Testing and QA](01-testing-and-qa.md)                                               | Define expected behavior and judge useful checks and the actual client outcome.             |
| [2. Error handling and recovery](02-error-handling-and-recovery.md)                     | Diagnose failures and choose responses and recovery.                                        |
| [3. Persistence and shared state](03-persistence-and-shared-state.md)                   | Explain storage, authoritative values, caching, and preservation.                           |
| [4. Modeling data and behavior](04-modeling-data-and-behavior.md)                       | Describe identities, relationships, states, and rules.                                      |
| [5. Typing, protocols, and data validation](05-typing-protocols-and-data-validation.md) | Express shapes and shared promises, and check actual data.                                  |
| [6. Structuring a program](06-structuring-a-program.md)                                 | Explain responsibilities and dependencies, and plan coherent changes.                       |
| [7. Concurrency](07-concurrency.md)                                                     | Reason about overlapping and repeated work and suitable controls.                           |

Learn broadly first, then revisit ideas for depth as they become useful. Work at
your own pace. After the core, choose from
[future directions](CURRICULUM.md#future-directions) according to what you want
to build.

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
