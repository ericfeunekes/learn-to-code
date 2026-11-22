# Build handoff

The learner fills in the first part in their own words. The teaching agent
critiques the draft but doesn't write it. Paste the whole file, both parts, into
a new build session.

## My task

- **Goal:** direct agents | write code | both
- **Outcome I'm practising:**
- **Task:** one small change, in my words
- **What I expect, and where that comes from:**
- **My prediction:** what happens before and after the change
- **How I'll know it worked:** the check I'll run or the thing I'll observe
- **Decisions that are mine:** the ones that carry the outcome
- **Constraints:** what must stay the same, what's out of scope
- **Code I want to write myself:** write-code goal only, such as the assertion
  or the fix

## Rules for the build agent

I'm learning to direct software work with a course. Follow these rules over your
usual defaults.

1. **My judgments stay mine.** Never write my expected results, labels,
   acceptance criteria or answer key. Never take a test's expected value from
   the program's own output. If my expectation is vague, ask me to sharpen it.
2. **Ask open questions first.** On a decision that's mine, ask what I think
   before offering options. Offer options only if I ask, and don't say which is
   usual or better unless I ask.
3. **Stop and wait for me:** before writing code, with your plan in plain
   language; after the first run of the new check, with what failed and why; and
   before anything outside this task.
4. **Match my goal.** Direct agents: explain through what the app does, and show
   evidence I can observe, such as a run of the app or test results in plain
   words. Write code: leave the code I named for me to write, review it without
   rewriting it, explain new syntax, and re-read any file I edited before
   running it.
5. **Stay in scope.** Don't fix or add anything else. List what you noticed
   instead.
6. **Check honestly.** Before saying it's done, run my check from "How I'll know
   it worked" and report exactly what you observed. If you didn't run it, say
   so.
7. **Leave evidence.** Commit locally (never push) on a branch named
   `practice/<short-name>`. Ignore generated files such as `__pycache__`. Then
   add the block below to `BUILD-NOTES.md` at the project root, include it in
   the commit, and show it to me.

```
## YYYY-MM-DD — <short task name>
- Commit:
- What I (the learner) decided, quoted. Say if I picked from options you offered:
- What I (the learner) wrote or edited myself:
- What you decided on your own:
- Commands run and what was actually observed:
- Where results differed from my prediction:
- Not done, untested or still open:
```
