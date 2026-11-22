---
title: Use it in your role
description:
  For product managers, project managers and business users. Turn a need into
  acceptance criteria, judge scope and effort, work with an AI-assisted team and
  read delivery signals in a repository.
slug: /understand-code/use-it-in-your-role
---

# Use it in your role

Modules 1 to 7 teach you to read a repository, follow a change, run the app and
work with engineers on GitHub. This page connects those skills to the job you
already do. It covers four things the modules only imply:

- turning a business need into acceptance criteria engineers can build against,
- judging scope and effort trade-offs,
- what changes when the team uses AI to write code,
- reading delivery signals in the repository.

It's a strand, not an eighth module. Start it early: after your
[first two sessions](index.md#your-first-two-sessions) you know enough to read
the first two sections and try your role's practice task. Come back to it as the
modules deepen. Each section names the modules it leans on.

## The four role outcomes

### UR.1 Turn a need into acceptance criteria

A need says what someone wants. Acceptance criteria say how everyone will know
it's done. Engineers build and test against the criteria, so vague criteria
become vague software.

Good criteria describe behavior someone can observe, not how to build it. Write
each one as an example: a starting situation, an action and the result.

> **Need:** "Remind us before vendor contracts renew."
>
> - A contract renewing in 30 days appears on the reminder list today.
> - A contract renewing in 31 days doesn't appear yet.
> - A contract already marked "not renewing" never appears.
> - A contract with no renewal date appears in a separate "needs a date" list,
>   not silently dropped.
> - **Out of scope for now:** emailing the reminder.

Notice the boundary (30 versus 31 days), the exclusion and the missing-data
case. Those are where software usually goes wrong, and they're the cases you
learned to pick in Module 7's
[QA pass](07-work-with-engineers.md#run-your-own-qa-pass). Naming what's out of
scope stops the work growing quietly.

Leans on: Module 3 (rules in plain words), Module 5 (does a test check the
behavior?), U7.6 (QA cases).

**Evidence:** criteria for a real need, each one observable, with at least one
boundary, one exclusion or invalid case, and an out-of-scope line. An engineer
or a test could check each one without asking you what you meant.

### UR.2 Judge scope and effort trade-offs

You don't need to estimate hours. You need to know what makes work big, and to
ask for smaller options.

What usually drives effort isn't typing code. It's:

- **Unknowns:** nobody has done this here before.
- **Data:** messy, missing or sensitive data, or moving existing data.
- **Connections:** another system, a sign-in, an outside service.
- **Permissions:** who may see or change what.
- **Things that are hard to undo:** deleting data, changing what users already
  rely on.

A useful habit: ask for three sizes of the same need. For the reminder example,
the small version is a list the team checks on Mondays. The middle version adds
the "needs a date" list. The large version emails each owner. Then choose the
smallest one that solves the real problem, and say what you'd learn from it
before building the next.

On GitHub, size shows up too. A pull request touching 40 files across several
parts of the system is harder to review and riskier to release than three small
ones. It's fair to ask, "Could we split this?"

Leans on: Module 2 (the main parts), Module 6 (how work evolves), U7.2 (reading
a pull request).

**Evidence:** three sizes for one need, the effort drivers named for each, a
choice with a reason, and what the smallest version would teach you.

### UR.3 Work with a team that uses AI to write code

When engineers use AI agents, code gets cheaper to write. Reviewing, testing,
connecting and running it don't get cheaper at the same rate. That shifts the
work in ways you'll notice:

- **Clear criteria matter more.** An agent builds exactly what it's told, fast.
  Vague criteria now produce a lot of confident, wrong work quickly.
- **Pull requests get bigger.** Review becomes the bottleneck. Expect slower
  reviews or rubber-stamping, and ask which it is.
- **The same agent may write the code and its tests.** Then passing tests can
  share the code's mistakes. Module 5 shows why that matters.
- **Summaries can sound sure and be wrong.** A pull request description written
  by an agent isn't evidence. The diff, the checks and what you observe are.
- **Prototypes are cheap.** Show users a rough version earlier, and plan in
  smaller slices.
- **Data and policy still apply.** Which tools are approved, and what data they
  may see, is a planning question, not an afterthought.

Good questions to ask the team: "Which parts were agent-written, and how were
they checked?" "Who reviewed this, and did they read the diff or the summary?"
"Which tests were written before the code?"

Leans on: Module 0 (directing an agent), Module 5 (evidence), U7.3 (checks).

**Evidence:** for one real or practice pull request, a short note on what an
agent likely wrote, what evidence shows it works and what a reviewer would still
need to check.

### UR.4 Read delivery signals in the repository

The repository records how work is flowing. You can read it without asking
anyone for a status report. Useful signals and where to find them on GitHub:

| Signal                            | Where to look                                                                     | A question it raises                     |
| --------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------- |
| Stalled pull requests             | Pull requests tab, filter `is:pr is:open sort:created-asc` (oldest first)         | What's blocking the oldest ones?         |
| Waiting for review                | Open pull requests with no review yet, or "Review required"                       | Is review the bottleneck?                |
| Very large pull requests          | The "Files changed" count on each pull request                                    | Could this be split?                     |
| Rising bugs                       | Issues tab, filter `is:issue label:bug` and compare how many were opened recently | What changed around when they started?   |
| Reopened work                     | Issues that were closed and reopened                                              | Was "done" defined clearly?              |
| Failing checks on the main branch | The red cross or green tick next to recent commits on the main branch             | Is anything being merged while it's red? |
| Release rhythm                    | Releases or tags on the repository's main page                                    | When did users last get a change?        |

Labels and filters differ between teams. Ask what the team's labels mean before
you count them.

Signals are questions, not verdicts. A stalled pull request might be waiting on
a decision from you. Never use these numbers to rank individual engineers: it
damages trust and the numbers stop meaning anything once people work to them.
Date every snapshot, as Module 6 taught: what you saw on Tuesday may not hold on
Friday.

Leans on: Module 2 (work records), Module 6 (dated accounts), U7.1 to U7.3.

**Evidence:** a dated snapshot of at least four signals with links, each turned
into a question for the team, with no claims about individuals.

## Practice: one task for your role

Pick the task closest to your job. Do it on your team's repository if you may,
or on your
[practice repository](07-work-with-engineers.md#practise-in-your-own-repository-first)
or any public project with active issues. Write your answers before you ask an
agent to check them.

**Product manager: criteria for a real issue.** Choose an open issue that
describes a need. Write acceptance criteria for it (UR.1). If a pull request
already addresses it, read the pull request's tests and mark which of your
criteria they check, which they don't, and any they check that you didn't ask
for (UR.3). In the practice repository, use the case-sensitive search bug you
filed in Module 7.

**Project manager: a delivery snapshot.** On a repository with recent activity,
take a dated snapshot of at least four signals from the table (UR.4). For each,
write the question you'd bring to the team's next meeting. Then pick the largest
open pull request and suggest how it could have been split (UR.2).

**Business user: from request to slice.** Take a real request from your own work
that software could help with. Write the need in two sentences, acceptance
criteria for it (UR.1) and three sizes of solution with their effort drivers
(UR.2). Choose a size and say why. If an engineer can look at it, ask them what
you missed. Otherwise ask an agent to play a sceptical engineer, and note which
of its points you accept and why.

Bring the result to a review session. The reviewer will ask where each criterion
came from and test one or two of your claims against the repository.

## Agent mistakes to watch for

- Criteria that describe how to build it ("add a cron job") instead of what
  someone observes.
- Criteria with only the happy path: no boundary, no missing data, no exclusion.
- Effort talked about in hours with no drivers named.
- A pull request summary treated as proof of what the code does.
- Delivery numbers read as verdicts or tied to named people.
- A signal snapshot with no date, or counts of labels whose meaning wasn't
  checked.

## Checks without AI

- **UR.1:** cover your criteria and restate the need from memory, then name the
  one case most likely to be built wrong.
- **UR.2:** for your chosen size, say what you'd learn from it and what would
  make you build the next size.
- **UR.3:** pick one claim in a pull request description and find the line of
  the diff or the check result that supports it, or say that nothing does.
- **UR.4:** explain one signal from your snapshot to someone else, including one
  innocent reason it might look bad.

## For the teaching agent

Teach this strand alongside the modules, not after them. A learner can start
UR.1 and UR.4 right after session 2. Anchor every idea in the learner's own role
and, where possible, their own team's repository. Record outcomes as UR.1 to
UR.4 in the learning log. Evidence from a real team's work can reach applied;
evidence only from the practice repository or a public project the learner has
no stake in counts as applied (practice). Never post the learner's criteria or
questions to a team's repository; the learner does that.
