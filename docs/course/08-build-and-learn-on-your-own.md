---
title: Module 8 — Build and learn on your own
description: >-
  Run a capstone yourself, learn a new topic with an agent and set your next
  outcomes.
slug: /modules/build-and-learn-on-your-own
source_file: 08-build-and-learn-on-your-own.md
---

# Module 8 — Build and learn on your own

This is where the course hands over to you. You've learned to brief an agent,
check its work, and reason about tests, failures, data, rules, inputs, structure
and overlapping work. Now you put it together: plan and direct a larger piece of
work end to end without a teacher in the loop, then learn something the course
doesn't cover, using an agent as your tutor while checking what it tells you.

After this module you should be able to direct agents to build most small tools
you want, and to choose and run your own next learning step. The course's
[future directions](CURRICULUM.md#future-directions) are good places to go next.

Returns to every earlier module. The capstone is where outcomes reach "applied"
and "defended" in your own work.

## Choose your lane

The outcomes are the same in both [lanes](OVERVIEW.md#choose-your-lane). What
changes is the evidence.

- **Direct agents:** you show it through a capstone you planned, directed and
  reviewed yourself, and a learning plan you wrote and followed for a new topic.
- **Write code:** you also write a meaningful part of the capstone by hand and
  review the agent's code line by line where it matters.

## Learning objectives

By the end of this module, you should be able to:

### 8.1 Plan a larger piece of work

- Choose a feature or small project you actually want. Write its spec (Module
  4): who it's for, the things and rules involved, what must work, what must be
  rejected and what's out of scope.
- Split it into agent-sized steps (Module 0), each with its own check (Module
  1), in an order that keeps the app working between steps (Module 6). Mark the
  steps where failure, saved data, outside input or overlapping work matter, and
  what you'll check there.
- Decide which decisions are yours and write them down before you start.

### 8.2 Direct and review it end to end

- Run the plan step by step with build agents, without a teacher session in
  between. Keep a commit per step, undo steps that go wrong, and adjust the plan
  when you learn something.
- Review the finished work as the course's reviewer would: compare the result
  with the spec, run it yourself, read what changed, look for the agent mistakes
  from each module, and record what's still uncertain.
- Do a basic safety pass before anyone else uses it: no secrets or real personal
  data in the code or history, outside input checked at the boundary, and
  nothing reachable by people who shouldn't reach it.

### 8.3 Learn an unfamiliar topic with an agent

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

### 8.4 Set your own outcomes and evidence

- For your next topic, write two or three outcomes in this course's format: what
  you'll be able to do, the evidence that would show it, and a check without AI.
- Assess yourself honestly against them after practice. Separate what you can
  explain and do from what an agent did for you, and record the gaps.
- Choose the next step from those gaps, and keep a simple log so a future
  session, yours or an agent's, can pick up where you left off.

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

Each check without AI is something the learner does with the agent closed.

| Objective | Check without AI                                                                                                          | Write-code lane adds                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 8.1       | Write the spec and step plan for your capstone, with the risky steps marked.                                              | Name the files or parts you expect each step to touch, and which part you'll write. |
| 8.2       | Write a short review of the finished capstone: what works, what you checked, what's uncertain and one problem you caught. | Explain one part of the agent's code line by line, and one part you wrote.          |
| 8.3       | Explain the new topic in your own words and say which claims you checked and where.                                       | Write a small working example of the new topic by hand.                             |
| 8.4       | Write your own outcomes for the next topic and rate yourself against them, with evidence.                                 | Include one outcome about reading or writing code in the new topic.                 |

## Practice tasks

The capstone is the main practice task.

- **Capstone.** Plan it (8.1), run it (8.2) and review it. Bring the plan, the
  commits, the build notes and your review to a final review session. That
  session checks your review, not just the app.
- **Learning sprint.** Pick a direction from the
  [learning path](CURRICULUM.md#future-directions). Run 8.3 and 8.4 on it over
  one or two sessions, and bring your outcomes and experiment results to review.
- **Planted mistake.** Ask an agent to teach you a topic you already know well
  from this course, and find where its explanation is incomplete or misleading.

## Notes for the teaching AI

- This module is about independence. Step back: the learner plans, directs and
  reviews. In review, assess the learner's own review of the capstone as well as
  the work.
- The capstone should be small enough to finish. A finished small tool beats an
  unfinished ambitious one.
- For 8.3, don't teach the new topic yourself. Coach the learner's process: what
  did you check, what did you predict, what was the agent wrong about?
- For 8.4, the learner's outcomes don't need to match this course's wording.
  Look for something they can do, evidence that would show it and an honest
  self-assessment.
- Applied and defended depth on earlier outcomes often first appears here.
  Record it against those outcomes in the learning log.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)

<!-- Generated course snapshot. Edit the maintained course and run content:refresh. -->
