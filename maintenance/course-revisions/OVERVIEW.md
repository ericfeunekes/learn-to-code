# Learn to Work with Code

Learn to use code, agents, and repository tools to understand, investigate, and
improve software. You can build implementations or work with existing software
without becoming its feature implementer. In both cases, your contribution is
the question, expectation, decision, and judgment you bring to the work.

## One foundation, two tracks

Start with [Module 0 — GitHub for everyone](00-project-and-git.md):
repositories, files, history, branches, pull requests, issues, and releases. Use
a small example or an authorized repository. You do not need to create an app,
clone the course, or memorize commands. If you already understand the
foundation, use existing evidence and revisit only what helps.

Then choose the kind of work you want to do:

- **[Build and improve software](CURRICULUM.md#build-and-improve-software):**
  direct an implementation agent in your own project repository. Learn to test,
  recover, preserve data, model behavior, structure code, and handle overlapping
  work.
- **[Understand code and changes](../understand-code/index.md):** use a
  repository and its tools to explain software, find relevant code, run QA,
  investigate a behavior, follow a change, and assess evidence. You can do this
  without implementing features or creating an implementation repository.

These are ways of working with code, not product-development or project
management certifications. You can follow either track or move between them as
questions arise. The [learning path](CURRICULUM.md) shows each module's role and
current draft status.

## Learn generally, then make it concrete

Start with a small mental model, try a tiny example, then apply it to an
accessible real repository or useful project. Add language and framework detail
when it helps answer your question. A module is a reference for short adaptive
exchanges, not a lecture to finish in one sitting or a rigid course march.

An agent can explain a file, search, run an authorized check, or write code.
Your work is to connect the evidence, predict what should happen, question an
unsupported claim, and choose a useful next step. Existing work and partial
understanding are welcome.

## The core modules

The building track retains its seven topics:

| Module                                                                                  | Practical role                                                         |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [1. Testing and QA](01-testing-and-qa.md)                                               | Decide what should happen and what evidence checks the actual outcome. |
| [2. Error handling and recovery](02-error-handling-and-recovery.md)                     | Investigate failures and choose useful feedback and safe recovery.     |
| [3. Persistence and shared state](03-persistence-and-shared-state.md)                   | Understand what survives and which saved or cached value to trust.     |
| [4. Modeling data and behavior](04-modeling-data-and-behavior.md)                       | Represent the relevant things, relationships, states, and rules.       |
| [5. Typing, protocols, and data validation](05-typing-protocols-and-data-validation.md) | Explain exchanged information and check actual inputs.                 |
| [6. Structuring a program](06-structuring-a-program.md)                                 | Place responsibilities and change related behavior coherently.         |
| [7. Concurrency](07-concurrency.md)                                                     | Reason about overlapping, reordered, or repeated actions.              |

The [understanding track](../understand-code/index.md) progresses from how
software fits together, through navigation and active investigation, to tracing
changes, judging correctness evidence, and reading an evolving project. API,
MCP, and browser QA are possible ways to investigate; choose the interface
relevant to your question rather than doing every tool exercise.

## Course status

This is a combined local review draft, not a claim that the whole course is
validated. Shared Module 0 and setup are drafts. In the building track, Module 1
has detailed learning objectives; Module 2 is a **detailed draft pending
course-author review**; Modules 3–7 are **Being built** outlines. All six
understanding-track modules are proposed drafts pending author and independent
whole-path review. Draft criteria can guide exploration and partial evidence,
but are not agreed completion criteria or proof of real learner success.

## Choose and outline your project

This option belongs to the building track. Ask AI:

```text
Help me choose a small useful app and define its first behavior.
```

Describe who will use it, one useful behavior, a small initial scope, and
observable success. Then use [project setup](SETUP.md#setup-with-ai) to create
or resume your own repository, separate from the course. An agent can handle the
GitHub steps; a full Git lesson is not an operational setup gate. If you already
have a project, continue it.

For the understanding track, start with its supplied examples and bring an
authorized repository or excerpts when useful. No app definition or new
repository is required.

## Learn, apply, and bring back evidence

Explore an idea with the teaching AI, apply it independently with an approved
agent or tools, and
[return relevant evidence](PRACTICE.md#bring-work-back-for-review). For
building, implementation belongs in your own repository. For understanding,
application can be a source-backed explanation, an authorized local/API/MCP or
browser check, or a bounded assessment of a change. Keep effects within the
permitted target: a local app can contact shared services, and staging is not
automatically safe.

A chat link may be inaccessible. Supply relevant safe turns, files or diffs,
versions, test/results, and your interpretation rather than assuming teacher
access. Agent-written code, a polished explanation, and green tests alone do not
prove your understanding. The [teaching guide](AI-TEACHER.md) explains how to
credit observed judgment and preserve uncertainty without a ceremonial handoff
for every question.
