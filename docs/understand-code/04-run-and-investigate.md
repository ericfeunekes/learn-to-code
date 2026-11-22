---
title: Module 4 — Run and investigate a behavior
description:
  Start an app safely, investigate one question in a known environment and
  explain what the observed result supports.
slug: /understand-code/run-and-investigate
---

# Module 4 — Run and investigate a behavior

In [Module 3](03-follow-one-behavior.md) you followed a behavior through the
code. Now find out what actually happens when someone uses it. For example:
“Does searching for a workshop work with capital letters?” Choose one question,
have an approved agent help you run a check, and explain what the result tells
you.

You can also start from a problem someone has seen, before you know the code
path. You don't need to repair anything.

## One question, one environment, one check

An investigation is a short chain:

**Question → expected result → check in a known environment → observed result →
finding.**

An **environment** is everything the running software uses: its version,
settings, data, access and **dependencies** (things it needs, such as a database
or another service). These matter when they could change the answer. Knowing
which files are in the repository doesn't tell you which version a running
service uses.

A tiny fictional example: the workshop directory promises that capital letters
won't change search results. Someone searches for `wood` and gets “wood
carving”, with response status `200` (success). That shows the request worked
and found that title. It doesn't answer the capital-letters question. Before you
look at another result, pick an input that would answer it and predict the
result. The [practice](04-workshop-practice.md) lets you try this.

Use the interface that reaches your question. Three common ones:

- **API:** a program-to-program interface. You (or the agent) send a request to
  an address and get data back.
- **MCP (Model Context Protocol):** a standard way for AI tools to call
  operations a server offers, called tools.
- **Browser:** you use the app's screens like any user.

You only need one. The agent can handle commands and request syntax. Your part
is to choose the check, predict the result and interpret it.

> **Never used a terminal?** A terminal is a window where you type commands
> instead of clicking. On a Mac, open the Terminal app; on Windows, open
> Terminal or PowerShell from the Start menu. You can copy a command from this
> page and paste it in, then press Enter. A command that starts a server keeps
> running and holds the window; press **Ctrl+C** in that window to stop it. You
> don't need to learn commands: ask your agent to run each one for you and
> explain in a sentence what it does and what it printed.

## Getting a real team app running

The practice uses a one-file service. A team's real app usually needs more.
Don't do this setup alone or from memory: do it with an agent, step by step, in
an investigation session (below). Here is what to expect.

1. **Read the instructions first.** Look for “Getting started”, “Development” or
   “Running locally” in the README, and for a `CONTRIBUTING.md` file. Ask the
   agent to explain each step before running it: what it installs, what it
   changes and what it connects to.
2. **Runtimes.** The app is written for a particular runtime, such as Python,
   Node.js or Java, often at a specific version. The README, or files such as
   `.python-version`, `.nvmrc` or `package.json`, say which.
3. **Installing dependencies.** A command such as `npm install` or
   `pip install -r requirements.txt` downloads the libraries the app uses into
   your copy of the project. That's normal; it doesn't change anyone else's
   copy.
4. **Settings and secrets.** Many apps read settings from a `.env` file. There
   is often an example such as `.env.example`. Use test values only. Never paste
   a real password, API key or production address, and never commit a `.env`
   file. If a step needs a secret you don't have, stop and ask the team for a
   test value.
5. **Databases and other services.** If the app needs a database, a queue or
   another service, the README may use **Docker**, a tool that runs those
   services in boxes on your laptop. Treat these as things to ask about: which
   ones the app needs, whether there's test data, and whether anything points at
   shared or production systems.
6. **Check what you reached.** Once it starts, it usually prints an address such
   as `http://localhost:3000`. `localhost` means your own computer. Open it and
   check the version if the app shows one.
7. **Stop what you started.** When you're done, stop the server (Ctrl+C) and any
   services the agent started.

If any step would touch production, real customer data, shared systems or real
messages (emails, payments), stop. Ask the team for a test copy they host, or a
set of test values. Using a hosted test copy is just as valid as running it
yourself.

### What to ask IT for

> On a managed work laptop, you may need to ask for:
>
> - an approved AI agent that can run commands locally, such as Claude Code or
>   Codex;
> - Git, and the runtime the team's app uses (Python for this course's practice
>   fixtures; Node.js for Module 5's optional lab);
> - Docker, if the team's app needs it;
> - read access to the team's repository, and permission to clone it to your
>   laptop;
> - test values or a test environment, from the team rather than IT.

### Do it in an investigation session

