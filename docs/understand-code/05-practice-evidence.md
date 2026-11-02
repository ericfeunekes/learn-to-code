---
title: Module 5 practice — Evidence for a blank-title change
description:
  A fictional change with weak checks, a reproducible defect and mismatched
  deployment evidence.
slug: /understand-code/evidence-of-correctness/practice
---

# Evidence for a blank-title change

This is fictional teaching evidence for
[Module 5](05-evidence-of-correctness.md), for practicing change assessment. The
version labels are exercise labels, not real commits. No live repository,
deployment, person or learner result is represented. Read P1 and P1a, make a
prediction, then examine P2–P4. The interpretation is at the end; try your
account first.

## P1 The rule and change

The agreed rule for a fictional note API is: “Reject an empty or spaces-only
title with status 400 and message `Title required`. Create no note. Accept a
nonblank title with status 201 and create one note.” Status codes describe the
response: here 400 signals invalid input and 201 signals creation.

Version `baseline` follows this rule. A proposed `candidate` change alters title
validation. The learner's question is: **Does the evidence establish that
spaces-only titles are still rejected without creating a note?** Use an empty
initial note list and title `"   "`. State both expected response and expected
note count before inspecting results.

## P1a The edit and callers that stay the same

The complete validation change in `service/create-note.js` is:

```diff
- const invalid = title.trim().length === 0;
+ const invalid = title.length === 0;
```

Here `trim()` removes surrounding spaces for the emptiness check; it does not
change the title that gets saved. Both versions return status 400 and create no
note if `invalid` is true. Otherwise they save one note and return status 201.
The full executable simulation is in the download below.

Two fictional callers use this operation. Their code is identical at both
versions:

```text
// web/NewNote.js: title comes directly from the text field
const result = await createNote(title);
showMessage(result.status === 201 ? 'Created' : 'Title required');

// imports/daily-note.js: always supplies this fixed title
await createNote('Daily summary');
```

The browser excerpt has no client-side blank-title rejection. It can send spaces
and display “Created” if the service accepts them. The fixed-title importer
cannot supply spaces-only input through the code shown. The callers are source
excerpts for reasoning, not executable browser or importer fixtures. The lab
models only the service decision and note count; it does not execute these
callers or save to a real database.

Before viewing the checks, predict response and note count for `""`, `"   "` and
`"Meeting"` at each version. Then explain what changes for the unchanged browser
and why the shown importer should be unaffected. The supplied reference search
covers these two callers inside the fictional repository. External clients and
generated clients are unavailable; do not infer that these are all callers
everywhere.

## P2 A green check

The supplied test starts with no notes, submits title `"   "`, then asserts only
that the response has a numeric status:

```text
const result = simulateRequest('candidate', '   ');
assert.equal(typeof result.status, 'number');
```

Supplied result: `PASS: weak check for candidate`, exit status 0. The simulation
runs local JavaScript validation and an in-memory note list. It includes no real
HTTP request, server, database, authentication or interface.

An agent concludes: “The blank-title change passed, so the API works in
staging.” Find the leap from the assertion to the claim. Test counts or a
coverage percentage would not add the missing comparison.

## P3 A focused check and repeatable observation

The stronger check submits the same input and asserts status 400, message
`Title required`, and zero stored notes. It gets its expectation from P1:

```text
const result = simulateRequest('candidate', '   ');
assert.deepEqual(result, {
  status: 400,
  message: 'Title required',
  noteCount: 0,
});
```

`deepEqual` compares all three returned fields with the expected object. In this
simulator, `noteCount` comes from the in-memory list. A real persistence check
would need evidence from the storage boundary; returning a claimed count alone
would not establish that a real database stayed unchanged.

The following are **supplied fixture transcripts**, not evidence that you ran
them. The download contains their executable source. Run it only if useful.

```text
$ node evidence-lab.cjs baseline focused
PASS: focused check for baseline
exit status: 0

$ node evidence-lab.cjs candidate focused
FAIL: focused check for candidate
Expected: {"status":400,"message":"Title required","noteCount":0}
Observed: {"status":201,"message":"Created","noteCount":1}
exit status: 1

$ node evidence-lab.cjs candidate observe
{"version":"candidate","title":"   ","initialNoteCount":0,"result":{"status":201,"message":"Created","noteCount":1}}
exit status: 0
```

The final command exits successfully because it produced an observation; it does
not assert correctness. The focused check's failure on `candidate` and pass on
`baseline` show sensitivity to this particular regression. They do not establish
every behavior of either version. You can inspect the script to locate the
altered validation if useful; diagnosis and repair are separate from recording
what this evidence establishes.

### Optional local reproduction

