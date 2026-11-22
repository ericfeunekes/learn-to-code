---
title: Learn to Build Software — Curriculum
description: >-
  The core modules, how they reach the goal, and directions for further
  learning.
slug: /learning-path
source_file: CURRICULUM.md
---

# Learn to Build Software — Curriculum

Start with [workspace setup](SETUP.md), then choose from
[What's next?](SETUP.md#whats-next). Project definition in
[the overview](OVERVIEW.md#choose-and-outline-your-project) is separate from
[Module 0 — Directing an agent](00-project-and-git.md), which includes Git and
GitHub. Setup does not require either learning activity. Module 1 contains the
agreed learning objectives. The setup flow, Module 0 and Modules 2–8 are drafts
with detailed outcomes, awaiting review by the course author before they are
treated as agreed.

## Core modules

Learn enough to explain and apply an idea, then revisit it for depth. A module
can take more than one session. Use the selected page to identify what the
learner can demonstrate and what evidence would show it. The
[AI guide](AI-TEACHER.md) explains the purpose of the outlines, learning records
and evidence review. The learner chooses how to learn; no fixed teaching method
or module sequence is required. A draft module is not yet an agreed set of
learning objectives.

0. [Directing an agent](00-project-and-git.md) — **Draft for review**
1. [Testing and QA](01-testing-and-qa.md)
2. [Debugging, errors and recovery](02-error-handling-and-recovery.md) — **Draft
   for review**
3. [Persistence and shared state](03-persistence-and-shared-state.md) — **Draft
   for review**
4. [Modeling data and behavior](04-modeling-data-and-behavior.md) — **Draft for
   review**
5. [Typing, protocols, and data validation](05-typing-protocols-and-data-validation.md)
   — **Draft for review**
6. [Structuring a program](06-structuring-a-program.md) — **Draft for review**
7. [Concurrency](07-concurrency.md) — **Draft for review**
8. [Build and learn on your own](08-build-and-learn-on-your-own.md) — **Draft
   for review**

## How the modules reach the goal

The goal is that you can direct AI to build most of what you want, and direct
your own learning after the course. Each module answers one question you'll face
when an agent builds for you:

| Module                                    | The question it answers                                                  |
| ----------------------------------------- | ------------------------------------------------------------------------ |
| 0. Directing an agent                     | How do I brief an agent, keep it on track and undo its mistakes?         |
| 1. Testing and QA                         | How do I know it's right?                                                |
| 2. Debugging, errors and recovery         | It broke. Why, and what should happen instead?                           |
| 3. Persistence and shared state           | Where does my data live, and will it survive?                            |
| 4. Modeling data and behavior             | What exactly should it do? How do I write that down?                     |
| 5. Typing, protocols, and data validation | What can I trust, especially from outside?                               |
| 6. Structuring a program                  | How do the parts fit, and how do I change several at once?               |
| 7. Concurrency                            | What happens when things overlap or repeat?                              |
| 8. Build and learn on your own            | Can I do all of this without a teacher, and learn the next thing myself? |

Modules 0 and 1 are the foundation: every later module uses the brief, the
small-step loop and the habit of checking evidence. Modules 2 to 7 each add one
kind of problem agents commonly get wrong. Module 8 puts them together in a
capstone and teaches you how to keep learning.

Four strands run through every module, so each idea comes back several times at
more depth:

- **Spotting agent mistakes.** Module 0 lists the general ones, such as claiming
  results it didn't observe or weakening a test. Each later module adds the
  mistakes specific to its topic, such as swallowing errors (2), wiping data
  (3), silencing the type checker (5) or adding a sleep to fix a race (7).
- **Checking without AI.** Every outcome has a check you do with the agent
  closed, so the idea is yours, not the agent's.
- **Security and private data.** Secrets out of prompts and commits (0), out of
  logs (2), out of saved fixtures (3), untrusted input and injection (5),
  unvetted packages (6), and a safety pass before sharing (8).
- **Reading code.** In the write-code lane, each module adds a code-reading
  part: trace a function, read a stack trace, follow a value to storage, find
  where a rule is enforced, read a multi-file diff.

The order is a suggestion. Module 2 is a good next step after Module 1 because
something will break soon. If your app is about data and rules, Module 4 works
well before Module 3.

## Future directions

Choose a direction when it serves your app or something you want to build next.
These are possible future directions, not developed modules.
[Module 8](08-build-and-learn-on-your-own.md) shows how to learn any of them
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
[Module 8](08-build-and-learn-on-your-own.md) turns this into outcomes: learning
a topic with an agent while checking its claims (8.3), and writing your own
outcomes and evidence (8.4).

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
