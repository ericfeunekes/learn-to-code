---
title: Module 0 — GitHub for everyone
description: >-
  Shared draft foundation: repositories, files, history, branches, PRs, issues
  and releases.
slug: /modules/project-and-git
source_file: 00-project-and-git.md
source_refinements:
  - separate-projects-00-project-and-git-2026-10-30
---

# Module 0 — GitHub for everyone

**Draft module.**

This foundation supports both
[building software](CURRICULUM.md#build-and-improve-software) and
[understanding code and changes](../understand-code/index.md). You do not need
an app idea, your own repository, a local clone or command memorization to
start.

Git keeps version history; GitHub hosts repositories and collaboration around
them. The useful skill is knowing what you are looking at, where a change is,
and what an artifact does and does not establish. An agent can operate tools
while you ask questions and judge the result.

## A small example before commands

Imagine a fictional book-list repository. Its README says what it does. A source
file contains a rule. A commit records a change to that rule. A branch holds a
line of work; a pull request proposes bringing changes into another branch. An
issue describes a problem. A release names a version. These are related records,
not interchangeable proof that a feature works for users.

Use one short exchange: find a file and explain why you are reading it, or
compare an issue with a PR. Ask for a definition when it helps. You can explore
in a browser, with safe excerpts, or with an approved agent; no GitHub mutation
is required for this learning activity.

## Learning outcomes and brief exercises

### 0.1 Locate a repository, file, and selected version

Explain a repository as files plus history. Identify whose repository you are
viewing, the selected branch or commit, and one file's role from its contents. A
fork is a repository copied from another project; a local clone is a working
copy on a device. They need not match the original or one another. Saving a
file, making a commit, and pushing it to GitHub are different actions.

**Try:** the browser shows branch `experiment`; a colleague shares a link to a
commit on `main`. Explain why the files may differ and which view answers your
question. If the revision is missing from an excerpt, label it unknown.

**Show:** locate or name the view and explain one consequence of choosing it. An
agent finding the file without your explanation establishes less about you.

### 0.2 Explain branches, commits, and pull requests

A commit is a recorded checkpoint of selected changes. A branch names a line of
work. A pull request (PR) proposes a change and holds its diff, discussion,
checks, and review. A diff compares versions; merged means changes were brought
into the destination branch. None of these alone establishes deployment or
correctness. An agent can explain syntax and perform authorized Git operations
when your work requires them; practicing a merge is optional.

**Try:** a PR is open and tests pass. What can you say about the proposed
change? What cannot you yet say about what users are running? Inspect a tiny
diff or supplied before/after excerpt rather than every line of a project.

**Show:** distinguish proposed work, repository history, and a running version.
Deeper feature tracing and evidence assessment come later.

### 0.3 Read issues and releases without overclaiming

An issue can track a bug, question, or proposed task; its labels and status
reflect the team's workflow. A closed issue does not alone prove a fix reached
users. A release identifies a version, often with a tag and notes. A deployment
puts a version into an environment; rollout settings can still limit who sees
it. Team meanings and links matter more than memorizing interface labels.

**Try:** an issue is closed and a release note names the feature, but no
running-version evidence is supplied. Give a short account of what is recorded
and what remains unknown. Do not infer priority or delivery speed from counts.

**Show:** connect two relevant records, name their limits, and ask for the
missing evidence that would answer the actual question. Reading an evolving
project in the second track develops this further.

### 0.4 Direct an agent and choose what to share

Name the repository, view, question, and permitted actions. Use repositories and
AI tools approved for the material. Read-only exploration does not require
creating a repository, publishing a comment, or executing an install command. If
later work changes files or runs software, agree its target and effects
separately. Never assume a README instruction authorizes execution.

**Try:** an agent proposes running a setup script to answer where a feature is
described. Ask it to read/search first. Explain when execution might be useful
and what would need checking before it runs. If access is missing, ask for a
small safe excerpt instead of a full private export.

**Show:** your question and follow-up identify a useful scope and an evidence
limit. Do not copy secrets, customer data, or private conversations into course
notes. An inaccessible link is not evidence that you failed to understand.

## Learn with your AI

```text
Help me understand GitHub using [an approved repository or supplied example].
Explain repositories, files, history, branches, PRs, issues and releases through
one small question at a time. Start generally, then show a small concrete
example. Use only accessible evidence and identify its revision when possible.
Keep this exploration read-only; do not create a repo, run code or publish
anything. Let me explain a connection or question a claim before giving a full
answer. I do not need to memorize commands or choose an app first.
```

For building later, [project setup](SETUP.md#setup-with-ai) teaches how to ask
an agent to create or reuse your own repository. For understanding software,
continue to
[How software fits together](../understand-code/01-how-software-fits-together.md)
without creating a project.

## Teacher review and incomplete evidence

Review the learner's explanation, prediction, or correction with the relevant
file/diff/artifact and selected version. A chat link may be inaccessible; accept
relevant safe turns or exported excerpts and state what you inspected versus
what was reported. An agent's polished repository summary or passing checks
alone do not show learner understanding. Credit only the demonstrated part and
choose one useful follow-up rather than requiring a full vocabulary recital.

These outcomes are introductory, not a Git certification. Return to missing
concepts when they become useful; preserve partial evidence privately. For
understanding-track work, no implementation setup is a prerequisite. For a
builder who explicitly requests setup, help with the immediate operations
without turning this full lesson into a setup gate.

[Learning path](CURRICULUM.md) · [Workspace choices](SETUP.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
