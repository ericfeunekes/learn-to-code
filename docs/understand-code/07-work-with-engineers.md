---
title: '7. Work with engineers on GitHub'
description:
  Read issues, pull requests, review discussions and check results, ask
  engineers well-formed questions, run a QA pass, contribute, and follow real
  work in a capstone.
slug: /understand-code/work-with-engineers
---

# 7. Work with engineers on GitHub

You've built a picture of a project, followed behaviors and judged changes. This
module is about the day-to-day: opening a repository where a team is working,
reading what they're discussing and deciding, and taking part as a useful
colleague. You won't build features. You'll read the same records the engineers
read, ask questions that move the work forward, test changes yourself and make
small contributions of your own.

This is the track's goal. By the end you can open a repository where work is
under way, understand what's happening and work alongside the engineers,
including as a product manager following delivery or a risk and control reviewer
checking that changes were made properly.

Returns to Module 0's GitHub outcome (0.7), [Module 2](02-find-your-way.md)'s
project map, [Module 5](05-evidence-of-correctness.md)'s change evidence and the
[review questions](review-questions.md).

## Learning outcomes

### 7.1 Read an issue and its state

- Explain what an issue asks for, who raised it, who's assigned, its labels and
  milestone, and whether it's open, closed as done or closed as not planned.
- Find the pull requests linked to it, and say whether the work is not started,
  in progress, in review, merged or released.
- Write a useful issue or comment yourself: what you saw, what you expected, how
  to reproduce it and why it matters, without proposing the code.
- **Evidence:** an explanation of one real issue's state with links, or an issue
  you wrote that an engineer could act on without coming back to you.

### 7.2 Read a pull request and its review discussion

- Explain what a pull request proposes, using its description, its linked issue
  and the list of changed files. Say whether the files match the description.
- Follow the review: what reviewers asked, what the author changed in response,
  which comments were resolved and how, and who approved. Notice a change pushed
  after the approval.
- Spot the signs that deserve a question: tests removed or weakened, an
  unexplained change outside the stated scope, approval from the author only, or
  a long unresolved disagreement.
- **Evidence:** a plain-language account of one pull request from request to
  merge, including one review exchange and what it changed.

### 7.3 Read check results

- Find the checks on a pull request or commit, and say which passed, failed,
  were skipped or are still running, and which version of the change they ran
  on.
- Open a failing check and find the line that says what failed, without needing
  to understand all of it. Distinguish a check that failed because of the change
  from one that's known to be unreliable or broken for everyone.
- Explain what a green check does and doesn't establish: it shows those checks
  passed on that version, not that the feature works for users.
- **Evidence:** for one pull request, a short note of its checks, what one
  failure or pass means, and what the checks don't cover.

### 7.4 Ask an engineer a well-formed question

- Before you ask, check the issue, the pull request, the review and the checks,
  so your question shows what you already know.
- Ask one specific question: name the change, say what you checked, and ask
  about one gap. Ask where the team already talks, such as a pull request
  comment or the issue, at a moment that doesn't block their work.
- Use the answer: update your account, and say thank you. If the answer reveals
  a real gap, record it as a finding, not a criticism.
- **Evidence:** a question you asked a real engineer, or drafted for review if
  you can't yet, with what you checked first and what the answer changed.

### 7.5 Discuss and contribute

- Take part where the team works: comment on an issue or pull request with a
  clear point, propose acceptance criteria, or record a decision and who made
  it.
- Write a good issue or bug report: what you did, what you expected, what
  happened, how to reproduce it, the version and environment, and why it
  matters. Leave the fix to the engineers.
- Make a small pull request through the team's normal process, with an agent's
  help if you like, such as a fix to the README or docs, or a test case for
  behavior you understand. Use a branch, describe what and why, and respond to
  review.
- Follow the team's contribution rules, and leave code changes beyond your
  understanding to the engineers.
- **Evidence:** a comment, issue or small pull request you made, with the team's
  response and what you changed because of it.

### 7.6 Run a QA pass on a change and report it

