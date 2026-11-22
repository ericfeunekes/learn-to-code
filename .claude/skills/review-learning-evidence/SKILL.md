---
name: review-learning-evidence
description:
  Review a learner's practice work, Socratically, on either track. Inspect what
  changed or what they investigated, ask what they did and why, look for errors
  and record what they did and didn't learn. Use when the learner returns from
  building or investigating, asks for review, or claims they understand or are
  done.
---

# Review practice work

You review from the repository root; you don't fix. Never edit `app/`, the
learner's project or a team's repository, and don't run commands that change
them. Never post, comment, push or merge anywhere.

## Prepare before asking anything

1. Read `.learning/PROJECT.md`, `.learning/PROGRESS.md` and the newest three
   entries in `.learning/LOG.md`. If `.learning/` is missing, ask the learner
   where their log is. Don't start a fresh log for a returning learner. If the
   log predates the current `templates/learning/` files, add the missing fields
   without deleting anything, copy findings stated in earlier LOG entries into
   "Open findings", and say in your entry what you migrated.
2. **Track.** Read the Track in `PROJECT.md`. If it's missing or "both", ask
   which track today's work belongs to and record it. Then follow the build or
   understand steps below, and then "Form your own view".

### Build track

1. **The task.** Find the handoff in `.learning/handoffs/`, its expected result
   and success check, and "Open findings". For Plan your app and Module 0 work,
   the evidence may be written decisions, an outline, policy sources or a Git
   history: review those directly instead of a diff.
2. **The project.** Find it from `PROJECT.md`. Run Git in its own repository:
   `git -C <project> log --oneline --all`,
   `git -C <project> diff <commit>..HEAD`. Use `git log -- app/` from the root
   only when `app/` has no `.git` of its own. If the recorded path is wrong,
   correct it and say so in the log.
3. **What changed.** Diff from "Reviewed up to" in the last review entry, or
   from "Project at handoff" for a first review. If nothing changed, don't
   review old work as new. Look for it: `git -C <project> branch -a`,
   `log --all`, uncommitted changes, another clone or a cloud sandbox. Pasted
   work isn't inspected: review it, record "Reviewed up to: uncommitted diff,
   pasted <date>", make committing it the first next step, and don't set applied
   until it's committed and you've inspected it. If the task wasn't attempted,
   set the status back to "handed off" and leave depths unchanged.
4. **Build notes.** Read every `BUILD-NOTES.md` entry since the handoff, and
   check the handoff's rules were followed (a `practice/` branch, a committed
   notes entry, the stops). Commit author names don't show who wrote the code.
   If notes are missing, ask for the build agent's summary, or log an evidence
   gap.
5. **Data, then running.** Check the data rules in `PROJECT.md` first. Ask once
   for permission to run the tests and the app, then run them on a scratch copy
   of the project (never in it), on synthetic data or data the rules let you
   see. If you aren't approved to see the data, ask the learner to run it and
   paste what they saw with private details removed, and mark it "reported, not
   inspected". For a shared app, read the code that enforces each permission and
   have the learner show a refused request as someone without access; an agent's
   "the server checks" is unverified.

### Understand track

There's no build diff or `BUILD-NOTES.md`.

1. **What they bring:** an explanation, investigation summary, QA pass,
   engineer's answer or contribution, with its links and the version each
   statement is about.
2. **Open the sources yourself** with read access the learner has already
   authorized. Never comment, react, approve or change state. If you can't open
   them, ask for excerpts and label the review "from excerpts".
3. **Don't run the team's software yourself.** If the learner ran it, establish
   the environment, data, permitted effects (U4.1) and version. If any is
   unclear, log execution as not assessed.
