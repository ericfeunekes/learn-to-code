---
title: Learn to Build Software
description: >-
  Two tracks: build a useful work app by directing AI, or understand a team's
  code and changes.
slug: /
source_file: OVERVIEW.md
---

# Learn to Build Software

Learn to understand, question, and improve software by directing AI. AI can
write the code; your work is to understand the relevant concepts, make choices,
and judge the result.

## Two tracks

- **Build an app.** For a business user who wants to direct AI to build a tool
  for their work. By the end you can build an app that's more than a throwaway
  demo: it does a real job, follows a spec, has checks you trust, keeps its data
  safe, lets the right people in and can be maintained. It won't be
  enterprise-grade, but it gives you a solid base to keep learning. Start with
  [workspace setup](SETUP.md) and [Plan your app](PLAN.md).
- **[Understand code and changes](../understand-code/index.md).** For product
  managers, risk and control reviewers, and anyone who needs to follow a team's
  software without building it. By the end you can open a team's GitHub, know
  where to look, follow what changed and why, ask the questions that surface
  problems and risks, test changes yourself and contribute through the team's
  process. You'll be able to work alongside engineers, not just review their
  work. No project or setup is needed to start.

Both tracks share [Module 0](00-project-and-git.md): Git, GitHub, reading what
changed and spotting agent mistakes. You can take both.

On the build track, after [setup](SETUP.md), use
[What's next?](SETUP.md#whats-next) or ask your AI “I'm set up. What's next?”
The [AI guide](AI-TEACHER.md) explains outcome and evidence context.

## What you will be able to do

On the build track, you should be able to:

- Decide whether something should be built at all, on what, and with which data,
  within your organization's rules.
- Turn intended behavior into a spec and focused AI requests with clear
  constraints and expected results.
- Explain the relevant behavior, data, states, and program structure well enough
  to question an implementation.
- Compare plausible choices, defend a decision, and direct a small coherent
  improvement while preserving behavior that should stay the same.
- Judge tests and other evidence, including what they establish about failures,
  saved state, and overlapping or repeated actions.
- Share an app safely with the people who need it, and keep it running or hand
  it off.
- Investigate an unfamiliar concept with AI, check its explanation, and plan a
  useful next learning step.

## Choose your lane

On the build track, every learner follows the same modules. Your lane changes
how you practise and what counts as evidence, and you can switch at any time.

- **Direct agents.** You brief agents, decide what correct means and judge the
  result through behaviour and checks you run. You don't need to read code line
  by line, and the more programmer-heavy outcomes stay at a recognize-and-ask
  level. This suits business users and anyone who wants to direct the work.
- **Write code.** You do all of that, and also read, trace and write some of the
  code yourself. Your build agent leaves named pieces for you to write and
  reviews them without rewriting them.
- **Both.** Start with directing and add code reading when you're curious.

Each outcome includes a check without AI: something you do on your own, with the
agent closed, to show the idea is yours. Tell your AI your lane when you start;
it's recorded in your learning log.

## Choose and outline your project

[Plan your app](PLAN.md) is the first step on the build track, separate from the
Git/GitHub learning prompt. It covers whether to build at all, which platform
and what it costs, your organization's data rules, who will use it and who will
maintain it, and a one-page outline. If you already have a project, resume it
rather than starting again.

If you do not yet have a working app, direct AI to make the smallest runnable
version you can use for the testing module. Learn setup tools as needed.

## The core modules

The [learning path](CURRICULUM.md#how-the-modules-reach-the-goal) shows how they
build on each other.

| Module                                                                                  | Intended outcome                                                                                                                         |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [Plan your app](PLAN.md)                                                                | Decide whether to build, on what and with which data, who will use it, and outline the first version.                                    |
| [0. Directing an agent](00-project-and-git.md)                                          | Brief an agent, keep steps small, check what changed, catch common agent mistakes, and use Git and GitHub to keep, undo and follow work. |
| [1. Testing and QA](01-testing-and-qa.md)                                               | Define expected behavior and judge useful checks and the actual client outcome.                                                          |
| [2. Modeling data and behavior](02-modeling-data-and-behavior.md)                       | Describe the things, states and rules in your app, and turn them into a spec an agent can build from.                                    |
| [3. Debugging, errors and recovery](03-error-handling-and-recovery.md)                  | Direct a diagnosis from evidence, and choose how the app responds and recovers.                                                          |
| [4. Persistence and shared state](04-persistence-and-shared-state.md)                   | Explain where data lives, which copy is trusted, and how saved data survives changes.                                                    |
| [5. Typing, protocols, and data validation](05-typing-protocols-and-data-validation.md) | Check outside input at the boundary, including basic security, and see what types do and don't check.                                    |
| [6. Structuring a program](06-structuring-a-program.md)                                 | Explain how the parts fit, plan changes across them, and keep the project understandable to the next agent.                              |
| [7. Concurrency](07-concurrency.md)                                                     | Spot where work overlaps or repeats, such as a double submit, and choose the smallest protection.                                        |
| [8. Share, run and maintain your app](08-share-run-and-maintain.md)                     | Choose where it runs, control who gets in, release changes safely, and keep it running or hand it off.                                   |
| [9. Build and learn on your own](09-build-and-learn-on-your-own.md)                     | Plan, direct, ship and review a useful app yourself, then learn a new topic with an agent and set your own next outcomes.                |

## Broad first, then deep

The course goes broad before it goes deep. Each module gives you a working grasp
of its ideas, enough to recognise them, say why they matter and judge an agent's
use of them in your own project. Later modules come back to the same ideas in
harder situations, and that's where the depth comes from.

So you don't need to master an idea before moving on. Test doubles and
dependency injection, for example, appear early in Module 1 so you know what
they are and why an agent reaches for them. Modules 4, 5 and 6 return to them
when storage, interfaces and program structure make them matter more. The same
goes for sharing and maintenance: Plan your app gives them a first look, and
Module 8 goes deeper.

Work at your own pace. Module 9 ends the core by handing over to you: a capstone
you run yourself, and a way to learn whatever you need next. Then choose from
[future directions](CURRICULUM.md#future-directions) according to what you want
to build.

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