- Start the app on a test setup, locally or on a test copy the team provides, as
  [Module 4](03-run-and-investigate.md) describes. Use test data and settings,
  never production, and check what the app can reach before you run it.
- Plan a short exploratory session from the issue or pull request: what should
  now work, what must still work, and the edge cases a user would hit, with your
  expected results written down first. Keep it to an hour or less.
- Run it as a user would and record what happened. Report the results to the
  engineers where they work: a summary comment on the pull request with what you
  tried, what passed, what didn't and what you didn't cover, and an issue for
  each problem.
- **Evidence:** your QA plan and notes for one change, with expected and actual
  results, and the report you posted, or a draft if you can't post yet.

## Agent mistakes to watch for

When you ask an agent to summarize a repository or a pull request for you:

- **Reading the description, not the change.** Summarizing what a pull request
  says it does without checking the files.
- **Missing the review.** Ignoring comments, requested changes and pushes after
  approval.
- **"All checks pass."** Reporting green checks from an earlier version, or
  missing skipped ones.
- **Confusing merged with released.** Saying users have a change because it's
  merged.
- **Inventing the who.** Guessing who approved something or why, instead of
  quoting the record.

## Checks without AI

| Outcome | Check without AI                                                                                                                               |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.1     | For one issue, say its state, who owns it and where the work is, from the page alone.                                                          |
| 7.2     | For one merged pull request, say what changed, who approved it and one thing the review changed.                                               |
| 7.3     | For one pull request, list its checks and say which version they ran on and what one of them doesn't cover.                                    |
| 7.4     | Draft a question about a real change that names what you checked and asks about one gap.                                                       |
| 7.5     | Write a bug report for a real or practice problem that an engineer could act on without coming back to you.                                    |
| 7.6     | Before running anything, write the QA plan for one change: what should work, what must still work, and three edge cases with expected results. |

## Capstone: follow real work alongside engineers

This is where the track lands. Open a repository where a team is actively
working, one you're allowed to read, and show that you can understand what's
happening and work with the engineers on it.

Over a week or two of ordinary work:

1. **Get oriented.** Explain what the software does, its main parts and what the
   team is working on now, using the README, open issues, recent pull requests
   and the latest release.
2. **Follow one change from request to release.** Pick a change that matters to
   you. Trace it from its issue to its pull request, its review and checks, its
   merge and whether it has reached users yet.
3. **Ask the review questions.** Use the [review questions](review-questions.md)
   on that change: what changed, who approved it, what evidence it shipped with
   and what could go wrong. Write down which you could answer from the records
   and which you had to ask about.
4. **Ask an engineer one good question.** Take one open question to the person
   who made or reviewed the change. A good question names the change, says what
   you checked and asks about one specific gap. Record the answer and what it
   changed in your account.
5. **Run a QA pass** on that change (7.6) and post your results where the
   engineers will see them.
6. **Contribute one thing** through the team's process (7.5): a comment, an
   issue, a docs fix or a small pull request.
7. **Update your account** when something new lands, with a date.

Bring back the dated account, the links or excerpts you used, your questions and
the answers you got. The evidence is your explanation and your questions, not
the team's work.

## For the teacher

- Use a repository the learner is allowed to read, ideally one their own team
  works on. A busy public open-source project works for practice when they don't
  have one.
- Credit what the learner reads and asks, not the team's work. A good question
  that turns up a gap is strong evidence; a confident summary copied from an
  agent is weak evidence.
- For risk and control reviewers, weight 7.2 and 7.3 and the
  [review questions](review-questions.md): who approved, on which version, with
  what evidence.
- For 7.5 and 7.6, credit the learner's plan, expectations and judgment. An
  agent can start the server or draft the pull request; the learner decides what
  to test and what to say.
- Don't let the learner pester engineers on your behalf. One well-prepared
  question per change is the target.
- Review the capstone account the way Module 6 does: dated, sourced, honest
  about what's unknown.

[Track guide](index.md) · [Module 0](../course/00-project-and-git.md) ·
[Review questions](review-questions.md)
