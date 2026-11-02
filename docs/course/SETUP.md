---
title: Set up your workspace
description: >-
  Choose workspace needs by track; building uses an independent project,
  understanding can use supplied evidence.
slug: /setup
source_file: SETUP.md
source_refinements:
  - separate-projects-setup-2026-10-30
---

# Set up your workspace

Start with [shared Module 0 — GitHub for everyone](00-project-and-git.md), then
choose a track. You can read the course or use supplied examples without
creating a repository or installing the website. If your organization does not
allow forking, use [the enterprise route](#enterprise-use-without-forking) for
an optional course reference copy.

## For understanding code and changes

Go to [the second-track guide](../understand-code/index.md). Start with general
mental models and a small example, then use an authorized repository when
useful. A browser or supplied Markdown is enough for the first modules. Local
runtime setup happens when an investigation needs it; no app idea or new
implementation repository is required. Execution requires a clear target,
authorized actions, and understood effects even for staging.

## For building software

The steps below create or resume your own project repository, separate from the
course. This operational setup can happen before a full Git lesson when helping
with an explicit setup request. No course fork, website install, or app idea is
required. Brief explanations can help as you go.

## Setup with AI

Give an agent with local files, Git and approved Git-host access this message. A
chat without those tools can guide you through the actions yourself.

```text
Help me create or reuse my own project repository in my approved Git hosting
location, separate from the learn-to-code course repository. Use my existing
access. Help me choose a name, allowed visibility, and a local coding folder. Preserve
existing work. I do not need to choose an app or take a full Git lesson yet.
Check the local repository and approved remote, show me the folder to open
in my coding agent, and report any incomplete steps. Then offer the
next choices: define a project, learn Git/GitHub, or continue existing work.
Do not start an unchosen activity.
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

1. Create an empty repository in your approved Git host, choosing an allowed
   name and visibility, or select an existing project repository. This can be
   your existing GitHub account or your organization’s internal service. This is
   your app's repository, not a fork of the course.
2. Clone it into a local coding folder. Use the URL for your own repository:

   ```sh
   git clone YOUR_APPROVED_PROJECT_URL
   cd YOUR-PROJECT
   ```

   If a local project already exists, inspect it before connecting it to the
   approved Git host; do not clone over existing files.

3. Open that project folder in your coding agent. Ask it to check the repository
   root and remote and explain anything incomplete. An empty project is enough
   at this stage.
4. Keep the [course overview](OVERVIEW.md) available to your teaching AI, then
   choose what to do next.

## What's next?

For the building track, once setup is ready, ask your teaching AI “I'm set up.
What's next?” or choose:

- **Choose or outline an app:**
  [Define your project](OVERVIEW.md#choose-and-outline-your-project).

  ```text
  Help me choose a small useful app and define its first behavior.
  ```

- **Understand Git and GitHub:**
  [Module 0 — GitHub for everyone](00-project-and-git.md).

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

## Enterprise use without forking

A fork is optional. Follow your organization's approved source, AI-tool and
storage rules. The course can be read as pages or supplied Markdown. If a local
reference copy is useful, clone it and keep two clearly named Git remotes:

- **`upstream`: the course update source.** Use the public course only when
  permitted, or your organization's approved internal mirror.
- **`origin`: where your approved copy is saved.** This may be an internal Git
  host or an approved local bare Git repository path. A bare repository stores
  Git history without an editable working copy and is suitable for receiving
  pushes. It is your save destination, not another source of course updates.

These names describe the two roles; they do not grant access. Keep the course
reference separate from any app or workplace repository you investigate. Do not
merge course history or course website dependencies into those projects.

### Ask an agent to arrange the reference copy

```text
Help me keep a local reference copy of this course without forking. Use only
approved sources, tools and storage. Inspect existing work first. Keep the
course update source as upstream and my approved save repository as origin.
Set the default push destination to origin. Explain how to review course
updates while preserving local changes. Confirm destinations before any push,
and keep my app, workplace code and private learning records separate.
```

Provide the approved update-source URL, save-repository URL or path, and local
folder. If an internal course copy already exists, clone that copy: it becomes
`origin`. Inspect its remotes before adding the approved update source as
`upstream`; do not recreate or overwrite it.

### Set up a new approved copy

The following example starts from the course source and an **empty approved save
repository**. Replace both uppercase placeholders with actual approved URLs or
Git repository paths. The public course source, when allowed, is
`https://github.com/ericfeunekes/learn-to-code.git`.

```sh
git clone --origin upstream COURSE_SOURCE_URL course-reference
cd course-reference
git remote add origin APPROVED_COURSE_REPOSITORY_URL
git config remote.pushDefault origin
git remote -v
```

Check that `upstream` is the update source and `origin` is the approved saving
place. Preserve `LICENSE` and `THIRD_PARTY_NOTICES.md`. The course's GitHub
workflow skips jobs outside the upstream course repository; copying the course
does not require enabling Actions, Pages or other automation. Keep private
records and credentials out of tracked files. An ignored local record is not
included in a Git push and needs its own approved backup if you want one.

Only after reviewing the destination, files and applicable approval, save the
current branch to that approved repository:

```sh
git push -u origin HEAD
```

If the destination already contains work, stop and inspect it rather than
force-pushing or replacing its history. For an existing course checkout, an
agent can inspect and rename its current course-source remote to `upstream`,
then add the approved save destination as `origin`. Do not rename an existing
remote blindly.

### Review and bring in course updates

Open the **course reference folder**, check your branch and local changes, then
fetch the approved source. Fetching updates Git's view of that source without
changing your working files. This example uses the course's `main` branch;
substitute the source's actual branch when different.

```sh
git status
git fetch upstream
git log --oneline HEAD..upstream/main
git diff HEAD..upstream/main
```

Ask an agent to explain the changes relevant to you before integrating them.
With a clean working tree and the intended reference branch selected, a copy
without local course commits can advance directly:

```sh
git merge --ff-only upstream/main
```

If Git refuses because histories have diverged, preserve your local commits and
prepare a reviewed merge on an update branch. Do not discard local work or
force-push to make the update fit. Check the resulting files, then save an
approved update with `git push origin HEAD`. The explicit remote names keep
course updates coming from `upstream` and saves going to `origin`; a plain
`git pull` may follow your saved copy instead of the course.

Your app or workplace repository keeps its own approved `origin` and team update
process. It does not receive this course's `upstream` remote. Keep
learner-private records in their established approved home rather than adding
them to the course update history.

Git references: [clone](https://git-scm.com/docs/git-clone),
[remotes](https://git-scm.com/docs/git-remote),
[push destination](https://git-scm.com/docs/git-config#Documentation/git-config.txt-remotepushDefault)
and [fast-forward-only merges](https://git-scm.com/docs/git-merge).

## Setup guidance for the AI

For an explicit building-track setup request, read this page and the overview.
For the understanding track, use supplied examples or an authorized existing
repository instead; do not require project creation. Inspect tools, existing
repositories, and local files before creating anything. Help choose a repository
name, visibility, and folder without requiring a project-definition exercise.
Use the learner's existing approved account and Git host. Follow the enterprise
route for a requested course reference copy without forking; keep its update
source and approved save destination distinct. If required access is
unavailable, report the exact unfinished action and guide the learner; do not
claim setup succeeded.

Create or reuse an independent project repository, outside any course checkout.
Verify its root, local folder, intended remote, and visibility where accessible.
Check existing project instructions and any private-file ignore rules rather
than assuming the course's rules apply. Keep setup commits limited to the agreed
preparation. Repository setup does not authorize publishing later app changes,
buying services, changing account permissions, or creating accounts.

Finish with the exact project folder, approved Git repository, checks performed,
any incomplete action, and the three **What's next?** choices. If reopening a
client is needed, provide that folder and a short resume message. Successful
setup is an operational result, not evidence of learning completion. Follow a
chosen activity directly; do not start an unchosen lesson or app build.

When implementation begins, use the learner's project repository and its own
commands. Course website Actions and course file changes belong to course
maintenance; they are not part of learner app work. For learning review, follow
[the evidence-return guidance](PRACTICE.md#bring-work-back-for-review).

[Course overview](OVERVIEW.md) · [Learning path](CURRICULUM.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
