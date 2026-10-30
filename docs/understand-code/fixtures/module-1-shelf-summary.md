---
title: 'Module 1 practice: Shelf summary'
description:
  Fictional language-neutral evidence for mapping software parts and separating
  repository files from a running instance.
slug: /understand-code/practice/shelf-summary
---

# Shelf summary: a tiny software map

**Fictional practice packet for the Module 1 draft.** These cards are authored
teaching examples, not exports from a real repository, execution logs or learner
records. The version labels and dependency names are invented. No installation,
account, network request, live data or executable code is needed.

Return to [How software fits together](../01-how-software-fits-together.md).
Read S1–S5 for the basic map, then S6 for the repository/runtime distinction.
Try S7 before opening the worked interpretation.

## S1 — The repository and its selected version

The fictional repository is `shelf-summary`. Its current selected snapshot is
**version B**. These are labeled evidence excerpts; you do not need to navigate
folders or interpret programming syntax.

The repository contains instructions, sample settings, a sample book list, a
dependency list and tests. The sample books are not a claim about any running
instance's stored books. There is no deployment record in the repository cards.

## S2 — Code card: the rule in version B

File: `summary-rules.txt`, version B. Plain-language pseudocode:

```text
Read the supplied books.
Count only books whose finished value is no.
Ask label-kit to turn the number into a book label.
Display the configured prefix, one space, and that label.
```

For comparison, the old **version A** counts all supplied books, including
finished ones. Its formatting and prefix behavior are otherwise the same. These
rules are complete for this small example; there are no hidden filters.

## S3 — Configuration and data cards

File: `example-settings.txt`, version B:

```text
prefix = To read:
```

File: `example-books.txt`, version B:

| Book    | Finished? |
| ------- | --------- |
| Islands | no        |
| Rivers  | yes       |
| Stars   | no        |

For the first exercise, assume a new process runs **version B** using exactly
these settings and books and the dependency in S4. Predict its display. These
are supplied conditions, not an observation that a process actually ran.

## S4 — Dependency card

File: `required-software.txt`, version B:

```text
A compatible runtime to execute the instructions.
label-kit version 1 to format a nonnegative whole number:
  0 -> 0 books
  1 -> 1 book
  2 or more -> that number followed by "books"
```

The fictional runtime is the software that carries out the instructions.
`label-kit` is a reusable library supplying the wording rule. The display code
calls it rather than defining the singular/plural rule itself. This card
describes required software; listing it does not prove it is installed or that a
process can start. You need no language or package-manager commands here.

## S5 — Test card

File: `summary-check.txt`, version B:

```text
Check: one unfinished book and one finished book.
Code under check: version B.
Dependency: label-kit version 1.
Setting: prefix = To read:
Test data: Islands (finished no); Rivers (finished yes).
Expected text: To read: 1 book
```

Supplied fictional check record, October 30, 09:00 UTC:

```text
Observed text in this check: To read: 1 book
Comparison with expected text: PASS
```

The record is evidence within this fictional scenario. It does not describe the
three-book sample run in S3 or every possible case. It says nothing about which
version another process is using. No real test was executed to create it.

## S6 — A separate run card

Supplied fictional observation, October 30, **08:55 UTC**, instance `desk-demo`:

```text
Process is running on a local demonstration device.
Loaded code: version A.
Loaded dependency: label-kit version 1.
Active setting: prefix = Shelf:
Books read for this observation:
  Islands (finished no); Rivers (finished yes); Stars (finished no).
Observed display: Shelf: 3 books
```

At 09:05 an agent reads the version B repository cards and says:

> The latest code counts two unfinished books, and the test passed. Therefore
> desk-demo must currently display “To read: 2 books”.

Explain what the cards establish and what they leave unknown. No observation
later than 08:55 is supplied. Do not assume either a restart or continuous
operation. You do not need to operate a server to identify the evidence gap.

## S7 — Changed conditions and a fresh transfer example

First change only the S3 prefix to `Remaining:` while keeping version B,
label-kit version 1 and the three sample books. Predict the new display and
explain why the number does or does not change. What if only the book data then
changes so all three books are finished? These are hypothetical predictions, not
executed checks.

For a new miniature example, the teacher supplies an excerpt from the invented
`welcome-card` repository at snapshot **W1**:

```text
welcome-rule.txt: Read the supplied name. Display the configured greeting,
                 one space, and the name.
example-settings.txt: greeting = Hello
example-input.txt: name = Jo
README excerpt: "The demo greets a visitor by name."
```

Use the map to explain the expected text under these supplied conditions. Which
roles are visible? Can you establish whether anything is running, which
dependencies it needs, or whether any tests passed? Ask one useful question
rather than invent those facts. A real-repository application of the map still
needs a real, authorized example later; this card is a safe fallback.

## Worked interpretation — compare after your attempt

S2 supplies code; S3 supplies configuration and example data; S4 describes
dependencies; S5 supplies a test specification and fictional check observation;
S6 describes a process and its state at one time. They are roles rather than
folder names. The tests also contain code-like instructions, data and settings.

Under S3's stated conditions, version B counts Islands and Stars, omits Rivers,
and asks label-kit for `2 books`. Combining the prefix with the label gives
`To read: 2 books`. Changing only the prefix gives `Remaining: 2 books`. Making
all three books finished gives `Remaining: 0 books`. These answers are
deductions from supplied rules, not observed execution.

S5's PASS covers one specified two-book case and its expected text. It does not
prove behavior for all data, that dependencies are installed elsewhere, or that
desk-demo runs version B. At 08:55 S6 observed version A with prefix `Shelf:`
and three books, giving `Shelf: 3 books`. The repository view and later check do
not establish a change to that process. Its state at 09:05 is unknown without
more recent evidence; do not silently turn an 08:55 observation into a current
fact.

For W1, the visible rule, configuration and input predict `Hello Jo`. The README
states an intention, not an execution observation. Dependencies, tests and any
running instance are not supplied. A useful next question is “Is there an
observation identifying the running version and its inputs?” or “What software
does the setup documentation say is required?” The exact question can differ; it
should address a real gap and not assume the answer.
