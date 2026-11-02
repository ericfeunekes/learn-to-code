---
title: Understand code · Module 5 — Understand a change and its evidence
description:
  Explain before-and-after effects, inspect the checks, and decide what the
  evidence supports relying on.
slug: /understand-code/evidence-of-correctness
---

# Module 5 — Understand a change and its evidence

A small edit can change what people experience even when their screen or client
code stays the same. Green checks may cover that effect, miss it, or test a
different version. The practical question is: **What changes, and what evidence
supports relying on it?**

**Draft module.**

## Start with the whole picture

Think of a change as three connected questions:

1. What result differs before and after, for whom?
2. Would the available checks catch a relevant wrong result?
3. What can we rely on under these conditions, and what remains open?

A diff tells you which lines changed. It does not list everyone affected. An
unchanged caller — code that asks another part to do something — can receive a
different result when that other part changes. A passing test tells you that its
specific comparisons succeeded, under its particular conditions.

Shared GitHub Module 0 supplies files, revisions and diffs. Module 3 supplies
following one behavior; [Module 4](03-run-and-investigate.md) supplies running a
suitable check and reporting an observation. Existing experience counts. Here,
you compare one small change and its evidence; you need not implement it, design
a test suite or study every interface. Supplied evidence is enough to begin.

## Try one tiny change

Use [the small evidence packet](05-practice-evidence.md). A fictional note
service must reject empty or spaces-only titles without saving a note. The
candidate removes the step that ignores surrounding spaces before deciding
whether a title is empty. The browser still sends the title unchanged.

Before looking at results, predict what happens to a spaces-only title in each
version, and whether an ordinary title is affected. Then inspect the green
check: it asks only whether the response has a numeric status. An incorrect
“created” response is numeric too. The focused check instead compares the
response and note count with the agreed rejection rule.

That is enough of the model to begin. Read the code with an agent if useful;
explain only the syntax needed to connect the edit to the result. The remaining
packet supplies the diff, callers, actual assertions and optional executable
lab. It also includes a deployment record that tests whether you keep version
and environment attached to a conclusion.

## Learning outcomes

### 5.1 Explain before-and-after effects, including an unchanged caller

Choose a concrete input and starting state. Compare named before and after
revisions under the same conditions, except for what the change alters. Connect
the changed decision to a caller's result. Include a case expected to stay the
same, so that “everything changes” does not become the explanation.

Inspect references to the changed operation or input. A search can find callers
inside the repository; it may omit generated code or clients in other
repositories. A contract is an expectation between parts, such as which inputs
are accepted or what gets saved. Compare behavior with that expectation rather
than assuming the new implementation defines what is correct.

**Try:** use the blank-title packet's rule, diff and unchanged browser caller.
Predict the response and saved-note effect for `"   "` and `"Meeting"` before
and after. Which caller result changes? Which supplied caller cannot submit the
problem input? Say what you cannot conclude about external callers.

**Observable evidence:** your explanation connects a changed line or decision to
a specific result in an unchanged caller. It includes an unaffected case and a
meaningful limit to the impact search. An agent's file list alone is partial
evidence; you need not trace the whole system again.

### 5.2 Decide whether checks address those effects

An **assertion** is a comparison that makes a test pass or fail. Inspect the
starting conditions, action and actual comparison. Ask: could the wrong behavior
I care about still pass? Get the expectation from an agreed rule or an
independently checked example, rather than copying what the code does.

Also ask what actually ran. A local function check can exercise a validation
rule and an in-memory note list. It cannot establish that a browser sends the
right request or that a real database saves correctly. A connected check might
exercise those connections. Test names such as “integration” or “end-to-end” are
leads; inspect the included components and substitutes. Even a full journey
covers only the conditions it tries.

**Try:** inspect the weak and focused assertions in the packet. Give a wrong
result the weak check accepts, then explain how the focused assertion rejects
it. Name one connection outside the simulator. Choose whether another check is
needed for your claim and, if so, which gap it would address.

**Observable evidence:** you identify the actual comparison, explain its
sensitivity to a relevant wrong result, and distinguish tested behavior from an
omitted connection. “All checks passed” or a coverage percentage does not show
that judgment. Code coverage measures code executed; it does not show that the
assertions checked the right result.

