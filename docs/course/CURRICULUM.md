---
title: Learn to Build Software — Curriculum
description: The seven core modules and directions for further learning.
slug: /learning-path
source_file: CURRICULUM.md
---

# Learn to Build Software — Curriculum

Start with [workspace setup](SETUP.md), then choose from
[What's next?](SETUP.md#whats-next). Project definition in
[the overview](OVERVIEW.md#choose-and-outline-your-project) is separate from
[Module 0 — Git and GitHub for your work](00-project-and-git.md). Setup does not
require either learning activity. The setup flow and Module 0 are drafts for
review. Module 1 contains the current detailed learning objectives. Modules 2–7
are being built, with detailed outcomes and examples to be developed with the
course author and reviewed before readiness.

## Core modules

Learn enough to explain and apply an idea, then revisit it for depth. A module
can take more than one session. Use the selected page to identify what the
learner can demonstrate and what evidence would show it. The
[AI guide](AI-TEACHER.md) explains the purpose of the outlines, learning records
and evidence review. The learner chooses how to learn; no fixed teaching method
or module sequence is required. A future outline is not a completed set of
learning objectives.

0. [Git and GitHub for your work](00-project-and-git.md) — **Draft for review**
1. [Testing and QA](01-testing-and-qa.md)
2. [Error handling and recovery](02-error-handling-and-recovery.md) — **Being
   built**
3. [Persistence and shared state](03-persistence-and-shared-state.md) — **Being
   built**
4. [Modeling data and behavior](04-modeling-data-and-behavior.md) — **Being
   built**
5. [Typing, protocols, and data validation](05-typing-protocols-and-data-validation.md)
   — **Being built**
6. [Structuring a program](06-structuring-a-program.md) — **Being built**
7. [Concurrency](07-concurrency.md) — **Being built**

## Future directions

Choose a direction when it serves your app or something you want to build next.
These are possible future directions, not developed modules.

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

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
