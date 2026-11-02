# Module 2 — Error handling and recovery

**Draft module.**

Learn to investigate a failure, decide what the app should tell someone, and
choose a safe next action. A useful response helps the person continue while
preserving enough information to investigate what went wrong.

## Starting point and scope

Use a small working behavior in your own app. You should be able to describe its
intended result and compare that expectation with what happened. The relevant
parts of [Testing and QA](01-testing-and-qa.md) can help; completing every
testing outcome or writing code unaided is not a prerequisite.

Implementation happens in a separate learner-owned repository and conversation.
If you need one, ask your agent to help create and open a GitHub repository for
your app, explaining the choices as you go. Choose its name, location and
visibility; confirm which local folder and remote belong to your project before
implementing. Course website setup and checks are separate from app work.

This module concerns decisions about failure and recovery. Use the app's current
UI, command, file or dependency; adding a backend is optional. Storage
guarantees, data validation and overlapping operations connect to later modules.
Detailed transaction design, retry frameworks and production monitoring are
beyond this first foundation.

## Learning objectives

### 2.1 Distinguish expected failures, unexpected failures and unknown outcomes

- Explain an expected failure as a situation the app anticipates and gives a
  deliberate response: for example, rejecting a missing required title. Explain
  an unexpected failure as a situation outside that anticipated handling, such
  as a programming defect. Expected does not mean harmless; unexpected does not
  mean unrecoverable.
- Separate the cause from what is known about the result. A connection failing
  while loading a list differs from losing the reply after requesting a new
  entry: in the second case, the entry might already exist. A timeout means a
  reply did not arrive in time; it does not by itself prove that nothing
  changed.
- For a concrete failure, state what is known, what is inferred and what remains
  uncertain. Choose information that could change the next action rather than
  deciding solely from an error's name.

### 2.2 Investigate using errors, logs and observed behavior

- Describe the intended action, expected result and observed result. Read the
  relevant error message and context: what operation failed, when, and in which
  part of the app. A log is a recorded event; a stack trace shows the chain of
  calls leading to an error, not necessarily its root cause.
- Direct AI to investigate a plausible explanation using relevant evidence and a
  small controlled check. Explain how the result supports or weakens the
  explanation. Distinguish an observation such as “the file was not found” from
  a hypothesis such as “we used the wrong folder.”
- Preserve useful diagnostic context while reducing a case to something safe to
  reproduce. Use disposable data and controlled failures; do not damage real
  records or depend on an actual service outage to practise.

### 2.3 Choose where and how to respond

- Identify a boundary where one part asks another to do something: a form calls
  save, an app reads a file, or a client requests a service. Decide which part
  has enough context to recover, report the failure, or pass it to its caller. A
  caller is the part that requested the work.
- Explain why catching an error only intercepts it. Returning an empty list or
  success after a failed load can hide the failure and mislead the next part.
  Choose a deliberate failure response, preserving the cause for diagnosis. An
  empty result and an unavailable result may need different behavior.
- Direct AI to keep a failure contained where possible, while making incomplete
  work visible. For example, let someone edit an unsaved draft after save fails;
  do not tell them it is saved. Identify who owns the next action so several
  layers do not independently repeat the same operation.

### 2.4 Give useful feedback and appropriate diagnostic information

- Choose a user-facing message that explains what is known about the result,
  what input or work has been preserved, and an available next action. Avoid
  promising “nothing was saved” or “try again safely” without evidence.