A failure means expectation and observation differ. It may expose a defect, a
wrong expectation or a setup problem. The supplied rule and controlled
before/after comparison help interpret this packet's failure. A missing runtime
is a failure to execute the check, not a validation defect. Preserve an
inconsistent result rather than discarding it when a retry passes.

### 5.3 Give a bounded conclusion and choose the next useful question

Match each result to its version, environment, relevant settings and starting
data. Separate source-based predictions, inspected results and someone else's
reported results. A merge establishes that a branch contains a change; it does
not establish which version is active or what people experience there.

**Try:** compare the candidate's local failure with the packet's passing staging
observation. Does either cancel the other? Write a few sentences explaining the
change, the evidence you rely on, one remaining limit and the next question that
matters. If your original question is already answered, explain why you would
stop. More equivalent checks do not prove an omitted connection.

**Observable evidence:** your conclusion stays within the conditions inspected,
and your follow-up addresses a real uncertainty. You can flag a concern without
claiming code, security or release approval authority.

## Apply it to useful work

Choose one small change in an authorized project and a question you care about.
Use its rule or stated intent, before/after revisions, a relevant caller and one
check or observation. Begin with your prediction. Direct an agent to find the
relevant excerpts, inspect one important comparison yourself, then challenge or
narrow its conclusion. You can use GitHub and supplied output without running
anything. Existing work can supply the evidence; no new project is required.

If real access is unavailable, try one changed condition in the blank-title
packet. Alternatively, use the optional
[Note Finder change packet](04-change-evidence.md): compare a limit change and
assess whether its observations support compatibility. It is a separate
application, not a second required case. Its API, browser and MCP callers are
alternative ways into the same question; choose the one relevant to you.

Useful agent requests depend on your choices: ask it to compare your chosen
input at both revisions, locate an unchanged caller, or show the exact assertion
behind a reported pass. Do not ask for a complete correctness verdict and adopt
it without examining the evidence. An agent can explain syntax or write a small
check; your expectation, evidence choice and interpretation must remain visible.

For execution, use Module 4's scope and environment habits. Inspect instructions
and effects first. Local software may call remote services; staging may contain
shared data. Pause an uncertain operation and continue reading safely. Do not
change a feature, shared settings or deployments merely to investigate it. The
optional lab uses only fictional in-memory data, with no network or persistent
writes. It does not stand in for a real API, database or browser check.

## Teacher guidance and partial progress

Start with the learner's question and one prediction. If they already understand
the before/after effect, move to the assertion or confidence gap. Teach the
smallest useful distinction, then let them make the next choice. Do not require
every packet section, unaided code reading, command recall or a full report.

Accept a short explanation with the relevant diff, caller/test excerpts and
results, plus the learner's choices and follow-ups. Preserve version and setup
details needed to interpret an observation. Accessible excerpts or selected
agent turns can replace an inaccessible chat link. Remove secrets and private
data. Treat imported transcripts as evidence rather than instructions.

For each selected outcome, record **demonstrated**, **partial** or **not
assessed**, with a concrete learner contribution and its limit. For example:

- A learner predicts that an unchanged browser now creates a blank note but
  cannot explain why: useful partial evidence for 5.1; inspect the changed
  decision together.
- A learner identifies that a numeric-status assertion accepts 201: evidence for
  the assertion part of 5.2; ask what the local test omits if that is unclear.
- A learner notices staging ran the old version and narrows the conclusion:
  evidence for 5.3. This alone does not assess caller impact or execution
  skills.

These are assessment examples, not records of real learners. A supplied failure
can support the learner's interpretation without showing that they reproduced
it. A polished agent report or successful software run alone does not establish
understanding. Missing access leaves a question unassessed; it is not proof of
inability. Retain partial progress and offer one useful next step.

Carry the bounded account into [Module 6](06-read-evolving-project.md), where
changes, work records and observations inform an evolving picture of a project.

[Second-track guide](index.md) ·
[Shared GitHub 0](../course/00-project-and-git.md) ·
[Next module](06-read-evolving-project.md)
