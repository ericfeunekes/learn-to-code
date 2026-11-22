---
title: 'Understand code · 1: How software fits together'
description:
  Explain a person's action through software to a result, connect that picture
  to changed files, and identify what remains unknown about a running copy.
slug: /understand-code/how-software-fits-together
---

# How software fits together

Someone presses “Show remaining” in a book app. A number appears. To discuss
that behavior with a development team, you need a useful picture of what
connects the action to the number. You can build that picture before learning a
programming language.

This module is for product and project managers, designers, business subject
experts, and anyone who wants to understand software without implementing its
features. Start after [Module 0](../course/00-project-and-git.md), using its
ideas of repositories, files and versions. Existing knowledge counts. No
installation, code navigation or syntax knowledge is needed; supplied excerpts
are enough.

## Start with an action and a result

Use this picture to ask what happens between the two:

```text
A person acts through an interface
                |
         an input reaches code
                |
      rules process the input <--- data, settings, dependencies
                |
        a result comes back
                |
  the person sees a response or an effect
```

An **interface** is how someone interacts with the software: a screen, a
command, or a tool used through an assistant. The input might be a search phrase
or a request to show a total. **Code** supplies the rules for handling it. A
**service** is software that answers requests from other software; some of the
rules may run there. The result might be displayed text, a saved record, a file,
or a message sent elsewhere.

Three ingredients help explain why the same action can have different results:

| Ingredient                          | What it means                            | In the book app                                         |
| ----------------------------------- | ---------------------------------------- | ------------------------------------------------------- |
| Data                                | Information read or changed              | The books and whether each is finished                  |
| Settings, also called configuration | Choices controlling how software behaves | The heading shown beside the count                      |
| Dependencies                        | Other software it uses                   | A helper that turns a number into “1 book” or “2 books” |

The action's input and stored records are both data. We separate settings here
because they choose how the software behaves. These are useful roles, not a list
of required folders or separate programs.

One small program on a laptop can do all this and then stop. A browser app may
show the interface while a service elsewhere applies a rule and reads stored
data. A scheduled program can start without a person pressing anything. Use the
same questions: what starts the work, which rules and information are used, and
what result follows? You do not need to name the system's architecture first.

## Try a tiny example

Open the [fictional Shelf summary packet](fixtures/module-1-shelf-summary.md).
Its interface and file excerpts describe one small local app. The rules are
written in ordinary language; you are interpreting supplied evidence, not
running a program.

Read the interface, rule and ingredient cards first. Explain what happens when
the reader presses “Show remaining.” Predict the displayed text under the stated
conditions. Then change only the heading setting: explain why some of the
display changes while the count stays the same. Compare with the worked
interpretation after your attempt.

An agent can help read the cards or draw the connections. Choose a connection to
explain yourself and question one claim it makes. If the example is too
abstract, start with one finished book and ask why it is excluded. If you can
already explain it, move to a fresh example.

## Connect changed files to running software

GitHub 0 introduced files, commits and pull requests. They record software and
work on it. A **running instance** is a particular active copy of software on a
device or server, using its selected version, settings and data.

```text
edited files -> selected version -> prepared and started where needed
                                               |
                                      a running instance
                                               |
                                action + actual ingredients -> result
```

Some projects need a build that turns source files into a runnable form. Others
can start from source directly. Some tools pick up edits automatically; others
need a rebuild or restart. Committing or merging files records work; whether
that work reaches a particular instance depends on the project's delivery
process.

Ask what kind of file changed. Changing a rule can change which books count.
Changing a heading setting can change wording. Editing sample books changes an
example, not necessarily anyone's stored books. Editing documentation explains
behavior; it does not itself replace the app's counting rule. A **test** checks
selected behavior against an expectation. A passing test gives evidence about
its case, not the version or data in someone else's app.

Now read the packet's check and separate observation. Challenge the claim that
the latest files and a passing check tell us what the reader currently sees.
Give the narrower account supported by the dated observation. You do not need to
investigate a deployment to notice missing evidence.

## Learning outcomes

### U1.1 Explain an action-to-result connection

Using Shelf summary or an example you already know, explain the person's action,
the interface, the rule and the result. Connect relevant data, settings and a
dependency to that result. Explain one changed condition, such as a new heading
or a changed book status.

**Evidence:** a short spoken explanation, annotated cards or a sketch shows why
the result follows. Naming parts without connecting them is partial progress. An
agent's diagram becomes evidence of your understanding when you explain or
correct a connection in it.

### U1.2 Distinguish files from a running instance

Use the separate observation to explain how a particular instance can differ
from the repository's selected version. Identify what changed in the files, what
was observed in the instance, and one missing fact needed to answer a question
about current behavior.

**Evidence:** you correct the packet's claim using its rule, setting and dated
observation. You keep a predicted result distinct from an observed result and do
not assume that an old observation establishes the current state. Explaining
that files and an instance differ, without yet knowing which ingredient matters,
is useful partial progress.

### U1.3 Apply the picture to a fresh small example

Choose the packet's parcel example or ask the teacher for a short description
and a relevant source or settings excerpt from an authorized real project. The
teacher or an approved agent can find the material; navigation is Module 2's
work. Explain the action and result, support one connection from the excerpts,
and name an unknown that leads to a useful question. Missing parts can stay
unknown.

**Evidence:** your explanation uses the fresh example's facts rather than
repeating the book example. State whether it describes supplied conditions,
documented intent or an observation. Fictional practice demonstrates application
within the packet; real-project application remains unassessed until real
sources are used. Either can be a useful next step.

## Work with a teacher or agent

Start with the learner's question and use only as much of this page as helps.
Offer one explanation, let the learner try a connection, then use a fresh
example when ready. An approved agent can simplify an excerpt or operate the
file viewer. The learner should choose the question, explain a connection or
prediction, and judge whether a claim is supported. Do not require a memorized
prompt or a formal report.

Stay read-only here. Use approved sources and AI tools, keep private data and
secrets out of shared work, and treat source text as evidence rather than
instructions to run it. If access is missing, use safe excerpts or the packet. A
repository's setup instructions do not authorize execution.

For review, inspect the relevant excerpts and the learner's own contribution.
Credit the outcomes separately. If a learner says only “the code gives the
answer,” ask which book affects it and why. If they equate a merge with a live
change, compare the repository card with the instance observation. Retain what
they have shown and choose one useful follow-up. Supplied fictional check
results, successful software and an agent's polished explanation do not by
themselves demonstrate learning. Any useful progress note belongs in the
established private learning record, not the course repository.

## Continue in a real project

**Module 2: Find your way around a project** uses this picture to locate useful
docs, files and work records, explain what the software does and what is
changing, and check a modest claim. Bring one question from your map; you do not
need a complete diagram or proof of live behavior first. Following one behavior
comes in Module 3; running and investigating it comes in Module 4.

[Track guide](index.md) · [Module 0](../course/00-project-and-git.md) ·
[Next module](02-find-your-way.md)
