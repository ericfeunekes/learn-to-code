---
title: Learn to Build Software — Curriculum
description: >-
  The core modules, how they reach the goal, and directions for further
  learning.
slug: /learning-path
source_file: CURRICULUM.md
---

# Learn to Build Software — Curriculum

This page covers the build track. The
[Understand code and changes](../understand-code/index.md) track has its own
seven-module path for following a team's software without building it. Both
share [Module 0](00-project-and-git.md).

## Where to start

Start with [workspace setup](SETUP.md), then choose from
[What's next?](SETUP.md#whats-next). Setup isn't a gate and neither is any
lesson: you don't need an app idea or a Git lesson to finish setup, and you
don't need to finish Module 0 before planning your app. [Plan your app](PLAN.md)
and [Module 0 — Directing an agent](00-project-and-git.md), which includes Git
and GitHub, are separate choices, and you can do them in either order. The usual
order is Plan your app, ending with a first runnable version, then Module 0 on
that version, then Module 1. Each step runs through the
[practice loop](PRACTICE.md#the-practice-loop).

## Core modules

Learn enough to explain and apply an idea, then revisit it for depth. A module
can take more than one session. There's no fixed module sequence: you choose
what to learn next, and your teaching agent asks questions rather than
lecturing. The [Teaching guide](AI-TEACHER.md) explains how the agents use the
outcomes and your learning log.

- [Plan your app](PLAN.md)

0. [Directing an agent](00-project-and-git.md)
1. [Testing and QA](01-testing-and-qa.md)
2. [Modeling data and behavior](02-modeling-data-and-behavior.md)
3. [Debugging, errors and recovery](03-error-handling-and-recovery.md)
4. [Persistence and shared state](04-persistence-and-shared-state.md)
5. [Typing, protocols, and data validation](05-typing-protocols-and-data-validation.md)
6. [Structuring a program](06-structuring-a-program.md)
7. [Concurrency](07-concurrency.md)
8. [Share, run and maintain your app](08-share-run-and-maintain.md)
9. [Build and learn on your own](09-build-and-learn-on-your-own.md)

## How the modules reach the goal

The goal is that a business user can direct AI to build a useful app for their
work that's more than a throwaway demo, and can direct their own learning after
the course. It won't be enterprise-grade, but it's a solid base. Each module
answers one question you'll face when an agent builds for you:

| Module                                    | The question it answers                                                  |
| ----------------------------------------- | ------------------------------------------------------------------------ |
| Plan your app                             | Should I build this at all, on what, with which data, and for whom?      |
| 0. Directing an agent                     | How do I brief an agent, keep it on track and undo its mistakes?         |
| 1. Testing and QA                         | How do I know it's right?                                                |
| 2. Modeling data and behavior             | What exactly should it do? How do I write that down?                     |
| 3. Debugging, errors and recovery         | It broke. Why, and what should happen instead?                           |
| 4. Persistence and shared state           | Where does my data live, and will it survive?                            |
| 5. Typing, protocols, and data validation | What can I trust, especially from outside?                               |
| 6. Structuring a program                  | How do the parts fit, and how do I change several at once?               |
| 7. Concurrency                            | What happens when things overlap or repeat?                              |
| 8. Share, run and maintain your app       | How do other people use it safely, and who keeps it running?             |
| 9. Build and learn on your own            | Can I do all of this without a teacher, and learn the next thing myself? |

Plan your app and Modules 0 and 1 are the foundation: every later module uses
the plan, the brief, the small-step loop and the habit of checking evidence.
Module 1 takes its expected results from your Plan outline or an agreed
requirement. Module 2 then turns the plan into a proper spec, early, because
"what should it do?" comes before most other questions. Modules 3 to 7 each add
one kind of problem agents commonly get wrong. Module 8 takes the app to its
users, and Module 9 puts everything together in a capstone and teaches you how
to keep learning.

In the direct-agents lane, the most programmer-heavy outcomes, such as test
doubles (1.5, 1.6), types (5.1 to 5.3), program structure (6.2, 6.3) and the
theory of concurrency (7.1, 7.3), stay at a recognize-and-ask level. Where a
module's lane section names focus outcomes, use it; otherwise every outcome is
in scope for both lanes and only the evidence differs.

Four strands run through every module, so each idea comes back several times at
more depth:

- **Spotting agent mistakes.** Module 0 lists the general ones, such as claiming
  results it didn't observe or weakening a test. Each later module adds the
  mistakes specific to its topic, such as choosing a stack silently (Plan),
  swallowing errors (3), wiping data (4), silencing the type checker (5), adding
  a sleep to fix a race (7) or deploying publicly by default (8).
- **Checking without AI.** Every outcome has a check you do with the agent
  closed, so the idea is yours, not the agent's.
- **Work data, policy and security.** Your organization's data rules and
  approved tools (Plan, 0), secrets out of prompts and commits (0), out of logs
  (3), out of saved fixtures (4), untrusted input and injection (5), unvetted
  packages (6), access control and secrets in deployment (8), and a safety pass
  before sharing (9).
- **Reading code.** In the write-code lane, each module adds a code-reading
  part: trace a function, read a stack trace, follow a value to storage, find
  where a rule is enforced, read a multi-file diff.

The order is a suggestion. Module 3 is a good next step whenever something
breaks. Module 8 can be short while only you use the app, but the capstone needs
at least one colleague to use it.

Your app grows as you go. Where you can, each module's practice task uses the
next feature from your Plan outline, merged into `main` after review, so by
Module 9 you have one app worth sharing rather than a set of drills.

## Future directions

Choose a direction when it serves your app or something you want to build next.
These are possible future directions, not developed modules.
[Module 9](09-build-and-learn-on-your-own.md) shows how to learn any of them
with an agent.

| Direction                                              | When it is useful                                                                              | What to understand or do                                                                                                                                                                                      |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Technology and platform choices                        | A new project or an actual limitation makes the current tools worth reconsidering.             | Compare languages, frameworks, storage, and platforms against the app’s constraints, maintenance needs, portability, and cost; name what would change the choice.                                             |
| User experience, accessibility, and front-end behavior | People struggle to find, understand, or complete actions, or the app needs richer interaction. | Investigate user journeys, feedback, keyboard and assistive access, responsive behavior, and interaction state; check the experience with representative use.                                                 |
| APIs, integrations, and webhooks                       | The app exchanges data or actions with another service.                                        | Understand requests, responses, authentication, limits, delivery and retry behavior, compatibility, and who owns each promise.                                                                                |
| Security, privacy, and access control                  | The app handles private information, gains users, or becomes reachable by others.              | Distinguish authentication from authorization; identify sensitive data and entry points; assess misuse and enforce access at the responsible boundary.                                                        |
| Deployment, hosting, and environments                  | You want the app to run beyond its current development environment.                            | Compare hosting choices, configure runtime and secrets, separate environments, understand exposure, and reproduce the setup.                                                                                  |
| CI/CD, builds, releases, and rollback                  | Changes need repeatable checks and a controlled path into use.                                 | Understand how code is built and checked, how a tested version reaches users, and what rollback can and cannot restore when code and data change.                                                             |
| Databases, queries, indexes, and migrations            | Data relationships, query speed, integrity, or changes become more demanding.                  | Examine database constraints, query plans, indexes, transaction choices, and migration and restoration strategies.                                                                                            |
| Data pipelines and data quality                        | The app ingests, transforms, or combines data repeatedly.                                      | Define data quality, trace lineage, handle late or duplicate inputs, and reprocess safely without losing the meaning of earlier results.                                                                      |
| Performance, scaling, and deeper caching               | Measured latency, resource use, or workload limits the app.                                    | Find the actual bottleneck, assess capacity and cost, choose an improvement, and test freshness and correctness alongside speed. Explore coordination across multiple machines when the workload requires it. |
| Long-running and background work                       | Work must continue beyond a request or take place on a schedule.                               | Apply state, persistence, error handling, and concurrency to jobs, queues, retries, cancellation, and visible progress.                                                                                       |
| Operations, monitoring, backups, and restoration       | The app must keep working and you need to notice and recover from failures.                    | Choose useful signals, investigate incidents, preserve needed data, and demonstrate restoration under realistic conditions.                                                                                   |
| Collaboration, version control, and code review        | Others contribute, or changes need a clearer review and history.                               | Use branches and changesets deliberately, resolve conflicts, review intent and evidence, and communicate assumptions and responsibilities.                                                                    |
| Mobile, desktop, and offline use                       | The app needs device capabilities, local installation, or work without a connection.           | Investigate platform constraints, local state, synchronization, conflicts, packaging, and update behavior.                                                                                                    |
| AI features and evaluation                             | The app itself generates, retrieves, classifies, or acts using AI.                             | Define useful behavior and failure cases, build representative evaluations, inspect uncertainty and tool effects, and assess cost, privacy, and quality.                                                      |

## Plan your next learning step

Name what you want your app to do and what you do not yet understand. Ask AI to
help identify the relevant concepts and compare possible approaches. Choose one
small objective and an experiment with a predicted result. Use the core skills
to inspect the implementation, test alternatives, and decide what you have
learned. Record the remaining questions and choose the next step from them.
[Module 9](09-build-and-learn-on-your-own.md) turns this into outcomes: learning
a topic with an agent while checking its claims (9.3), and writing your own
outcomes and evidence (9.4).

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
