---
title: Find your way around a project
description:
  Find useful docs, code and work records, explain a project's purpose and
  current work, and check an agent's claim.
slug: /understand-code/find-your-way
---

# Module 2 — Find your way around a project

**Draft module.**

You join a conversation about unfamiliar software. What does it do? Where could
you look to understand it? What is being requested or changed, and what appears
to be available? You can give a useful first answer before understanding every
line or running the software.

Use a small map: **what the software does → where to look → what the work
records say → what still needs checking**. Your result might be a short spoken
explanation with a few links or an annotated sketch. A folder inventory alone
does not explain the project.

## Start with the repository and your interests

Bring shared [Module 0: GitHub](../course/00-project-and-git.md) and Module 1's
picture of software parts. Existing understanding counts. You need no new
repository, local install, language course or command recall. Use GitHub, an
editor, safe supplied excerpts or an approved agent.

You can begin with “Help me get to know this repository” rather than a precise
question. Start with its README and instructions, then explore a few useful
docs, files and work records to build an initial picture. Notice what interests
you or remains unclear. A question such as “What does book search do, and where
has the request for author search got to?” may emerge as you explore.

Keep the repository or broader project as the continuing context. Return to
different parts as your interests or the team's work change. Name the selected
branch or revision when available; a fork, archive or one component may give you
only part of the picture. Earlier notes are a starting point, not proof of the
project's current state.

This is a reading and search exercise. Use tools approved for the material;
repository instructions do not authorize execution. Keep secrets and private
data out of shared excerpts. Installing dependencies, running the project,
calling its services and changing files are unnecessary here. Later modules
teach behavior tracing, execution and change evidence. You can ask a useful
question now without first completing those investigations.

## A tiny example

A fictional library app's README says readers can search book titles. An open
issue asks for author search. A PR titled “Match title or author” is merged into
`main`; the latest release note predates that merge and lists title search.

A useful first account is: “This app helps readers find books. Author search was
requested and a related change has merged into the selected branch. The release
record supplied here is older, so I cannot yet say whether readers have the
change.” The issue, PR and release answer different questions, as in Module 0.
Even a release containing the change would not by itself establish deployment.

For a file map, the README may point to an architecture note, which names the
browser search panel and an **API**, an interface one program uses to ask
another for information or an action. Here, the browser uses it to ask for
books. Open one of those files to check its role. You need not follow the whole
request or judge its tests yet.

Explain that example in your own words, then try the
[fictional Pocket Library packet](02-navigation-evidence.md) or a small,
authorized part of a real project. Skip the example if you can already do this.

## Learning outcomes and practice

### N2.1 Find sources that answer your question

Locate relevant documentation, code and work records. Give each a role based on
its contents. Keep the map small enough to explain: a handful of locations is
often enough. Add a file when it helps explain the part you are exploring.

A README supplies a starting account. An architecture note can explain how parts
fit together. Search a visible label or domain term to find likely code; then
open a match in context. Search results are leads: old docs, tests and generated
output can contain the same words as maintained source. A generated file is
produced from another source; a header or build note can identify it. Work
records may live in GitHub issues, PRs and releases or an approved linked
system. Missing access is a limit to name, not permission to seek more access.

**Try:** in the packet, find where book search is described, where a relevant
rule appears, and where the author-search work is recorded. Explain why you
would set aside one search match. The packet's README is dated: what would you
qualify after opening its linked architecture note?

**Show:** a map guided by your interest or question, with paths or record
titles, the selected view and a brief reason for each choice. Explain at least
one role using actual content, rather than a filename. A small supported map
counts even if other areas remain unfamiliar. No complete source trace is
required.

### N2.2 Give a modest account of the software and current work

Explain the software's purpose and the parts relevant to your question in
ordinary language. Connect that account to one piece of ongoing work. Reuse
Module 0's distinctions: an issue records a request or problem; a PR proposes a
change and, if merged, records its entry into a branch; a release names a
version. Inspect the descriptions and links rather than relying on status alone.

