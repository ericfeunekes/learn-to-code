# Learning path — two ways to work with code

Start with [shared Module 0 — GitHub for everyone](00-project-and-git.md). It
introduces repositories, files, history, branches, PRs, issues, and releases
without requiring a new project. Then choose a track. Existing understanding can
support a shorter route; revisit a concept when it helps. [Setup](SETUP.md)
explains the different workspace needs.

## Shared foundation

Module 0 helps you identify a repository and version, understand common GitHub
artifacts, and direct an agent without confusing a file view with a deployment.
Use what you already know and revisit a concept when it helps.

## Core modules

Each track names capabilities and observable evidence. The page is a reference
for short teaching exchanges: start with general concepts, use a small concrete
example, then apply it independently and return evidence. Add syntax or
framework detail when needed. A generated answer alone leaves learner judgment
unassessed. Read [the teaching guide](AI-TEACHER.md) for calibrated review.

## Build and improve software

Implement useful behavior with an agent in your own repository, separate from
the course. The [overview's core table](OVERVIEW.md#the-core-modules) explains
each topic's practical role. Preserve learner choice and pace; this is not a
product-development sequence.

1. [Testing and QA](01-testing-and-qa.md) — detailed outcomes.
2. [Error handling and recovery](02-error-handling-and-recovery.md) — detailed
   draft.
3. [Persistence and shared state](03-persistence-and-shared-state.md) — outline.
4. [Modeling data and behavior](04-modeling-data-and-behavior.md) — outline.
5. [Typing, protocols, and data validation](05-typing-protocols-and-data-validation.md)
   — outline.
6. [Structuring a program](06-structuring-a-program.md) — outline.
7. [Concurrency](07-concurrency.md) — outline.

## Understand code and changes

[Open the second-track guide](../understand-code/index.md). This path supports
product/project managers, designers and business subject-matter experts who want
to understand software and what the development team is doing. Start with a
useful general picture, then revisit it in increasing detail:

1. [How software fits together](../understand-code/01-how-software-fits-together.md).
2. [Find your way around a project](../understand-code/02-find-your-way.md),
   including an early view of what it does and what is changing.
3. [Follow one behavior](../understand-code/03-follow-one-behavior.md).
4. [Run and investigate a behavior](../understand-code/03-run-and-investigate.md).
5. [Understand a change and its evidence](../understand-code/05-evidence-of-correctness.md).
6. [Understand an evolving project](../understand-code/06-read-evolving-project.md).

Keep a repository or broader project as your continuing context. Begin with
orientation even when you have no precise question, then explore different parts
as interests and the team's work evolve. The modules offer capabilities to
revisit, not a separate assignment for every visit. Focus an individual
investigation when useful without confining the whole path to one question. The
final synthesis deepens project understanding already introduced in Module 2. It
includes active QA without requiring feature implementation, a product brief, or
a new repository. Its six modules introduce useful capabilities, then deepen
them through explanation, code exploration, investigation and evidence review.

The former repository-reading companion is now
[background for the evolving-project module](../companions/index.md), not a
separate prerequisite-free track. Its read-only evidence packet remains useful;
it does not grant permission to execute repository instructions.

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