- Distinguish that message from developer diagnostics. Choose relevant context
  such as the operation, time, error cause and a reference connecting related
  events. Avoid exposing credentials, private input, internal paths or raw stack
  traces to users; private logs also need deliberate selection and access. See
  [OWASP's logging guidance](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html#data-to-exclude).
- Judge whether the person can notice the failure and act on the feedback in the
  actual interface. A command, an API client and a screen need appropriate
  feedback; a diagnostic log alone may not reach the person who needs it.

### 2.5 Choose recovery according to the cause and possible effects

- Compare correcting input, waiting, retrying, showing clearly marked older
  information, checking status, or stopping for investigation. State the
  condition that makes the chosen action useful. Repeating unchanged invalid
  input or a programming defect is unlikely to solve it.
- Before repeating an operation, ask whether it may already have taken effect
  and what repeating it could change. Explain idempotency as the intended effect
  being the same after repeated requests as after one. A repeated read often has
  no extra effect; creating another entry may make a duplicate. A disabled
  button alone does not prove an interrupted request is safe to repeat. See
  [HTTP's account of idempotent methods](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.2)
  when the app uses HTTP; a method name alone does not verify the app's
  behavior.
- If retrying is useful and safe, choose a limit and a stopping response. For
  automatic retries, allow time between attempts rather than retrying in a tight
  loop. For an uncertain write, seek a reliable result/status or an established
  duplicate-prevention guarantee; if neither is available, preserve work,
  explain uncertainty and stop instead of guessing.
- Trace an interrupted operation: which steps are confirmed, what may have
  changed, and how the app will resume, repair or leave a clear unresolved
  state. Cancellation or closing a screen does not prove remote work was undone.
  Undoing a code change also does not necessarily undo data already written.

### 2.6 Direct and judge a small failure-handling change

- Choose a useful failure case in your app and state the intended response
  before implementation: what the person sees, what changes or is preserved, and
  which recovery actions are allowed. Explain why this choice fits the known
  cause and effects, including any uncertainty.
- Direct AI to implement and check that behavior. Inspect evidence at the
  relevant boundary: a simulated failed save can check local feedback, but does
  not establish what a real service did after a lost reply. Check that ordinary
  success still works and explain what the evidence leaves open.
- Review your own direction and the result. Identify a decision you supplied,
  adopted with reasons, or changed after evidence. AI-written handling and
  passing tests can establish software behavior without establishing your
  understanding or judgment.

## Short learning opportunities and optional examples

Choose one distinction that helps with the learner's current question. Offer a
brief explanation or inspect an existing failure, invite a prediction or
decision if useful, then move into a small app task. If a term is unfamiliar,
explain it in the context of that action. Return to another outcome when it is
useful; these objectives are not a script for a single long lesson.

These cases are alternatives, not required exercises. Let the learner reason
before supplying the example response when that would help reveal their
thinking.

| Situation                                               | Decision to explore                                             | Possible response and its limit                                                                                               |
| ------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| A required title contains only spaces.                  | Would retrying unchanged help?                                  | Preserve the form and explain what needs changing; this does not investigate unexpected failures.                             |
| A list cannot load because a dependency is unavailable. | Should “no items” look the same as “could not load”?            | Show unavailable feedback and a bounded retry when safe; marked older data is an option only if it exists and remains useful. |
| A save reply is lost.                                   | Is the entry absent, present, or still unknown?                 | Keep the draft and check a reliable record/status before repeating; a local error message cannot prove the remote result.     |
| A file reader reports “not found.”                      | What evidence distinguishes the wrong path from a missing file? | Inspect the requested location and a disposable known file; catching the error does not fix either cause.                     |

For a fresh comparison, change a relevant assumption. A retry that was suitable
for reading a list may be unsuitable for creating an entry. Ask what changes in
the learner's reasoning, rather than asking them to repeat a definition. A
learner who only wants a plain explanation can return to application later.

## Independent application and returned evidence

Take one useful task into a separate implementation conversation in your own
repository. Carry the selected outcome, app context, desired behavior and
constraints. Decide how to request the change, assess the agent's suggestions
and judge the result. The teacher can help clarify a gap without supplying a
complete ideal implementation prompt that makes every decision for you.

Bring back the relevant chat link and code or commit, along with the observed
checks and results. If the teacher cannot open the chat or repository, paste or
export the relevant transcript turns, diff and results. Include enough to see
your request or decision, the agent's response, what happened and your
follow-up. Remove credentials and private details. A whole chat export or a new
execution is unnecessary when a smaller excerpt or existing result answers the
question.

Review three things separately: what the app evidence establishes, what your
explanation and decisions demonstrate, and how your direction affected the
agent's work. For example, choosing to preserve a draft and inspecting a failed
save can support application of that part of 2.4 and 2.6. It does not establish
that you can diagnose an unfamiliar failure or recover an uncertain remote
write. If AI supplied the whole approach and only passing checks are shown, the
software result may be supported while learner reasoning remains unobserved.

Keep private progress in the established learning record. Record the specific
outcome part encountered, explained/reasoned or applied, the evidence and AI
assistance, remaining uncertainty and a useful return point. A brief prediction
may show partial reasoning without application. Missing evidence is not proof of
inability; use a focused question or different case only when it resolves an
actual gap. Agree a small next step or stop at a useful partial result.

[Course overview](OVERVIEW.md) · [Practice and transcript review](PRACTICE.md)