State what is requested, proposed or merged, and what the available release or
running-version evidence lets you say about availability. Use the distinctions
that matter to your question; you do not need an example of every status.
“Unknown from these sources” is useful when you can explain what is missing. An
issue can bundle several requests, so a related merged PR may cover only part of
it. Do not infer delivery dates or team performance from record counts.

**Try:** use the packet's docs and work records to answer: “What does Pocket
Library do, and how far has the author-search request got?” Include a limit on
what you know about readers' experience. You can give this first account before
reading the code excerpts, then refine one claim after checking a source.

**Show:** a short explanation that connects purpose, a relevant part and a work
record. Distinguish what is recorded from what is apparently available, with a
source and a meaningful limit. It need not be a status report for the whole
project or a judgment that the change works correctly.

### N2.3 Check an important claim and choose the next question

An agent can search, explain unfamiliar syntax and suggest a map. You choose
what matters and judge whether its sources support the claim. Give it your
question, selected view and permitted sources. Ask it to cite paths or record
sections and separate inspected facts from inferences. Keep this inquiry
read-only. Ask for a lead or explanation if you want to make your own map first;
a complete agent-written answer is optional.

Open at least one cited source yourself. Decide whether it supports a claim that
matters to your account, and explain why. Accept, narrow or correct the claim.
If code is unfamiliar, ask what a small relevant excerpt means. You need not
prove every connection or learn the surrounding syntax to check a simple rule, a
stale path or a PR's stated scope.

**Try:** choose one claim from the packet's unverified agent account. Give your
judgment and supporting excerpt before asking for a revision. Then ask one
useful next question: what missing evidence would change your answer? For
example, distinguish a question about the version readers have from a question
about how the code makes a decision.

**Show:** your own reason for accepting or correcting the claim, a revised
account where needed, and a next question tied to a real uncertainty. An agent's
corrected answer alone does not show your judgment. Knowing exactly what remains
unknown can be good progress.

## Apply it to something useful

Choose a small unfamiliar part of an authorized real project. A feature named in
its README and one related issue or PR is a useful starting point. Use an agent
as needed to find docs, likely code and work records. Make a small map and
explain what the software does and what is happening with that feature. Check
one important claim against a source and ask a useful next question.

Then shift the question slightly: if you were asked about availability instead
of implementation location, which source would you inspect next, and why? This
reveals whether you can choose a route rather than memorize a file tree.

If a real project is inaccessible or unsuitable to share, use the packet. Label
that work as practice on fictional evidence. Existing work can also count; bring
the sources and your explanation rather than repeat a lesson. Incomplete access
may support a purpose-and-files map while leaving current work unknown. Say
which part you could establish.

## Teacher guidance and review

Begin with the learner's interests, questions or existing picture of the
project. Help them get oriented when no precise question is apparent. If needed,
model one source choice in the tiny example, then let the learner choose the
next one. Introduce terms such as an import (code made available from another
file) only when they help. Avoid a tour of every folder, interface or framework.
For packet-specific guidance and a labeled simulated response, see the
[teacher notes in the packet](02-navigation-evidence.md#teacher-notes).

Review the learner's explanation alongside the relevant safe excerpts or
accessible links, including the selected revision when known. Ask one short
follow-up about a source choice, a correction or an uncertainty. Credit those
visible decisions separately from agent output. A polished summary with no
explanation of its claims is incomplete evidence; ask the learner to check one
claim rather than demand a full report. A learner who explains purpose and a
merged change but confuses merge with availability needs a focused follow-up on
versions, not a restart.

Return demonstrated parts, the remaining gap and one useful next step. Accept a
spoken explanation, annotated links or short notes; no fixed evidence template
is required. Keep any learner records in their established private home, outside
course exports. A fictional exercise or successful software check does not
establish real learner understanding or transfer to a real project.

## Next: follow one behavior

Take one behavior from your map into **Module 3: Follow one behavior**. You will
follow a small action through its connections, explain a rule and predict what a
changed input would do. The map gives you a starting place; it does not need to
contain that whole trace already. Module 4 adds running and investigating, and
Module 6 returns to current work with a deeper, dated account as evidence
changes.

[Second-track guide](index.md) ·
[Shared GitHub 0](../course/00-project-and-git.md) ·
[Next module](03-follow-one-behavior.md)