Download
[the local evidence lab](pathname:///exercises/understand-module5/evidence-lab.cjs)
to a separate disposable exercise folder. Inspect the file before running it. It
requires Node.js with the built-in `node:assert/strict` module, which the
course's supported Node runtime provides. No package install or course checkout
is needed. Each invocation starts with an empty in-memory list and discards it
on exit. It does not write files, call services or start a server.

Run a command from P3 there, then repeat with `weak` instead of `focused`.
Record the actual runtime version (`node --version`), selected fixture version,
command and output. The candidate focused failure is intentional; do not “fix”
the assertion to accept it. A missing runtime or file is an execution problem,
not evidence that note validation failed. If execution is unavailable, use the
supplied transcripts and say you have not reproduced them yourself.

## P4 Version and deployment evidence

Fictional snapshot, October 30 at 10:00 UTC:

| Evidence            | What is recorded                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| PR #15              | Candidate merged to `main` at 09:00; the weak check passed.                                                             |
| Deployment attempt  | Candidate activation in staging failed at 09:15. The active version remains `baseline`.                                 |
| Staging observation | At 09:30, `baseline`, default configuration, empty disposable data: spaces-only title returned 400 and left zero notes. |
| Production          | No version or observation supplied. No access authorized for this exercise.                                             |

The staging observation is supplied evidence of the rule working for the old
version under those conditions. It cannot settle whether the candidate works
there. The focused failure concerns the candidate's local simulation, not a
request you made to a real API. Preserve both distinctions in your account.

## P5 Independent transfer: choose one

These are small fictional changes of context. Choose a next question or check,
explain its value, and write a limited conclusion. No live calls are needed.

- **API:** the response is now 400, but a new observation shows one note saved.
  Which part of P1 is met and which is violated? What would checking only status
  miss?
- **MCP:** a tool's input schema says `title` must be a string. Its test checks
  that `"   "` passes schema validation and calls that “correct rejection.” A
  schema describes permitted input/output structure; it need not express all
  behavior rules. No invocation result or stored state is supplied. What is
  established, and what evidence would resolve the title behavior? An MCP tool
  call can have effects; do not invoke an unknown tool to fill this gap.
- **React:** a component test replaces the save service with a response saying
  “saved” and sees a confirmation banner. A real-browser observation on the
  candidate shows that banner, but reloading loses the note. Explain what the
  component check establishes and what remains to investigate along the
  browser/service/storage path. The loss is observed; its cause is not supplied.
- **Changed rollout:** a later record establishes candidate active in staging,
  but validation is disabled by a setting. What version/configuration would a
  new observation test? Would it answer the behavior with validation enabled?
  Preserve the original snapshot instead of rewriting its history.

## Return evidence for review

In a short account, explain a before/after effect on an unchanged caller and an
unaffected case. State your expectation and basis, identify the actual assertion
and one omission, interpret a pass or failure with its environment and version,
and name one unresolved question plus a useful next step. Include your relevant
decisions and follow-ups with the agent and the excerpts/output you relied on.
Label supplied results, your executions and agent-written work separately. A
teacher can assess your reasoning from supplied evidence even if you could not
run the lab, while leaving execution skills unassessed.

## Teacher comparison: consult after your attempt

For the supplied string inputs, both versions reject `""` and accept
`"Meeting"`; the candidate alone accepts `"   "`. Removing `trim()` changes the
emptiness decision, so the unchanged browser can now show “Created” for spaces.
The fixed-title importer still creates its ordinary title. These are
source-based predictions about callers, not executed client observations.
Missing external clients limit the impact claim.

P1 requires status 400, `Title required`, and zero created notes. P2 checks a
numeric field; an incorrect 201 still passes. P3's stronger check rejects the
candidate because it returns 201 and creates one note for the spaces-only input.
The independently stated rule supports calling this a defect in the simulation.
The same focused check passes on baseline, supporting its sensitivity to this
known wrong behavior, rather than correctness for all inputs. The simulator
omits a real server, database and client.

P4 supports merge and the selected passing check, but candidate activation
failed. Staging's passing observation is on baseline. Neither candidate behavior
in a real deployment nor any production behavior is established. Before relying
on a staging test of the candidate, obtain the active version, relevant
configuration and safe disposable setup, then choose an authorized check of the
response and saved state. The local defect is already reproducible; repeating
the weak check does not resolve it.

For P5, a 400 response plus a saved note violates the no-creation rule. String
schema acceptance alone says nothing about rejection or storage. A mocked
confirmation banner shows that component response to a supplied success; it does
not establish persistence. A disabled validation setting means a new candidate
observation covers that configuration, leaving enabled validation unanswered.
These interpretations are teacher guidance, not learner evidence.
