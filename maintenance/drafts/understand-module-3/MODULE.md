# Module 3 — Run and investigate software

**Second track: Understand code and changes. Private author-review draft.**
These proposed outcomes are not agreed completion criteria or evidence of real
learner success. This module is authored for the October 30 direction; it is not
a canonical Drive export or a replacement for the building track's Module 3.

Use a repository and its tools to investigate a behavior yourself. By the end,
you should be able to identify the environment you are using, arrange a safe
check, compare expectation with observation, and give someone enough evidence to
repeat it. You can do this without implementing a feature.

## Starting point and boundaries

Shared GitHub Module 0 comes first. Modules 1 and 2 of this track supply a
simple map of software and practice finding relevant files. You need to locate a
README, configuration example, and command definition with help, and distinguish
a checked-out revision from a running version. Revisit just that distinction if
needed. You do not need a new implementation repository, a product brief, or
mastery of a language or framework.

Choose one interface: an API, an MCP tool, or a browser journey. You do not need
all three. An API lets a client request an operation; MCP lets an AI client
discover and call tools; a browser lets someone interact with a web app. The
general investigation is the same even though the tools differ.

Feature implementation and repairing the discovered defect belong elsewhere.
Module 4 follows behavior through code and changes. Module 5 examines how much
confidence tests justify and what coverage leaves out. Here, stop with an
honest, reproducible observation and a useful next question.

## A small model, then a small check

An **environment** is the running software together with its settings, data,
dependencies, and access. A **dependency** is something it needs, such as a
runtime, package, database, or remote service. **Configuration** selects how it
runs, sometimes including which services it contacts. A **log** records events
that can help connect an action to what the software did.

Imagine a workshop directory that promises search will ignore capitalization.
Before checking that promise, you need to know which directory is running,
whether it has workshop data, and whether searching changes anything. The
[local practice](PRACTICE.md) makes those questions concrete without accounts,
package installation, or external services.

Use one short exchange at a time: explain the next idea, try a small check, and
discuss its result. Skip familiar explanations. A learner asking how to start a
server should get help with that action, not a lecture on every environment.

## Proposed outcomes and evidence

### 3.1 Identify the target and the permitted actions

Before execution, find the repository's instructions, setup/run information,
command definitions, and configuration examples. Reading a command is different
from running it: an install or startup script can execute code, contact
services, or run a migration that changes data. Ask an agent to explain a
relevant script and its dependencies before using it when these are unclear.

Make a short environment note: intended local or hosted target, source revision,
running version if observable, important non-secret settings, data source, and
permitted actions. A Git commit identifies source; it does not prove that a
staging service is running it. Confirm that relationship from deployment records
and the running service where available; otherwise mark it unknown.

Decide what the proposed check might change: shared data, messages, external
systems, or costs. Local software can still use a production API. Staging may
share data or send real messages. A read-shaped name or HTTP method is not
enough to establish safe behavior. Use documented, authorized operations and
disposable data; pause only the uncertain action and continue with safe
evidence.

**Small step:** inspect the practice setup and choose one allowed check. Explain
why a proposed booking or email check is outside its permission.

**Observable evidence:** your target note distinguishes verified facts from
unknowns, and your chosen action has a reasoned effects boundary.

### 3.2 Start, recognize readiness, and stop your environment

Use the project's documented runtime and commands; the course website's commands
do not start another repository's app. Help with a terminal or dependency setup
is allowed. Read the startup output, identify the actual address or transport,
and check a documented readiness or identity response. A running process alone
does not mean the behavior's dependencies are available.

Keep the startup terminal and know how to stop the process you started. On a
port conflict, identify the owner or choose a documented alternate port; do not
kill an unfamiliar process. If a prerequisite or credential is unavailable,
report the exact gap rather than installing unrelated tools, guessing secrets,
or claiming the environment works.

For an existing authorized hosted environment, replace startup with checking
access and identity. Do not restart or redeploy a shared service to complete a
lesson. When finished, stop only your own local process and confirm it exited.

**Small step:** start the local fixture, identify its version and dependency
state, then stop it. What changes if the process starts but its data source is
unavailable?

**Observable evidence:** you identify the actual running target and readiness
limit, explain a setup obstacle or resolve it safely, and show cleanup.

### 3.3 Choose and run a repeatable exploratory check

