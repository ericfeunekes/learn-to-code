---
title: Set up your workspace
description: 'Fork, clone and open your workspace, then choose what is next.'
slug: /setup
source_file: SETUP.md
---

# Set up your workspace

**Draft — for review.**

First get the course repository into a local folder you can open in Codex or
Claude Code. You do not need to choose an app or complete a Git/GitHub lesson
for this step. Ask about anything confusing as you go; brief explanations can be
part of setup.

## Setup with AI

Give an AI with access to local files and Git this short message. A chat without
those tools can guide you through the actions yourself.

```text
Help me set up https://github.com/ericfeunekes/learn-to-code.
Read its setup guidance, use my existing GitHub account to create or
reuse my fork, and clone it into a local coding folder. Help me choose
the location if needed and preserve any existing work.
When ready, show me which folder to open in Codex or Claude Code,
check that its instructions are available, and tell me what's next.
```

The course repository and its GitHub forks are public. Keep private information,
credentials and learning records out of commits. If your app code needs to stay
private, discuss a suitable setup before creating a public fork.

If the AI needs you to sign in or install a missing tool, it should explain the
next action. You do not need to understand every Git term to complete setup, and
the AI should not claim to have performed steps it cannot access.

## Setup yourself

1. Fork the [course repository](https://github.com/ericfeunekes/learn-to-code)
   into your own GitHub account, or reuse your existing suitable fork.
2. Clone your fork into a local coding folder. Use your own GitHub username:

   ```sh
   git clone https://github.com/YOUR-USERNAME/learn-to-code.git
   cd learn-to-code
   ```

3. Open that cloned folder in Codex or Claude Code. Learning skills are bundled;
   no separate skill installation or course website installation is needed.
4. Ask the AI to check the setup and show you the next choices below.

## What's next?

Once setup is ready, ask your AI:

> I'm set up. What's next?

Or choose an option here:

- **Choose or outline an app:**
  [Define your project](OVERVIEW.md#choose-and-outline-your-project).

  ```text
  Help me choose a small useful app and define its first behavior.
  ```

- **Understand Git and GitHub:**
  [Module 0 — Git and GitHub for your work](00-project-and-git.md).

  ```text
  Help me understand Git and GitHub using this repository.
  ```

- **Continue existing work:**

  ```text
  I already have a project. Help me choose a useful next learning step.
  ```

  You can go to [Module 1 — Testing and QA](01-testing-and-qa.md) when it serves
  your app.

These are separate conversations or requests you can choose from. Project
definition is not part of the Git/GitHub learning prompt. A full Git lesson is
not required before working on your app.

If the client needs you to reopen the cloned folder first, use the exact path
the setup AI provides, then ask “I'm set up. What's next?” there.

## Setup guidance for the AI

This is workspace preparation. Do not make project selection, an app build or a
Git/GitHub lesson a condition of finishing setup. Explain the immediate step if
helpful or requested, and leave a fuller Git lesson as a next choice.

Read the public README and this page before local skills exist. Check existing
tools/access and inspect a suitable existing fork or clone before creating
another. Help choose a local folder, explain public visibility before creating a
fork, and preserve existing files. Use the learner's existing account; do not
create accounts, buy services or change permissions on their behalf. If a
required action is unavailable, say what remains and guide the learner's next
action.

After cloning, check the repository root, fork/original remote targets,
private-file ignore rules and client instructions yourself. Read AGENTS.md and
relevant bundled instructions. If a new client session is needed to load project
context, provide its exact folder and a resume message; file presence alone does
not prove instruction use.

Finish with the local folder, the learner's GitHub repository, any incomplete
setup action and **What's next?** Offer the project-definition,
Git/GitHub-learning and existing-work choices above, with their site links.
Successful setup does not establish learning completion. Do not launch an
unchosen next activity or publish the learner's app changes.

[Course overview](OVERVIEW.md) · [Learning path](CURRICULUM.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
