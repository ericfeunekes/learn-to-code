# Module 3 teacher notes

Read [the module](MODULE.md) and the selected part of [practice](PRACTICE.md).
This is a proposed second-track module pending course-author and whole-track
review. Do not treat the building track's Module 3, existing companion outcomes,
or this draft as interchangeable completion criteria.

## Teach a useful next step

Start with the learner's question or existing evidence. Explain just enough to
act: environment before address selection, dependencies before readiness,
expected behavior before interpreting a check. Follow a small model with a small
example, then invite independent application to an authorized real repo. A
learner may stop with a supported partial result. Do not require all interfaces,
a new repo, a whole-stack installation, or unaided command recall.

An agent may inspect scripts, explain settings, start the authorized local
fixture, issue requests, and write a tiny checking script. Leave the
expectation, choice of comparison, effects judgment, and interpretation open for
the learner. Ask for one of those judgments when absent, rather than supplying a
perfect prompt and then assessing its reproduction.

## Review observable contributions

| Outcome                    | Proposed evidence                                                                                                     | Insufficient on its own                            |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 3.1 Target and boundaries  | Learner distinguishes source/runtime identity, settings, dependencies and allowed effects; identifies an unknown.     | A copied agent environment summary.                |
| 3.2 Operate an environment | Relevant startup/access, identity/readiness and shutdown evidence, plus learner's explanation of a limit or obstacle. | A process screenshot or packet alone.              |
| 3.3 Repeatable check       | Learner's expected result with basis, chosen input/comparison, steps and observed result.                             | An agent's “passed” report.                        |
| 3.4 Interpret diagnostics  | Learner connects request and log, separates observation from cause, and chooses a distinguishing next check.          | A stack trace pasted without interpretation.       |
| 3.5 Useful finding         | Safe reproducible details, learner interpretation, assistance and access limits.                                      | A polished generated report of unknown provenance. |

Inspect what is actually supplied. A screenshot, transcript, code, or result may
support only part of an outcome. Separate directly inspected execution evidence,
reported execution, supplied fictional evidence, learner reasoning, and AI
contributions. Missing evidence is uncertainty, not proof of inability. Credit
the demonstrated part without awarding full mastery from a single example.

If the chat link is inaccessible, ask for the smallest relevant excerpt and
output. If the environment cannot run, review the learner's target decision and
packet interpretation while leaving operating evidence open. Use the established
private record home only when notes are useful; never put learner records into
this draft or generated exports.

## Fixture interpretation — consult after the learner's attempt

The service's title search is deliberately case-sensitive despite its stated
requirement. `water` returns watercolour basics; `WATER` returns no workshops.
Both are status 200. Repeating the uppercase case in ready mode supports a
repeatable local mismatch, not a database-loss explanation. Query text is
omitted from logs; the response's request ID connects to the event, while the
learner's record preserves input.

In unavailable mode, `/about` still returns identity/configuration at 200,
`/health` returns 503 with `ready: false`, and workshop queries return 503 with
`catalog_unavailable`. A process and readable About endpoint do not make catalog
search ready. This is controlled fault injection, not an actual external outage.

The MCP packet's allowed tool returns inconsistent case results without a tool
error. A valid schema and `isError: false` do not establish intended behavior.
The booking tool is outside the stated permission. The browser packet shows a
local frontend calling a stage API, an unknown current API version, and an
authorization gap. Do not execute the fictitious URL or infer server root cause.

After one finding, vary an assumption: the learner is offered a real staging
URL, but its booking tool sends messages. Ask which part of their local plan can
transfer and what must be established before any call. Do not imply staging
permission or carry fixture permissions into another environment.

## Handoffs and stopping point

Module 2 should hand over relevant run/configuration locations and known access
gaps, without requiring their resolution. This module returns one question,
environment note, reproducible observation or exact block, and next question.
Module 4 can trace that behavior through a code path or change without requiring
the learner to repair it. Module 5 can assess the checking approach and
remaining confidence/coverage questions. Module 6 can combine runtime version
evidence with the history of work; this module does not infer release progress
or priorities.

Do not turn repeated exploratory checks into a coverage course, require feature
implementation to prove understanding, or infer shipping readiness from a
successful local check. Whole-track review must still judge whether the six
modules together reach the intended learner capability.
