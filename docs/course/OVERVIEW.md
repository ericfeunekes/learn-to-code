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

The setup flow and Module 0, Directing an agent, are drafts for review. Module 1
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

## Choose your lane

Every learner follows the same modules. Your lane changes how you practise and
what counts as evidence, and you can switch at any time.

- **Direct agents.** You brief agents, decide what correct means and judge the
  result through behaviour and checks you run. You don't need to read code line
  by line. This suits product managers and anyone who wants to direct the work.
- **Write code.** You do all of that, and also read, trace and write some of the
  code yourself. Your build agent leaves named pieces for you to write and
  reviews them without rewriting them.
- **Both.** Start with directing and add code reading when you're curious.

Each outcome includes a check without AI: something you do on your own, with the
agent closed, to show the idea is yours. Tell your AI your lane when you start;
it's recorded in your learning log.

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

| Module                                                                                  | Intended outcome                                                                                                     |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [0. Directing an agent](00-project-and-git.md) — **Draft for review**                   | Brief an agent, keep steps small, check what changed, catch common agent mistakes, and use Git to keep or undo work. |
| [1. Testing and QA](01-testing-and-qa.md)                                               | Define expected behavior and judge useful checks and the actual client outcome.                                      |
| [2. Error handling and recovery](02-error-handling-and-recovery.md)                     | Diagnose failures and choose responses and recovery.                                                                 |
| [3. Persistence and shared state](03-persistence-and-shared-state.md)                   | Explain storage, authoritative values, caching, and preservation.                                                    |
| [4. Modeling data and behavior](04-modeling-data-and-behavior.md)                       | Describe identities, relationships, states, and rules.                                                               |
| [5. Typing, protocols, and data validation](05-typing-protocols-and-data-validation.md) | Express shapes and shared promises, and check actual data.                                                           |
| [6. Structuring a program](06-structuring-a-program.md)                                 | Explain responsibilities and dependencies, and plan coherent changes.                                                |
| [7. Concurrency](07-concurrency.md)                                                     | Reason about overlapping and repeated work and suitable controls.                                                    |

## Broad first, then deep

The course goes broad before it goes deep. Each module gives you a working grasp
of its ideas, enough to recognise them, say why they matter and judge an agent's
use of them in your own project. Later modules come back to the same ideas in
harder situations, and that's where the depth comes from.

So you don't need to master an idea before moving on. Test doubles and
dependency injection, for example, appear early in Module 1 so you know what
they are and why an agent reaches for them. Modules 3, 5 and 6 return to them
when storage, interfaces and program structure make them matter more.

Work at your own pace. After the core, choose from
[future directions](CURRICULUM.md#future-directions) according to what you want
to build.

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
