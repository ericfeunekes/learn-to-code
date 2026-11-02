---
title: 'Module 3 practice — Follow the reading-list filter'
description:
  A fictional source packet for explaining a checkbox action, its selection
  rule, and the result of a different input.
slug: /understand-code/practice/follow-one-behavior
---

# Follow the reading-list filter

Use with [Module 3 — Follow one behavior](03-follow-one-behavior.md).
**Everything here is fictional training material.** The paths and source
excerpts describe one supplied snapshot, **Reading list example**. They aren't
files to locate on your computer, an executable repository, or evidence of
actual tool use. The JavaScript excerpts use plain text for readable contrast.
No installation, account, server or code writing is required.

Question: **When someone checks “Only unread”, how does that choice determine
which titles are displayed? What would unchecking it do?**

Read the small path, make a prediction, and explain your reasoning. The teacher
reference at the end is available after your attempt. You can ask an agent to
explain a line or locate a connection; decide whether its explanation fits the
supplied source.

## The checkbox passes a value

The page contains a checkbox labelled **Only unread**. In `web/controls.js`, the
relevant wiring is:

```text
import { onUnreadChange } from './reading-list.js';

const checkbox = document.querySelector('#unread-only');
checkbox.addEventListener('change', () => {
  onUnreadChange(checkbox.checked);
});
```

`checkbox.checked` is `true` when checked and `false` when unchecked. These are
yes/no values, not the words `"true"` and `"false"`. For this question, start
with the person checking it. You don't need to explain how the page is started
or how the event-listener syntax works to follow the passed value.

## The handler connects selection to display

`web/reading-list.js`, function `onUnreadChange`:

```text
import { books } from './books.js';
import { chooseBooks } from './choose-books.js';
import { displayBooks } from './display.js';

export function onUnreadChange(checked) {
  const selected = chooseBooks(books, checked);
  displayBooks(selected);
}
```

The imports identify the sources of the data and two operations. Inside this
call, `checked` holds the value received from the checkbox. `selected` names
what `chooseBooks` returns. The next call passes that result to `displayBooks`.
A different name inside another function can refer to the same passed value.

## The selection rule

`web/choose-books.js`, function `chooseBooks`:

```text
export function chooseBooks(books, unreadOnly) {
  if (unreadOnly) {
    return books.filter((book) => !book.finished);
  }
  return books;
}
```

The first input is the list of books; the second is the yes/no choice. Here,
`if (unreadOnly)` takes the first path when that choice is `true`. `filter`
builds a list containing just the items that meet its condition.
`!book.finished` means the book's `finished` value is false. When the choice is
`false`, the function skips that path and returns the supplied list of books.
The returned answer is a list, not a count or a message.

Try saying that rule without code terms. Then point to the call in the handler
that supplies each input. Does `checked` becoming `unreadOnly` change the value?

## The supplied books and display boundary

`web/books.js` contains this complete list for the example:

```text
export const books = [
  { title: 'Harbor Map', finished: true },
  { title: 'Small Garden', finished: false },
  { title: 'Night Train', finished: false },
];
```

The supplied interface description for `web/display.js` says:

> `displayBooks(books)` replaces the visible titles with the titles in the
> received list, in that order, and displays its length followed by “books”.

The display implementation isn't included. You can predict its output using that
stated behavior, but can't inspect how it creates the page. There are no runtime
observations, test results, deployment records or other revisions in this
packet.

## Make your account

Explain the checked-filter path in a few connected steps. Link to the excerpts
that support the checkbox value, the selection rule, and the returned list's
use. Name the predicted titles and count. Keep “the source passes this value”
separate from “a running page showed this result”.

Then predict the result with the checkbox unchecked, keeping this code and list
fixed. Explain which decision changes and where the result goes. You can sketch
arrows, talk it through, or write a short paragraph; no formal report is needed.

An agent offers this account: “`chooseBooks` returns the number 2, which the
handler passes to the display.” Is that supported? Point to the evidence and
give your own correction before requesting another explanation.

For another small application, choose one book and imagine its `finished` value
is different. Keep “Only unread” checked. Explain what changes in the predicted
list and why, without editing or running anything. This is a hypothetical data
input, not a source revision or an observed result. You may instead use one
small behavior in your own authorized repository.

If you can explain the rule but can't yet connect it to the display, bring that
partial account. Ask about the missing connection rather than restart the whole
exercise.

## Teacher reference: source predictions

These are author-written interpretations of the fictional excerpts, not
simulated human learning or actual execution evidence. Use after the learner's
attempt, and ask for their reasoning rather than agreement with an answer.

- **Checked:** the [checkbox wiring](#the-checkbox-passes-a-value) passes `true`
  to `onUnreadChange`. The [handler](#the-handler-connects-selection-to-display)
  passes the books and that value to `chooseBooks`. The
  [rule](#the-selection-rule) keeps books whose `finished` value is false, so
  the returned list contains Small Garden and Night Train. The handler passes
  that list to `displayBooks`. The supplied
  [data and display description](#the-supplied-books-and-display-boundary)
  support predicting those titles and “2 books”.
- **Unchecked:** the passed choice is `false`; `chooseBooks` returns all three
  supplied books. The same display call receives that list, supporting the
  prediction Harbor Map, Small Garden, Night Train and “3 books”.
- **Agent claim:** the function returns the selected list. Its length is 2 for
  the checked case; the display description is where the count enters the
  account. Confusing the list with its count loses what crosses the connection.

A correct count without a path supports only part of the work. An explanation
that follows the call and return but names the display implementation as missing
is appropriately bounded. Neither establishes what a real browser displayed. For
observation, carry the prediction to
[Module 4 — Run and investigate](03-run-and-investigate.md).
