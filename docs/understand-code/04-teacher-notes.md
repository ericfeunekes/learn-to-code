---
title: Module 4 — notes for the teaching agent
description: Guidance for reviewing one bounded investigation in Module 4.
slug: /understand-code/teacher/run-and-investigate
---

# Module 4 — notes for the teaching agent

Read [the module](04-run-and-investigate.md) and the chosen
[practice route](04-workshop-practice.md). Use the module's outcomes, U4.1 to
U4.3, to review the learner's contribution. They are separate from the build
track's Module 4 outcomes.

## Start with a useful question

The learner's role is to ask, direct approved tools and interpret evidence.
Start with their question or existing work. Use the general chain of question,
expectation, check, observation and finding. If needed, try the tiny example
before independent application. Skip familiar explanations and add operational
detail only when it helps the selected investigation.

[Module 3](03-follow-one-behavior.md) contributes a behavior path, an explained
rule or a prediction. Do not require a complete source trace before examining an
observed problem. The learner can use an authorized hosted environment, local
service, API, MCP (Model Context Protocol) tool or browser journey. One suitable
interface is enough. Help with access, commands and request syntax is allowed;
unaided installation, command recall and whole-stack setup are not learning
targets. For a learner new to terminals, let the agent run each command and
narrate what it did and what it printed.

Running the team's app or tests happens in the learner's investigation session,
in their own clone, never from the course root. That session never posts, pushes
or comments without the learner's go-ahead for the exact text.

An agent may inspect instructions, explain configuration, operate the approved
environment and collect output. Invite the learner to make a choice before
seeing the result: what should happen, why, and which input would be useful?
Afterward, ask what the result supports. When one contribution is absent, ask
for that contribution rather than repeating a full lesson or supplying a solved
prompt to copy.

## Review three observable outcomes

| Outcome                         | What to look for                                                                                                                                                    | What leaves evidence open                                                         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| U4.1 Target and effects         | Learner identifies the environment/version or a specific unknown, a relevant setting or data fact, and why the action is permitted.                                 | A copied agent summary with no learner judgment about the target or effects.      |
| U4.2 Expectation and check      | Learner explains a chosen input and expected result with a basis, directs a real check, and identifies the observed output.                                         | A supplied packet alone, or an agent's “passed” report without the action/result. |
| U4.3 Interpretation and finding | Learner compares expectation and observation, uses relevant diagnostic evidence, bounds the conclusion, and supplies repeatable details and a useful next question. | A polished generated finding without visible learner reasoning.                   |

Use the smallest evidence that supports the claim. A short exchange and a
relevant output excerpt can be enough; a formal report, full chat export and
logs from every component are unnecessary. Keep actual inspected output,
reported execution, fictional packet evidence and learner reasoning distinct.
Neither working software nor agent output establishes learner understanding. One
example supports a demonstrated contribution, not broad mastery.

For partial evidence, name what is demonstrated and what remains open. For
example: “You identified the shared API and explained why booking is outside the
permitted actions. Your predicted search result has a basis. Execution remains
open because search access is unconfirmed.” Missing access does not prove
inability. Review supplied reasoning while pausing the uncertain action. Keep
any private learner notes in their established record home, outside course
content and exports.

## Fixture interpretation — after the learner's attempt

The local service deliberately uses case-sensitive title search despite the
requirement. `water` returns watercolour basics; `WATER` returns no workshops.
Both responses have status 200. A ready-mode repeat supports a repeatable local
mismatch. It does not explain a database failure or establish production
behavior. Query text is omitted from logs; a response's request ID connects to
its event, while the learner's record supplies the input.

Unavailable mode is an optional contrasting case. `/about` returns identity at
200, `/health` returns 503 with `ready: false`, and workshop queries return 503
with `catalog_unavailable`. This separates a successful empty search from an
unavailable dependency. It is controlled local fault injection, not an external
outage. A learner whose question is already answered need not restart in this
mode. Whoever starts the local fixture stops that owned process afterward.

The MCP packet supplies inconsistent results without a tool error. A valid input
shape and `isError: false` do not establish correct behavior. The booking tool
is outside the permission even though discovery lists it. The browser packet
shows a local frontend contacting a shared stage API whose current version and
access permission are unknown. Its `.invalid` URL must not be called. A useful
partial finding identifies those limits without guessing cause.

If you need one further question to see whether the reasoning transfers, vary
the target: “The same screen now points to staging, and booking sends real
confirmations. What must be established before your chosen check?” Use the
answer to examine target/effects reasoning; do not require every interface or a
second installation.

## Stop and hand over

Stop when the learner has one bounded finding or an exact block, with their
expectation, choice and interpretation visible. Do not require repair, a full
coverage analysis or a claim that the software is ready to ship.

[Module 5](05-evidence-of-correctness.md) uses this finding alongside a source
change to explain before/after effects and assess checking evidence. Module 6
can connect runtime identity to work records. If the learner's observation
changes their current account of the project, note that narrow update now;
release forecasts and priorities remain outside this investigation.
