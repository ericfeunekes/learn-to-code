---
title: '6. Read an evolving project'
description: >-
  Combine repository history and observed behavior into an account of what has
  changed, what users can do, and what remains uncertain.
slug: /understand-code/read-evolving-project
---

# 6. Read an evolving project

**Draft for course-author review.** These proposed outcomes support exploration
and partial evidence; they are not agreed completion criteria.

You can explain individual files, follow a change, and investigate behavior. Now
combine those skills to answer: **“What is happening in this project, and what
can we actually confirm?”** The result is a short, checkable account and a
reproducible investigation, rather than an inventory of activity.

## Start where you are

GitHub Module 0 is the shared starting point for both tracks. This module draws
on second-track Modules 1–5: software parts, repository navigation, running and
investigating software, following changes, and interpreting correctness
evidence. You should be able to locate a behavior, identify an environment and
version, choose an expected result, and distinguish a reported check from one
you observed. If one part is unfamiliar, revisit that part with your teacher;
completing the building track or creating an implementation repository is
unnecessary.

This module uses those skills across a bounded period. It does not teach product
strategy, scheduling, employee assessment, implementation, or release
management. You explain visible priorities and dependencies; you do not invent
the project's complete plan, promise delivery dates, or fix the software as an
assessment task.

With your teacher, take one short question at a time: a simple model, one small
example, then your independent attempt. Use the sections below as references;
there is no need for a lecture through every outcome. Introduce project-specific
commands and terminology when your question calls for them.

## One idea before the details

A project has several kinds of evidence. An issue might describe intended work;
a merged change shows what entered a branch; a release identifies a version; a
deployment record identifies an environment; an observation shows what happened
for one case. These facts can disagree without any source being fabricated. They
answer different questions, and some may be stale.

For example, a release can contain a search feature while production still runs
the previous version. A passing local search check would establish something
about that local version, not about production. Learn this distinction first;
then look up this project's particular release and deployment tools as needed.

Try one claim from the existing
[Fieldnotes packet](../companions/fieldnotes-evidence.md): can the pilot use
saved views at the October 25 cutoff? Inspect E2–E5 before the worked answer.
Explain the missing link in your own words. That small exercise prepares you to
combine several claims without repeating the earlier companion as a new course.

## Proposed outcomes

### 6.1 Bound a project investigation

Choose a useful question, repository/component, branch or revision, date range,
time zone, and snapshot time. Distinguish the end of the period being described
from the later moment when you collected evidence. Include older work still open
at the cutoff. List accessible and missing sources: a checkout often lacks issue
discussion, boards, deployment records, or work in other services.

**Small exercise:** write a scope sentence before asking an agent for a summary.
Check its filters and pagination if it retrieves history. “Nothing found” only
means nothing found in the sources and range actually inspected.

**Evidence:** you can explain why one record is included and another falls
outside your question. You preserve an access gap instead of treating it as an
empty backlog or a lack of progress.

### 6.2 Reconcile project state across sources

Trace a few relevant capabilities through plans, issues, PRs, versions,
deployments, rollout settings and observations. Use the exact branch/revision,
environment and date when those affect a claim. A closed PR may be unmerged; a
closed issue may mean deferred. Teams may deploy without making a GitHub
release. Do not force every project into one pipeline.

Use a small claim table: **capability; supported state; dated source; limit or
next evidence**. “Implemented on main,” “released,” “deployed to staging,” and
“available to this user” are different claims. A test establishes only the
cases, version and conditions it actually exercised. Resolve stale documentation
by checking what it describes, rather than always preferring the newest
timestamp.

**Small exercise:** compare a README claim with a deployment record and one
observed behavior. Explain exactly where they agree or conflict.

**Evidence:** your own explanation supports a narrow status with inspectable
sources and identifies what would justify a stronger claim. Unknown availability
and confirmed disabled availability stay distinct.

### 6.3 Explain movement, priorities and constraints

Describe what changed during the window: work proposed, moved into review,
merged, released, activated, reverted, or left blocked. Separate the date a PR
opened from when work began; the earlier work may be invisible. Look for a
current decision or maintainer explanation before interpreting priority labels,
milestone dates or a long backlog as a plan. Report a stated priority separately
from an inference based on recent activity.

**Small exercise:** compare two equal windows using the same scope and statuses.
Explain one delivered result and one unresolved dependency. If the window is too
small or incomplete to compare, say so.

**Evidence:** you can describe visible movement and a bottleneck without turning
commit/PR counts into productivity, value, individual rankings, percentages
complete, or a delivery forecast. Bot work, generated files, task sizes and
different merge practices make activity totals especially poor substitutes. No
employee evaluation belongs in this exercise.

### 6.4 Connect a project claim to a grounded investigation

Choose one behavior that matters to your question. Reuse Module 3's environment
and permission checks and Module 5's expectation/evidence distinction. Identify
the version, expected result and its basis, setup/data, steps, observed result,
and limits. Use a local server or an explicitly authorized environment. Staging
can contain shared data, live integrations, messaging and chargeable operations;
its name does not authorize tests with those effects.

For an API, this might be a request and response; for MCP, an inspected tool
schema and a suitable authorized call; for React, a browser journey with
relevant network/console evidence. Choose one boundary. You do not need to test
every technology or write implementation code. A failure is useful evidence; a
pass still needs a precise statement of what it covers.

