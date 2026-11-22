---
title: For AI
description:
  Find plain Markdown versions of the pages and use them with an AI reader.
slug: /for-ai
---

## Read the source

The Markdown index at [llms.txt](pathname:///llms.txt) lists every page
available on this site. Each entry links to a plain Markdown file generated from
the same source as the website. This index is a convenience for readers and
tools; support depends on the tool you use.

For example, a file-reading AI can start with:

```text
Read the site's llms.txt index.
Open the page for my question.
Follow relevant links for context.
Cite the page you used.
```

## Keep the context clear

Read the relevant module's objectives and the
[teaching guide](course/AI-TEACHER.md). The course pages contain general
learning material. Learner records and teaching logs stay private, outside this
public site. Do not infer progress from a page being available or a lesson being
mentioned.

## How the teaching works

An agent opened at the root of the course workspace teaches and reviews; it
never builds the learner's project. The learner drafts a handoff, builds in a
separate session with a separate build agent, and comes back for a review. On
the Understand code and changes track, the learner brings back an investigation
instead, and only the learner posts to a team's repository. A private
`.learning/` folder is the only memory these sessions share. The workspace's
`AGENTS.md` and `CLAUDE.md` carry the full rules.

## Choose where to go next

The course has two tracks that share [Module 0](course/00-project-and-git.md).
Pick the track from the learner's question:

- **Build an app** by directing agents: start with
  [workspace setup](course/SETUP.md), then offer the
  [What's next? choices](course/SETUP.md#whats-next) and wait for the learner's
  selection. The [learning path](course/CURRICULUM.md) supplies the course map.
- **Understand code and changes** in a team's software:
  [the track guide](understand-code/index.md). Don't require a project or setup.

The course repository bundles `use-learning-outcomes` and
`review-learning-evidence` with Codex and Claude discovery copies. Read the
actual relevant instructions; file presence and `llms.txt` access alone do not
establish client instruction use.

Use [the evidence-return guide](course/PRACTICE.md#bring-work-back-for-review).
Credit learner reasoning and decisions separately from AI-generated artifacts;
retain partial progress and uncertainty. Mark fictional, reported and inspected
evidence separately. Passing tests alone does not establish learning.
