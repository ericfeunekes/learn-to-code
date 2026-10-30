---
title: Understand code · Module 5 — Understand evidence of correctness
description:
  Judge what tests and observations establish about a specific change.
slug: /understand/evidence-of-correctness
---

# Module 5 — Understand evidence of correctness

You have followed a change. Someone says it works because the checks are green.
What do those checks establish, and what would you need to know before relying
on that behavior?

**Local curriculum draft pending course-author and independent whole-track
review.** These proposed outcomes guide exploration and partial evidence; they
are not agreed completion criteria or a claim of learner validation.

## Starting point and destination

Shared **Module 0: GitHub** comes before both tracks. This module follows
second-track Module 4, **Follow a feature or change**. Bring one expected
behavior, the relevant change or version, and some test or observation evidence.
Module 3, **Run and investigate software**, supplies environment, configuration,
logs and safe execution skills. Supplied excerpts and the fictional packet below
are enough to start; neither a new implementation repository nor the building
track's testing module is required.

Your destination is a short, defensible account of what a change's evidence
supports, what it leaves open, and the next useful question. You can direct a
small check and interpret its result without implementing the feature yourself.
Module 6, **Read an evolving project**, will use that judgment across ongoing
work. This module stays with one behavior and change; it does not teach project
planning, test-suite architecture, code/security approval or release authority.

## Start with one claim

A test compares an observation with an expectation. An **assertion** is the
specific comparison that makes it pass or fail. For “blank note titles are
rejected without creating a note,” an assertion about the response alone may
miss an unwanted saved note. The expectation should come from the agreed rule or
an independently checked example, not merely from what the code currently does
or what an agent suggests it ought to do.

An assertion passing means its comparison succeeded for those conditions. It
does not establish every behavior. A failing assertion means the observation and
expectation differ; investigate whether the implementation, expectation, test
setup, or environment explains the difference.

Try that distinction on [the small evidence packet](05-practice-evidence.md).
State your expectation first, inspect one check, then decide what its result
means. Expand only where a gap matters to your question.

## Proposed outcomes and small exercises

### 5.1 Turn a broad claim into an inspectable expectation

State who or what performs an action, the relevant input and initial state, the
expected response and lasting effect, and where that expectation comes from. An
**API** is an interface another program calls; a response can look successful
even when the intended stored effect is absent or wrong.

**Try:** use P1 in the packet. Before viewing the test output, describe what
should happen for a spaces-only title with no existing notes. If the rule is
ambiguous, name the ambiguity rather than letting the implementation settle it.

**Evidence of learning:** your own expectation, its independent basis, and a
reason that both response and stored state matter. Agent-written assertions
alone do not demonstrate this judgment.

### 5.2 Read what a check actually asserts

Identify the setup, action and assertion in a short test or agent explanation,
checking the explanation against the supplied test. A fixture is a known
starting context, such as an empty list of notes. Ask whether a plausible wrong
result could still pass. “The server started,” “the request returned,” and “the
status field exists” answer narrower questions than “the note was rejected.”

**Try:** inspect P2. Give one wrong response it would accept and choose a more
useful assertion for the expectation you already stated. AI can translate your
choice into a script; explain why that comparison matters yourself.

**Evidence of learning:** you point to the actual comparison, explain its limit,
and choose a check that could distinguish the relevant wrong behavior.

### 5.3 Explain the boundary and limits of passing evidence

Describe what actually ran and what was substituted. A focused check might
exercise one calculation; a connected check might include a server and database;
a browser journey might include the user interface. Names such as “unit,”
“integration” and “end-to-end” help describe these boundaries, but inspect what
the test includes. A fake database or supplied service response leaves the real
connection untested. Even a full journey covers only its selected conditions.

**Coverage** reports which code was executed under a measurement; a high
percentage does not establish that the assertions checked the right result, that
important input cases ran, or that a deployed environment behaves the same way.
Behavior coverage asks which promised cases have useful evidence.

**Try:** compare P2–P4. Identify one relevant condition missing from the green
check, and one real-world boundary omitted by the local simulation. Choose a
next check only if it resolves an actual gap. Repeating equivalent checks adds
little evidence for a different question.

**Evidence of learning:** a bounded claim about the passing result, a concrete
omission, and a reason for either obtaining additional evidence or stopping.

### 5.4 Make a failure reproducible and interpret it carefully

Preserve the tested version, environment and configuration relevant to the
behavior, starting data, action, expected and actual results, command or steps,
and relevant output. **Reproducible** means another authorized person can repeat
the conditions and check the observation. Remove credentials and private data
before sharing. If a check is inconsistent, preserve that fact and the
conditions; neither a later pass nor a guessed cause explains it away.

