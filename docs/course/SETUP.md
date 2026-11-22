---
title: Set up your workspace
description: >-
  Get the course workspace and a private project repository, then choose what is
  next.
slug: /setup
source_file: SETUP.md
---

# Set up your workspace

There are two separate places to set up, and keeping them separate is what keeps
your work private:

- **The course workspace** is a copy of this course on your computer. Your
  teaching and review agents run here, and your private learning log lives in
  its ignored `.learning/` folder.
- **Your project** is where your app is built. For anything touching work data
  or work logic, that's its own private repository, approved by your
  organization, outside the course.

You don't need to choose an app or complete a Git/GitHub lesson for setup. Ask
about anything confusing as you go; brief explanations can be part of setup.

On the [Understand code and changes](../understand-code/index.md) track you
don't need a project at all. A browser is enough to start; set up the course
workspace when you want a teaching agent with the course's skills.

## Setup with AI

Give an AI with access to local files and Git this message. A chat without those
tools can guide you through the actions yourself.

```text
Help me set up https://github.com/ericfeunekes/learn-to-code.
Read its setup guidance. Get the course into a local folder: use my
existing GitHub account to create or reuse a fork, or, if my
organization doesn't allow forks, follow the guide's no-fork route.
Then help me decide where my app will live. If it will hold any work
data or work logic, create or reuse a separate private repository I'm
allowed to use. Preserve any existing work. Show me which folders to
open, check their instructions are available, and tell me what's next.
```

If the AI needs you to sign in or install a missing tool, it should explain the
next action. You do not need to understand every Git term to complete setup, and
the AI should not claim to have performed steps it cannot access.

## Setup yourself

1. Fork the [course repository](https://github.com/ericfeunekes/learn-to-code)
   into your own GitHub account, or reuse your existing suitable fork. Forks of
   this course are public. If your organization doesn't allow that, use
   [the no-fork route](#use-the-course-without-forking).
2. Clone the course into a local folder. Use your own GitHub username:

   ```sh
   git clone https://github.com/YOUR-USERNAME/learn-to-code.git
   cd learn-to-code
   ```

3. Choose where your app lives:
   - **A work app, or anything private:** create or reuse its own private
     repository in your approved Git host, clone it into its own folder, and
     copy the course's `app/AGENTS.md` into it as `AGENTS.md` (and `CLAUDE.md`
     for Claude Code) so its build agent follows the course's rules.
   - **A personal practice app with synthetic data only:** you can build in the
     course's `app/` folder. It's inside your public fork, so treat everything
     there as public.
4. Open the course folder in Codex or Claude Code for teaching and review.
   Learning skills are bundled; no separate skill installation or course website
   installation is needed. Open your project folder in a separate session when
   you build.
5. Ask the AI to check the setup and show you the next choices below.

## What's next?

Once setup is ready, ask your AI:

> I'm set up. What's next?

Or choose an option here:

- **Plan an app:** [Plan your app](PLAN.md).

  ```text
  Help me decide whether to build my idea, and on what.
  ```

- **Understand Git and GitHub:**
  [Module 0 — Directing an agent](00-project-and-git.md), which starts with Git
  and GitHub.

  ```text
  Help me understand Git and GitHub using this repository.
  ```

- **Continue existing work:**

  ```text
  I already have a project. Help me choose a useful next learning step.
  ```

  You can go to [Module 1 — Testing and QA](01-testing-and-qa.md) when it serves
  your app.

- **Understand a team's software:**
  [Understand code and changes](../understand-code/index.md).

  ```text
  Help me get to know a repository my team works on.
  ```

These are separate conversations or requests you can choose from. A full Git
lesson is not required before working on your app.

If the client needs you to reopen a folder first, use the exact path the setup
AI provides, then ask “I'm set up. What's next?” there.

## Use the course without forking

A fork is optional. Follow your organization's approved source, AI-tool and
storage rules. You can read the course as web pages or
[plain Markdown](../for-ai.md) without any copy at all.

If you want a local copy for a teaching agent, clone it and keep two clearly
named Git remotes:

- **`upstream`**, where course updates come from: the public course, if allowed,
  or your organization's approved internal mirror.
- **`origin`**, where your copy is saved: an approved internal Git host or
  another approved location.

```sh
git clone --origin upstream COURSE_SOURCE_URL course-reference
cd course-reference
git remote add origin APPROVED_COURSE_REPOSITORY_URL
git config remote.pushDefault origin
git remote -v
```

To review course updates later, run `git fetch upstream`, then
`git log --oneline HEAD..upstream/main` to see what's new, and ask an agent to
explain the changes before you bring them in with
`git merge --ff-only upstream/main`. If Git refuses because your copy has its
own commits, keep them and merge on a separate branch; never force-push. The
course's GitHub workflows skip themselves outside the original repository, so a
copy doesn't need Actions or Pages. Keep the course copy separate from your app
and any workplace repository, and never merge course history into them.

## Setup guidance for the AI

This is workspace preparation. Do not make project selection, an app build or a
Git/GitHub lesson a condition of finishing setup. Explain the immediate step if
helpful or requested, and leave a fuller Git lesson as a next choice.

Read the public README and this page before local skills exist. Check existing
tools/access and inspect a suitable existing fork or clone before creating
another. Help choose local folders, explain that course forks are public before
creating one, and preserve existing files. Use the learner's existing account;
do not create accounts, buy services or change permissions on their behalf. If a
required action is unavailable, say what remains and guide the learner's next
action.

Ask whether the app will touch work data or work logic. If it will, or the
learner is unsure, set up a separate private project repository in their
approved Git host rather than using `app/`, and copy `app/AGENTS.md` into it.
For the no-fork route, keep `upstream` and `origin` distinct and confirm the
destination before any push.

After cloning, check the repository root, remote targets, private-file ignore
rules and client instructions yourself. Read AGENTS.md and relevant bundled
instructions. If a new client session is needed to load project context, provide
its exact folder and a resume message; file presence alone does not prove
instruction use.

Finish with the local folders, the learner's repositories and their visibility,
any incomplete setup action and **What's next?** Offer the choices above with
their site links. Record where the project lives in `.learning/PROJECT.md`.
Successful setup does not establish learning completion. Do not launch an
unchosen next activity or publish the learner's app changes.

[Course overview](OVERVIEW.md) · [Learning path](CURRICULUM.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