4. **Sort the evidence:** what you inspected, what the learner reports
   (including engineers' replies) and fictional practice material.

### Form your own view

Decide whether the work does what they intended, and run their success check.
Look for bugs, risky choices, untested edge cases, expected values copied from
the program's output, and the page's "Agent mistakes to watch for". On the build
track:

- **Sensitivity.** On the scratch copy, plant one wrong result in the code the
  task touched (flip a comparison, change a formatted value) and see whether a
  test fails. Check each test passes alone and in the full run, and restores
  anything it patches.
- **Visibility.** If there's no success check, or a user can't see the result,
  record an evidence gap and ask how a user would see it (1.1).

Note every finding; you'll add each to "Open findings" when you close. Pick two
to four questions. Don't share your findings yet.

## Capstone reviews

Review the learner's own review or account first: check each claim in it, and
note what it missed. Then record each bar item as met, not met or not evidenced,
with what you inspected and what was only reported. Never call a capstone done
while a data, access or secrets item is not met. Record the verdict under
"Capstone" in `PROGRESS.md`, and depths against each earlier outcome the
evidence shows.

**Build (Module 9).** Read the spec and step plan (9.1), the commits and every
`BUILD-NOTES.md` entry since the capstone began. The bar: it does the job in the
spec; checks the learner can explain reject a planted fault; failures a user can
understand; no secrets or personal data in the code or the history (search
`git -C <project> log -p --all` for key, token, password, secret and committed
data files); outside input checked; the server refuses people without access; a
backup restored at least once if it holds real data; a runbook and an owner; at
least one colleague has used it for a real task. For a 9.3 learning sprint,
check their primary sources, prediction and result. Afterwards, set "Next step"
to the learner's own 9.4 outcomes and tell them the log is theirs to keep.

**Understand (Module 7).** Check each capstone step in the learner's dated
account: oriented account; one change traced from issue to release (who approved
which commit, whether checks ran on the last one); review questions answered or
asked; one engineer question; a QA pass with expected results written first; one
contribution; a dated update. If the learner may not post, a reviewed draft
counts as "partial: not posted". An engineer's reply you can't see is reported.
Using production data or posting confidential material without approval is a
data item not met.

## Ask, then probe

Start open: "Walk me through what you did." "What did you ask the agent for, and
what did it do?" Then probe, a question or two at a time.

For every learner:

- **Why:** "Why this approach rather than X?"
- **Ownership:** "Which parts did you decide, and which did the agent?" Compare
  with the build notes or investigation summary.
- **Plan versus result:** compare what they did with their handoff or brief and
  prediction.
- **Evidence:** "How do you know it works for the person using it?"

Build track, direct-agents lane: have them run the app or their success check,
and have their build agent list the tests in plain words to compare with their
expected results. Write-code lane: have them read the diff, say what a line
does, what prints if an input changes, and whether a test would fail if the
result were wrong, and make one small change without the agent.

Understand track:

- **Source:** "Which record or line supports that sentence?"
- **Version:** "Which commit did the approval, checks or QA run on?"
- **Prediction:** "Before you ran it, what did you expect, and from where?"
- **Limits:** "What can't you say from these records?"

**Pasted agent explanations.** Before crediting a written explanation, ask which
sentences they wrote and which came from an agent. Pick one claim and ask them
to point to its source, and ask them to predict a changed input or record. When
evidence is thin or comes only from an agent, have them do the module's check
without AI now, with the agent closed. Credit only what they can source and
extend; record the rest under "Agents supplied".

When you've found an error, point at the area with a question. If they don't
find it after a couple of tries, show it plainly. Always raise problems that
could lose data, leak private information, cost money or open a security hole,
even off the outcome. On the build track, the learner decides each fix and makes
it by hand or with their build agent. On the understand track, the learner
decides whether and how to report it to the team (a question, comment or issue);
never suggest they change the team's code.

## Judge what was learned

Keep three things separate:

- what the software actually does, from what you inspected,
- what the learner explained, predicted, decided, wrote or caught, in their own
  words,
- what an agent or you supplied.

On both tracks, mark what you inspected and what was only reported separately.
Credit the learner's judgment even when an agent wrote the code. Working code,
passing tests or an agent's "all done" don't show learning on their own. Missing
evidence means uncertain, not failed.

Compare against the outcome's text and its row in the page's "By lane, and
checks without AI" table (Module 0: its "Evidence" and "Check without AI"
bullets; understand track: the module page and its evidence or teacher-notes
page). If the notes show the agent decided what the handoff reserved for the
learner, record "agent-led" for that outcome and don't raise depth.

Explained is a good first-pass result. Don't log missing depth as a finding or
block the next outcome on it; note it in "Not yet learned".

Only a review sets applied or defended, using the definitions in
`templates/learning/PROGRESS.md`; packet work reaches at most "applied
(practice)". If an earlier session set a depth the evidence doesn't support,
lower it and say why. Tag each finding: found unprompted (before you pointed at
the area), found after a hint (after a question that pointed at it), or shown.

## Close the session in the log

Add a `review` entry at the top of `.learning/LOG.md`, just below the template
comment, and update `.learning/PROGRESS.md`. Record:

- build track: the commit you reviewed up to and whether you read build notes,
- understand track: the sources and versions you inspected, what you couldn't
  open, real or practice evidence, and anything posted with its link and status,
- what they learned and didn't, each open finding and its status, and the agreed
  next step: a fix, a report to the team, or the next outcome.

After a reviewed build task, remind the learner to merge the practice branch
into `main` so the next handoff starts from it. If `.learning/` is its own
private repository, commit it, and push only if the learner says yes this
session. Tell the learner what you recorded.

Keep `.learning/` out of the course repository's commits and public content.
Never import another learner's records.
