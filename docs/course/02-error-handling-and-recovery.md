---
title: 'Module 2 — Debugging, errors and recovery'
description:
  'Direct a diagnosis from evidence, and choose responses and recovery.'
slug: /modules/error-handling-and-recovery
source_file: 02-error-handling-and-recovery.md
---

# Module 2 — Debugging, errors and recovery

Something in your app will break. This module is about what you do next: find
out why from evidence, decide how the app should respond, and recover without
making things worse. Agents are fast at proposing fixes and slow to admit
they're guessing, so the core skill here is directing a diagnosis instead of
accepting the first fix.

Returns to failure cases (1.4), regression checks for reproduced defects (1.4)
and judging evidence (1.7). Module 0's loop applies throughout: one small step,
run it yourself, check what changed.

## Choose your lane

The outcomes are the same in both [lanes](OVERVIEW.md#choose-your-lane). What
changes is the evidence.

- **Direct agents:** you show it through the failure reports you write, the
  explanations you accept or reject, and the behavior you check after a fix.
- **Write code:** you also read an error message and stack trace, find the line
  where the failure surfaced, and make a small fix or add a log line by hand.

## Learning objectives

By the end of this module, you should be able to:

### 2.1 Diagnose a failure from evidence

- Describe a failure as an agent can use it: what you did, what you expected,
  what happened instead, and how to make it happen again. A failure you can
  reproduce is half solved.
- Sketch a rough map of the parts your action passes through: what you see on
  screen, the logic behind it, where data is saved, and any outside service. Say
  roughly where the failure appeared. Module 6 returns to this map in depth.
- Distinguish a symptom, a proposed cause and the evidence for that cause. An
  error can surface far from where it started, so the line in a stack trace is
  where to look first, not the answer.
- Direct an agent to reproduce the failure before changing anything, then test
  one explanation with an observation that could prove it wrong. Accept a fix
  only when the original case now passes and a regression check would catch the
  failure if it came back.

### 2.2 Choose how to handle a failure

- Distinguish three kinds of failure: input the user can correct, a dependency
  that's temporarily unavailable, and a bug in the app. Each needs a different
  response.
- Decide what should stop, what can continue, and which part of the program
  should decide. Catching an error only helps if the code that catches it knows
  what to do next.
- Explain when retrying helps and when it repeats bad work or an unwanted
  effect, such as charging twice or sending a second email. Set limits on
  waiting and retries, and decide when to stop and tell the user.
- Direct an agent to show the chosen response for one failure, and explain your
  choice against a plausible alternative.

### 2.3 Make failure understandable and observable

- Distinguish a message that helps the user act from diagnostic detail that
  helps you find the cause. A user needs to know what happened, whether their
  work is safe and what they can do next. A stack trace on screen helps no one.
- Decide what the app should log so you can find a failure later: what operation
  failed, the relevant values and when. Keep passwords, API keys and personal
  data out of messages and logs, because logs get shared, pasted into agents and
  committed.
- Direct an agent to show both the user's view of a failure and the diagnostic
  record behind it.

### 2.4 Reason about interruption and recovery

- When an operation stops partway, say what finished, what didn't and what's
  uncertain. A missing reply doesn't prove nothing happened: the save may have
  worked even though the confirmation never arrived.
- Decide whether to retry, resume, undo or investigate first, based on the risk
  of losing work or doing something twice.
- Direct an agent to interrupt an operation on disposable data and recover from
  it. Explain the resulting state and any uncertainty that remains.

## Agent mistakes to watch for

These add to the general list in [Module 0](00-project-and-git.md).

- **Fixing without reproducing.** The agent changes code based on a guess, says
  "this should fix it" and never shows the failure before or after.
- **Hiding the error instead of fixing it.** A broad catch-all that swallows
  every error, a default value that hides missing data, or a log line removed
  because it was noisy. The symptom disappears and the bug stays.
- **Fix loops.** Each attempt changes more code, the failure moves around, and
  the diff grows. Stop, go back to the last good commit, and restart the
  diagnosis from evidence.
- **Changing the test to match the bug.** The test expected the right thing; the
  agent edits the expected value so it passes.
- **Retrying everything.** Adding retries around an operation that has a side
  effect, such as a payment or a sent message, without asking whether repeating
  it is safe.
- **Leaking secrets in diagnostics.** Logging a whole request, a configuration
  object or an API response that contains a key or personal data.

## By lane, and checks without AI

Each check without AI is something the learner does with the agent closed.

| Objective | Check without AI                                                                                                         | Write-code lane adds                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 2.1       | Write a failure report for a real bug: steps, expected, actual, and one way to test a proposed cause.                    | Read a stack trace and name the line where the failure surfaced and one place the cause could be.        |
| 2.2       | For three failures in your app, sort them into user-correctable, temporary or a bug, and say how each should be handled. | Point to where an error is caught in your code and say whether that code can actually decide what to do. |
| 2.3       | Write the user message and the log entry for one failure, and mark anything that must stay out of the log.               | Add one useful log line by hand and check it appears.                                                    |
| 2.4       | For an interrupted save, list what might have happened and what you'd check before retrying.                             | Trace what state the code leaves behind if it stops halfway through a function.                          |

## Practice tasks

Pick one that fits your app. Each runs through the
[teach, build and review loop](PRACTICE.md).

- **Break it on purpose.** Teach: what are the ways this action could fail?
  Build: hand off a task to make one failure happen with disposable data (a
  missing file, bad input, a service turned off) and show what the user sees.
  Review: is the response the one you chose, and is the user's work safe?
- **Diagnose a real bug.** Teach: symptom, cause and evidence. Build: hand off
  the failure report you wrote and ask for a reproduction and one tested
  explanation before any fix. Review: did the agent reproduce it first, does the
  diff fix the cause or hide it, and is there a regression check?
- **Planted mistake.** Review a short change where an agent wrapped a failing
  call in a catch-all that returns an empty result. Say what the user would now
  see, and why it's worse than the original error.

## Notes for the teaching AI

- This is a first pass, following
  [broad first, then deep](OVERVIEW.md#broad-first-then-deep). Aim for a working
  grasp of all four objectives. Saved state comes back in Module 3, valid
  transitions in Module 4, and duplicate effects under overlapping work in
  Module 7.
- A file operation, a calculation or bad input is enough of an example. An
  external service isn't required.
- Keep diagnosis, user feedback and recovery distinct. A clear message doesn't
  show that recovery preserved the data.
- Debugging is where agents most often take over. Keep the learner deciding what
  counts as evidence and when a fix is accepted, even in the direct-agents lane.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
