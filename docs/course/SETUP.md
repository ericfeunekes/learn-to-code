---
title: Set up your workspace
description: >-
  Create or resume your own project repository, separate from the course, then
  choose what is next.
slug: /setup
source_file: SETUP.md
source_refinements:
  - separate-projects-setup-2026-10-30
---

# Set up your workspace

**Draft — for review.**

Prepare a project repository of your own, separate from the course repository.
You can keep reading the course on this site. No course fork, website install,
app idea, or full Git/GitHub lesson is required to finish setup. Brief
explanations of the steps can help as you go.

## Setup with AI

Give an agent with local files, Git, and GitHub access this message. A chat
without those tools can guide you through the actions yourself.

```text
Read https://ericfeunekes.github.io/learn-to-code/raw/course/SETUP.md.
Help me create or reuse my own project repository on my existing GitHub
account, separate from the learn-to-code course repository. Help me choose
a name, public or private visibility, and a local coding folder. Preserve
existing work. I do not need to choose an app or take a full Git lesson yet.
Check the local repository and GitHub remote, show me the folder to open
in my coding agent, and report any incomplete steps. Then show me the
course's three What's next choices without starting an unchosen activity.
```

Choose visibility deliberately: a public project can be read by others. Keep
credentials, personal information, and private learning records out of commits
and shared chats, including in private repositories. If sign-in or a missing
tool needs your action, the agent should explain it and report what remains.

Already have a project? Reuse its repository and local folder. If your work is
currently inside a course fork, ask the agent to inspect it and propose a safe
move into its own repository, preserving the files and history you need. It
should explain the move before making changes and leave the original intact
until the result is checked.

## Setup yourself

1. Create an empty repository in your existing GitHub account, choosing its name
   and visibility, or select an existing project repository. This is your app's
   repository, not a fork of the course.
2. Clone it into a local coding folder. Use the URL for your own repository:

   ```sh
   git clone https://github.com/YOUR-USERNAME/YOUR-PROJECT.git
   cd YOUR-PROJECT
   ```

   If a local project already exists, inspect it before connecting it to GitHub;
   do not clone over existing files.

3. Open that project folder in your coding agent. Ask it to check the repository
   root and remote and explain anything incomplete. An empty project is enough
   at this stage.
4. Keep the [course overview](OVERVIEW.md) available to your teaching AI, then
   choose what to do next.

## What's next?

Once setup is ready, ask your teaching AI “I'm set up. What's next?” or choose:

- **Choose or outline an app:**
  [Define your project](OVERVIEW.md#choose-and-outline-your-project).

  ```text
  Help me choose a small useful app and define its first behavior.
  ```

- **Understand Git and GitHub:**
  [Module 0 — Git and GitHub for your work](00-project-and-git.md).

  ```text
  Help me understand Git and GitHub using my project repository.
  ```

- **Continue existing work:**

  ```text
  I already have a project. Help me choose a useful next learning step.
  ```

  Use [the learning path](CURRICULUM.md) to find a relevant topic. You can start
  with [Testing and QA](01-testing-and-qa.md) when it serves your app.

These are choices, not setup requirements. An explicit request already selects
an activity. The project folder is where implementation happens; the teaching
conversation can use the course material separately.

## Give the teaching AI course context

Share the relevant course page or its [plain Markdown version](../for-ai.md). An
AI that cannot open it can use text you paste or supply as a file. It should say
which material it has actually read.

For a local teaching client, you may clone the course into a **separate
reference folder** and open it there. That optional checkout bundles the
teaching skills for Codex and Claude Code; it is not your app workspace. Check
that the client actually uses its instructions. The project agent does not need
the course website dependencies or teaching skills installed in your app.

## Setup guidance for the AI

Read this page and the overview. Inspect tools, existing repositories, and local
files before creating anything. Help choose a repository name, visibility, and
folder without requiring a project-definition exercise. Use the learner's
existing account. If required access is unavailable, report the exact unfinished
action and guide the learner; do not claim setup succeeded.

Create or reuse an independent project repository, outside any course checkout.
Verify its root, local folder, intended remote, and visibility where accessible.
Check existing project instructions and any private-file ignore rules rather
than assuming the course's rules apply. Keep setup commits limited to the agreed
preparation. Setting up GitHub does not authorize publishing later app changes,
buying services, changing account permissions, or creating accounts.

Finish with the exact project folder, GitHub repository, checks performed, any
incomplete action, and the three **What's next?** choices. If reopening a client
is needed, provide that folder and a short resume message. Successful setup is
an operational result, not evidence of learning completion. Follow a chosen
activity directly; do not start an unchosen lesson or app build.

When implementation begins, use the learner's project repository and its own
commands. Course website Actions and course file changes belong to course
maintenance; they are not part of learner app work. For learning review, follow
[the evidence-return guidance](PRACTICE.md#bring-work-back-for-review).

[Course overview](OVERVIEW.md) · [Learning path](CURRICULUM.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