Work that runs the team's app or tests happens in a separate **investigation
session**: an agent session you open in your own clone of the team's repository
(or your practice repository), not in this course workspace. You brief it with
the
[investigation template](https://github.com/ericfeunekes/learn-to-code/blob/main/templates/learning/INVESTIGATE.md):
your question, the environment, what it may and may not touch, and your expected
result. That session may start the app and run tests on test data, and it may
draft comments, issues and pull requests. It never pushes, posts or comments
without your go-ahead for that exact text. It stops any process it started and
reports the actual output. Bring what it found back to your teaching session.

## Learning outcomes

### U4.1 Identify where the check will run and what it may do

Say which environment you'll use and why it suits the question. Find its running
version where you can, the settings or data that matter, and what the check is
allowed to change. Name the unknowns that limit your finding.

For example, a page on your laptop can call a shared service elsewhere: checking
the page's version doesn't tell you the service's version. A “staging” label
doesn't promise fictional data or permission to send messages. Read the run or
access instructions with an agent, and have it explain a script before running
it if its effects are unclear. A tool's name or description doesn't prove what
it does.

**Show it:** your target, one detail that could change the answer, and why the
check is allowed. If access or effects are unclear, name the gap and continue
with reading.

**Check without AI:** for your chosen check, say out loud where it runs, which
version, what data it uses and what it could change.

### U4.2 Choose an expectation and run a check

Write down the expected result and where it comes from before anything runs: a
documented rule, a requirement, an earlier observation or a labelled assumption.
Choose a useful input and, if it helps, a comparison that changes one thing.
Explain how this answers your question. An agent can suggest options; you
choose.

Start the app by its documented route, with help, or use a hosted test copy.
Check that you've reached the intended app and that the part you need works: a
server can start without its data.

| Interface | Run the check                                          | Keep this evidence                                                 |
| --------- | ------------------------------------------------------ | ------------------------------------------------------------------ |
| API       | Send one allowed request.                              | Address, input, response status and the relevant part of the body. |
| MCP       | Look at the allowed tool and its inputs, then call it. | Server and tool name, inputs, result and any error.                |
| Browser   | Do one journey in the intended app.                    | Starting state, steps and what you saw.                            |

Keep private data and secrets out of your evidence. Stop any process you
started; leave other people's processes alone. A missing prerequisite is a
blocked step to report, not a reason to build new infrastructure.

**Show it:** your input and prediction, the check, and what it returned. A
supplied packet supports prediction and interpretation; running a check yourself
stays unassessed until you or your agent actually run one.

**Check without AI:** before running, write the expected result and its source
on paper.

### U4.3 Interpret the result and share a repeatable finding

Compare the result with your expectation. A successful request can still return
the wrong answer. An empty successful search is different from an unavailable
catalog. A relevant error message or log line can tell them apart. When a
response has a request ID, it links that response to a line in the log.

Keep what you saw separate from a possible cause. “This search returned no
workshops” doesn't show that the database lost them. Choose a next question or
check that would tell possible explanations apart. Stop at the finding; fixing
it is the engineers' job.

Give someone enough to repeat the case:

- the question and expected result, with its source;
- the target, its version and the starting state;
- the input and steps;
- what happened;
- your interpretation and its limits.

Say what you ran, what an agent reported and what came from a supplied packet.

**Show it:** another person can repeat your check, or see exactly where it was
blocked, and can tell what your conclusion covers.

**Check without AI:** read your finding to someone and ask them to repeat the
check from it without asking you anything.

## Apply it to useful work

Pick a question from a project you may use: a search, a validation message, a
calculation or a status on screen. Or start with the
[workshop practice](04-workshop-practice.md), which has a small local service
and fictional packets.

With an agent, state your question and the environment you're allowed to use.
Ask for the operational help you need, then write your expectation and choice
before the check. Afterwards, explain the result in your own words. A useful
partial result might be finding that you have the wrong environment or lack a
permission.

When you have a finding, draft it as an issue: what you did, what you expected,
what happened and the version. You'll post it in Module 7.

Carry the finding into [Module 5](05-evidence-of-correctness.md), where you
connect a change to its before-and-after behavior and judge how well its checks
support it.

## For the teaching agent

Use the separate [Module 4 notes for the teaching agent](04-teacher-notes.md).
In short: the learner asks, chooses, predicts and interprets; the agent handles
commands, access and syntax. For a learner new to terminals, let the agent run
commands and narrate each one; command recall isn't a target. The root teaching
session never runs the team's app; that happens in the learner's investigation
session.

[Track guide](index.md) · [Module 0](../course/00-project-and-git.md) ·
[Next module](05-evidence-of-correctness.md)
