---
title: Module 1 — Testing and QA
description:
  Define expected behavior, and judge tests and what the user actually gets.
slug: /modules/testing-and-qa
source_file: 01-testing-and-qa.md
---

# Module 1 — Testing and QA

An agent says "all 14 tests pass." What does that tell you about your app? This
module is about deciding what correct means, directing an agent to check it and
judging the evidence.

Start with the first version you built in [Plan your app](PLAN.md) (P.6). Your
expected results come from your Plan outline (P.5) or an agreed requirement,
such as your team's policy, never from what the app happens to do.
[Module 2](02-modeling-data-and-behavior.md) turns that outline into a proper
spec, and later modules give you harder situations to test.

## Choose your lane

Same outcomes in both [lanes](OVERVIEW.md#choose-your-lane); the evidence and
the depth differ.

- **Direct agents:** focus on 1.1, 1.2, 1.4 and 1.7: deciding what correct
  means, writing expected results before you see the app's answers, and judging
  whether a check would actually catch a fault. For 1.3, 1.5 and 1.6, recognize
  and ask: when a test uses a stand-in, ask what it leaves out and whether
  anything checks the real thing. You don't need to tell the kinds of stand-in
  apart or direct dependency injection.
- **Write code:** you also read the tests themselves, write an assertion and a
  case by hand, and change a function to receive its dependency.

## Learning objectives

By the end of this module, you should be able to:

### 1.1 Distinguish software testing and quality assurance

- Explain testing as checking software against what you expected and looking for
  defects. Explain quality assurance (QA) as the wider work of building
  confidence in quality, including how requirements are agreed and how
  development, review and testing are done. Neither term means simply manual or
  automated work. See
  [ASQ’s account of quality assurance](https://asq.org/quality-resources/quality-assurance-vs-control).
- Tell “the code passes its checks” apart from “the app meets the need it's
  for.” For your app, name a quality question and the evidence that would answer
  it, including whether the person using it can complete what they came to do.

### 1.2 Define expected results independently of the implementation

- Explain where an expected result comes from: your Plan outline, an agreed
  requirement, a domain rule such as your team's policy, or an example you
  checked independently. Explain how a test that copies the app's own
  calculation or logic can repeat the same mistake and still pass.
- Write the inputs, the expected results and the basis for each before asking AI
  to write the checks. Recognize that recording what the app does today can show
  when it later changes, without showing that today's behavior was right.

### 1.3 Choose tests at appropriate levels

- Tell three levels apart: a unit or component check of one small piece, an
  integration check of parts working together, such as the app and its database,
  and a system or end-to-end check of a whole path through the app, as a user
  would take it. Say what actually runs and what is replaced by a stand-in; a
  test's label alone doesn't tell you what it covers.
- Explain why a calculation that only uses its inputs, and changes nothing else,
  suits a small, focused unit test. Programmers call this a pure function.
  Saving to a database, calling another service over the network, converting
  data to a file or message format and back (serialization), or a screen
  connected to the rest of the app need checks where those parts really work
  together.
- Direct AI to choose checks for a specific claim, balancing speed,
  repeatability, how easily a failure can be diagnosed, and how realistic the
  check is. Explain what a narrower test would miss and when an existing check
  already gives the evidence you need. See
  [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html).

### 1.4 Design meaningful cases and properties

- Choose ordinary, boundary, empty, invalid and failure cases that matter for a
  requirement. Explain each case's setup, action and check, and why the check
  tests the intended behavior rather than merely that the code ran.
- Tell explicit examples (this input gives this result) apart from generated
  cases that check a rule, called a property, across many inputs. State a
  meaningful property and what it assumes; more inputs can't repair a wrong
  expectation or a weak check.
- Direct AI to write useful cases, run them, investigate failures and keep a
  check for any bug it reproduces, so the bug can't quietly return. Explain why
  a failing check may reveal a bug in the code, a wrong expectation or a broken
  test setup.

### 1.5 Use realistic fixtures and test doubles

- Explain a fixture as the known starting point for a test: data, files,
  recorded responses or a prepared dependency. Explain a test double as a
  stand-in for something real, and tell three kinds apart: a stub returns
  answers you supplied, a fake is a simpler working version, such as an
  in-memory database, and a mock checks that the code called it in the expected
  way.
- Direct AI to set up realistic inputs and controlled variations, such as a
  saved website response with missing data, or a throwaway database with known
  rows. Keep tests independent: each starts from a known state and cleans up
  after itself. See
  [pytest’s explanation of fixtures](https://docs.pytest.org/en/latest/explanation/fixtures.html).
- Explain what the stand-in keeps and what it leaves out. A mock receiving the
  expected call doesn't show that the real service accepted it or that the user
  got the intended result.

### 1.6 Explain and apply simple dependency injection

- Identify a dependency: something a piece of code relies on, such as a database
  connection, a connection to another service, the clock or a file reader.
  Explain the difference between code that creates that dependency itself and
  code that receives it from outside: for example, a function that accepts the
  connection, often called `client`, as an argument. Receiving it is called
  dependency injection.
- Explain how this lets the app hand in the real thing and a test hand in a
  stand-in with controlled responses, including failures or unusual data.
  Handing in the real thing can also support an integration test. Injection
  doesn't make code pure (1.3) or remove its effects.
- Direct AI to introduce or use this small seam, explain how the dependency
  reaches the function, and judge a test that uses it. No injection framework is
  required. See
  [Fowler on dependency injection](https://www.martinfowler.com/articles/injection.html).

### 1.7 Judge evidence and test sensitivity

- Explain what observed results show and what they leave uncertain. Test counts,
  code coverage, a running server and an AI’s “all passed” summary aren't enough
  to show that the required behavior works.
- Direct AI to show that a relevant check fails for a known wrong result or a
  deliberately planted fault, then restore the correct behavior. Explain that
  this shows the check catches that fault, not that the app is correct in every
  situation.
- Judge what the user actually gets, using the relevant evidence you already
  have, including an empty, loading or error state where it applies. Name a
  remaining gap when there is one; ask for another check only when it answers a
  different open question.

## Agent mistakes to watch for

These add to the general list in [Module 0](00-project-and-git.md).

- **Expected values copied from the output.** The agent runs the code, then
  writes whatever came out into the test as the expected result.
- **Weakening a failing test.** Loosening a check, skipping it or changing the
  expected value so the run goes green.
- **A stand-in called an integration test.** A test labelled "integration" or
  "end-to-end" that replaces the database or service with a mock.
- **"All tests pass" without output.** Or after running only some of them.
- **Checking that code ran, not what it did.** Checks such as "no error" or "a
  result exists" that would pass for a wrong answer.
- **Tests that depend on luck.** Tests that rely on today's date, on each
  other's leftovers or on the order they run in.

## By lane, and checks without AI

In the write-code lane, also show the code-reading part listed below.

| Objective | Check without AI                                                                                   | Write-code lane adds                                                     |
| --------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1.1       | For one feature, write a quality question and the evidence that would answer it.                   | Find where in the code that behavior lives.                              |
| 1.2       | Write inputs, expected results and the basis for each, before seeing the implementation.           | Write one assertion yourself.                                            |
| 1.3       | For three described checks, say what actually runs, what's a stand-in and which level each is.     | Read a test and say what it really exercises.                            |
| 1.4       | List ordinary, boundary, empty, invalid and failure cases for a requirement.                       | Write one of those cases as a test yourself.                             |
| 1.5       | Say what a given stub, fake or mock keeps and leaves out.                                          | Read a fixture and predict the state a test starts from.                 |
| 1.6       | Point to a dependency in your project and say how a test could supply a different one.             | Change one function to receive its dependency, by hand.                  |
| 1.7       | Given an "all passed" report, list what it doesn't establish and one fault you'd plant to test it. | Predict whether a given test fails for a given wrong result, then check. |

## Practice tasks

Pick one that fits your app. Each runs through the
[practice loop](PRACTICE.md#the-practice-loop). Where you can, use the next
feature from your Plan outline, so the app grows as you learn.

- **Expected results first.** Teach: where do expected results come from? Write
  five cases for one rule from your outline, such as when a renewal notice is
  due, each with its expected result and basis. Build: hand off checks for
  exactly those cases. Review: did every expected value come from your table?
  (1.2, 1.4)
- **Plant a fault.** Build: ask the agent to break that rule on purpose on the
  practice branch, show which check fails, then restore it. Review: would the
  same check fail for a different wrong answer? (1.7)
- **Stand-in check.** Build: ask the agent to list, without changing anything,
  which tests use a stand-in and what each leaves out. Review: does anything
  check the real thing? (1.3, 1.5, 1.6)
- **Planted mistake.** Review a test labelled "integration" that uses a mock for
  the database and whose expected value matches the program's output to the last
  decimal. Say what it does and doesn't show. (1.2, 1.3)

## Notes for the teaching AI

- This module is a first pass, following the course's
  [broad first, then deep](OVERVIEW.md#broad-first-then-deep) approach. Aim for
  a working grasp of every objective rather than mastery of one. For 1.5 and 1.6
  that means knowing what a fixture, test double or injected dependency is, why
  an agent uses one, and judging one in the learner's project. Designing
  interfaces and dependency direction come back in Modules 4, 5 and 6.
- These outcomes provide a first working foundation. Examples can help establish
  the distinctions; advanced case generation, protocols, persistence, and
  concurrency can be revisited when useful to the learner’s project.
- The learner may be focused on an app’s front-end UI. Use that project as
  context, and look for useful opportunities to connect visible actions to the
  data, stored state, service calls, and failures behind them. Make backend
  concerns visible where they matter without requiring a backend-first project
  or adding unrelated features.
- Avoid the misleading distinctions “automated tests versus manual QA” and “unit
  tests prove the whole app.” Acceptance and exploratory testing can themselves
  examine the user’s outcome.
- Possible dependency-injection examples include a supplied HTTP or database
  client, a clock, or a file reader. Choose what fits the learner’s app and
  question; no particular first example is required. An HTTP or database example
  can also make a useful connection to backend behavior.
- Keep assertions focused on the promised behavior; only require a particular
  call when that interaction is itself part of the promise.
- Expected results come from the learner's P.5 outline or an agreed requirement.
  If neither covers a case, help the learner decide and record the basis; don't
  supply the answer.

[Course overview](OVERVIEW.md) · [Practice and review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
