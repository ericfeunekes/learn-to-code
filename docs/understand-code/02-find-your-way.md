---
title: Module 2 — Find your way around a project
description:
  Find useful docs, code and work records, explain a project's purpose and
  current work, and check an agent's claim.
slug: /understand-code/find-your-way
---

# Module 2 — Find your way around a project

You join a conversation about software you don't know. What does it do? Where
would you look? What is being asked for or changed, and what do people have
today? You can give a useful first answer without understanding every line or
running anything.

Work with a small map: **what the software does → where to look → what the work
records say → what still needs checking**. The result can be a short spoken
explanation with a few links, or an annotated sketch. A list of folders on its
own doesn't explain a project.

## Start with the repository and your interests

Bring Module 0's Git and GitHub outcomes (0.3 to 0.7) and Module 1's picture.
You need a browser and GitHub, an editor, or an approved agent. You don't need
to install anything.

You can start with “Help me get to know this repository” rather than a precise
question. Read the README first, then open a few docs, files and work records
that look useful. Note what interests you and what's unclear. A question such as
“What does book search do, and where has the request for author search got to?”
will often come out of that first look.

Say which branch or version you looked at. A fork or one component may show only
part of the project. Notes from an earlier visit are a starting point, not proof
of the project's current state.

This module is reading and searching only. Don't install, run or change
anything: later modules cover that. Keep secrets and private data out of
anything you share.

## A tiny example

A fictional library app's README says readers can search book titles. An open
issue asks for author search. A pull request titled “Match title or author” is
merged into `main`. The latest release note is older than that merge and lists
only title search.

A useful first account: “This app helps readers find books. Author search was
requested, and a change for it is merged into `main`. The release note I have is
older, so I can't yet say whether readers have it.” The issue, the pull request
and the release answer different questions. (Module 6 goes deeper into what has
reached users.)

To find the code, the README might point to an architecture note that names the
browser search panel and an **API**: a way for one program to ask another for
information or an action. Here the browser uses it to ask for books. Open one of
those files to check what it does. You don't need to follow the whole request
yet.

Explain that example in your own words, then try the
[fictional Pocket Library packet](02-navigation-evidence.md) or a small part of
a real project you may use. Skip the example if you can already do this.

## Learning outcomes and practice

### U2.1 Find sources that answer your question

Find the documentation, code and work records that matter to your question, and
say what each one is for, based on what it contains. A handful of places is
usually enough.

- A README gives a starting account. An architecture note explains how the parts
  fit together.
- Search for a word you see on screen or a business term to find likely code,
  then open a match and read around it. Search results are leads: old docs,
  tests and generated files can contain the same words. A generated file is
  produced from another file; a header comment usually says so.
- Work records live in GitHub issues, pull requests and releases, or in a linked
  tracker such as Jira.
- If you can't open something, say so. Don't look for a way round the access
  rules.

**Try:** in the packet, find where book search is described, where its rule
appears and where the author-search work is recorded. Explain why you would set
aside one search result. The packet's README is dated: what would you qualify
after opening the architecture note it links to?

**Show:** a small map with paths or record titles, the version you looked at and
a one-line reason for each. Explain at least one role from the file's contents,
not its name.

**Check without AI:** open one file from your map and say in one sentence what
it does and how you know.

### U2.2 Give a modest account of the software and current work

Explain in plain language what the software does and which parts matter to your
question. Connect that to one piece of ongoing work. Use Module 0's
distinctions: an issue records a request or problem; a pull request proposes a
change and, once merged, records that it entered a branch; a release names a
version. Read the descriptions and links rather than relying on the status
label.

Say what is requested, what is proposed and what is merged, and what you can and
can't say about what users have. “Unknown from these sources” is a good answer
when you can say what's missing. One issue can bundle several requests, so a
merged pull request may cover only part of it. Don't infer delivery dates or
team performance from counts of records.

**Try:** using the packet's docs and work records, answer “What does Pocket
Library do, and how far has the author-search request got?” Include one limit on
what you know about readers' experience.

**Show:** a short explanation connecting purpose, a relevant part and a work
record, with a source and one honest limit.

**Check without AI:** for one issue in a real repository, say from the page
alone what it asks for and whether any linked pull request is open or merged.

### U2.3 Check an important claim and choose the next question

An agent can search, explain unfamiliar code and suggest a map. You decide what
matters and whether its sources support its claims. Give it your question and
the sources it may use. Ask it to cite file paths or record sections and to
separate what it read from what it guessed.

Open at least one cited source yourself. Decide whether it supports a claim that
matters to your account. Accept it, narrow it or correct it. If the code is
unfamiliar, ask what one small excerpt means.

**Try:** pick one claim from the packet's agent account. Give your judgment and
the excerpt that supports it before asking for a revision. Then ask one useful
next question: what missing evidence would change your answer?

**Show:** your reason for accepting or correcting the claim, a revised account
if needed, and a next question tied to a real gap. An agent's corrected answer
on its own doesn't show your judgment.

**Check without AI:** take one sentence from an agent's summary and find the
line or record that supports it, or say that nothing does.

## Apply it to something useful

Pick a small, unfamiliar part of a real project you may use: a feature named in
its README and one related issue or pull request is a good start. With an agent,
find the docs, the likely code and the work records. Make a small map, explain
what the feature does and what is happening with it, check one claim against a
source and ask one useful next question.

Then change the question slightly: if someone asked what users have today,
rather than where the code is, which source would you open next, and why?

If you can't use a real project yet, use the packet and say it was practice on
fictional material. Partial access is fine: say which parts you could and
couldn't establish.

After this module, take a first look at Module 7's
[U7.1 to U7.3](07-work-with-engineers.md#learning-outcomes): read one real
issue, one pull request with its review, and its checks.

## Next: follow one behavior

Take one behavior from your map into [Module 3](03-follow-one-behavior.md).
You'll follow a small action through the code, state its rule in plain words and
predict what a different input would do.

## For the teaching agent

- Start from the learner's interests and existing picture. If no question is
  clear, help them get oriented. Model one source choice in the tiny example if
  needed, then let them choose the next.
- Introduce terms such as an import (code made available from another file) only
  when they help. Avoid a tour of every folder or framework.
- Packet-specific guidance and a labelled simulated response are in the
  [packet's teacher notes](02-navigation-evidence.md#teacher-notes).
- Review the learner's explanation against the excerpts or links, including the
  version when known. Ask one short follow-up about a source choice, a
  correction or an uncertainty. A polished summary with no explanation of its
  claims is incomplete; ask the learner to check one claim.
- A learner who explains purpose and a merged change but confuses merged with
  available needs one follow-up on versions, not a restart.
- Accept spoken explanations, annotated links or short notes. Fictional practice
  doesn't show transfer to a real project. Keep records in the learner's private
  `.learning/` log.

[Track guide](index.md) · [Module 0](../course/00-project-and-git.md) ·
[Next module](03-follow-one-behavior.md)
