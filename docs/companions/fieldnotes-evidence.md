---
title: Fieldnotes repository evidence
description:
  Fictional repository history for practising feature status, delivery pace and
  priority interpretation.
slug: /companions/fieldnotes-evidence
---

# Fieldnotes repository evidence

This is an invented training snapshot, not a real company or live repository.
All names, IDs, dates, counts and excerpts below are fictional. They are the
complete evidence for this exercise; do not search for the repo. Refer to each
section's ID as you would a source link in a real repository.

Use it with [Read an Active Repository](read-active-repository.md). Try one
question before reading the worked interpretation: **What could a pilot user do
by the end of October 25, and what appears to be next?**

Scope: the `fieldnotes-web` repository, default branch `main`, October 12–25,
2026 inclusive, UTC. Snapshot: October 26, 2026 at 09:00 UTC. Issues, PRs,
releases and deployment records listed below are complete for those dates in
this fictional repo. Work in other repos and the private planning board are
unavailable. The two comparison windows are October 12–18 and October 19–25.

## E1 Product and files

`README.md`, last updated September 29: “Fieldnotes helps site coordinators
record inspection notes and search them later. Pilot coordinators can use saved
views to revisit frequent searches.”

At the snapshot, `docs/product.md`, updated October 20, describes note capture
and search as current pilot features. Its saved-views section says “coming in
1.5; rollout separately confirmed.” It points to the release and deployment
records for availability.

The tree on `main` contains `src/notes/` (note entry), `src/search/` (search and
saved views), `tests/` (automated checks), `docs/` (product and design notes),
and `.github/workflows/` (build and deployment definitions). An external
identity service handles sign-in; its repo is outside this snapshot. Source
files can explain behavior on `main`; they do not identify the version running
for users.

## E2 Issues and a milestone

- **Issue #21 — Saved views.** Opened September 28. Label: `priority-high`.
  Closed October 22 by PR #44. Acceptance text describes naming and reopening a
  saved search. The PR says deployment and pilot enablement are separate steps.
- **Issue #25 — CSV export.** Opened October 5. Label: `priority-high`, last set
  October 5. Still open. October 21 comment: “Blocked on privacy review; do not
  expose free-text notes in downloads until approved.” Linked PR #47.
- **Issue #28 — Duplicate notes on retry.** Opened October 13. Marked urgent in
  a maintainer comment. Closed October 16 through PR #41.
- **Issue #30 — Offline capture.** Opened October 24 after a pilot suggestion.
  Label: `idea`. No approved scope, assigned milestone or linked PR.
- **Milestone — Pilot improvements.** Includes #21, #25 and #28. A due date of
  October 23 was set October 5. It remains open at the snapshot. There is no
  effort estimate or complete list of future pilot work.

Issue closure shows how work was tracked, not that every feature reached users.

## E3 Direction and discussion

`docs/roadmap.md`, updated October 5: “October focus: saved views and export.
Target pilot release October 23.” It links to a private planning board you
cannot access. Do not assume the board is empty or agrees with the old file.

**Discussion #8**, October 14, maintainer decision: “Stop duplicate notes before
expanding pilot features. After the fix, finish saved views. Hold export pending
privacy review.” No date is promised for clearing that dependency. An October 24
reply from the same maintainer says the decision still stands.

**Discussion #9**, October 24, pilot suggestion: “Offline capture would help
when site connectivity is poor.” Another participant likes the idea; there is no
maintainer commitment. It links to issue #30.

## E4 Pull requests and the work timeline

| PR                            | Opened     | State at snapshot                          | Context and evidence                                                                                              |
| ----------------------------- | ---------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| #41 Stop duplicate note saves | October 14 | Merged October 16 to `main`, commit `a410` | Links #28; acceptance check records one note after a repeated save.                                               |
| #42 Refresh dependencies      | October 17 | Merged October 17 to `main`, commit `a420` | Automated dependency update; no new product feature claimed.                                                      |
| #44 Saved views               | October 8  | Merged October 22 to `main`, commit `b440` | Links #21. Checks pass. Review says pilot enablement follows deployment. Earlier work start is not recorded.      |
| #46 Improve search hints      | October 20 | Closed October 23, unmerged                | Author closed it after review chose a different design. No delivered feature.                                     |
| #47 CSV export                | October 19 | Draft, open                                | Links #25. October 21 update says blocked on privacy review. Checks pass for the prototype; no approval or merge. |

