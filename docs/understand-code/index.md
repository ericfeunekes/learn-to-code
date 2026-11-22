---
title: Understand code and changes
description:
  For product managers and risk and control reviewers. Open a repository where
  work is under way, understand what is happening and work with the engineers.
slug: /understand-code
---

# Understand code and changes

This track is for product managers, project managers, risk and control
reviewers, designers, business experts and anyone who needs to follow a team's
software without building it. The goal: open a repository where work is under
way, understand what's happening and work alongside the engineers. By the end
you'll know where to look, follow what changed and why, ask questions that
surface problems and risks, start the app and test changes yourself, and
contribute through the team's process with comments, issues and small pull
requests.

You use agents and tools as helpers. You don't become the person who builds the
features. The [build track](../course/OVERVIEW.md#two-tracks) is the other
track, for people who direct agents to build their own app.

## Before you start

You need four things. First, an AI tool your organization approves for the code
you'll look at. Second, a clear answer to what you may show it: public code and
the course's fictional examples are always fine, but a team's private code,
customer data and secrets are only fine if your organization says so. Ask before
you paste anything. Third, a free GitHub account. Fourth, from Module 4 on, an
agent that can run commands on your computer, such as Claude Code or Codex. It
can run each command for you and explain what it did, so you don't need to know
the commands. If your laptop is managed by IT, ask early: see Module 4's
[what to ask IT for](04-run-and-investigate.md#what-to-ask-it-for).

You don't need an app idea, a fork of this course or any coding experience.

## Your first two sessions

> **Session 1: GitHub and the big picture.** Do Module 0's Git and GitHub
> outcomes ([0.3 to 0.7](../course/00-project-and-git.md)) on a repository your
> team works on, in the browser. Then do
> [Module 1](01-how-software-fits-together.md) and its Shelf summary practice.
>
> **Session 2: Find your way, then read the team's records.** Do
> [Module 2](02-find-your-way.md) on the same repository. Then take a first look
> at Module 7's [U7.1 to U7.3](07-work-with-engineers.md#learning-outcomes):
> read one issue, one pull request and its checks. You don't need to master them
> yet. This starts the social side of the work early: from week one you can
> follow what the team is discussing.

After that, go through Modules 3 to 7 in order, or jump to the module that
answers the question you have today. Alongside them, work through
[Use it in your role](08-use-it-in-your-role.md), starting with its practice
task for your job.

## The seven modules

| Module                                                                   | What you can do after it                                                                                                         |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| [1. How software fits together](01-how-software-fits-together.md)        | Explain how a person's action leads to a result, and tell the files in a repository apart from the software people are running.  |
| [2. Find your way around a project](02-find-your-way.md)                 | Find the useful files and work records and give a short, honest account of what the software does and what is changing.          |
| [3. Follow one behavior](03-follow-one-behavior.md)                      | Follow one small path through the code, state its rule in plain words and predict what a different input would do.               |
| [4. Run and investigate a behavior](04-run-and-investigate.md)           | Start an app safely, try one thing, compare it with what you expected and write it up so someone else can repeat it.             |
| [5. Understand a change and its evidence](05-evidence-of-correctness.md) | Explain what a change does before and after, and judge whether its tests would catch it going wrong.                             |
| [6. Read an evolving project](06-read-evolving-project.md)               | Combine work records, a source change and an observation into a dated account, and update it when new evidence arrives.          |
| [7. Work with engineers on GitHub](07-work-with-engineers.md)            | Read issues, pull requests, reviews and checks; ask good questions; run a QA pass; contribute; follow real work in the capstone. |

Use the [review questions](review-questions.md) on any change, at any point.

## Use it in your role

[Use it in your role](08-use-it-in-your-role.md) connects the modules to the job
you already do: turning a need into acceptance criteria, judging scope and
effort, working with a team that uses AI to write code, and reading delivery
signals in the repository. It has one practice task each for product managers,
project managers and business users. Start it after your first two sessions and
come back to it as the modules deepen.

## Which pages belong to which module

| Module | Main page                                                             | Practice                                                                                        | Other pages                                         |
| ------ | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 1      | [How software fits together](01-how-software-fits-together.md)        | [Shelf summary](fixtures/module-1-shelf-summary.md)                                             |                                                     |
| 2      | [Find your way around a project](02-find-your-way.md)                 | [Pocket Library](02-navigation-evidence.md)                                                     |                                                     |
| 3      | [Follow one behavior](03-follow-one-behavior.md)                      | [Reading-list filter](03-behavior-evidence.md)                                                  |                                                     |
| 4      | [Run and investigate a behavior](04-run-and-investigate.md)           | [Workshop directory](04-workshop-practice.md)                                                   | [Notes for the teaching agent](04-teacher-notes.md) |
| 5      | [Understand a change and its evidence](05-evidence-of-correctness.md) | [Blank-title change](05-practice-evidence.md); extra: [Note Finder](05-change-evidence.md)      |                                                     |
| 6      | [Read an evolving project](06-read-evolving-project.md)               | [Harbor Log](06-harbor-log-lab.md); extra: [Fieldnotes](../companions/fieldnotes-evidence.md)   |                                                     |
| 7      | [Work with engineers on GitHub](07-work-with-engineers.md)            | Your own [practice repository](07-work-with-engineers.md#practise-in-your-own-repository-first) | [Review questions](review-questions.md)             |

## A project you can return to

A repository your team works on is your continuing context. Come back to it over
time: explore a feature one week, read a pull request the next, check what
reached a release after that. You don't need a precise question to start.
Getting oriented is a fine first goal: what the software does, how its main
parts connect and what work is happening. Until you have a repository you may
use, the fictional examples in each module let you practise.

Keep a few short notes as you go, so the next visit starts where you left off.

## Broad first, then deep

Get a rough picture of the whole before you explain every part. You can
understand that a screen asks a service for information, and that the service
reads stored data, long before you learn a particular framework or database.
Each module returns to the same picture with a sharper question: explain the
parts, find the evidence, follow one behavior, try it, judge a change and
combine it all into an account you keep up to date. Module 7 then puts that
picture to work with the engineers.

## How to work with an agent on this track

Use an approved agent to search, read, explain and run things for you. Your part
is to choose the question, predict the result, decide what to check and judge
what the evidence shows. The agent's part is the mechanics.

Reading a command is different from running it. Before anything runs, establish
where it runs, which version, what data it uses and what it could change. Module
4 shows how. Work that runs the team's app or drafts a pull request happens in a
separate investigation session in your own copy of the repository. That session
never posts anything without your go-ahead for the exact text.

The examples in each module are fictional. Say so when you use them: practising
on a fictional example is useful, but it isn't the same as doing it on a real
project.

## Bring work back for review

Bring your question, the sources you used and their version, what was run and
what it showed, your explanation and what the agent did. See
[the shared evidence guide](../course/PRACTICE.md#bring-work-back-for-review).
If a link is private, safe excerpts work too.

The teaching agent credits your explanations, choices and questions separately
from what an agent produced. A correct summary or a green check doesn't prove
understanding on its own. Missing access leaves a part unassessed; it isn't a
failure. Keep your learning notes private.
