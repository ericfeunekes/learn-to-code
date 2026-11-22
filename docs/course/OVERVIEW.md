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

Pick the one that fits your job. You can take both.

- **Build an app.** Direct AI to build a useful tool for your work: it does a
  real job, has checks you trust and keeps its data safe. **Start here →**
  [Set up your workspace](SETUP.md), then [Plan your app](PLAN.md).
- **Understand code and changes.** Follow a team's software without building it,
  as a product manager or a risk and control reviewer. **Start here →**
  [the track guide](../understand-code/index.md). No project or setup needed.

Both tracks share [Module 0](00-project-and-git.md): Git, GitHub, reading what
changed and spotting agent mistakes.

On the build track, by the end you can build an app that's more than a throwaway
demo: it follows a spec, keeps its data safe, lets the right people in and can
be maintained. It won't be enterprise-grade, but it gives you a solid base to
keep learning. On the Understand track, by the end you can open a team's GitHub,
follow what changed and why, ask the questions that surface problems and risks,
test changes yourself and work alongside engineers.

After [setup](SETUP.md), use [What's next?](SETUP.md#whats-next) or ask your AI
“I'm set up. What's next?” New words are explained in
[Words you'll meet](#words-youll-meet).

## How long it takes

A module is usually three sessions: one to learn, one to build and one to
review, each about one to two hours. At about 3 hours a week, the build track
takes roughly 4 to 5 months from Plan your app to the capstone. You should have
a first version of your app running within the first month, at the end of Plan
your app. The Understand track has no build sessions, so it usually goes faster.

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

[Plan your app](PLAN.md) is the first step on the build track. It covers whether
to build at all, which platform and what it costs, your organization's data
rules, who will use it and who will maintain it, a one-page outline and a first
runnable version built with synthetic data. If you already have a project,
resume it rather than starting again. Setup isn't a gate; see
[where to start](CURRICULUM.md#where-to-start).

## The core modules

The [learning path](CURRICULUM.md#how-the-modules-reach-the-goal) shows how they
build on each other.

| Module                                                                                  | Intended outcome                                                                                                                         |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [Plan your app](PLAN.md)                                                                | Decide whether to build, on what and with which data, who will use it, outline it and run a first version.                               |
| [0. Directing an agent](00-project-and-git.md)                                          | Brief an agent, keep steps small, check what changed, catch common agent mistakes, and use Git and GitHub to keep, undo and follow work. |
| [1. Testing and QA](01-testing-and-qa.md)                                               | Define expected behavior, and judge useful checks and what the user actually gets.                                                       |
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

## Words you'll meet

Each word has a rough Excel or SharePoint equivalent. The match isn't exact, but
it's a good start.

- **Repository (repo):** a project folder whose whole history Git keeps. Like a
  SharePoint document library with version history on every file.
- **Commit:** a saved checkpoint of the whole project, with a note saying what
  changed. Like an entry in a file's Version history, but for every file at
  once, and only when you choose.
- **Branch:** a separate line of work where you try something without touching
  the main version. Like saving "Budget – new layout" as a copy, then folding
  the good parts back into the original.
- **Fork:** your own copy of someone else's repository on GitHub. Like copying a
  shared template into your own OneDrive: you change your copy, not theirs.
- **Clone:** a copy of a repository on your computer that stays linked to the
  online one. Like syncing a SharePoint library to your laptop.
- **Pull request:** a proposal to bring one branch's changes into another, with
  room for review and approval. Like sending a copy with tracked changes for
  someone to approve before it replaces the master.
- **Terminal:** a window where you type commands instead of clicking: Terminal
  on a Mac, Terminal or PowerShell on Windows. Like the formula bar: exact text
  in, a result out.
- **Test:** a small program that runs part of your app and compares the result
  with what you expected. Like a check cell that shows "OK" only when the totals
  reconcile.
- **Fixture:** the known starting data a test uses. Like a sample sheet of
  made-up rows you keep for checking formulas.
- **Schema:** the agreed shape of the data: which fields, what type and which
  are required. Like a SharePoint list's column settings, or data validation on
  each column.
- **Deployment:** putting a copy of your app somewhere other people can use it.
  Like publishing a workbook to a team site instead of keeping it on your
  desktop.
- **Environment:** one place the app runs, with its own settings and data: your
  computer, a test copy or the live copy. Like a practice workbook and the real
  one: same formulas, different data.
- **Synthetic data:** made-up data shaped like the real thing, with no real
  people or confidential details. Like the sample companies in Microsoft's
  templates.

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
