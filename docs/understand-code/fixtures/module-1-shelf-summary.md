---
title: 'Module 1 practice — Shelf summary'
description:
  Fictional interface and file excerpts for explaining an action-to-result path,
  comparing files with an instance, and trying a fresh example.
slug: /understand-code/practice/shelf-summary
---

# Shelf summary: from an action to a result

**Fictional practice packet for Module 1.** All apps, files, version labels,
people and observations below are invented teaching material. The plain-language
rules represent code without teaching syntax. They are not runnable files, real
execution records or evidence of human learning. No installation, account or
service access is needed.

Return to [How software fits together](../01-how-software-fits-together.md).
Start with the interface and ingredients; try a prediction before reading the
worked interpretation. Card labels are references, not steps you must finish in
one sitting.

## S1 — A person uses the interface

A reader opens a small local book app and presses **Show remaining**. The button
sends a request to the app's counting code. The code reads the stored book list
and returns text for the screen to display. This action does not change the
books. All of this happens on the reader's device; this example has no separate
server.

The fictional `shelf-summary` repository's selected version is **B**. It
contains the interface description, counting rule, sample settings and books, a
dependency description and a check. These example files do not establish which
version is running on a reader's device or which books they have stored.

## S2 — The code applies a rule

`summary-rules.txt`, version B, plain-language representation:

```text
When a Show remaining request arrives:
  Read the supplied books.
  Count only books whose finished value is no.
  Ask label-kit to turn the number into a book label.
  Return the configured heading, one space, and that label to the interface.
```

Version **A**, the earlier rule, counted every supplied book, including finished
ones. Everything else in this rule stayed the same. The version B change is
therefore about which books count, not about changing their stored status.

## S3 — Data and a setting supply ingredients

`example-books.txt`, version B:

| Book    | Finished? |
| ------- | --------- |
| Islands | no        |
| Rivers  | yes       |
| Stars   | no        |

`example-settings.txt`, version B:

```text
heading = To read:
```

For your first prediction, assume the app uses **version B**, these exact books
and heading, and the helper described below. The reader presses **Show
remaining**. What text should appear, and why? These are hypothetical
conditions, not evidence that an app ran.

Then change only the heading to `Remaining:`. What changes in the result? Keep
that new heading and change only Rivers to finished value `no`. What changes
now?

## S4 — A dependency supplies the wording

`required-software.txt`, version B, relevant description:

```text
label-kit version 1 provides this book-label helper:
  0 -> 0 books
  1 -> 1 book
  2 or more -> that number followed by "books"
```

A **dependency** is other software this program uses. The counting rule passes
the number to this helper and uses the text it gets back. The helper does not
choose which books count. This description does not prove the helper is
installed anywhere. Dependencies can also include software that executes the
program or a separately operated service; neither needs investigating here.

## S5 — A check exercises one case

`summary-check.txt`, version B, supplied fictional check record:

```text
October 30, 09:00 UTC
Rule under check: version B
Helper: label-kit version 1
Heading: To read:
Books: Islands (finished no); Rivers (finished yes)
Expected returned text: To read: 1 book
Observed returned text in this check: To read: 1 book
Result: PASS
```

This checks returned text for two books. It does not observe the screen in a
reader's app or use the three-book sample above. No real check was run to
produce this authored record.

## S6 — An instance has its own version and ingredients

Supplied fictional observation, October 30, **08:55 UTC**, on a demonstration
device:

```text
The Shelf app was running version A with label-kit version 1.
Active heading: Shelf:
Stored books: Islands (finished no); Rivers (finished yes); Stars (finished no).
A reader pressed Show remaining.
Observed screen text: Shelf: 3 books
```

At 09:05 an agent reads the version B files and says:

> The counting change is in the repository and its check passed, so the reader
> now sees “To read: 2 books”.

What can you say from the files? What did the observation establish? Name a
missing fact that matters to the agent's claim. There is no observation after
08:55 and no record of what version was subsequently started. You are judging a
supplied claim, not operating a device or diagnosing a deployment.

## S7 — A fresh example: collecting a parcel

Try this independently, with an agent's help if useful. This is another
fictional project, `parcel-desk`, selected version **C**. The teacher supplies
these excerpts so you do not need to navigate source files.

```text
README excerpt:
  A desk worker enters a parcel number on a screen and presses Check.
  The screen sends the number to our lookup service and displays its reply.

collection-rule.txt, plain-language rule:
  Find that parcel's record.
  If ready is yes, return the configured collection message.
  Otherwise return "Not ready".

example-records.txt:
  Parcel 42: ready = yes

example-settings.txt:
  collection message = Collect at the front desk
```

Explain the action-to-result path and predict the reply for parcel 42 under
these conditions. The screen and service are separate parts of this example;
which supplied words support their connection? Now suppose parcel 42 has ready
value `no`: what reply follows?

What do the excerpts leave unknown? Choose one question that would help someone
understand the actual system. For example, you might need to know where the
service obtains parcel records or which version a particular desk uses. You do
not need to name every possible dependency. These excerpts contain no
observation of a running instance or check result.

## Worked interpretation — compare after your attempt

In Shelf summary, the button is the interface; pressing it supplies a request.
Version B's counting code reads the book data, excludes Rivers, and gives the
number 2 to the helper. The helper returns `2 books`. The code adds the heading
and returns `To read: 2 books` for the interface to display. This is a
prediction under the supplied conditions.

Changing only the heading gives `Remaining: 2 books`; it leaves the rule and
books alone. If Rivers then becomes unfinished, the next request under these
conditions gives `Remaining: 3 books`. Neither change requires editing the
counting rule. The helper controls the number's wording, not which books count.

The version B files describe a changed counting rule. The fictional check
supports one case of that rule's returned text. At 08:55 the separate instance
used version A, a different heading and the three stored books, and displayed
`Shelf: 3 books`. Neither the files nor the check tell us its state at 09:05. A
useful next question is which version and ingredients the instance uses now,
with a current observation if the question is what the reader actually sees.

For parcel collection, the README explicitly connects the worker's screen to the
lookup service and its reply. The service's rule uses the supplied record and
setting, predicting `Collect at the front desk` for parcel 42. If ready is `no`,
the reply is `Not ready`. That prediction does not prove a worker has seen
either reply. The source of actual records, running version and required other
software remain unknown. Other useful questions are possible; explain why yours
matters to the action or result.