An exploratory check investigates a question; it does not need a large automated
suite. State the expected result and its basis before the agent runs the check.
Use a documented behavior, supplied requirement, or clearly labeled assumption.
Record relevant starting data, input, action, and observed output. If useful,
compare a nearby case while changing one relevant input and keeping the target
and configuration fixed.

| Interface                     | First useful action                                                                                                                                          | Evidence to capture                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| API                           | Send one authorized request using a client or a small agent-written script.                                                                                  | Target, method, path, safe input, response status and relevant body; effects if any.       |
| MCP                           | Inspect the server identity, tool description and input schema, then use an authorized client to make a suitable call. A schema describes valid input shape. | Client/server versions if available, tool name, safe arguments, result and any tool error. |
| Browser, including React apps | Open the correct app, follow one journey, and compare what the person sees with the relevant network request and console output.                             | URL/version, starting state, steps, visible result, relevant request/response and errors.  |

Use the repository's tools rather than memorizing a universal command. A React
repository might have separate frontend and API servers. Starting its frontend
does not establish that the backend is local. Browser developer tools can show
the actual request target; the
[Chrome Network reference](https://developer.chrome.com/docs/devtools/network/reference)
explains that interface. Avoid sharing whole network exports that might contain
tokens or private data.

For MCP, a tool's read-only annotation is a hint, not enforcement; verify the
server, permissions, and relevant behavior before calling it. The
[MCP tools specification](https://modelcontextprotocol.io/specification/2026-07-28/server/tools)
describes discovery, calls, errors, and annotation trust. Discovering a tool
does not require trying every tool. No new MCP client installation is required
for this module; use the supplied packet if one is unavailable.

**Small step:** choose the practice's API route or one supplied interface
packet. Write an expectation, inspect or run a case, and choose a useful
comparison.

**Observable evidence:** your choice addresses a question, your expectation has
a stated basis, and someone else can repeat the action from your description.

### 3.4 Connect a result to diagnostic evidence without guessing a cause

Collect the smallest relevant error, response, or log excerpt, with time and a
request identifier when provided. A request identifier connects related events.
Keep the observation separate from a hypothesis: “this input returned no rows”
is different from “the database lost the rows.” A successful response status may
still contain the wrong result. A dependency failure differs from an empty
successful search.

Choose one next check that would distinguish explanations. Do not edit code or
restart repeatedly just to make an unexplained problem disappear. If the result
of a state-changing operation is uncertain, establish its status before
retrying. Retain the uncertainty if access does not permit that check.

**Small step:** compare the local fixture's ready and unavailable data modes.
Explain which result is a successful empty search and which cannot answer the
search question. Use only the permitted local restart in the practice.

**Observable evidence:** you connect an action to its diagnostic record, offer a
bounded explanation, and choose a next step that could change your conclusion.

### 3.5 Return a finding another person can investigate

Bring the question, expected behavior and basis, target/version/configuration,
starting state, exact steps and safe input, actual result, relevant diagnostic
excerpt, repeat result if collected, and what remains unknown. A reproducible
finding can be a mismatch, an expected result, or a blocked check. Do not label
a blocked check a pass or claim all software works because one case did.

Include your own interpretation, the agent's contribution, and one next
question. Use the [practice return guide](PRACTICE.md#bring-back-evidence).
Relevant supplied turns, files, commands, and outputs can support teacher
review; an inaccessible chat link is only a pointer. Redact secrets and private
data without removing the facts needed for the claim. Missing access limits what
can be assessed, not what the learner is capable of understanding.

**Observable evidence:** another reader can locate or repeat the case,
distinguish your judgment from generated output, and see the finding's limits.

## Direct an agent while keeping the decisions yours

An optional starting point; fill in your question and choices:

```text
Help me investigate [behavior] in [authorized repository or local fixture].
First inspect the run instructions and relevant scripts/configuration. Explain
the target, dependencies, possible effects, and missing information briefly.
My allowed actions are [actions]; my question and expected result are [choices].
Help me start or access the environment and run [chosen check]. Keep source
unchanged. Capture the relevant command/input, version, result, and diagnostics.
Separate observations from hypotheses. Stop at any operation outside those
limits and help with safe independent work. Stop the local process we started.
```

The teacher should invite the learner's expectation or next-check decision
before offering a worked answer when useful. A learner can instead ask for a
plain explanation, return with existing work, or stop after one useful result.
The [teacher notes](TEACHER.md) describe proportionate review and the handoff to
the next modules.