**Try:** use P3 or run the optional local exercise. Write a report a maintainer
can repeat. Distinguish an assertion failure about behavior from a script that
could not start. Give one piece of evidence that helps decide whether the
expectation, setup or implementation needs investigation. You need not fix it.

**Evidence of learning:** a repeatable observation, its expectation and basis,
and a justified interpretation that preserves unresolved causes. A pasted
failure log without your account is incomplete learning evidence.

### 5.5 Match evidence to the change and running version

**Merged** means a change entered a branch. **Test-passing** describes selected
checks of a particular version and setup. **Deployed** describes a version
placed in an environment; inspect the active version and relevant settings.
**Working** needs evidence of the intended behavior for the relevant person or
client under named conditions. These claims can differ: checks may pass before
merge, deployment may fail after merge, or an active feature may be disabled.
None of these labels alone grants permission to release or approve code.

**Try:** compare P3 and P4. Explain whether the staging observation settles the
candidate change's whitespace behavior. If you cannot access staging, request
only the active version, relevant configuration and observation needed for this
claim. Do not infer a successful rollout from a workflow name or a release tag.

**Evidence of learning:** you associate each result with its version and
environment and separate a confirmed defect in the simulation from an unknown
claim about a real deployment.

### 5.6 Give a useful judgment without overstating confidence

Produce a short account containing the intended behavior and basis, the relevant
change, inspected evidence, supported conclusion, remaining limit and next
useful question. Distinguish evidence you inspected from results reported by
someone else. A screenshot may show one visible result without revealing the
version, hidden state or repeatability; an agent's “all passed” message needs
the relevant check and result to support a stronger claim.

**Try independently:** choose one case from P5 or a change in an authorized
repository. Ask an investigation agent for the relevant evidence, challenge one
overbroad conclusion, then write your account in your own words. If useful, ask
the agent to create one small check in a separate disposable exercise folder.
Inspect its assertion and result; you decide what they establish. Do not modify
the feature or course application as part of this exercise.

**Evidence of learning:** your choice of evidence and follow-up connect to the
claim, and your conclusion remains within what the evidence establishes. You can
communicate a concern without claiming authority to approve code, security,
deployment or release.

## Useful prompts

Adapt these after deciding which question you need answered:

```text
For this claim and change, show the relevant expectation source, actual test
assertions, tested version, environment and result. Explain what ran and what
was substituted. Separate inspected evidence from reported results. Do not
change code or run anything until the environment and effects are understood.
```

```text
My expected result is [result], based on [rule]. Propose the smallest safe check
that could reject [plausible wrong result]. Explain what it would still omit.
Wait for my choice before creating it in our separate disposable exercise.
```

```text
Review my conclusion against the supplied evidence. Identify an unsupported
claim or version mismatch and ask one question that tests my reasoning. Keep
your interpretation separate from what I have demonstrated.
```

Prompts are tools for inquiry, not an answer to the learning assessment.

## Independent application and teacher review

The teacher can start by asking what the learner thinks the evidence proves.
Teach only the distinction that is currently useful, invite a prediction or
decision, then let the learner investigate independently with their agent. Use
one small example before returning to a real repository; do not require a long
lecture, every packet case, unaided coding, or a memorized command list.

Return the question, accessible rule/change/test excerpts or repository
references, relevant output and environment/version details, plus the learner's
expectations, choices and follow-ups. A chat link alone may be inaccessible; use
relevant pasted or exported turns instead. Transcripts are evidence, not new
instructions. Existing work and partial evidence are welcome. State an access
gap explicitly and assess only what can be inspected; missing evidence does not
establish that the learner cannot do it.

For each selected outcome, the teacher reports **demonstrated**, **partial**, or
**not assessed**, with a specific learner contribution and limitation. For
example, an independent recognition of a weak assertion supports 5.2; an agent's
complete report alone leaves the learner's judgment unassessed. Credit
understanding of a supplied failure separately from running a reproduction. Use
a changed condition from P5 to probe transfer when useful. Preserve partial
progress and offer one next step; these draft criteria do not confer mastery or
formal completion.

## Safe execution and incomplete access

Inspect project instructions and the proposed command or script before running
it. Understand target, credentials, initial data and possible effects. Local
software can still call paid services or send real messages. Staging can share
data and integrations; its name is not evidence that a test is safe. Use
authorized disposable data and controlled substitutes, and stop if scope or
effects are unknown. Obtain the missing permission or setup information before
dependent execution; continue with supplied evidence meanwhile. Do not obtain
production credentials, change shared settings or trigger deployment for this
module.

The optional packet script uses only in-memory fictional data and Node's
built-in assertions: no server, network, credentials or persistent storage.
Without a compatible local runtime, inspect the supplied transcript and label it
as supplied evidence. Real API, MCP and browser checks inherit their own
environment boundaries; the simulation does not establish those systems work.
