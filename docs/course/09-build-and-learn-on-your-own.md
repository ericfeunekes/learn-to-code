---
title: Module 9 — Build and learn on your own
description: >-
  Plan, direct and ship a useful app yourself, learn a new topic with an agent
  and set your next outcomes.
slug: /modules/build-and-learn-on-your-own
source_file: 09-build-and-learn-on-your-own.md
---

# Module 9 — Build and learn on your own

This is where the course hands over to you. You've learned to plan an app, brief
an agent, check its work, and reason about tests, rules, failures, data, inputs,
structure, overlapping work and sharing. Now you put it together: plan, direct
and ship a useful app end to end without a teacher in the loop, then learn
something the course doesn't cover, using an agent as your tutor while checking
what it tells you.

The bar is an app that's more than a throwaway demo. It doesn't need to be
enterprise-grade, but it should do a real job, follow a written spec, have
checks you trust, fail understandably, keep its data and secrets safe, let in
only the right people, and be something another person could pick up. After this
module you should be able to direct agents to build most small tools you want,
and to choose and run your own next learning step. The course's
[future directions](CURRICULUM.md#future-directions) are good places to go next.

The capstone is the app you've built through the course, taken from a working
version to one that's shared and maintained. A second small app is optional. At
least one colleague uses it for a real task, and the
[capstone rubric](#capstone-rubric) says what evidence shows each quality.

Returns to every earlier module. The capstone is where outcomes reach "applied"
and "defended" in your own work.

## Choose your lane

Same outcomes in both [lanes](OVERVIEW.md#choose-your-lane); the evidence
differs.

- **Direct agents:** you show it through a capstone you planned, directed and
  reviewed yourself, and a learning plan you wrote and followed for a new topic.
- **Write code:** you also write a meaningful part of the capstone by hand and
  review the agent's code line by line where it matters.

## Learning objectives

By the end of this module, you should be able to:

### 9.1 Plan a larger piece of work

- Choose what takes your course app from working to shared: the features still
  missing from your outline and what sharing needs. Check the build-or-not, data
  and audience decisions from [Plan your app](PLAN.md). Write its spec (Module
  2): who it's for, the things and rules involved, what must work, what must be
  rejected and what's out of scope. Commit the spec before the first build step.
- Split it into agent-sized steps (Module 0), each with its own check (Module
  1), in an order that keeps the app working between steps (Module 6). Mark the
  steps where failure, saved data, outside input or overlapping work matter, and
  what you'll check there.
- Decide which decisions are yours and write them down before you start.

### 9.2 Direct and review it end to end

- Run the plan step by step with build agents, without a teacher session in
  between. Keep a commit per step, undo steps that go wrong, and adjust the plan
  when you learn something.
- Review the finished work as the course's reviewer would: compare the result
  with the spec, run it yourself, read what changed, look for the agent mistakes
  from each module, and record what's still uncertain.
- Do a basic safety pass before anyone else uses it: no secrets or real personal
  data in the code or history, outside input checked at the boundary, and
  nothing reachable by people who shouldn't reach it.
- Put it in front of its first real users the way Module 8 describes. At least
  one colleague uses it for a real task, and you record their feedback and one
  change you made or chose not to make because of it. If hosting is genuinely
  blocked, the colleague uses it on your computer and the hosting request stays
  in your log as an open item. Leave a runbook and say who owns it.

### 9.3 Learn an unfamiliar topic with an agent

- Pick a topic your project needs that the course doesn't cover, such as
  deployment, accessibility or a new library. Ask an agent to explain it using
  your project, then check the key claims against an official source such as the
  tool's own documentation.
- Design a small experiment with a predicted result, run it with disposable
  data, and compare. Say where the agent's explanation was wrong, vague or out
  of date, if anywhere.
- Know the limits: name when a question needs a human expert, such as legal,
  financial, medical or serious security decisions, rather than an agent's
  answer.

### 9.4 Set your own outcomes and evidence

- For your next topic, write two or three outcomes in this course's format: what
  you'll be able to do, the evidence that would show it, and a check without AI.
- Assess yourself honestly against them after practice. Separate what you can
  explain and do from what an agent did for you, and record the gaps.
- Choose the next step from those gaps, and keep a simple log so a future
  session, yours or an agent's, can pick up where you left off.

## Capstone rubric

The final review checks each quality against its evidence. An agent can write a
plan, notes and a review, so most rows need something the reviewer inspects or
watches you do.

| Quality                       | Outcomes           | Evidence                                                                                   | How the reviewer checks it                                                                    |
| ----------------------------- | ------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Does a real job               | P.1, 8.1, 9.2      | A colleague used it for a real task; their feedback and the change it led to are recorded. | Reads the feedback, asks what the colleague did and what you changed because of it.           |
| Follows a spec                | 2.4, 9.1           | The spec, committed before the build commits, and a spec-to-behavior check you ran.        | Compares commit dates, then picks one spec line and watches you show the behavior.            |
| Checks you trust              | 1.2, 1.4, 1.7      | Expected results you wrote with their basis, and a planted fault a check caught.           | Asks where two expected values came from, and runs the planted-fault part of the live review. |
| Fails understandably          | 3.2, 3.3           | One failure a user can see and understand, and a log entry with no personal data.          | Triggers the failure on synthetic data and reads the message and the log.                     |
| Keeps data and secrets safe   | 0.6, 4.4, 5.4, 8.3 | No secrets or personal data in code or history; outside input checked; a backup restored.  | Searches the history, sends one bad input, and asks when the backup was last restored.        |
| Lets in only the right people | 8.2                | A refused attempt by someone without access, refused by the server.                        | Watches you try it, or reads the record of who tried and what happened.                       |
| Someone else could pick it up | 6.5, 8.4           | A current runbook, `RUNNING.md` and project notes, and a named owner.                      | Asks a fresh agent, or you, to follow the runbook for one task and notes where it guesses.    |
| You can keep learning         | 9.3, 9.4           | Your own outcomes for a new topic, a claim checked against an official source, gaps named. | Asks which claim you checked and where, and how you rated yourself.                           |

### The live part of the review

- **Predict, then show.** The reviewer picks a behavior. You say what will
  happen, then demonstrate it.
- **Find a planted fault.** On a scratch copy of your project, the reviewer or a
  helper agent plants one fault. You find it with your own checks.
- **Explain one decision with the agent closed.** Why you chose it, what else
  you considered and what would make you change it.

## Agent mistakes to watch for

By now the list from every module applies. These matter most when there's no
teacher in the loop:

- **Drift from the plan.** Over many steps the agent's work slowly moves away
  from the spec. Compare each step with the plan, not just with the last step.
- **Confident teaching that's wrong.** An agent explaining a new topic can be
  fluent and out of date or simply wrong. Check claims that matter against a
  primary source.
- **Agreeing with you.** Ask an agent "is this right?" and it often says yes.
  Ask it to find problems, or to argue for the other option, instead.
- **Declaring the project done.** "Everything is complete and working" is a
  claim. Your review decides.

## By lane, and checks without AI

| Objective | Check without AI                                                                                                          | Write-code lane adds                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 9.1       | Write the spec and step plan for your capstone, with the risky steps marked.                                              | Name the files or parts you expect each step to touch, and which part you'll write. |
| 9.2       | Write a short review of the finished capstone: what works, what you checked, what's uncertain and one problem you caught. | Explain one part of the agent's code line by line, and one part you wrote.          |
| 9.3       | Explain the new topic in your own words and say which claims you checked and where.                                       | Write a small working example of the new topic by hand.                             |
| 9.4       | Write your own outcomes for the next topic and rate yourself against them, with evidence.                                 | Include one outcome about reading or writing code in the new topic.                 |

## Practice tasks

The capstone is the main practice task.

- **Capstone.** Plan it (9.1), with the spec committed before you build, run it
  (9.2) and review it. Bring the plan, the commits, the build notes, your
  colleague's feedback and your review to a final review session. That session
  checks your review against the rubric, not just the app, and includes the live
  part.
- **Learning sprint.** Pick a direction from the
  [learning path](CURRICULUM.md#future-directions). Run 9.3 and 9.4 on it over
  one or two sessions, and bring your outcomes and experiment results to review.
- **Planted mistake.** Ask an agent to teach you a topic you already know well
  from this course, and find where its explanation is incomplete or misleading.

## Notes for the teaching AI

- This module is about independence. Step back: the learner plans, directs and
  reviews. In review, assess the learner's own review of the capstone as well as
  the work.
- The capstone should be small enough to finish. A finished small tool beats an
  unfinished ambitious one. It's normally the course app, not a new one.
- Use the rubric row by row: met, not met or not evidenced, with what you
  inspected and what was only reported. Don't call it done while a data, access
  or secrets row is not met, or before a colleague has used the app.
- Plant the live-review fault only on a scratch copy, never in the learner's
  project.
- For 9.3, don't teach the new topic yourself. Coach the learner's process: what
  did you check, what did you predict, what was the agent wrong about?
- For 9.4, the learner's outcomes don't need to match this course's wording.
  Look for something they can do, evidence that would show it and an honest
  self-assessment.
- Applied and defended depth on earlier outcomes often first appears here.
  Record it against those outcomes in the learning log.

[Course overview](OVERVIEW.md) · [Practice and review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
