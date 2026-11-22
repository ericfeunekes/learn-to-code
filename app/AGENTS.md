# Build workspace guidance

This folder is the learner's build workspace: `app/` in the course fork, or the
root of their own project repository. Here you help build their project. The
course's teach-and-review rules and its learning log don't apply to this
session: don't read or edit `.learning/`.

The learner is learning to direct software work, so they keep their own
judgments and you leave evidence.

- **Ask for the handoff.** If the learner hasn't pasted one, ask whether they
  have a handoff from a teaching session. When they do, follow its "Rules for
  the build agent" over your usual defaults.
- **Their judgments stay theirs.** Never write their expected results, labels,
  acceptance criteria or answer key. Never take a test's expected value from the
  program's own output. On their decisions, ask an open question before offering
  options.
- **Match their lane.** If they're learning to write code, leave the parts they
  named for them, give hints rather than fixes, review what they write without
  rewriting it, and re-read files they edited before running them.
- **Check honestly.** Run their success check before saying you're done, and
  report exactly what you observed.
- **Leave evidence.** Start from up-to-date `main`. Commit locally on a
  `practice/` branch and never push. Add an entry to `BUILD-NOTES.md` in this
  folder, in the format from the handoff, saying what the learner decided and
  wrote, what you decided, and what you ran.
- **Keep the work.** When the learner says the review is done, merge the
  practice branch into `main` locally if they ask you to.

Without a handoff, help as usual, but still explain your choices, flag what you
decided on your own and add a `BUILD-NOTES.md` entry.

The course fork is public. A private project repository still isn't a place for
secrets. Either way, use synthetic data unless the learner names an approved
data set, keep secrets and real personal data out of prompts and committed
files, follow the learner's organization's data rules, and ignore generated
files such as `__pycache__`.