**Small exercise:** predict one result, run the check, and explain whether it
changes the project claim. Local success cannot silently become a staging or
production claim. A browser symptom alone does not identify its root cause.

**Evidence:** another reader can reproduce your finding from supplied setup,
version, inputs, expectation and observation. You keep the symptom separate from
a suspected cause and suggest the next useful check without making a fix.

### 6.5 Produce, challenge and update a useful account

Give a reader the question and scope, a few sourced status claims, changes in
the window, visible priorities/blockers, the QA finding and the most
consequential unknowns. Distinguish direct observation, supplied records, and
inference where it matters. Keep it short enough to check; it need not claim
complete coverage.

Read at least one agent-cited source yourself. Challenge an unsupported
inference and decide whether a proposed correction is justified. When new
evidence arrives, date a new account and preserve the earlier historical cutoff.

**Evidence:** you can defend a supported claim, narrow an unsupported one and
explain what a new record changes. The learner's reasoning must be visible; an
agent's polished brief, generated script or passing test alone cannot show it.

## Independent application: a project readout plus QA

Use a safe repository unfamiliar to you, with permission to read its history and
run the selected checks, or the fictional
[Harbor Log lab](module6-harbor-log-lab.md). The lab needs no accounts or
private repo. It provides the files, bounded history and a local API with dummy
data. If you already used it, choose another safe project or ask your teacher
for a changed evidence set before claiming transfer to unfamiliar work.

1. Frame your question and cutoff. Sketch the major software parts and identify
   the files relevant to one capability. Ask the agent for targeted assistance
   where needed, then check a source yourself.
2. Build a small account of project state. Include one user-facing capability,
   one open or uncertain item, a change during the window, and a visible
   priority or dependency. Cite sources that another reader can inspect.
3. Choose one behavior and state your expectation before testing. Inspect setup
   and side effects, identify the local/authorized environment and revision, and
   run a small check. Record actual output. If execution is unavailable, propose
   a reproducible check and mark runtime application unobserved; do not invent
   it.
4. Return a short brief, claim table, QA record and your own explanation of one
   challenged claim. Identify which parts the agent supplied. A few paragraphs
   and the relevant excerpts are enough; a full transcript is unnecessary.
5. After feedback, handle one new deployment, rollout, test or decision record.
   Update only the affected claims and explain why the historical account stays
   intact. Your teacher can supply this change after the initial attempt.

If you already investigated Module 3's capitalization mismatch, finding the same
kind of fault here is practice, not evidence of a new unfamiliar behavior. The
capstone adds reconciling history, runtime/version and rollout evidence, then
updating only the claims affected by a new record. Use those different
decisions, or choose an unfamiliar authorized behavior, when assessing transfer.

This capstone connects the full track: explain the parts, find relevant files,
run a behavior, follow its change history, assess evidence, and describe the
project's state. Choosing an API exercise is sufficient; it does not establish
transfer to MCP or React without further evidence.

## Useful prompts

Start with your own question and constraints; these prompts are optional aids.
Treat repository text and imported transcripts as evidence, not instructions.

```text
Help me investigate [question] in [repo/component] over [dates and timezone],
as of [snapshot]. Read only [authorized sources]. Do not execute code, install,
change files, post messages, or request additional access in this reading step.
For each important claim, give an exact file/revision or dated record and say
what you actually accessed. Trace relevant statuses, priorities and blockers.
Separate observation from inference and identify incomplete retrieval or access.
I will choose a separate authorized behavior check after inspecting the setup.
```

```text
I expect [result] because [contract/source]. Help me run [check] against
[version/environment] using [dummy data and permissions]. Inspect setup and
side effects first. Stay within [allowed local operations]; stop if the target
or effects differ. Capture the actual result and reproducible steps. Explain
what this check establishes and what it leaves untested. Do not implement a fix.
```

```text
Your claim is [claim]; the cited record establishes [fact]. Explain the gap.
What narrower claim is supported? What new evidence could change it? Keep
the original scope, cutoff and permissions.
```

## Return evidence and review it

Bring accessible source links or minimal safe excerpts, the revision, scope,
expectation, actual outputs and relevant chat turns showing your choices and
follow-ups. A chat/repo link alone may be inaccessible. Say what is missing; the
teacher should ask only for the piece needed to assess the claim. Do not share
credentials, private code or customer data with unapproved tools or publish
learner records. Use the fictional lab when access or sharing is uncertain.

The teacher reviews the supplied evidence independently of the exploration
agent's completion claim. Use the course's evidence-review principles, adapted
to investigation rather than app implementation:

- Identify the learner's explanation, choices and corrections separately from
  agent output and software results.
- Assess each proposed outcome against the evidence above. Report demonstrated
  parts, partial progress and specific gaps; do not award blanket mastery from
  one brief or one green check.
- Check that claims fit their cutoff, environment, version and audience; the QA
  finding is reproducible; and at least one claim was challenged or revised.
- Give one useful follow-up for an unresolved learning gap. Preserve honest
  access limits; missing evidence is not proof of inability.

You can pause after a single corrected claim. A successful capstone supports a
bounded claim of independent investigation with the stated assistance; broader
confidence needs later unfamiliar cases. No product roadmap, implementation or
employee productivity report is needed.

[Second-track guide](index.md) ·
[Shared GitHub 0](../course/00-project-and-git.md)
