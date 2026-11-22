---
title: '6. Read an evolving project'
description: >-
  Deepen a project picture using work records, source changes and observations,
  investigate one claim, and revise the account when new evidence arrives.
slug: /understand-code/read-evolving-project
---

# 6. Read an evolving project

In [Module 2](02-find-your-way.md), you began a picture of what a project does,
where to look and what is changing. You can keep exploring that repository or
broader project as features, issues and releases evolve. Reuse earlier maps and
questions, checking what is current instead of starting from nothing each time.
Return to that picture with a more demanding question: **“What changed, what can
people use, and what do we still need to check?”** You will connect work
records, a small source change and an observation, then update your account when
new evidence arrives.

You are helping a reader understand the software and its ongoing work. One
coherent case is enough. You do not need a complete project audit, a delivery
forecast, a team assessment or an implementation task.

## Start with the picture

Think about three connected questions:

| Question                           | Useful evidence                                                              |
| ---------------------------------- | ---------------------------------------------------------------------------- |
| What is the team trying to change? | An issue, decision or discussion explaining the intended result.             |
| What has changed in the software?  | A source change on an identified branch or revision, with relevant checks.   |
| What can people actually use?      | The version active in their environment, relevant settings and observations. |

These sources describe different parts of the picture. A merged change can be
ready in the repository while users still run an earlier version. An observation
can confirm one behavior without establishing every part of a feature.

**Tiny fictional example:** a team merged a fix for sorting a reading list. Its
release record includes the fix, but the pilot environment still identifies the
previous version. A useful account says the fix is in the new release and has
not reached that pilot environment. To say it works for pilot users would also
need evidence of the relevant behavior on their running version.

Try a small variation: someone reports a successful sorting check but omits the
version and environment. What can you add to the account, and what would you ask
before strengthening it? Explain your choice before asking an agent.

Start broad in your own project too. Explain what it does and why the selected
change matters before naming functions, commands or deployment tools. Add those
details when they help settle the question.

## What you can demonstrate

### Understand code 6.1 — Explain the evolving project picture

Choose a useful question and say which project, period and audience it concerns.
Date your account: the end of the period you describe may be earlier than the
moment you collect evidence. Include an older open item if it matters now.

Connect a few relevant records to explain what changed, what is available and
what remains open or uncertain. Point to dated sources and revisions where they
affect your conclusion. A recent maintainer decision can explain a priority or
dependency; a label or milestone alone may leave that unclear. An unavailable
board is an access gap, not evidence that no other work exists.

**Observable evidence:** in your own words, explain one change and its current
availability, connect an unresolved item to its supporting record, and name a
useful unknown. Another reader can find the records behind those statements. A
few paragraphs with links or excerpts can do this; a status table is optional.

### Understand code 6.2 — Investigate one important claim

Choose a claim whose accuracy matters to that picture. Use
[Module 3: Follow one behavior](03-follow-one-behavior.md) to follow one small
source change from input through connected operations to result. Compare the
actual before and after source, predict the behavior of a chosen input in each,
and explain one connection that stayed unchanged. A PR summary alone cannot show
this reasoning.

Use [Module 4: Run and investigate](03-run-and-investigate.md) for an
appropriate observation, and
[Module 5: Understand a change and its evidence](05-evidence-of-correctness.md)
to judge what the result establishes. Choose your input and expectation before
running the check. Identify the version, environment, data and permitted
effects; record the actual result. One suitable interface is enough: an API
request, a permitted MCP call or a browser journey can serve the question.

**Observable evidence:** show the source hunk and your before/after reasoning,
then connect a reproducible observation to the claim. Distinguish predictions,
supplied records and your own execution. Explain whether the result supports,
narrows or contradicts the claim, and what it leaves unanswered. If it surprises
you, choose a small comparison that helps interpret it. A symptom and a
suspected cause are different conclusions; implementing a repair is outside this
exercise.

