---
title: Review questions for a change
description:
  Questions product managers and risk and control reviewers ask about a change,
  such as what changed, who approved it, what evidence there is and what could
  go wrong.
slug: /understand-code/review-questions
---

# Review questions for a change

Use these when you look at a pull request, a release or any change a team (or an
agent) has made. You don't need to read every line of code to ask them. Most
answers are in the issue, the pull request, its checks and the release notes.
Where they aren't, the gap is itself a finding: ask the engineer, politely and
specifically.

They're for product managers who need to follow the work, and for risk and
control reviewers who need evidence that a change was made properly.

## What changed, and why?

- What does the change say it does, in plain language? Which issue or request
  asked for it?
- Which files and parts of the software did it touch? Does that match what it
  says it does, or did it change more?
- Did it change tests, settings, permissions, data or anything that handles
  personal information? Those deserve a closer look.

## Who made it, and who approved it?

- Who wrote the change: a person, an agent, or a person directing an agent?
- Who reviewed and approved it, and were they someone other than the author?
- Did the approval happen before the merge? Were any required reviews or checks
  skipped or overridden?

## What evidence is there?

- Which automated checks ran, and did they pass on the final version, not an
  earlier one?
- Was a test added or changed for this behavior? Would it fail if the change
  were wrong? A test that was weakened or deleted to make checks pass is a red
  flag.
- Did anyone try the change as a user would, and is that recorded?

## Has it reached users?

- Is it merged, released, or actually running where users are? Merged isn't the
  same as released.
- Which version or release includes it, and when did that go live?
- Is it switched on for everyone, or behind a setting or for some users only?

## What could go wrong?

- What happens if it fails? Who would notice, and how?
- Can it be undone, and does undoing it also undo any changes to saved data?
- Could it expose data or access to people who shouldn't have it? Did it add a
  new package, service or secret?

## Asking an engineer

Engineers are usually happy to answer a question that shows you've done your
part. A useful question names the change, says what you already checked and asks
about one specific gap. For example: "On the export fix, I can see the new test
for empty reports, but I couldn't tell whether anyone tried a report with more
than a thousand rows. Was that checked?"

Record the answer, and update your account of the change. A question that turns
up a real gap is good evidence of learning, whatever the answer.

[Track guide](index.md) · [Module 5](05-evidence-of-correctness.md) ·
[Module 6](06-read-evolving-project.md)
