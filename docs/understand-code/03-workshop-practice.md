---
title: Workshop directory practice
description:
  A fictional local API and supplied MCP/browser packets for bounded
  investigation.
slug: /understand-code/practice/workshop-directory
---

# Module 3 practice — Workshop directory

This is a fictional local exercise, not a workplace repository. Choose one
route. The runnable API is the main route; supplied MCP and browser evidence
offer a smaller exercise when execution is unavailable. Packet interpretation
alone cannot demonstrate operating a server or making a real tool call.

## The behavior to investigate

The directory lists two workshops: **watercolour basics** and **wood carving**.
Its requirement says: “Search matches part of the title and ignores
capitalization. An empty search lists all workshops. If the catalog is
unavailable, show an error rather than an empty successful result.”

Your job is to investigate this behavior and report a useful result. Keep the
source unchanged. Before using the agent, choose an input, state its expected
result and why, and choose a nearby comparison. There is a deliberately included
mismatch; finding its implementation line is not required.

## Runnable local route

You need an available Python 3 runtime. Download
[the local service](pathname:///exercises/understand-module3/module3_server.py)
and, optionally,
[its author checks](pathname:///exercises/understand-module3/module3_fixture_test.py)
into a disposable folder. No course checkout, course website installation,
account, API key, package download, or implementation project is required. In a
course checkout, the originals are under `static/exercises/understand-module3/`.
Open the folder containing the Python files; do not run the course root's
`npm start` for this exercise.

Inspect
[the service](pathname:///exercises/understand-module3/module3_server.py) before
execution. Its runtime dependencies are Python's standard library. It binds only
to `127.0.0.1`, an address on your own machine. It contains fictional in-memory
data, makes no outbound requests, sends no messages, and writes no data files.
Request logs go to the terminal. These boundaries describe this fixture only.

Permitted actions: start and stop your own fixture, read its files, send the
documented local GET requests, and restart it with the documented unavailable
mode. Other methods are refused. There is no booking, account, email, payment,
or shared staging system. Do not substitute another service's address and carry
these permissions over to it.

1. Open a terminal in this module folder. Start:

   ```sh
   python3 module3_server.py --port 0
   ```

   Port `0` asks the operating system to choose a free port. The startup line
   prints the actual base URL, fixture version, configuration and process ID.
   Keep that terminal open. If Python or local sockets are unavailable, retain
   the exact setup error and use a packet below; do not claim a successful run.

2. In a browser, open the printed base URL plus `/about`. This is a JSON API,
   not a React app. Expect `environment: local-fixture`, version `module3.1`,
   and `catalog_state: ready`. The fixture does not report its Git commit. If
   you are using a Git checkout, record its revision separately with
   `git rev-parse HEAD`; a copied folder's revision can remain unknown.

3. Open `/health`, then `/api/workshops`. The ready health result is status
   `200` and `ready: true`; the workshop result lists both titles. Ask an agent
   or client to show status and response body if a browser hides the status. Use
   `/api/workshops?q=YOUR_INPUT` for your chosen search. Encode spaces or other
   special characters with your client rather than building an ambiguous URL by
   hand. Capture the request ID in the response and find its matching terminal
   event. Logs omit query text; keep the input in your own evidence.

4. Compare with your expectation. Run your chosen nearby comparison under the
   same configuration. If you find a mismatch, repeat that case once to check
   you can describe it consistently. This is a small exploratory investigation,
   not a requirement to enumerate every possible input.

5. Stop your server with Ctrl+C in its terminal; it should print a `stopped`
   event and return to the prompt. Restart your own fixture:

   ```sh
   python3 module3_server.py --port 0 --catalog-state unavailable
   ```

   Use the new printed address. Compare `/about`, `/health`, and the same
   workshop request. An unavailable catalog returns `503` with an explicit
   error; it does not mean there are zero matching workshops. Record the changed
   configuration before interpreting the difference.

6. Stop this process too. Summarize the observation, remaining uncertainty, and
   next useful check. Do not repair the deliberately included defect.

If you prefer a script or request client, ask the agent to create the smallest
local check needed and explain its target and input. Keep personal evidence in
your established private record home; do not commit it to the course.

## MCP packet route — inspect, then choose a call

The following is supplied fictional evidence, not a live tool discovery or
execution. The fixture identity note says `workshops-mcp 0.3`, transport `stdio`
(a local process's input/output), data `fictional-catalog`, and permitted tool
`search_workshops`. Its author notes that `reserve_seat` reaches an external
booking system and may send a confirmation; that operation is outside the
exercise's permission, even though it appears in discovery.

```json
{
  "tools": [
    {
      "name": "search_workshops",
      "description": "Search fictional workshop titles, ignoring capitalization.",
      "inputSchema": {
        "type": "object",
        "properties": { "query": { "type": "string" } },
        "required": ["query"],
        "additionalProperties": false
      },
      "annotations": { "readOnlyHint": true }
    },
    {
      "name": "reserve_seat",
      "description": "Reserve a seat; may send a confirmation.",
      "inputSchema": {
        "type": "object",
        "properties": { "workshopId": { "type": "string" } },
        "required": ["workshopId"]
      },
      "annotations": { "readOnlyHint": false }
    }
  ]
}
```

Choose a valid allowed call and predict its result. Then inspect these supplied
records: `search_workshops` with `{"query":"water"}` returned
`{"content":[{"type":"text","text":"watercolour basics"}],"isError":false}`; the
same tool with `{"query":"WATER"}` returned
`{"content":[{"type":"text","text":"No matches"}],"isError":false}`. Explain the
mismatch and what evidence would be needed to reproduce it on an actual
authorized server. A JSON object with `query: 7` would fail this input schema;
that differs from a valid call returning an unexpected result.

## Browser packet route — separate the screen and its request

These are fictional observations from an example React app; no React application
is bundled or executed by this exercise. The app's run guide says its frontend
uses `npm run dev`, and its configured API target must be checked separately.
That command belongs to this example, not every React repository.

At 10:00 UTC, the local frontend's About panel reports `workshop-ui 0.8`.
Searching `WATER` displays “No workshops”. The browser Network panel records
`GET https://workshops-stage.example.invalid/api/workshops?q=WATER`, status
`200`, body `{"workshops":[]}`. The console has no errors. A supplied deployment
note lists stage API version `0.6` from yesterday; no current running API
version was captured. No one has established permission to call this shared
stage API or whether it uses shared data. The `.invalid` address is deliberately
nonfunctional: do not try to connect to it.

Before requesting another run, explain why “the local app's API is broken” goes
beyond the evidence. Identify the frontend/API distinction, the missing
authorization/version evidence, and one safe next step using the supplied repo
or asking its owner. You may report the supplied mismatch but must not claim you
reproduced it. The absence of console errors does not explain why the successful
response is empty.

## Transfer to a real repository

When you have an authorized repository, repeat one small investigation using its
actual run instructions and tools. Choose the interface useful to your question.
Read the dependency and configuration evidence before execution; establish the
target, permitted operations, data, and possible effects. If staging is
relevant, inspect the repo's deployment docs/workflow and available deployment
records to understand the target and version. An environment name in a workflow
is a pointer, not proof of current deployment or permission to run tests.
Accessing an existing authorized environment can replace local startup.

Keep the scope to one question and one interface. Ask for just the missing
permission or evidence when needed, continue safe file inspection, and record a
blocked runtime step honestly. Do not deploy, alter shared configuration, or
create paid resources for the exercise.

## Bring back evidence

Bring your question and expected result with its basis; your environment note;
the relevant steps, input, output and log excerpt; your own interpretation and
next question; and the agent's relevant contribution if used. State which parts
you actually ran and which came from a supplied packet or agent report.

If a chat or repository link cannot be opened, supply the relevant safe excerpt,
files, or output. The teacher can review a limited finding without a full chat
export or new run. Retain uncertainty where the available material cannot show
startup, execution, cleanup, or your reasoning. Existing work is welcome; a
prior lesson and a formal handoff are not prerequisites.