### Understand code 6.3 — Revise a dated account with new evidence

Check at least one consequential agent claim against a source yourself. Explain
why you accept it or how it needs narrowing. When a new record arrives, revise
the affected part of your account and explain why. Keep the earlier account
accurate for its original cutoff.

**Observable evidence:** your initial account, a dated update and a short
explanation show what changed in your understanding. New deployment evidence may
change availability while leaving behavior coverage unresolved. Do not treat an
agent's revised prose as your explanation of that distinction.

## Apply it to one small case

Use an authorized project with a useful question, or the fictional
[Harbor Log lab](module6-harbor-log-lab.md). Existing work counts; no new
repository, account or implementation project is needed. The lab supplies a
bounded history, before/after source and a local API with dummy data.

1. **Make an initial account.** Explain the project and selected change in plain
   language, then use the records to describe its state at your cutoff. Choose
   one important claim to investigate. Inspect a source yourself even if an
   agent gathers the material.
2. **Investigate and revise.** Follow the small source change and predict its
   before/after effect. State your expected result and run one suitable check
   within the permitted setup. Add the finding and its limits to the same
   account; correct an agent claim if the evidence warrants it.
3. **Handle new evidence.** Ask your teacher for one later record, or use a
   relevant later record from your project. Date an update and explain which
   conclusion changes and which remains supported or uncertain.

Bring that account and only the excerpts, source hunk, input/output and relevant
agent turns needed to check your reasoning. A separate brief, claim table, QA
report and full transcript are unnecessary. Preserve your expectation, choice of
check and interpretation even when an agent does the retrieval or execution.
Keep private evidence in its approved home and share only permitted excerpts.

If before source or execution is unavailable, explain the gap and continue with
what you can inspect. You can demonstrate a useful project account and a sound
proposed check while leaving source comparison or runtime operation unobserved.
Supplied fictional results support interpretation practice; they do not show
that you operated a tool or investigated a real project.

## For the teacher

Use the learner's existing picture from Module 2 if available. Ask them to
explain what matters in this project before requesting technical detail. If a
connection is missing, use one small example or revisit the relevant earlier
module, then let them make the next choice. There is no fixed session sequence
or command recall test.

Review the learner's reasoning separately from the agent's output and software
results. The three observable outcomes above are the evidence criteria. A
convincing account still leaves source comparison unassessed if no actual
before/after reasoning is supplied. A green check still leaves the account's
availability claim unassessed if its running version is unknown. Give credit for
the demonstrated parts and one useful follow-up for a gap; incomplete access is
not proof of inability.

For Harbor Log, check that the source trace matches H4a and the downloadable
source. The supplied change strips the query and lowercases note text; it does
not lowercase the query. Assess the learner's predictions and actual output
against those operations, without suggesting a repair or changing the fixture.
No real learner result is supplied by the course.

**Fictional later record — supply after the initial Harbor Log account:**
October 27, 14:00 UTC: production activation of 0.9 / `c930` succeeded for pilot
supervisors; export remains disabled. No new search observation accompanies the
record. Ask for an update as of October 27, 15:00 UTC. The learner should
explain what this changes about availability, what it leaves unresolved about
search, and why the October 25 account keeps its original cutoff.

If the learner already knows the workshop-search capitalization fault from
Module 4, recognizing a similar fault here is familiar practice. Reconciling
project records and updating the account are additional work. To assess
transfer, use another authorized project or a changed packet with an unfamiliar
behavior and evidence relationships, rather than asking for the same known query
again. Name the assistance and scope when describing demonstrated independence.
An API case alone does not establish the same ability with MCP or a React
application.

The next step can be another question in the learner's own project. Broader
confidence comes from later unfamiliar work, not a completion claim based on one
case.

[Track guide](index.md) · [Module 0](../course/00-project-and-git.md) ·
[Next module](07-work-with-engineers.md)
