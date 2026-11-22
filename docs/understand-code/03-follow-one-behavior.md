---
title: Follow one behavior
description:
  Follow a small action through its connections, explain its rule, and predict
  what a different input would do.
slug: /understand-code/follow-one-behavior
---

# Module 3 — Follow one behavior

You have found the relevant files. Now explain one small thing the software
does: someone supplies an input, code applies a rule, and a result reaches
another part of the program or the person using it.

## Starting point and destination

Bring a broad picture of the software and a few relevant locations from
[Module 2](02-find-your-way.md), or equivalent experience. You can use GitHub,
supplied excerpts, an editor or an approved agent. A local checkout, running
software and language knowledge are not prerequisites.

Aim for three things you can show:

- Connect one action and input to a result, with sources for the connections.
- Explain the rule that determines that result in ordinary language.
- Predict one different input's result and explain why it follows from the rule.

A few sentences and links can be enough. You needn't explain every file, write
code, or judge a proposed change. Keep the source revision or supplied snapshot
clear; a prediction from source doesn't establish what running software actually
did.

## Start with the action, then follow what it carries

Choose a question small enough to follow: “What happens when I select only
unread books?” is more useful here than “How does the whole library work?” Name
the starting action, its input and the result you want to explain. A result
might be a displayed message, a returned list, or an error.

Use your map to find where the action enters the code. Follow the actual
connection to the next part: which operation is called, what is passed to it,
and where its result goes. An import shows where a named operation comes from;
the call shows where it is used. Filenames alone don't establish the path.

Stop when you can answer the question, or at a missing part you can name. You
may need just two functions. A function is a named piece of code that does a job
when called. If a service or file is unavailable, trace to that boundary and
keep the rest of the explanation open.

## A tiny example: choosing a delivery message

This is fictional JavaScript source, supplied for reading, not an executed app.
The excerpt uses plain text for readable contrast. At the single snapshot
**Delivery example**, `delivery.js` contains:

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

For this example, `showMessage` displays the text it receives. The supplied
button wiring calls `showDelivery(0)` when someone selects same-day pickup.

Here are the few code ideas needed to explain that path:

- **Value:** `0` is the input. Inside the function, the name `days` holds that
  value for this call.
- **Condition and rule:** `days === 0` asks whether the value equals zero. In
  ordinary language: use “Ready today” for zero days; otherwise use “Ready
  later.”
- **Call:** `deliveryLabel(days)` asks that function to do its job with this
  value. Code elsewhere can call the same function with a different value.
- **Returned result:** `return` sends an answer back to the caller. Here the
  answer is text. `showDelivery` names that answer `label` and passes it to
  `showMessage`.

A short explanation with a source reference could be: “For same-day pickup, the
supplied wiring passes 0 to `showDelivery`. It calls `deliveryLabel` with that
value. The zero-day rule returns ‘Ready today’, which is passed to the message
display
([Delivery example, `delivery.js`](#a-tiny-example-choosing-a-delivery-message)).
This is what I predict from the excerpt; I haven't observed the app.”

Now keep the code fixed and imagine the input is **1** instead. What text do you
predict, and which line supports it? You can ask an agent to unpack the
comparison or the call. You don't need a lesson on every JavaScript symbol. If
this is familiar, go straight to the practice or your own question.

## Try a small path yourself

Use the [fictional reading-list packet](03-behavior-evidence.md), or choose one
small behavior in an authorized repository. Prefer a path with one clear rule
and a few connections. A button, an API request, a scheduled action or a tool
call can all be starting points; you only need one.

Begin with the action and input. Find the code handling it, then follow the
value to the rule and the returned result back to whoever uses it. Keep enough
source references for another reader to check each connection: a file and
function at the selected revision, or a link to a supplied excerpt. Explain
unfamiliar syntax only when it affects your account.

Before asking for a finished explanation, make your own first attempt at one
connection or rule. Then ask an agent a focused question such as “Which call
passes this value?” or “Does this function return a count or a list?” Read the
relevant excerpt and say whether its answer fits. Agent assistance is welcome;
your explanation and choices are the evidence of your understanding.

Change one input in your prediction while holding the code and other relevant
data fixed. Say what result you expect and why. Changing an input for this
thought experiment doesn't require editing files or making a live request. If
the result depends on missing data or another service, state the dependency and
give only the prediction the available source supports.

For the packet, explain what checking “Only unread” does. Then predict what
unchecking it would do. For independent application, choose a different small
behavior in your repository. If access is incomplete, use the packet again with
a different book's `finished` value and explain how that affects the
checked-filter result. Make the choice yourself rather than repeat the worked
delivery example.

## Show your explanation; keep partial progress

Bring your question, source revision or snapshot, the few relevant source links
or permitted excerpts, and your explanation and prediction. Include only the
agent exchange needed to understand its contribution. A private link alone may
be inaccessible; safe excerpts can support a narrower review.

The result might fit in this shape: “When this action supplies this input, this
part calls that part. Its rule returns this result, which is used here. With
this other input, I predict this result because of this rule. I can't yet
explain this missing connection.” Use your own words and format.

Finding the rule but losing track of where its result goes is useful partial
progress. So is a trace that stops at an unavailable service. Keep the supported
part and name the gap. A list of filenames or a correct agent-written trace
alone doesn't show that you can explain the connections.

### For the teacher

Start from what the learner already understands. Use the tiny example only where
it helps, then let the learner choose or explain a small path. If their question
requires many services, narrow it together to one action and rule. Don't turn
every unfamiliar symbol into a syntax lesson.

Look for the three distinct outcomes in the learner's account: connected path,
rule in ordinary language, and reasoned prediction. Ask for one useful
clarification where evidence is thin. For example, “What receives the returned
list?” checks a missing connection; asking for more screenshots wouldn't answer
that source question. If the trace is sound, ask for a different input before
showing your prediction. Existing work can supply evidence without repeating the
lesson.

Separate the learner's reasoning, the agent's help and the source's limits. The
packet's reference predictions support teaching consistency; they aren't
observations of a learner or a running app. One correct example supports these
parts of the module, not a claim of general mastery. Keep any private progress
record in the learner's established home, outside course content.

## Next: compare prediction with observation

Carry one question and prediction into
[Module 4 — Run and investigate](03-run-and-investigate.md). There you'll
establish a suitable environment and permitted check, then compare expectation
with what happens. You can also investigate an observed behavior when its source
path is still incomplete. Startup and configuration are handled when needed
there; a source trace is not an absolute gate to observation.

Comparing revisions, assessing effects on other callers and judging the strength
of tests belong in Module 5. Here, a small supported explanation and prediction
are the destination.

[Track guide](index.md) · [Module 0](../course/00-project-and-git.md) ·
[Next module](03-run-and-investigate.md)
