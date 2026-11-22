---
title: Module 7 — Work with engineers on GitHub
description:
  Read issues, pull requests, review discussions and check results, ask
  engineers well-formed questions, run a QA pass, contribute, and follow real
  work in a capstone.
slug: /understand-code/work-with-engineers
---

# Module 7 — Work with engineers on GitHub

You've built a picture of a project, followed behaviors and judged changes. This
module is about the day-to-day: opening a repository where a team is working,
reading what they're discussing and deciding, and taking part as a useful
colleague. You won't build features. You'll read the same records the engineers
read, ask questions that move the work forward, test changes yourself and make
small contributions of your own.

This is the track's goal. By the end you can open a repository where work is
under way, understand what's happening and work alongside the engineers, as a
product manager following delivery or as a risk and control reviewer checking
that changes were made properly.

This module returns to Module 0's GitHub outcome (0.7),
[Module 2](02-find-your-way.md)'s project map,
[Module 5](05-evidence-of-correctness.md)'s change evidence,
[Module 6](06-read-evolving-project.md)'s dated accounts and the
[review questions](review-questions.md). You may have read U7.1 to U7.3 lightly
after Module 2; now go deeper.

**Who posts.** You do. An agent can help you draft a comment, issue or pull
request, but it never posts, comments, pushes or merges on a team's repository.
You read the exact text and post it yourself. Practise first in your own
repository (below). Post on a team's repository only where the team welcomes it.

## Learning outcomes

### U7.1 Read an issue and its state

- Explain what an issue asks for, who raised it, who's assigned, its labels and
  milestone, and whether it's open, closed as done or closed as not planned.
