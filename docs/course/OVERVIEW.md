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

Module 1 has agreed learning objectives. The setup flow, Module 0 and Modules
2–8 are drafts for review: each has detailed outcomes, checks without AI and
practice tasks, but the course author hasn't yet reviewed them as the agreed
course. You can learn from them now; just don't treat their outcomes as final
completion criteria.

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

Module 1 has agreed objectives. The other modules are drafts for review. The
[learning path](CURRICULUM.md#how-the-modules-reach-the-goal) shows how they
build on each other.

| Module                                                                                                         | Intended outcome                                                                                                              |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [0. Directing an agent](00-project-and-git.md) — **Draft for review**                                          | Brief an agent, keep steps small, check what changed, catch common agent mistakes, and use Git to keep or undo work.          |
| [1. Testing and QA](01-testing-and-qa.md)                                                                      | Define expected behavior and judge useful checks and the actual client outcome.                                               |
| [2. Debugging, errors and recovery](02-error-handling-and-recovery.md) — **Draft for review**                  | Direct a diagnosis from evidence, and choose how the app responds and recovers.                                               |
| [3. Persistence and shared state](03-persistence-and-shared-state.md) — **Draft for review**                   | Explain where data lives, which copy is trusted, and how saved data survives changes.                                         |
| [4. Modeling data and behavior](04-modeling-data-and-behavior.md) — **Draft for review**                       | Describe the things, states and rules in your app, and turn them into a spec an agent can build from.                         |
| [5. Typing, protocols, and data validation](05-typing-protocols-and-data-validation.md) — **Draft for review** | Express data and promises in code, and check outside input at the boundary, including basic security.                         |
| [6. Structuring a program](06-structuring-a-program.md) — **Draft for review**                                 | Explain how the parts fit, plan changes across them, and keep the project understandable to the next agent.                   |
| [7. Concurrency](07-concurrency.md) — **Draft for review**                                                     | Spot where work overlaps or repeats, show it on purpose, and choose the smallest protection.                                  |
| [8. Build and learn on your own](08-build-and-learn-on-your-own.md) — **Draft for review**                     | Plan, direct and review a larger piece of work yourself, then learn a new topic with an agent and set your own next outcomes. |

## Broad first, then deep

The course goes broad before it goes deep. Each module gives you a working grasp
of its ideas, enough to recognise them, say why they matter and judge an agent's
use of them in your own project. Later modules come back to the same ideas in
harder situations, and that's where the depth comes from.

So you don't need to master an idea before moving on. Test doubles and
dependency injection, for example, appear early in Module 1 so you know what
they are and why an agent reaches for them. Modules 3, 5 and 6 return to them
when storage, interfaces and program structure make them matter more.

Work at your own pace. Module 8 ends the core by handing over to you: a capstone
you run yourself, and a way to learn whatever you need next. Then choose from
[future directions](CURRICULUM.md#future-directions) according to what you want
to build.

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
