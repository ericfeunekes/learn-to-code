# Progress

Current state for whoever runs the next session. Update it at the end of every
teach and review session. Details live in `LOG.md`.

## Now

- **Track and lane:** build | understand; direct agents | write code | both
- **Current page:** Plan your app | Module N (understand track: Module UN), and
  the outcomes left on it
- **Last session:** YYYY-MM-DD, teach or review, outcome
- **Open practice task:** the task in the learner's words, their expected result
  and how they'll check it, or "none"
- **Task status:** build: drafted | handed off | returned | reviewed.
  Understand: planned | investigating | brought back | reviewed
- **Handoff or brief:** `.learning/handoffs/YYYY-MM-DD-<short-name>.md`
- **Project at handoff:** path or repository @ commit (`git rev-parse HEAD`), on
  up-to-date `main`. Understand track: repository @ revision being followed
- **Next step:** the next outcome or task, proposed first at the next session

## Outcomes

Depth rises only on evidence from the learner. Teach sessions can set
**introduced** and **explained**. Only review sessions set **applied** and
**defended**, after inspecting the result. A reviewer may lower a depth that
lacks evidence and notes why in `LOG.md`.

- **introduced:** the idea was taught or discussed.
- **explained:** the learner explained it in their own words or predicted a new
  case correctly.
- **applied:** the inspected, committed result reflects the idea, and the
  learner made at least one decision that carries this outcome, recorded as
  theirs. If the agent made those decisions, it isn't applied. In the write-code
  lane, the learner also wrote or traced the relevant code. Understand track:
  the learner did the investigation, QA pass or contribution on a real
  repository, and the reviewer checked it against the sources. On a fictional
  packet only, record **applied (practice)**.
- **defended:** in review, the learner explained why for their choices on this
  outcome, or defended a claim from a source, and found or judged a problem in
  it unprompted or after one hint. Problems the reviewer showed don't count.

Module pages that say **demonstrated / partial / not assessed** map to **applied
/ explained / not assessed** (unchanged). Name the gap for partial.

The course goes broad first, then deep. A page is done for a first pass when its
outcomes are at explained or above (recognize-and-ask outcomes in the
direct-agents lane: at least introduced). Outcomes that need a build session,
such as 0.2 and 0.4, can stay at introduced until the first handoff; note them
under Gaps. Applied and defended usually come when a later module returns to the
idea.

"Evidence from" is real repo, practice packet or both (understand track), or
project (build track).

### Build track

| Outcome                               | Depth | Evidence from | Last evidence (date, one line) | Gaps and open questions |
| ------------------------------------- | ----- | ------------- | ------------------------------ | ----------------------- |
| P.1 Build or not, and on what         | —     | —             | —                              | —                       |
| P.2 Work data rules                   | —     | —             | —                              | —                       |
| P.3 Users and access                  | —     | —             | —                              | —                       |
| P.4 Who keeps it running              | —     | —             | —                              | —                       |
| P.5 First-version outline             | —     | —             | —                              | —                       |
| P.6 First runnable version            | —     | —             | —                              | —                       |
| 0.1 Brief an agent                    | —     | —             | —                              | —                       |
| 0.2 Small steps and the loop          | —     | —             | —                              | —                       |
| 0.3 Git as undo and record            | —     | —             | —                              | —                       |
| 0.4 Check what the agent changed      | —     | —             | —                              | —                       |
| 0.5 Recognise common agent mistakes   | —     | —             | —                              | —                       |
| 0.6 Keep secrets and private data out | —     | —             | —                              | —                       |
| 0.7 Read a team's work on GitHub      | —     | —             | —                              | —                       |

Add rows for Modules 1–9 as the learner reaches them, using the page's outcome
number and heading (for example `1.2 Expected results`). A capstone review
usually adds rows from several modules.

### Understand track

Module 0 rows (0.3–0.7) above apply too. Add outcome rows (`U3.1`, `U3.2` …) as
the learner reaches each module.

| Module                        | Depth | Evidence from | Last evidence (date, one line) | Gaps and open questions |
| ----------------------------- | ----- | ------------- | ------------------------------ | ----------------------- |
| U1 How software fits together | —     | —             | —                              | —                       |
| U2 Find your way around       | —     | —             | —                              | —                       |
| U3 Follow one behavior        | —     | —             | —                              | —                       |
| U4 Run and investigate        | —     | —             | —                              | —                       |
| U5 A change and its evidence  | —     | —             | —                              | —                       |
| U6 An evolving project        | —     | —             | —                              | —                       |
| U7 Work with engineers        | —     | —             | —                              | —                       |
| UR Use it in your role        | —     | —             | —                              | —                       |

## Open findings

Problems a reviewer found, raised or not. The next reviewer checks this table
first. "Found by" is learner unprompted, learner after a hint, or shown by
agent. On the understand track, findings are about the team's software: the
learner reports them, never fixes them, and a finding closes when it's reported
or consciously not reported.

| Finding | Raised? | Found by | Reported to team (link) | Status |
| ------- | ------- | -------- | ----------------------- | ------ |

## Capstone

- **Started:** YYYY-MM-DD, at commit or revision
- **Learner's own review:** where it is, and what it missed
- **Bar items:** each one met | not met | not evidenced, with what was inspected
  and what was only reported
- **Verdict:** done | not yet, and why
- **Handed over:** the learner's own next outcomes (9.4), and that the log is
  theirs to keep

## Patterns

- **Strengths:**
- **Recurring gaps:**
