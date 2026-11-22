---
title: Run and investigate a behavior
description:
  Investigate one question in an authorized environment and explain what the
  observed result supports.
slug: /understand-code/run-and-investigate
---

# Module 4 — Run and investigate a behavior

You have followed a behavior through connected parts in
[Module 3](03-follow-one-behavior.md). Now ask what happens when someone uses
it. For example: “Does searching for a workshop work with capital letters?”
Choose one question, direct an approved tool or agent to check it, and explain
what the result tells you. You can use an existing authorized environment or a
small local one. You do not need to install a whole system or repair a feature.

An observed problem is also a valid starting point. You can investigate a
question before you know every line of the source path. Bring any relevant
project map, rule or prediction from earlier work; revisit only what you need.

## One question, one environment, one check

Think of an investigation as a short chain:

**Question → expected result → check in a known environment → observed result →
finding.**

An **environment** includes the running software, its settings, data, access and
dependencies: things it needs, such as a database or service. Those details
matter when they could change the answer. A source revision names a set of
files; it does not establish which version a running service uses.

A tiny fictional example: the workshop directory promises that capitalization
will not change search results. Someone searches for `wood` and receives “wood
carving”, with response status `200`. That shows the request succeeded and found
that title. It leaves the capitalization question open. Before seeing another
result, choose an input that would help answer it and predict the result. The
[practice](03-workshop-practice.md) lets you try a check with help.

Use the interface that reaches your question. An API accepts requests from a
client; MCP exposes tools an AI client can call; a browser lets you use the
screen. These are alternatives. The agent can handle commands, request syntax or
browser tools. Your contribution is to choose, predict and interpret.

## Learning outcomes

### 4.1 Identify where the check will run and what it may do

Explain which environment you will use and why it suits the question. Establish
its running version where available, relevant settings or data, and permitted
effects. Mark unknowns that limit the finding. An existing approved hosted
service is as valid as local startup.

For example, a local web page can call a shared remote API. Checking the page's
version alone does not identify the API. A staging label does not promise
fictional data or permission to send messages. Read the relevant run or access
instructions with an agent; inspect a script before running it if its effects
are unclear. Tool names and read-only hints alone do not establish effects.

**Show it:** identify your target, one detail that could affect the answer, and
why the chosen operation is permitted. If access or effects are unclear, name
the exact gap and continue with safe source or supplied-evidence work.

### 4.2 Choose an expectation and direct an actual check

State the expected result and its basis before execution: a documented rule,
requirement, earlier observation or clearly labelled assumption. Choose a useful
input and, if needed, a comparison that changes one relevant thing. Explain how
the choice answers your question. An agent may suggest options; you choose and
explain the one used.

Use the project's documented access or startup route with assistance. Confirm
you have reached the intended software and that the needed part is available. A
started process can still lack its data. For a hosted service, use available
identity and access information; no restart or deployment is needed.

| Useful interface               | Direct a check                                                                        | Keep the relevant evidence                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| API                            | Send an authorized request.                                                           | Target, method/path, input, response status and relevant body.                                            |
| MCP                            | Inspect the allowed tool and its input shape, then call it with an authorized client. | Server/tool identity, arguments, result and any tool error.                                               |
| Browser, including a React app | Perform one journey on the intended app.                                              | Starting state, steps, visible result; relevant request or console detail if it helps explain the result. |

You need only the selected route. Keep private data and secrets out of shared
evidence. If you start a local process, stop that process when finished. Leave
unfamiliar or shared processes alone. A missing prerequisite is a specific
blocked step, not a reason to build new infrastructure for the lesson.

**Show it:** explain your chosen input and prediction, direct the check, and
identify the observed output. A packet can support prediction and
interpretation; actual execution evidence remains open until a real tool is
used.

### 4.3 Interpret the result and share a repeatable finding

Compare the output with your expectation. A successful request can return the
wrong answer. An empty successful search differs from an unavailable catalog.
Use a relevant response, error or log to clarify that distinction. When a
request identifier is supplied, it can connect the response to its log event.
You do not need logs from every layer for a simple result.

Keep the observation separate from a possible cause. “This search returned no
workshops” does not establish that a database lost them. Choose a next question
or check that would distinguish explanations. Stop at the finding; source repair
and a complete test suite are outside this module.

Give someone enough to repeat the case: question and expected result with its
basis, target/version and relevant starting state, input and steps, observed
output, and your interpretation and limits. A short message with a relevant
excerpt is enough. Say what you ran, what an agent reported, and what came from
a supplied packet. An inaccessible chat link alone cannot show the result.

**Show it:** another reader can repeat your check or understand its exact block,
and can see what your conclusion covers and what remains uncertain.

## Apply it to useful work

Choose a question from an authorized project: a search, a validation message, a
calculation or a displayed status. The
[practice routes](03-workshop-practice.md) offer a small local service and
fictional packets if you need a first example. You may bring existing work
instead. No fixed sequence of installations or tool lessons is required.

With an agent, begin by stating the question and your allowed environment. Ask
for the missing operational help, then make your expectation and choice visible
before the check. Afterward, explain the result in your own words. A useful
partial result might identify the wrong environment or a missing permission; it
should leave the runtime claim open.

Carry the finding into [Module 5](05-evidence-of-correctness.md), where you will
connect a change to its before/after behavior and judge how well its checks
support the claim. One successful check here does not establish release
readiness. The [teacher notes](03-teacher-notes.md) explain how to review
partial evidence.

[Track guide](index.md) · [Module 0](../course/00-project-and-git.md) ·
[Next module](05-evidence-of-correctness.md)
