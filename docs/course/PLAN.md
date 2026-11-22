---
title: Plan your app
description: >-
  Decide whether to build, on what and with which data, who will use it, then
  outline and run a first version.
slug: /plan-your-app
source_file: PLAN.md
---

# Plan your app

Before an agent writes anything, decide whether this should be an app at all,
what it should run on, what data it may touch and who will use it. An agent will
happily answer all of these for you, quietly, by picking a stack and starting to
type. This page puts those decisions back in your hands.

It's the "Define a project" choice after [setup](SETUP.md); see
[where to start](CURRICULUM.md#where-to-start). Every outcome here is a first
pass: [Module 2](02-modeling-data-and-behavior.md) turns your outline into a
proper spec, and [Module 8](08-share-run-and-maintain.md) returns to sharing,
hosting and keeping the app running once it works.

## Choose your lane

Same outcomes in both [lanes](OVERVIEW.md#choose-your-lane); the evidence
differs.

- **Direct agents:** you show it through the decisions you write down: build or
  not, which platform and why, the data rules you checked, and a one-page
  outline.
- **Write code:** you also compare two candidate stacks by what you'd have to
  read and maintain, and say which parts you expect to write yourself.

## Learning objectives

By the end of this step, you should be able to:

### P.1 Decide whether to build it, and on what

- Name the job the app would do and who it's for. Then compare at least three
  ways to do that job: a spreadsheet or document, an existing product or a
  feature of a tool you already have, a low-code or company-approved platform,
  and a small custom app. A custom app is the right answer only when the others
  fall short in a way you can name.
- Choose a platform with an agent's help, but make the decision yourself. Ask
  for two or three options with what each costs, what it needs installed, where
  it would run and how hard it is to change later. Prefer what your organization
  already supports.
- Estimate the running costs: your agent plan, hosting, any paid services or API
  calls, and your own time to maintain it. Set a stop rule, such as "if it isn't
  useful after three sessions, I'll go back to the spreadsheet".
- **If the answer is "don't build".** That's a good result, and you can still
  take the course. Either build a practice version of the same idea with
  synthetic data, to learn on, or choose a different job where an app does win.
  Record which in your learning log (`.learning/PROJECT.md`).

### P.2 Know the rules for your work data

- List the data the app will touch and sort it: public, internal, confidential,
  and personal information about real people. Say which of it the app truly
  needs.
- Find your organization's rules before you start: which AI tools are approved,
  what data may go into a prompt, where data may be stored and who must approve
  a new tool. If you can't find a rule, ask IT, security or privacy rather than
  guessing.
- Practise with synthetic data until real data is allowed. Keep the app's
  repository private if it will ever hold work data or work logic, and never
  paste confidential data into an unapproved agent.

### P.3 Decide who will use it and how they'll reach it

- Choose the first audience: just you on your own computer, a few colleagues, or
  a whole team. Say whether people need to sign in and whether different people
  should see different things.
- Explain how that choice changes the platform. An app only you run locally is
  simple. One your team opens in a browser needs somewhere to run, sign-in and
  someone to look after it.
- If anyone else will use it, start the approval requests now: ask IT where it
  could run, how people would sign in and whether real data is allowed. Approval
  often takes weeks, and [Module 8](08-share-run-and-maintain.md) picks it up.
  Record the date and who you asked in `.learning/PROJECT.md`.

### P.4 Decide who keeps it running

- Name an owner, and what happens when the owner is away or leaves. Say which
  signs would mean the app should move to IT or a proper team: more users,
  sensitive data, a business process that depends on it, or nobody else
  understanding it.
- If IT, a platform team or a data owner must agree to the owner and upkeep,
  include that in the requests you started in P.3.

### P.5 Outline the first version

- Write a one-page outline: who it's for, the job it does, the smallest first
  behavior that would be useful, what success looks like, and what's out of
  scope for now.
- Mark the decisions you made rather than left to the agent, including the
  platform, the data rules and the first audience.
- List the next few features after the first one, in order. Later modules use
  them as practice tasks, so the app grows as you learn.

### P.6 First runnable version

- Direct a build agent to make the smallest runnable version from your outline:
  one useful behavior, such as adding a record and seeing it in a list, on the
  platform you chose in P.1.
- Keep it safe: synthetic data only, no accounts, no paid services and nothing
  deployed.
- Have the agent write `RUNNING.md`: the exact steps to install what's needed,
  start the app, try the first behavior and stop it. Follow it yourself with the
  agent closed, and get it fixed until it works.
- Get it reviewed before you start [Module 1](01-testing-and-qa.md). This
  handoff is also your first real practice of briefing an agent (0.1) and
  keeping a step small (0.2).

## Agent mistakes to watch for

These add to the general list in [Module 0](00-project-and-git.md).

- **Choosing the stack silently.** Starting a framework, database and hosting
  service without asking, because that's what it usually builds.
- **Overbuilding.** A multi-page web app with accounts for something a shared
  spreadsheet would do.
- **Hidden costs and accounts.** Suggesting a paid service, API key or new
  account without saying what it costs or who must approve it.
- **Real data in the first prompt.** Asking for "a sample of your real data" to
  get started.
- **Public by default.** Creating a public repository or a public deployment for
  something that holds work data.
- **"Production-ready."** Calling an early version secure or ready to share
  before anyone has checked.
- **Building extras into the first version.** Adding sign-in, a cloud database
  or a paid service "for later" to a first version that needs none of them.
- **Instructions only the agent can follow.** A `RUNNING.md` that skips an
  install step or a setting the agent already had on its machine.

## By lane, and checks without AI

| Objective | Check without AI                                                                                  | Write-code lane adds                                                       |
| --------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| P.1       | Write three ways to do the job, the one you chose and why, its costs and your stop rule.          | Say what you'd have to read and maintain in each candidate stack.          |
| P.2       | List the app's data by category and the rules that apply to each, with where you found each rule. | Name where in the code real data must never appear: fixtures, logs, tests. |
| P.3       | Say who uses the first version, how they reach it and whether they sign in.                       | Name what would need to change in the code to go from one user to a team.  |
| P.4       | Name the owner, the backup person and two signs that it should move to IT.                        | List what someone else would need to read to take it over.                 |
| P.5       | Write the one-page outline with your decisions marked.                                            | Add the parts you expect to write yourself.                                |
| P.6       | Start the app from `RUNNING.md` with the agent closed, try the first behavior and stop it.        | Name the file where the first behavior lives and say what it does.         |

## Practice tasks

Each runs through the [practice loop](PRACTICE.md#the-practice-loop). Only P.6
builds anything.

- **Build or not.** Teach: what job does this do, and what else could do it?
  Build: hand off a task asking an agent to compare three options and their
  costs, without building anything. Review: which option did you choose, and
  which of the agent's claims did you check?
- **Data rules.** Find your organization's AI and data policy, or note that
  there isn't one and who you asked. Write the rules your app must follow and
  bring them to review.
- **Planted mistake.** Review an agent's plan for a team expense tracker that
  uses a public repository, a paid hosted database and "a few real expense
  reports to test with". Name every decision it made for you and what you'd
  change.
- **First runnable version.** Teach: what's the smallest behavior from your
  outline that someone could use? Build: hand off that one behavior, with the
  platform from P.1, synthetic data only, no accounts, paid services or
  deployment, and a request for `RUNNING.md`. Review: start it yourself from
  `RUNNING.md` with the agent closed, then merge it into `main` before Module 1.

## Notes for the teaching AI

- This is a first pass, following
  [broad first, then deep](OVERVIEW.md#broad-first-then-deep). The spec comes in
  Module 2, and sharing, hosting, access and maintenance come back in Module 8.
- "Don't build it" is a good outcome. Credit a learner who chooses a spreadsheet
  for a good reason, then offer the two ways on: a synthetic practice version of
  the same idea, or another job where an app wins. Record the choice in
  `PROJECT.md`.
- After P.5, if there's no runnable app, the next handoff is P.6. Review it
  before Module 1, and check the learner can run it from `RUNNING.md` alone.
- Approval requests for hosting, sign-in and real data take weeks. Prompt the
  learner to start them during P.3 and P.4, not in Module 8.
- Don't recommend a stack. Help the learner ask for options and judge them.
  Prefer what their organization already supports.
- Data rules are the learner's to find, not yours to invent. If they can't find
  a policy, the evidence is who they asked and the synthetic data they'll use
  meanwhile.
- A learner practising on a personal, low-stakes app can answer P.2 to P.4
  briefly. A work app needs all of them.

[Course overview](OVERVIEW.md) · [Practice and review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
