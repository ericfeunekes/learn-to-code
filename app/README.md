# Your project workspace

Build a personal practice project with synthetic data here. A work app, or
anything private, belongs in its own private repository: copy `AGENTS.md` from
this folder into it (and as `CLAUDE.md` for Claude Code). Either way, record
where it lives in `.learning/PROJECT.md` so review sessions can find it.

Build in a separate session from your teaching sessions:

1. Finish a teaching session at the repository root with a handoff you drafted
   from `templates/learning/HANDOFF.md`.
2. Open a new session in this `app/` folder, or in your project folder, with
   your build agent. In Claude Code, run `claude` from this folder. In Codex,
   open this folder as the workspace.
3. Paste in the whole handoff and build.
4. The build agent commits on a `practice/` branch and adds an entry to
   `BUILD-NOTES.md`. Take that back to a review session at the repository root.

This folder is part of your public fork. Never put secrets, real personal data
or work data in committed files. Learning records stay in the ignored
`.learning/` folder at the repository root. Ignore rules don't remove files Git
already tracks.
