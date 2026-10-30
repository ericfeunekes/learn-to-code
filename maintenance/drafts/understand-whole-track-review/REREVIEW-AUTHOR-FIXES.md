# Independent recheck of author fixes

Status: **R1 and R2 closed; final integrated review pending**. The original
review and historical failures remain recorded in `REVIEW.md`. No module source
was edited by the reviewer. No push, public publication, deployment or main
merge occurred.

## Frozen scope

Review source tree: `53df1bddb6d9b81a4d74983b994d1ed824855b92` on
`course-understand-whole-track-review`, `/tmp/learn-to-code-understand-review`.
It brings the two author corrections into the prior isolated review branch:

| Author correction                                                        | Source commit                            | Accepted finding         |
| ------------------------------------------------------------------------ | ---------------------------------------- | ------------------------ |
| Module 3 concurrent fixture, diagnostic IDs/logs and shutdown regression | 9facaba99ad5cea407958744fb11352c0e9bf181 | R1, Module 3 portion     |
| Module 6 concurrent fixture/runtime test and capstone source trace       | 942dba6b2e622e1fc8ff3101d909f24e5ed31415 | R1, Module 6 portion; R2 |

The same independent pedagogy, practical/runtime, and whole-contract
perspectives were resumed with the original findings and accepted scope. This
checks remedies and material regressions; it adds no new curriculum or proof
requirements. Shared I1–I4 are outside these author fixes and remain pending
integration.

## R1 — concurrent local fixtures: closed

Both fixtures now use `ThreadingHTTPServer`. Module 3 allocates unique request
IDs under a lock, serializes structured log writes, and uses daemon handler
threads so an idle socket does not hold up the owned process's exit.

The lead independently ran these actual loopback tests after authorized socket
escalation:

- `python3 -B maintenance/drafts/understand-module-3/fixture/module3_fixture_test.py -v`:
  **4 passed**, including a silent connection and partial HTTP request kept open
  during identity/concurrent requests and SIGINT shutdown. The test checks five
  distinct response IDs against five structured request log events and verifies
  that the former port refuses a connection after exit. The three earlier
  readiness/search/unavailable/mutation boundary tests also remain green.
- `python3 -B tests/test_track2_module6_runtime.py -v`: **1 passed**, completing
  `/version` and owned shutdown while an idle socket remains open.

The resumed practical reviewer also ran a separate probe against each fixture:
both idle and incomplete HTTP connections stayed open while eight concurrent
identity requests completed at HTTP 200. Both owned processes exited 0 on
SIGINT, and their former ports refused new connections. Module 3 returned ten
unique response IDs matching ten parseable request log events, with `stopped`
last. Normal lowercase/uppercase queries retained the deliberate mismatch in
both fixtures. No material runtime regression was found.

These tests exercise the original failure seam. Their green result does not
certify the intentionally defective case-insensitive search behavior or learner
mastery. The deliberate search mismatch is retained.

## R2 — capstone tracing evidence: closed

[H4a](../../../docs/understand/module6-harbor-log-lab.md#h4a-trace-one-source-change)
now supplies a small `b830`→`c930` hunk tied to PR #36. It asks the learner to
choose an input, follow request → query → selected notes → response, predict
both revisions, explain a changed operation and unchanged connection, and choose
a contrasting case. Its after excerpt agrees with the downloadable source.

The
[capstone](../../../docs/understand/06-read-evolving-project.md#independent-application-a-project-readout-plus-qa)
now asks for that trace and predictions in returned evidence. Teacher guidance
explicitly leaves source-change tracing unassessed for a history summary alone.
It preserves partial credit and short exploration rather than turning every
session into the full capstone. This is the smallest relevant extension of the
original task; it does not require implementation.

Before consulting the revised worked teacher reference, independent reviewers
reasoned through changed inputs. Examples: `Spill` selects N1 before but none
after because only stored text is lowercased; `  gate  ` selects none before but
N1 after because query whitespace is removed. The same response constructor
returns the selected notes and their count. These are **reviewer source-based
predictions**, not executions of the absent before-version or historical
production observations. The lead independently considered uppercase `GATE`: it
remains unmatched in both revisions, leaving H2's case-insensitive promise unmet
despite improvement for padded lowercase queries.

This task supports observable application of the method beyond copying PR
status, a numerical-limit example, or a supplied answer. It can discriminate a
learner's explanation from a polished agent summary. It establishes the
availability and coherence of a transfer assessment; no actual learner or
unfamiliar real-repository transfer has been observed. A teacher still needs the
learner's chosen trace, reasoning and follow-up to credit the capability.

## Remaining boundary

This is not final whole-course approval. The integration owner must still supply
the exact combined candidate for shared Module 0/track entry, instruction
routing, navigation, fixture delivery, export inventory and the shared mobile
renderer exception (I1–I4). The existing review perspectives should recheck
those accepted obligations and material regressions against that candidate.

Website/browser checks were not repeated for this local author-fix checkpoint:
shared delivery is still being changed by the integrator. Local fixture proof
and curriculum assessment are reported separately. No live MCP, React app,
shared staging, production, private workplace source or human learner outcome is
claimed. No access action remains denied, pending or uncertain.

## Final combined-candidate disposition

The exact combined candidate `5820c3d9f66a538fcca667d645ffd359fe916873` passed
independent whole-path review. R1, R2 and I1–I4 are closed. See
[the final review](FINAL-REVIEW.md) for immutable scope, independent checks,
learning simulations and remaining validation limits. This preserves the
historical findings above; it grants no publication authorization or claim of
real learner success.
