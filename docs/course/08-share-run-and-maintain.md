---
title: 'Module 8 — Share, run and maintain your app'
description: >-
  Choose where your app runs, control who gets in, release safely, and keep it
  running or hand it off.
slug: /modules/share-run-and-maintain
source_file: 08-share-run-and-maintain.md
---

# Module 8 — Share, run and maintain your app

A work app usually matters because other people use it. That means it has to run
somewhere other than your laptop, let the right people in and keep everyone else
out, hold real data safely, and keep working after you've moved on to something
else. Agents can set all of this up quickly, and this is where their shortcuts
do the most damage, because mistakes here are visible to other people.

Returns to the first-pass decisions in [Plan your app](PLAN.md) (P.2 to P.4).
Also returns to keeping secrets out (0.6), observable failures (3.3), saved data
and private data (4.4), checking outside input (5.4) and keeping the project
understandable (6.5).

## Choose your lane

The outcomes are the same in both [lanes](OVERVIEW.md#choose-your-lane). What
changes is the evidence.

- **Direct agents:** you show it through the decisions you write down and the
  checks you run yourself: who can reach the app, what happens when someone
  without access tries, where the secrets live, how a release is undone and who
  takes over.
- **Write code:** you also find where sign-in and permissions are enforced, read
  the settings and deployment files, and trace how a secret reaches the running
  app.

## Learning objectives

By the end of this module, you should be able to:

### 8.1 Choose where it runs and who can reach it

- Explain a deployed app as another copy of your app running somewhere else,
  with its own settings and its own data. Distinguish your local copy, a test
  copy and the copy your users rely on.
- Compare the options your organization allows, such as staying on your own
  computer, a company platform, an internal server or a hosted service. Say what
  each costs, who looks after it and whether it's approved for your data.
- Decide whether the app should be reachable from the internet at all. Many work
  tools shouldn't be.

### 8.2 Control access

- Distinguish sign-in, which checks who someone is, from permissions, which
  decide what they can do. Prefer your organization's existing sign-in over
  passwords the app stores itself.
- Decide who should see and change what, and give each person the least access
  their work needs.
- Check access yourself: open the app as someone who shouldn't get in, and as
  someone who should see less. A hidden button isn't a permission check; the
  server has to refuse.

### 8.3 Move to real data and release changes safely

- Keep secrets such as passwords and API keys in the platform's settings, never
  in the code, the browser or the repository. Know how to replace one.
- Before real data arrives, check that it's approved (P.2), that a backup exists
  and that you've restored from it once.
- Release a change as a small, planned step: try it on a test copy, tell users
  what changed, and know how you'd undo it before you start. Undoing code with
  Git (0.3) doesn't undo changes to saved data.

### 8.4 Keep it running and hand it off

- Write a short runbook: how to start the app, update it, restore data, rotate a
  secret and who to contact. Keep the project's agent instructions current (6.5)
  so the next agent can help too.
- Plan for upkeep: who notices when it breaks, how errors reach you (3.3), and
  when outdated packages get updated.
- Recognize when it's time to hand the app to IT or a proper team, using your
  P.4 signs, and what they'd need from you. Know how to retire it, including
  what happens to its data.

## Agent mistakes to watch for

These add to the general list in [Module 0](00-project-and-git.md).

- **Public by default.** Deploying to a public address with no sign-in because
  that's the quickest working demo.
- **Secrets in the wrong place.** An API key in the code, in browser JavaScript
  or in a committed settings file.
- **Sign-in that only hides things.** Checking access in the browser but not on
  the server, so anyone who calls the server directly gets in.
- **Turning off protection to make it work.** Disabling security checks, opening
  a database to everyone, or widening permissions to fix an error.
- **Real data without a backup.** Running a migration or import against the only
  copy.
- **Claiming it's deployed.** "It's live" without an address you opened and
  checked yourself, as a user and as someone without access.

## By lane, and checks without AI

Each check without AI is something the learner does with the agent closed.

| Objective | Check without AI                                                                                                      | Write-code lane adds                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 8.1       | Say where the app will run, who can reach it, what it costs and who approved it.                                      | Find the settings that differ between your local copy and the deployed one.          |
| 8.2       | List who can see and change what, then describe how you'd check that someone without access is refused.               | Find where the server checks permission for one action.                              |
| 8.3       | List every secret the app uses, where each lives and how you'd replace it. Describe how you'd undo your next release. | Trace how one secret reaches the running app without passing through the repository. |
| 8.4       | Write the runbook and your hand-off signs.                                                                            | Name the files a new maintainer should read first.                                   |

## Practice tasks

Pick one that fits your app. Each runs through the
[teach, build and review loop](PRACTICE.md).

- **Share with one colleague.** Teach: where should it run, and who should get
  in? Build: hand off a deployment to an approved place with sign-in, using
  synthetic data. Review: open it yourself, then try it as someone who shouldn't
  get in.
- **Release and undo.** Teach: what could a release break? Build: hand off a
  small change released to a test copy first, with a written undo plan. Review:
  did you try the undo, and does it bring back the data as well as the code?
- **Hand-off drill.** Give the runbook and the project to a fresh agent and ask
  it to explain how to restore the data and rotate a secret. Review where it
  guessed.
- **Planted mistake.** Review a change where the agent "fixed" a deployment
  error by making the database publicly readable. Say what's exposed and what
  you'd ask for instead.

## Notes for the teaching AI

- This is a first pass, following
  [broad first, then deep](OVERVIEW.md#broad-first-then-deep). Deployment,
  access control and operations are big fields. Aim for safe defaults and good
  questions, not expertise. The [learning path](CURRICULUM.md#future-directions)
  goes deeper.
- Work within the learner's organization's rules. If they can't deploy anywhere
  approved, a local-only app plus a written plan for sharing meets 8.1.
- Never set up accounts, paid services or permission changes for the learner.
  Help them ask the right person.
- Weight 8.2 heavily: a failed access check found by the learner is strong
  evidence.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
