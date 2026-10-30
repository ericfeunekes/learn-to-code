# Learn to Build Software

Learn to understand, question, and improve software by directing AI on a useful
project of your own. AI can write the code; your work is to decide what should
happen, understand the choices, and judge the result.

The destination is software you can explain, test, recover, and keep improving.
A first working feature gives you something real to examine. As your project
grows, you will reason about failures, saved information, data rules, program
structure, and actions that overlap. These ideas work together: a save failure
can raise questions about recovery, storage, tests, and repeated requests.

## Start with your own project

Use [workspace setup](SETUP.md) to create or reopen **your own project
repository**, separate from this course. The course site and repository hold the
teaching material. You do not need to fork them, install the website, or build
your app inside them. You can ask your agent to handle GitHub setup; an app idea
and a full Git lesson are not prerequisites.

Then choose from [What's next?](SETUP.md#whats-next): define a project, learn
Git/GitHub, or continue existing work. If you have already chosen, go directly
to that activity. Keep the course available to your teaching AI through the
site, supplied Markdown, or a separate reference checkout.

## What you will be able to do

You should be able to:

- Turn intended behavior into focused AI requests with constraints and expected
  results.
- Explain relevant behavior, data, states, and program structure well enough to
  question an implementation.
- Compare plausible choices, defend a decision, and direct a coherent
  improvement while preserving behavior that should stay the same.
- Judge what tests and other evidence establish about ordinary use, failures,
  saved state, and overlapping or repeated actions.
- Investigate an unfamiliar concept with AI, check its explanation, and choose a
  useful next learning step.

## The core modules

These seven topics form the core of the course. The practical questions below
show why each matters; they are a map for learning, not a required sequence.

| Module                                                                                  | A practical question in your project                                                                 |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [1. Testing and QA](01-testing-and-qa.md)                                               | What should happen, and what evidence would convince you it works for the person or client using it? |
| [2. Error handling and recovery](02-error-handling-and-recovery.md)                     | When an operation fails, what happened, what should the person see, and how can work recover?        |
| [3. Persistence and shared state](03-persistence-and-shared-state.md)                   | What must survive closing the app, and which saved or cached value should you trust?                 |
| [4. Modeling data and behavior](04-modeling-data-and-behavior.md)                       | What things, relationships, states, and rules does the app need to represent?                        |
| [5. Typing, protocols, and data validation](05-typing-protocols-and-data-validation.md) | What information do parts of the system promise to exchange, and how do you check actual inputs?     |
| [6. Structuring a program](06-structuring-a-program.md)                                 | Where should a responsibility live, and how can you change it without tangling unrelated behavior?   |
| [7. Concurrency](07-concurrency.md)                                                     | What if two actions overlap, arrive in a different order, or happen twice?                           |

[Module 0 — Git and GitHub for your work](00-project-and-git.md) is a separate
foundation for directing your agent on copies, checkpoints, sharing, and merges.
Learn enough when you need it; command memorization is not an entrance exam.

## Companion skills

[Companion skills](../companions/index.md) sit outside the coding path and can
be used on their own.
[Read an Active Repository](../companions/read-active-repository.md) helps you
understand what a team is building, progress, delivery pace and priorities from
repository evidence. It is a detailed draft pending course-author review; no
coding modules or project setup are prerequisites.

## Course status

Module 1 has detailed learning objectives and evidence criteria. Module 2 is a
**detailed draft pending course-author review**: its six proposed outcomes can
guide exploration and partial evidence, but are not agreed completion criteria.
Modules 3–7 are **Being built** outlines, with detailed outcomes and examples
still requiring development and human review. The setup flow and Module 0 are
drafts for review. The full map describes the destination; it does not claim
every lesson is ready.

## Choose and outline your project

This is one option after [setup](SETUP.md). Ask AI:

```text
Help me choose a small useful app and define its first behavior.
```

Choose a useful, low-stakes app or continue one you already have. Describe who
it is for, its core behavior, a small initial scope, and observable success in
plain language. In your own repository, direct your implementation agent to
build the smallest runnable version that does something useful. Learn tools as
you need them. You can return to this project across the course rather than
rebuilding it for each topic.

## Learn, apply, and bring back evidence

Explore an idea with the teaching AI, then work independently with your
implementation agent in your project repository. Bring back a relevant chat link
or excerpt, the changed code or commit, and useful test or observed results for
[review](PRACTICE.md#bring-work-back-for-review). The teacher can review only
material it can access; an exported or pasted excerpt works when a chat or
private repository is inaccessible.

Your explanations, expectations, decisions, and follow-ups show your judgment.
Agent-written code and green tests can show useful software results, but alone
they do not establish your understanding. Existing work and partial evidence are
welcome; you do not need a preceding lesson or a formal handoff every time.

Follow your questions and project needs, revisit ideas for depth, and work at
your own pace. The [learning path](CURRICULUM.md) connects the core topics to
possible further directions. The [teaching guide](AI-TEACHER.md) explains how to
use outcomes and evidence without imposing a fixed teaching method.
