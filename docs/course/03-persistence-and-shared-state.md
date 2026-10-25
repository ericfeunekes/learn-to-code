---
title: Module 3 — Persistence and shared state
description: 'Explain storage, authoritative values, caching and preservation.'
slug: /modules/persistence-and-shared-state
source_file: 03-persistence-and-shared-state.md
---

# Module 3 — Persistence and shared state

Failure and recovery depend on where data lives and which copy the app trusts.
Trace your app’s actual state before making more detailed models or reasoning
about simultaneous changes.

## Learning objectives

By the end of this module, you should be able to:

### 3.1 Trace state and explain durability

- Trace a value from input through its reads, changes, and storage. Distinguish
  temporary memory from saved state in the browser, files, a database, or
  another store the app uses; explain which lifetime matters for each copy.
- Predict what survives stopping and restarting the relevant process or
  reopening the app, then direct AI to test the prediction with disposable data.
  Explain what the result establishes about durability and why intentionally
  temporary state can be lost.

### 3.2 Identify authoritative data and its readers and writers

- Identify which data is authoritative and which values are copies or derived
  results. Explain how the app decides which value wins when copies disagree,
  including whether an unsaved edit differs from the saved record.
- Name the components or people that read and write the relevant data, including
  alternate paths such as imports or background work where present. Direct AI to
  trace an actual update through those paths and explain who should see it,
  when, and what could remain out of date.

### 3.3 Decide whether and how to cache

- Explain a cache as a derived copy used to avoid repeated work. Compare its
  benefit against freshness and maintenance costs using measured or estimated
  work in the app; defend adding a cache, retaining the current one, or using
  none.
- For a relevant cache, decide acceptable staleness, how it is refreshed or
  invalidated after a change, and what happens when it is empty or unavailable.
  Distinguish an absent cache entry from an authoritative answer that contains
  no results.
- Direct AI to demonstrate the relevant freshness and empty-cache behavior,
  using the real cache boundary when claiming how it works. Explain what happens
  if the authoritative value changes and why the observed answer meets the
  chosen freshness rule.

### 3.4 Preserve and recover saved data

- Explain who relies on a saved format and how a field or meaning change could
  affect older records and their readers. Distinguish migrating existing data,
  retaining compatibility, and accepting a deliberate break; decide which is
  justified by the app’s needs.
- Direct AI to examine an applicable format change or compatibility path in a
  realistic disposable example, and demonstrate restoration of the needed data.
  Explain what remains readable, what could be lost since the saved copy, and
  how the restored data can be used by its intended reader.

## Guidance for the teaching AI

- Use the existing store. A new database, cache, or migration is not a
  completion requirement; a defended existing design can meet the objective.
- A restart test, a freshness test, and reading restored data establish
  different claims. A fake store alone cannot establish the real store’s
  durability.
- Note multi-write changes and several requests reaching an empty cache as
  connections to Module 7; do not require transactions or concurrency controls
  here.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
