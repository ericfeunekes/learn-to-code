---
title: Module 0 — Git and GitHub for your work
description: >-
  Draft for human review: understand Git and GitHub using your existing
  repository.
slug: /modules/project-and-git
source_file: 00-project-and-git.md
---

# Module 0 — Git and GitHub for your work

**Draft — for review.** These proposed outcomes need human review before being
treated as the agreed Module 0.

This is a learning option after [workspace setup](SETUP.md), not the setup
procedure itself. You can ask questions and get brief explanations during setup;
a fuller Git/GitHub conversation can follow when you choose it.

The goal is to understand enough to direct AI and judge what it does with your
work. AI can operate Git and look up commands. You do not need command
memorization or expert Git knowledge before starting an app.

Choosing an app is a separate option under [What's next?](SETUP.md#whats-next).
You can learn these concepts using the repository you already have, without
defining an app first.

## Learn with your AI

```text
Help me understand Git and GitHub using this repository.
Focus on what I need to direct AI: my local copy versus my GitHub fork,
branches and commits, what gets shared, and bringing changes together.
Use the setup I already have and explain more when my work needs it.
```

## Proposed practical outcomes

These are capabilities to develop through useful work, not an entrance exam. You
can return to a concept when it becomes relevant.

### 0.1 Recognize your working copy and what gets shared

- Explain Git as the tool keeping project history and GitHub as a place to keep
  and share repositories online. Distinguish the original course, your GitHub
  fork and the local clone where you work.
- Find your working folder again and tell AI which repository you mean. Explain
  that saving a file, making a local commit and sharing changes online are
  different actions.
- Recognize the public visibility of this course fork and make an appropriate
  choice about what to share. AI can inspect repository roots, remote
  names/URLs, ignored files and client instructions; those technical checks are
  not a separate learner exam.
- Evidence can be locating the workspace, explaining which copy an intended
  action should affect, or making a sound sharing choice. An AI-run setup alone
  does not demonstrate the learner's understanding.

### 0.2 Direct and check a small change and checkpoint

- Ask AI for a useful change and say what should stay the same. Understand a
  branch as a place to work on a change and a commit as a local checkpoint of
  selected work; AI can operate the commands.
- Review the proposed change through an understandable summary, demonstration or
  relevant diff. Decide whether it matches your intent and what belongs in the
  checkpoint.
- Ask AI what remains local and what would be shared, then choose whether and
  where to share. AI can explain how files are selected for the commit or how a
  push works when that answers a useful question.
- Evidence can come from an ordinary request, a relevant choice or correction,
  and an observed result. A small non-sensitive example can be enough; a
  separate Git exercise or independent raw-diff reading is not required.

### 0.3 Understand bringing changes together

- Explain merging as bringing work together. When your work needs a merge or
  update, tell AI what result should be preserved and ask it to explain any
  conflicting choices.
- Judge the proposed combined result with useful checks. AI can choose
  synchronization commands, diagnose conflicts and propose a resolution; it
  should not silently discard work to make an operation succeed.
- Pull-request details, `origin`/`upstream`, fetch versus pull and other
  mechanics can be explained when encountered. An upstream contribution,
  manufactured conflict or Git-history exercise is not required.
- Evidence can be explaining the intended combined result, making a useful
  resolution choice or questioning the AI's proposal. Credit only what is
  actually shown; one successful example does not establish broad Git expertise.

## Notes for the learning AI

Use the existing workspace as context. Do not restart fork/clone setup or
require project definition just because the learner asked about Git/GitHub. If
setup is actually incomplete, explain the missing piece and use
[the setup guide](SETUP.md).

Keep practical direction and judgment central. Do technical checks and command
selection yourself, explaining useful consequences in plain language. Do not
require a full vocabulary recital before allowing app work.

A learner's explanation, decision, question or correction can show relevant
understanding. Seek only the evidence needed for that part of an outcome; do not
require every evidence form each time. Your own explanation or successful
command establishes less about the learner.

Maintain private progress and learning notes from the actual conversation,
distinguishing exposure, explained/reasoned understanding and application. The
bookkeeping belongs to you. Keep uncertainty and useful return points visible,
and do not award completion against this draft as though its outcomes were
agreed.

## Reference explanations

Consult these as needed; reading them all is not a prerequisite:

- [GitHub: fork and clone a repository](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo)
- [Git: record and select changes](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
- [Git: branches and merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

[What's next?](SETUP.md#whats-next) · [Course overview](OVERVIEW.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
