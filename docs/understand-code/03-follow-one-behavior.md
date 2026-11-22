---
title: Module 3 — Follow one behavior
description:
  Follow a small action through its connections, explain its rule, and predict
  what a different input would do.
slug: /understand-code/follow-one-behavior
---

# Module 3 — Follow one behavior

You've found the relevant files. Now explain one small thing the software does:
someone supplies an input, code applies a rule, and a result reaches another
part of the program or the person using it.

Bring the map you made in [Module 2](02-find-your-way.md), or similar
experience. You can work in GitHub, from supplied excerpts or with an approved
agent. You don't need to run anything or know a programming language.

## Start with the action, then follow what it carries

Choose a question small enough to follow. “What happens when I select only
unread books?” works here; “How does the whole library work?” doesn't. Name the
starting action, its input and the result you want to explain: a message on
screen, a returned list or an error.

Use your map to find where the action enters the code. Then follow the actual
connection to the next part: which operation is called, what is passed to it and
where its result goes. A **function** is a named piece of code that does one job
when it's called. An import line shows where a function comes from; the call
shows where it's used. File names alone don't prove the path.

Stop when you can answer your question, or at a missing part you can name. Two
functions may be enough. If a service or file isn't available, follow the path
up to that point and say what's missing.

## A tiny example: choosing a delivery message

This is fictional JavaScript, supplied for reading. At the snapshot **Delivery
example**, `delivery.js` contains:

```text
function deliveryLabel(days) {
  if (days === 0) return 'Ready today';
  return 'Ready later';
}

function showDelivery(days) {
  const label = deliveryLabel(days);
  showMessage(label);
}
```

`showMessage` displays the text it receives. When someone selects same-day
pickup, the button calls `showDelivery(0)`.

The few code ideas you need:

- **Value:** `0` is the input. Inside the function, the name `days` holds it.
- **Condition and rule:** `days === 0` asks whether the value equals zero. In
  plain words: zero days means “Ready today”; anything else means “Ready later”.
- **Call:** `deliveryLabel(days)` asks that function to do its job with this
  value.
- **Return:** `return` sends an answer back to the caller. `showDelivery` calls
  that answer `label` and passes it to `showMessage`.

A short explanation with a source: “For same-day pickup, the button passes 0 to
`showDelivery`. It calls `deliveryLabel` with 0. The zero-day rule returns
‘Ready today’, which goes to the message display
([Delivery example, `delivery.js`](#a-tiny-example-choosing-a-delivery-message)).
That's my prediction from the code; I haven't seen the app.”

Now keep the code the same and change the input to **1**. What text do you
predict, and which line tells you? If this is already familiar, go straight to
the practice.

## Try a small path yourself

Use the [fictional reading-list packet](03-behavior-evidence.md), or one small
behavior in a repository you may use. Pick a path with one clear rule and a few
connections. A button, an API request, a scheduled job or a tool call can all be
starting points.

1. Start with the action and its input. Find the code that handles it.
2. Follow the value to the rule, and the result back to whatever uses it. Note
   the file and function for each step, so someone else can check it.
3. Try one connection yourself first. Then ask an agent a focused question such
   as “Which call passes this value?” and check its answer against the code.
4. Change one input in your head, keeping everything else the same, and predict
   the result. If it depends on data or a service you can't see, say so.

For the packet: explain what checking “Only unread” does, then predict what
unchecking it does. For more practice, change one book's `finished` value and
predict the filtered list.

## Learning outcomes

### U3.1 Connect an action to a result, with sources

Connect one action and its input to a result, through the code that handles it.
Give a source for each connection: a file and function at a named version, or a
link to the supplied excerpt.

**Evidence:** another reader can follow your path step by step and check each
link. A list of file names, or a correct trace an agent wrote, doesn't show you
can explain the connections. Finding the rule but losing track of where the
result goes is partial progress; so is a trace that stops at a service you can't
see.

**Check without AI:** for the reading-list packet, point to the line where the
checkbox value is passed on, and the line that uses it.

### U3.2 Explain the rule in plain language

State the rule that decides the result, in words a colleague who doesn't code
would understand.

**Evidence:** your sentence matches what the code does, including the case it
treats differently. Explain only the syntax you need to make the rule clear.

**Check without AI:** say the reading-list filter's rule in one sentence, then
point to the line it comes from.

### U3.3 Predict a different input's result

Change one input, keep the code and other data the same, and predict the result.
Explain why the rule gives that result.

**Evidence:** your prediction follows from the rule you stated, and you say it's
a prediction from the code, not an observation of the running app. If the result
depends on something you can't see, you name it.

**Check without AI:** predict what the reading-list shows when “Only unread” is
unchecked, and say which line decides it.

## Bring back your explanation

Bring your question, the version or snapshot, the few source links or excerpts,
and your explanation and prediction. Include only the agent exchange needed to
show what it contributed. A shape that works: “When this action supplies this
input, this part calls that part. Its rule returns this result, which is used
here. With this other input, I predict this result because of this rule. I can't
yet explain this connection.” Use your own words.

## Next: compare prediction with observation

Take one question and prediction into
[Module 4 — Run and investigate](04-run-and-investigate.md). There you'll start
the software safely and compare what you expected with what happens. You can
also start from something you've seen go wrong, before the code path is clear.
Comparing versions and judging tests comes in Module 5.

## For the teaching agent

- Start from what the learner already understands. Use the tiny example only
  where it helps. If their question needs many services, narrow it together to
  one action and one rule. Don't turn every symbol into a syntax lesson.
- Look for the three outcomes separately: U3.1 connected path, U3.2 rule in
  plain language, U3.3 reasoned prediction. Ask for one clarification where
  evidence is thin, for example “What receives the returned list?”
- If the trace is sound, ask for a different input before showing your own
  prediction.
- Keep the learner's reasoning, the agent's help and the source's limits apart.
  The packet's reference predictions are for teaching consistency, not
  observations. Record progress in the learner's private `.learning/` log.

[Track guide](index.md) · [Module 0](../course/00-project-and-git.md) ·
[Next module](04-run-and-investigate.md)