PR opening is a visible event, not proof of when design or implementation began.
Merged and closed are deliberately separate in this table.

## E5 Releases, deployments and observed use

- **Release 1.4**, published October 17, tag points to `a420`. Notes list the
  duplicate-save fix and dependency refresh. A production deployment record
  reports success for `a420` on October 18 at 10:00 UTC. A pilot acceptance note
  later that day records a successful repeated-save check with one note created.
- **Release 1.5**, published October 23, tag points to `b440`. Notes list saved
  views and say “pilot enablement follows production rollout.” A staging
  deployment of `b440` succeeded October 23; staging is the team's test
  environment. A production attempt failed October 24 before activation. The
  production record says **1.4 / `a420` remains active**. No later production
  attempt or pilot enablement is in the snapshot.
- There is no export release or deployment. The open draft remains outside
  `main`.

## E6 Activity totals

The fictional history view reports 12 commits during October 12–18 and 36 during
October 19–25. The later window includes 24 bot checkpoints in the export draft
and generated-file updates. PR #44 combines its work into one merge checkpoint.
These counts mix branches and work types; they do not count delivered features,
effort or useful outcomes. No employee comparisons are available or needed.

## E7 A plausible but flawed AI summary

> Saved views and CSV export have shipped, because the saved-views issue is
> closed and export checks are green. The team became three times as productive
> this week. Export will be ready next week because it is high priority, and
> offline capture is now on the roadmap. The milestone is nearly complete, so
> the pilot expansion is on schedule.

Choose two claims to challenge. Cite the relevant section and explain the
specific gap. Then write a short brief a colleague could use to decide whether
to announce saved views to the pilot. Include a useful question for the
maintainer. You need not audit code or settle every uncertainty.

## Worked interpretation

Compare this only after trying a claim yourself. Other careful wording is valid.

Fieldnotes supports note capture and search for site coordinators (E1). During
October 12–18, the duplicate-save repair merged, was released, reached
production and had a recorded pilot check (E4–E5). During October 19–25, saved
views merged and reached a release and staging, but the failed production
attempt left 1.4 active. Pilot availability of saved views is therefore not
established; the README's claim conflicts with newer rollout evidence (E1, E5).

Export is an open draft blocked on privacy review, despite passing prototype
checks and an old high-priority label (E2, E4). The current visible decision
prioritises the repair and saved views, holding export; it does not promise next
week. Offline capture remains a suggestion (E3). The inaccessible board may
contain more context, so this is an account of visible direction, not the
organisation's complete plan.

The first window contains a confirmed production repair; the second contains
feature work waiting on rollout and export waiting on review. Those movements
and constraints describe observed pace. The commit increase cannot establish a
threefold productivity gain (E6). The passed milestone date and unresolved work
contradict a confident “on schedule” claim; there is no basis for a percentage
complete or a forecast (E2–E5).

A useful next question is: “What must happen before saved views is available to
the pilot, and where can we confirm the active version and enablement?” A second
is: “Is the October 14 priority decision still the complete current plan,
including the private board?” A maintainer's answer would be new evidence, not
something this snapshot already proves.

## Change one assumption

Suppose a new production record confirms `b440` active on October 26 but the
rollout setting keeps saved views disabled for pilot users. Write a new current
update as of that record, preserving the historical October 25 brief and
comparison. What changes, and what stays unknown? Deployment is now supported;
saved views is known to be unavailable to the pilot because it is disabled for
those users. Explain that distinction yourself and say which evidence would
settle the colleague's announcement decision.
