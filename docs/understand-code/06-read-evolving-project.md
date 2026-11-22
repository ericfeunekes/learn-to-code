---
title: Module 6 — Read an evolving project
description: >-
  Deepen a project picture using work records, source changes and observations,
  investigate one claim, and revise the account when new evidence arrives.
slug: /understand-code/read-evolving-project
---

# Module 6 — Read an evolving project

In [Module 2](02-find-your-way.md) you started a picture of what a project does,
where to look and what is changing. Projects keep moving: issues open and close,
changes merge, releases go out. Come back to that picture with a harder
question: **what changed, what can people use, and what do we still need to
check?** You'll connect work records, a small source change and an observation,
then update your account when new evidence arrives.

One clear case is enough. You don't need to audit the whole project, forecast
delivery or judge the team.

## Merged isn't released: date what you observe

This is the module's main idea, and the rest of the track refers back to it.
Three questions describe a change, and each has its own evidence:

| Question                           | Useful evidence                                                           |
| ---------------------------------- | ------------------------------------------------------------------------- |
| What is the team trying to change? | An issue, decision or discussion explaining the intended result.          |
| What has changed in the software?  | A source change on a named branch or version, with its checks.            |
| What can people actually use?      | The version running where they are, its settings, and observations of it. |

- **Merged** means the change is in a branch of the repository.
- **Released** means a named version that includes it exists, such as a tag or
  release note.
- **Deployed** means that version is running in a particular environment. A
  deployment can fail and leave the old version running.
- **Available** means people in that environment can actually use it. A setting
  or feature flag can still switch it off for some or all of them.

Each step can lag behind the one before. So every statement about what people
have needs a date and an environment: “As of 26 October 09:00 UTC, production
runs 0.8.” An observation is true at the moment you made it. When new evidence
arrives, write a dated update rather than rewriting the old account.

**Tiny fictional example:** a team merged a fix for sorting a reading list. The
release record includes the fix, but the pilot environment still reports the
previous version. A useful account: “The fix is in release 1.4. As of Tuesday,
the pilot environment still runs 1.3, so pilot users don't have it yet.” Saying
it works for pilot users would also need an observation on their version.

Try a variation: someone reports a successful sorting check but doesn't say the
version or environment. What can you add to your account, and what would you ask
before relying on it?

## Learning outcomes

### U6.1 Explain the evolving project picture

Choose a useful question and say which project, period and audience it concerns.
Date your account. The end of the period you describe may be earlier than the
moment you collect the evidence; say both.

Connect a few records to explain what changed, what is available and what is
still open. Point to dated sources and versions where they affect your
conclusion. A recent decision by a maintainer can explain a priority; a label on
its own may not. A board you can't see is an access gap, not evidence that no
other work exists.

**Evidence:** in your own words, you explain one change and where it is (merged,
released, deployed, available), connect an open item to its record and name a
useful unknown. Another reader can find the records behind each statement.

**Check without AI:** for one change, say from the records alone whether it is
merged, released and deployed, each with a date.

### U6.2 Investigate one important claim

Pick a claim whose accuracy matters to your picture. Use
[Module 3](03-follow-one-behavior.md) to follow one small source change from
input to result. Compare the actual before and after code, predict the result
for one input in each, and explain one connection that stayed the same. A pull
request summary alone can't show this.

Use [Module 4](04-run-and-investigate.md) for a suitable observation and
[Module 5](05-evidence-of-correctness.md) to judge what it shows. Choose your
input and expectation before running the check. Record the version, environment
and data, and the actual result. One interface is enough.

**Evidence:** you show the **hunk** (the block of changed lines in a diff) and
your before-and-after reasoning, then connect an observation someone could
repeat to the claim. You keep predictions, supplied records and your own runs
apart. You say whether the result supports, narrows or contradicts the claim,
and what it leaves open. A symptom and a suspected cause are different
conclusions; fixing it is outside this module.

**Check without AI:** point to the changed line and say what one input returns
before and after.

### U6.3 Revise a dated account with new evidence

Check at least one important agent claim against a source yourself, and accept
it or narrow it. When a new record arrives, update the part of your account it
affects, with a date, and explain why. Leave the earlier account accurate for
its original date.

**Evidence:** your first account, a dated update and a short explanation of what
changed in your understanding. New deployment evidence can change availability
while leaving test coverage unresolved. An agent's rewritten prose doesn't count
as your explanation.

**Check without AI:** given a new deployment record, say which sentence of your
account changes and which stays the same.

## Apply it to one small case

Use a real project with a useful question, or the fictional
[Harbor Log lab](06-harbor-log-lab.md). The lab has two weeks of records, a
before-and-after code change and a small local service with dummy data.

1. **Make a first account.** Explain the project and the selected change in
   plain language, then use the records to describe where it stood at your
   cutoff date. Choose one important claim to investigate. Inspect at least one
   source yourself, even if an agent gathers the material.
2. **Investigate and revise.** Follow the code change and predict its effect.
   Write your expected result, then run one check within the lab's permitted
   setup. Add the finding and its limits to the same account; correct an agent
   claim if the evidence says so.
3. **Handle new evidence.** Ask your teacher for one later record, or use a
   later record from your project. Write a dated update saying which conclusion
   changes and which stays.

Bring the account, plus only the excerpts, the hunk, your input and output and
the agent turns needed to check your reasoning. If you can't see the before code
or run anything, say so and continue with what you can inspect.

For a second, shorter practice with the same kind of records, try the optional
[Fieldnotes packet](../companions/fieldnotes-evidence.md).

## Next: work with engineers

[Module 7](07-work-with-engineers.md) puts this picture to work: reading reviews
and checks in depth, asking engineers questions, running your own QA pass and
contributing.

## For the teaching agent

- Use the learner's picture from Module 2 if they have one. Ask what matters in
  the project before asking for technical detail. If a connection is missing,
  revisit the relevant earlier module briefly, then let them choose the next
  step.
- The three outcomes above are the evidence criteria. A convincing account
  leaves U6.2 unassessed if no actual before-and-after reasoning is shown. A
  green check leaves an availability claim unassessed if the running version is
  unknown. Missing access isn't proof of inability.
- For Harbor Log, check that the learner's trace matches H4a and the
  downloadable source. The change strips the query and lowercases the note text;
  it does not lowercase the query. Assess predictions and output against those
  operations without suggesting a fix.
- Supply this **fictional later record** only after the learner's first Harbor
  Log account: “October 27, 14:00 UTC: production activation of 0.9 / `c930`
  succeeded for pilot supervisors; export remains disabled.” No new search
  observation comes with it. Ask for an update as of October 27, 15:00 UTC. The
  learner should explain what this changes about availability, what it leaves
  open about search, and why the October 25 account keeps its original cutoff.
- A learner who found the capital-letters fault in Module 4 will recognize the
  similar fault here; that is familiar practice. To assess transfer, use another
  real project or an unfamiliar behavior. Name the help given and the scope when
  you record independence. An API case alone doesn't show the same ability with
  MCP (Model Context Protocol) tools or a browser app.

[Track guide](index.md) · [Module 0](../course/00-project-and-git.md) ·
[Next module](07-work-with-engineers.md)
