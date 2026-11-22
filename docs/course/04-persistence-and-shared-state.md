---
title: Module 4 — Persistence and shared state
description: 'Explain storage, authoritative values, caching and preservation.'
slug: /modules/persistence-and-shared-state
source_file: 04-persistence-and-shared-state.md
---

# Module 4 — Persistence and shared state

"I refreshed and my data disappeared" is one of the most common surprises in an
app an agent built. This module is about where your app keeps its data, which
copy it trusts, and how saved data survives changes. Agents change storage
casually, and a storage mistake can lose real work, so this is where checking
before you keep a change matters most.

Returns to fixtures and disposable test data (1.5), integration checks against
real storage (1.3), and interrupted operations (3.4). Module 0's undo (0.3)
protects your code, not your saved data, so keep a copy before any change to
stored data.

## Choose your lane

The outcomes are the same in both [lanes](OVERVIEW.md#choose-your-lane). What
changes is the evidence.

- **Direct agents:** you show it by predicting what survives a restart and
  checking it, tracing where a value lives through the app's behavior, and
  deciding what an agent may change about saved data.
- **Write code:** you also find the lines that read and write the data, follow a
  value through them, and read a schema or saved file yourself.

## Learning objectives

By the end of this module, you should be able to:

### 4.1 Trace state and explain durability

- Trace a value from input through its reads, changes and storage. Distinguish
  temporary memory from saved state in the browser, a file, a database or
  another store, and say which lifetime matters for each copy.
- Predict what survives stopping and restarting the app or reopening the page,
  then direct an agent to test the prediction with disposable data. Explain what
  the result shows and why some state is meant to be temporary.

### 4.2 Identify authoritative data and its readers and writers

- Say which data is the source of truth and which values are copies or derived
  results. Explain which value wins when copies disagree, including an unsaved
  edit that differs from the saved record.
- Name the parts of the app, and the people, that read and write the data,
  including less obvious paths such as imports or background jobs. Direct an
  agent to trace a real update through those paths and say who sees it, when,
  and what could be out of date.

### 4.3 Decide whether and how to cache

- Explain a cache as a copy kept to avoid repeating work. Weigh what it saves
  against the cost of keeping it fresh, and defend adding one, keeping the
  current one or having none.
- For a cache that matters, decide how stale is acceptable, how it's refreshed
  after a change, and what happens when it's empty. An empty cache is not the
  same as an authoritative answer of "nothing found".
- Direct an agent to show the freshness and empty-cache behavior using the real
  cache, not a stand-in, when you're claiming how it works.

### 4.4 Preserve and recover saved data

- Explain who relies on a saved format and how changing a field or its meaning
  affects older records. Distinguish migrating existing data, staying compatible
  and accepting a deliberate break, and decide which your app needs.
- Know where saved data holds private information and who can reach it. Keep
  real personal data out of test fixtures and anything committed to your public
  fork.
- Direct an agent to make a format change on a disposable copy and show that the
  needed data can be restored. Explain what stays readable and what could be
  lost since the last copy.

## Agent mistakes to watch for

These add to the general list in [Module 0](00-project-and-git.md).

- **Wiping data to make a change work.** Deleting and recreating a database or
  file because the old format didn't fit the new code. It works on the agent's
  empty test data and destroys yours.
- **Claiming durability from a fake.** "Saving works" when the test used an
  in-memory stand-in. Only the real store shows what survives a restart.
- **Two sources of truth.** Adding a second copy of the same data, for example
  in the browser and on a server, with no rule for which wins.
- **Caching without invalidation.** Adding a cache to speed things up with no
  plan for when it goes stale. The app shows old data after an edit.
- **Committing real data.** A database file, export or fixture containing
  personal data added to the repository, which is public in your fork.
- **Silent format changes.** Renaming or changing the meaning of a field without
  handling records already saved in the old format.

## By lane, and checks without AI

Each check without AI is something the learner does with the agent closed.

| Objective | Check without AI                                                                                                 | Write-code lane adds                                                                           |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 4.1       | For three values in your app, say where each lives and predict whether it survives a restart.                    | Find the line that saves one of those values and the line that reads it back.                  |
| 4.2       | Name the source of truth for one piece of data and every part of the app that changes it.                        | Read the code paths that write it and check whether you missed one.                            |
| 4.3       | For one cache, or one place a cache might help, state the acceptable staleness and what happens when it's empty. | Find where a cached value is refreshed or cleared.                                             |
| 4.4       | Given a proposed field change, list the old records it affects and how you'd keep them readable.                 | Read your schema or a saved file and predict what an older record looks like after the change. |

## Practice tasks

Pick one that fits your app. Each runs through the
[teach, build and review loop](PRACTICE.md).

- **Restart test.** Teach: what does your app keep in memory versus save? Build:
  hand off a check that adds disposable data, restarts the app and shows what
  came back, against your written prediction. Review: did the prediction hold,
  and if not, which copy was lost?
- **Add a field safely.** Teach: who reads the saved format? Build: hand off a
  small new field, with the rule that existing records must still load and a
  copy is kept first. Review: does the diff touch existing data, and was an old
  record actually loaded after the change?
- **Planted mistake.** Review a change where the agent "fixed" a startup error
  by deleting the data file and recreating it empty. Say what a real user would
  lose and what the agent should have done.

## Notes for the teaching AI

- This is a first pass, following
  [broad first, then deep](OVERVIEW.md#broad-first-then-deep). Aim for a working
  grasp of all four objectives. Modeling what the data means came in Module 2,
  types and validation of stored data in Module 5, and several writers at once
  in Module 7.
- Use the store the app already has. A new database, cache or migration isn't
  required; a defended existing design meets the objective.
- A restart test, a freshness test and reading restored data each establish
  different claims. A fake store alone can't establish the real store's
  durability.
- Note multi-write changes and several requests hitting an empty cache as links
  to Module 7. Don't require transactions or locking here.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