- Find the pull requests linked to it, and say whether the work is not started,
  in progress, in review, merged or released (see
  [Module 6](06-read-evolving-project.md#merged-isnt-released-date-what-you-observe)).
- Write a useful issue yourself: what you did, what you expected, what happened,
  how to reproduce it, the version and why it matters, without proposing the
  code.
- **Evidence:** an explanation of one real issue's state with links; or an issue
  you wrote that contains what you did, what you expected, what happened, the
  steps, the version and the impact. The reviewer judges the issue's contents,
  not whether an engineer has replied.

### U7.2 Read a pull request and its review discussion

- Explain what a pull request proposes, using its description, its linked issue
  and the list of changed files. Say whether the files match the description.
- Follow the review: what reviewers asked, what the author changed in response,
  which comments were resolved and how, and who approved, on which commit.
  Notice any commit pushed after the approval.
- Spot the signs that deserve a question: tests removed or weakened, an
  unexplained change outside the stated scope, approval only from the author's
  own side, or a long unresolved disagreement.
- **Evidence:** a plain-language account of one pull request from request to
  merge, with links, including one review exchange and what it changed, who
  approved it and on which commit, and whether anything was pushed after that
  approval.

### U7.3 Read check results

- Find the checks on a pull request or commit. Say which passed, failed, were
  skipped or are still running, and which commit they ran on.
- Open a failing check and find the line that says what failed, without
  understanding all of it. Tell a failure caused by the change from a check
  that's known to be unreliable or broken for everyone.
- Explain what a green check does and doesn't establish: those checks passed on
  that commit, not that the feature works for users (Module 5).
- **Evidence:** for one pull request, a short note listing its checks, the
  commit they ran on, what one pass or failure means, and what the checks don't
  cover.

### U7.4 Ask an engineer a well-formed question

- Before you ask, read the issue, the pull request, the review and the checks,
  so your question shows what you already know.
- Ask one specific question: name the change, say what you checked and ask about
  one gap. Ask where the team already talks, such as the pull request or the
  issue, at a moment that doesn't block their work.
- Use the answer: update your account and say thank you. If the answer reveals a
  real gap, record it as a finding, not a criticism.
- **Evidence:** a link to a question you posted, with what you checked first,
  and the team's response if there is one yet, with what it changed in your
  account. A question you've drafted but not posted counts as partial.

### U7.5 Discuss and contribute

- Take part where the team works: comment on an issue or pull request with a
  clear point, propose acceptance criteria, or record a decision and who made
  it.
- Write a good issue or bug report (U7.1). Leave the fix to the engineers.
- Make a small pull request through the team's normal process, such as a README
  or docs fix, or a test case for behavior you understand. Use a branch, say
  what and why, and respond to review.
- Follow the team's contribution rules (often in `CONTRIBUTING.md`), and leave
  code changes beyond your understanding to the engineers.
- **Evidence:** a link to a comment, issue or small pull request you made, with
  the team's response if there is one yet and what you changed because of it.
  With no response yet, the contribution itself is the evidence. Work in your
  practice repository counts as practice.

### U7.6 Run a QA pass on a change and report it

- Start the app on a test setup, locally or on a test copy the team provides, as
  [Module 4](04-run-and-investigate.md) describes, in an investigation session.
  Use test data and settings, never production.
- Plan a short session from the issue or pull request using the
  [QA technique](#run-your-own-qa-pass) below, with your expected results
  written down before you run anything. Keep it to an hour or less.
- Run it as a user would and record what happened. Report where the engineers
  work: a summary comment on the pull request with what you tried, what passed,
  what didn't and what you didn't cover, and an issue for each problem.
- **Evidence:** your QA plan, dated or posted before you ran it (for example as
  a pull request comment, so a reviewer can see the order), your notes with
  expected and actual results, and a link to the report you posted. A report you
  haven't posted counts as partial.

## Practise in your own repository first

Your first comment, issue and pull request shouldn't be on your team's
production system. Make a private practice repository and do each action there.
A colleague or friend with a GitHub account can play the engineer. Everything
below happens on github.com in the browser.

You need the two workshop files from
[Module 4's practice](04-workshop-practice.md#runnable-local-route):
`module3_server.py` and `module3_fixture_test.py`.

### 1. Create the repository and upload the fixture

1. On github.com, click the **+** at the top right and choose **New
   repository**.
2. Name it `my-practice-repo`. Choose **Private**. Turn on **Add a README**.
   Click **Create repository**.
3. On the repository page, click **Add file** → **Upload files**. Drag in
   `module3_server.py` and `module3_fixture_test.py`. In the commit message box,
   write “Add workshop fixture”. Click **Commit changes**.
4. Add a check. Click **Add file** → **Create new file**. Type the name
   `.github/workflows/checks.yml` (each `/` makes a folder). Paste:

   ```text
   name: checks
   on:
     push:
       branches: [main]
     pull_request:
   jobs:
     fixture-checks:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - run: python3 -m unittest -v module3_fixture_test
   ```

   Click **Commit changes…**, then **Commit changes**. This runs the fixture's
   author checks on GitHub's servers each time something changes. It uses about
   a minute of the free monthly allowance GitHub gives private repositories.

5. To invite your “engineer”, open **Settings** → **Collaborators** → **Add
   people**, and enter their GitHub username. They accept the email invitation.

If you don't see an **Issues** tab, open **Settings**, scroll to **Features**
and tick **Issues**.

### 2. File an issue for the search bug

In Module 4 you found that searching `WATER` returns nothing although the
requirement says capital letters don't matter.

1. Click the **Issues** tab → **New issue**.
2. Title: a short description of what's wrong, such as “Search ignores matches
   when the query has capital letters”.
3. Description: what you did, what you expected and why (quote the requirement),
   what happened, the steps to repeat it, the version (`module3.1` from
   `/about`) and why it matters to a user.
4. Click **Create** (on some screens, **Submit new issue**).

### 3. Open a small pull request from the web editor

1. Click `README.md` in the file list, then the pencil icon (**Edit this
   file**).
2. Add two lines: the search requirement, and “Known issue: capital letters (see
   #1)”. `#1` links to your issue.
3. Click **Commit changes…**. Choose **Create a new branch for this commit and
   start a pull request** and name the branch `readme-search-note`. Click
   **Propose changes**.
4. On the next page, write a title and a description: what you changed and why.
   In the right-hand column, under **Reviewers**, pick your collaborator. Click
   **Create pull request**.

### 4. Comment on a line

1. In the pull request, open the **Files changed** tab.
2. Hover over a line and click the blue **+** that appears at its left.
3. Write your comment and click **Add single comment**. (**Start a review**
   groups several comments into one review instead.)

### 5. Request and leave a review

Your collaborator opens the pull request, goes to **Files changed**, and clicks
**Review changes** (on some screens, **Submit review**). They write a summary,
choose **Comment**, **Approve** or **Request changes**, and click **Submit
review**. Notice that GitHub doesn't let the author approve their own pull
request: that is the start of segregation of duties.

Then, after their approval, edit `README.md` again on the same branch (open the
file while viewing branch `readme-search-note` and commit directly to it). Look
at the **Conversation** tab: your new commit appears below the approval. This is
a push after approval, the thing U7.2 asks you to spot.

### 6. Read the checks

1. On the pull request's **Conversation** tab, scroll to the box above the merge
   button. It lists each check with a tick, cross or dot.
2. Click **Details** next to a check, or open the **Checks** tab. Find the
   commit it ran on and the line in the log that says what passed or failed.
3. Notice that the check is green although the bug from your issue is real. Open
   `module3_fixture_test.py` and find the line commented “Preserve the known
   mismatch”: the author checks assert the bug. A green check means its
   comparisons passed, not that the requirement is met (Module 5).

**Optional: a failing test.** On a new branch, edit `module3_fixture_test.py`
and change `self.assertEqual(upper[1]["workshops"], [])` to
`self.assertEqual(upper[1]["workshops"], lower[1]["workshops"])`, so the test
expects the requirement. Open a pull request and watch the check turn red. Read
the failing line in its log. Don't merge it: a failing test documents the bug;
the fix is the engineers' job.

When you've done all six, merge your README pull request yourself, using **Merge
pull request** on the **Conversation** tab.

## Run your own QA pass

A QA pass is a short, planned session where you use a change as a user would and
compare what happens with what should happen.

**Plan first, in writing, before you run anything.** Post the plan as a comment
on the pull request, or date it, so anyone can see it came before the results.

1. **Start from the change.** Read the issue and the pull request. List what
   should now work and what must still work (behavior the change could break).
2. **Pick risky cases.** Concentrate where the change touched the code or rules:
   - **Boundaries:** the edges of a rule, such as zero, one, the maximum, the
     first and last day.
   - **Empty and invalid input:** nothing entered, spaces only, wrong type, very
     long text, special characters.
   - **Permissions:** a user who should and one who shouldn't be able to do it.
   - **Before and after:** the same input on the old and new version.
   - **Unavailable parts:** what the user sees when a service or data is
     missing.
3. **Write the expected result for each case**, with where it comes from (the
   requirement, the issue, an earlier observation). If you don't know what
   should happen, that's a question for the team, not a pass or fail.
4. **Run it** on a test setup, in an investigation session. Record the version
   and environment, and the actual result for each case.
5. **Report** what passed, what didn't, what you didn't cover, and file an issue
   for each problem.

For more on choosing cases, see the build track's
[Module 1 — Testing and QA](../course/01-testing-and-qa.md).

**A worked QA note (fictional).** Suppose your practice repository had a pull
request “#3 Make workshop search ignore capitals”.

> **QA plan for #3, posted 12 May 10:05 before running.** Version: branch
> `search-ignore-case`, local fixture, ready mode. Source of expectations: the
> requirement in the README.
>
> | Case                      | Expected                         | Why                     |
> | ------------------------- | -------------------------------- | ----------------------- |
> | `WATER`                   | watercolour basics               | the fix                 |
> | `water`                   | watercolour basics               | must still work         |
> | `Wood`                    | wood carving                     | mixed capitals          |
> | empty query               | both workshops                   | requirement             |
> | `zzzz`                    | empty list, status 200           | no match isn't an error |
> | unavailable mode, `water` | status 503 error, not empty list | requirement             |
> | `" water "` (spaces)      | unknown: requirement doesn't say | question for team       |
>
> **Results, 12 May 10:40.** Six of seven cases behaved as expected. `" water "`
> returned nothing; I've asked on the pull request whether surrounding spaces
> should be ignored. Not covered: the browser screen (the fixture has none) and
> any version other than this branch.

## For risk and control reviewers

Controls on a change show up in specific places on GitHub. Some settings are
visible only to admins; if you can't see one, ask an admin for a screenshot or
export, and record that you saw it second-hand.

| Control                         | What to check                                                                                           | Where to look on GitHub                                                                                                                                   |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Branch protection               | Is the main branch protected: no direct pushes, required reviews and checks before merging?             | **Settings** → **Branches** or **Rules** (admins). Others: the merge box on a pull request says “Review required” or “Merging is blocked”.                |
| Required reviews                | How many approvals are required, and did the pull request have them when it merged?                     | The rule settings; the pull request's **Conversation** timeline and the reviewers list.                                                                   |
| CODEOWNERS                      | Do named owners have to review changes to sensitive files, and did they?                                | A `CODEOWNERS` file in the root, `.github/` or `docs/`. The pull request shows “Review required from code owners” and marks owners in the reviewers list. |
| Who approved which commit       | Was the approval on the commit that merged?                                                             | The **Conversation** timeline shows each approval among the commits; a review's “View reviewed changes” link shows the commit it covered.                 |
| Pushes after approval           | Were commits added after the last approval, and was the approval dismissed or renewed?                  | Commits listed below the approval in the timeline; a “dismissed” review event; the **Commits** tab with times.                                            |
| Segregation of duties           | Are the author, the approver, the person who merged and the person who deployed different people?       | The pull request header and timeline (“merged commit … into main” by whom); **Deployments** or **Environments**, and the Actions run's “triggered by”.    |
| Emergency changes               | Was a change merged while required reviews or checks were missing, and was it reviewed afterwards?      | Labels such as `hotfix`; the merge box state; for admins, the rule bypass history (**Rules** → **Insights**) and the audit log. Ask for the procedure.    |
| Ticket → pull request → release | Can you follow one change from its approved ticket to the pull request, the release and the deployment? | The ticket key in the pull request title or description; **Releases** notes listing pull requests; **Deployments** showing which commit went where.       |

**Independence.** If you sign off on the controls for a system, don't author
pull requests on that system and don't let your QA become the team's release
evidence, unless your manager and the team agree. Prefer issues and comments on
the system you review, and practise authoring pull requests in your practice
repository.

## Agent mistakes to watch for

When you ask an agent to summarize a repository or a pull request for you:

- **Reading the description, not the change.** Summarizing what a pull request
  says it does without checking the files.
- **Missing the review.** Ignoring comments, requested changes and pushes after
  approval.
- **“All checks pass.”** Reporting green checks from an earlier commit, or
  missing skipped ones.
- **Confusing merged with released.** Saying users have a change because it's
  merged (Module 6).
- **Inventing the who.** Guessing who approved something or why, instead of
  quoting the record.

## Checks without AI

| Outcome | Check without AI                                                                                                                                |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| U7.1    | For one issue, say its state, who owns it and where the work is, from the page alone.                                                           |
| U7.2    | For one merged pull request, say who approved it, on which commit, whether anything was pushed after, and one thing the review changed.         |
| U7.3    | For one pull request, list its checks and say which commit they ran on and what one of them doesn't cover.                                      |
| U7.4    | Write a question about a real change that names what you checked and asks about one gap.                                                        |
| U7.5    | Write a bug report for a real or practice problem that an engineer could act on without coming back to you.                                     |
| U7.6    | Before running anything, write the QA plan for one change: what should work, what must still work, and three risky cases with expected results. |

## Capstone: follow real work alongside engineers

This is where the track lands. Open a repository where a team is actively
working, one you're allowed to read, and show that you can understand what's
happening and work with the engineers on it.

Over several weeks of ordinary work:

1. **Get oriented.** Explain what the software does, its main parts and what the
   team is working on now, using the README, open issues, recent pull requests
   and the latest release.
2. **Follow one change from request to release.** Pick a change that matters to
   you. Trace it from its issue to its pull request, review and checks, merge,
   and whether it has reached users yet.
3. **Ask the review questions.** Use the [review questions](review-questions.md)
   on that change. Write down which you could answer from the records and which
   you had to ask about.
4. **Ask an engineer one good question** about one gap. Record the answer, if
   there is one yet, and what it changed in your account.
5. **Run a QA pass** on that change (U7.6) and post your results where the
   engineers will see them.
6. **Contribute one thing** through the team's process (U7.5): a comment, an
   issue, a docs fix or a small pull request.
7. **Update your account** when something new lands, with a date.

### What counts as done

| Step               | Outcome          | Minimum evidence                                                                                                  |
| ------------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| 1 Oriented         | U6.1, U2.2       | A dated account of purpose, main parts and current work, with links.                                              |
| 2 Follow a change  | U7.1, U7.2, U7.3 | Links to the issue, pull request and checks; who approved on which commit; pushes after approval; release status. |
| 3 Review questions | Review questions | Each question marked answered from the records (with link) or asked.                                              |
| 4 Question         | U7.4             | A link to the posted question, and the response if there is one yet.                                              |
| 5 QA pass          | U7.6             | The plan, posted or dated before the run; results; a link to the posted report.                                   |
| 6 Contribution     | U7.5             | A link to the posted comment, issue or pull request, and the response if there is one yet.                        |
| 7 Update           | U6.3             | A dated update saying which conclusion changed and why.                                                           |
| Explain one change | U7.2, U7.3       | With the AI closed, walk the teaching agent through one pull request's approvals, checks and release status.      |

Posted items are linked. A draft you haven't posted counts as partial for its
step. If your role doesn't allow posting on the team's repository, say so; the
step stays partial and your practice repository work stands as practice.

Bring back the dated account, the links, your questions and the answers you got.
The evidence is your explanation and your questions, not the team's work.

## For the teaching agent

- Use a repository the learner is allowed to read, ideally one their own team
  works on. A busy public open-source project works for practice in reading
  issues, pull requests and checks. Practice in commenting, filing issues and
  opening pull requests belongs in the learner's own practice repository, never
  on other people's projects.
- Never post, comment, push or merge on a team's repository yourself. Help the
  learner prepare one well-formed question per change, in their own words; don't
  have them relay your questions.
- Credit what the learner reads, asks and decides, not the team's work. A good
  question that turns up a gap is strong evidence; a confident summary copied
  from an agent is weak evidence.
- For risk and control reviewers, weight U7.2, U7.3, the controls table and the
  [review questions](review-questions.md): who approved, on which commit, with
  what evidence. Check the independence point above with them.
- For U7.5 and U7.6, credit the learner's plan, expectations and judgment. An
  investigation session can start the app or draft the pull request; the learner
  decides what to test and what to say, and posts it.
- Review the capstone with the table above. Record each step as applied,
  explained or not assessed. An engineer's reply you can't see is reported, not
  inspected. Record people by role, not name, and keep links rather than
  confidential excerpts in `.learning/`.

[Track guide](index.md) · [Module 0](../course/00-project-and-git.md) ·
[Review questions](review-questions.md)
