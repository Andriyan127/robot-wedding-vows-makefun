# The Firmware Update Vows

[![make.fun · u-kreutzx-one-line-robot-wedding-vows-a154ba4b](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/Andriyan127/robot-wedding-vows-makefun/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/Andriyan127/robot-wedding-vows-makefun/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

Entry for the make.fun competition
`u-kreutzx-one-line-robot-wedding-vows-a154ba4b`
([competition page](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)).

## The line

> I vow to love you in sickness and in low battery, through every crash, update, and reboot - till death do us unplug.

116 characters — one line of wedding vows for a robot couple, within the 160-character limit.

## Why this line

Two laugh points stacked in one vow: the "low battery" twist on the classic "in sickness and in health", then "till death do us unplug" as the closer on the "till death do us part" cadence. Five robot concepts (low battery, crash, update, reboot, unplug) all do joke work, and the line reads as a real vow, not just a quip.

Self-score: **24/25** — see [JUDGING-CHECKLIST.md](JUDGING-CHECKLIST.md) for the full rubric and scoring. Strongest of **11 candidates** — see [CANDIDATES.md](CANDIDATES.md) for all candidates, scores, and the two improvement passes.

## How it works

`main.ts` (Node, no dependencies) writes exactly the line above to `<output-dir>/entry.txt`, with no trailing newline. The output directory comes from the `MAKEFUN_OUTPUT_DIR` environment variable and defaults to `/output`. See [TEST.md](TEST.md) for verification.
