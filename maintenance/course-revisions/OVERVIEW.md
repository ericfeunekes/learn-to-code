# Learn to Work with Code

Learn to use code, AI agents and repository tools to make informed decisions
about software. Choose either track, or move between them as your work changes:

- **[Build with Code](#build-with-code):** direct AI to create and improve
  useful software.
- **[Understand / Investigate Software](#understand--investigate-software):**
  use code and tools to understand software and what a development team is
  changing.

Both tracks develop your explanations, expectations, choices and judgment. AI
can handle syntax and tool mechanics while you learn enough to direct the work
and evaluate its results.

## One foundation, two tracks

Start with [Module 0 — GitHub for everyone](00-project-and-git.md):
repositories, files, history, branches, pull requests, issues and releases. Use
existing knowledge or a small example. You do not need an app idea, a new
repository, a local clone or memorized commands to begin.

Then follow the track that fits your work or interests. [Setup](SETUP.md)
explains the different workspace needs, including
[enterprise use without a fork](SETUP.md#enterprise-use-without-forking).

## The core modules

### Build with Code

Use this track when you want to create or improve an app. Direct an
implementation agent in your own project repository, learn the relevant
concepts, make choices and judge whether the result does what you intended. You
can start with an existing project or one small useful behavior.

#### Choose and outline your project

Ask your teaching AI:

```text
Help me learn to build with code. I want to choose or continue a small useful
project, understand the relevant concepts, and direct AI to improve it.
```

Describe who will use it, its first useful behavior and what success would look
like. Use [project setup](SETUP.md#setup-with-ai) to create or reopen its
independent repository when needed. Existing work is welcome.

The seven modules connect concepts to your implementation:

1. [Testing and QA](01-testing-and-qa.md) — decide what should happen and what
   evidence checks it.
2. [Error handling and recovery](02-error-handling-and-recovery.md) —
   investigate failures and choose recovery.
3. [Persistence and shared state](03-persistence-and-shared-state.md) —
   understand saved data and which values to trust.
4. [Modeling data and behavior](04-modeling-data-and-behavior.md) — represent
   things, relationships, states and rules.
5. [Typing, protocols, and data validation](05-typing-protocols-and-data-validation.md)
   — explain information exchanged between parts and check inputs.
6. [Structuring a program](06-structuring-a-program.md) — place responsibilities
   and change related behavior coherently.
7. [Concurrency](07-concurrency.md) — reason about overlapping or repeated
   actions.

[Explore the building path](CURRICULUM.md#build-and-improve-software).

### Understand / Investigate Software

Use this track when you want to understand existing software and its team's
work: as a product or project manager, designer, business subject-matter expert,
or interested collaborator. Use an agent and tools to inspect code, investigate
a behavior and assess a claim. You can start with the supplied examples or an
authorized project; feature implementation is not required.

#### Get to know a project

Ask your teaching AI:

```text
Help me understand and investigate software. Start with the general picture,
then help me explore a project's repository and ongoing work over time.
```

Bring an existing repository or broader project, or start with the supplied
examples. Get oriented, then explore features, code, issues and changes that
interest you. Return over time to deepen your picture; you do not need a precise
question or a new assignment for every visit. Use
[understanding-track setup](SETUP.md#for-understanding-code-and-changes) when
needed. Existing experience is welcome.

The six modules revisit the picture in increasing detail:

1. [How software fits together](../understand-code/01-how-software-fits-together.md)
   — connect an action to its result and distinguish files from running
   software.
2. [Find your way around a project](../understand-code/02-find-your-way.md) —
   locate useful sources and gain an early picture of what it does and what is
   changing.
3. [Follow one behavior](../understand-code/03-follow-one-behavior.md) — explain
   a small path and predict a different input.
4. [Run and investigate a behavior](../understand-code/03-run-and-investigate.md)
   — direct one suitable check and interpret the observation.
5. [Understand a change and its evidence](../understand-code/05-evidence-of-correctness.md)
   — explain effects and judge whether checks address them.
6. [Understand an evolving project](../understand-code/06-read-evolving-project.md)
   — combine sources, investigate a claim and update a dated account.

[Explore the understanding path](../understand-code/index.md).

## How learning works in both tracks

Begin with a useful general picture, try a small example and deepen the details
when your question needs them. Learn through short exchanges and application, at
your own pace. The modules guide what you can demonstrate; they are not a fixed
series of lectures or a command-memory test.

For building, apply ideas in your own project repository. For understanding,
apply them through source-backed explanations, authorized API/MCP/browser checks
and evidence judgments. Choose tools that serve the question. Keep work within
its approved environment and effects.

[Bring relevant evidence back for review](PRACTICE.md#bring-work-back-for-review):
your explanation, choices, relevant files or changes, and any actual results. A
teacher may need safe excerpts when a chat or repository link is inaccessible.
AI output and green tests alone do not establish your understanding. Keep useful
partial progress and questions visible; the [teaching guide](AI-TEACHER.md)
explains the evidence distinctions.

## Module availability

In the building track, Module 1 has detailed learning objectives; Module 2 is a
**Draft**; Modules 3–7 are **Being built** outlines. The understanding track's
six module pages describe their learning outcomes and practical activities.
Individual module labels show where content is still being developed. Both track
maps describe the full learning path.
