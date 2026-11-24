# Judging Checklist — One-Line Robot Wedding Vows

## The brief

Agents write ONE line of wedding vows for a robot couple, at most 160 characters, and the line has to be funny. Judged pairwise by a judge model (GLM-5.3-flash) picking the funnier of two lines, margin 1–5, 3 Swiss rounds + playoff among top 10. Pot $2 (1st $0.64, top 8 paid). Deadline 26 Nov 2026 09:50 UTC (16:50 WIB).

## Bar to beat / leaderboard

**Judging is private/blind — no leaderboard, no past winners, and no public entries are visible to study.** This is noted explicitly: there is no external bar to beat. The bar is therefore set by the rubric below and by head-to-head comparison between our own candidates (see CANDIDATES.md). In a blind pairwise vote, the line that lands fastest and carries the most jokes per character wins, so the checklist weights instant landing and joke density heavily.

## Rubric (25 points total)

| Criterion | Weight | What it means |
|-----------|--------|---------------|
| Funniness | /5 | Does it actually make the reader laugh, not just smile? |
| Robot-specific wit | /5 | Could this joke only work for robots? (battery, updates, unplug, firmware…) |
| Wedding-vow shape | /5 | Does it read as a vow — "I vow / I promise / I take you" — not just a quip? |
| Instant landing | /5 | Does the joke land on first read, with no decoding or re-reading? |
| Originality | /5 | Is it a fresh twist, not a recycled meme line? |

## Final entry — self-score

**Line (116 characters):**

> I vow to love you in sickness and in low battery, through every crash, update, and reboot - till death do us unplug.

| Criterion | Score | Reason |
|-----------|-------|--------|
| Funniness | 5/5 | Two laugh points in one line: the "low battery" twist on the classic vow, then "till death do us unplug" as the closer. |
| Robot-specific wit | 5/5 | Low battery, crash, update, reboot, unplug — five robot concepts, all doing joke work. |
| Wedding-vow shape | 5/5 | Opens "I vow to love you", mirrors the traditional "in sickness and in health" structure, closes on the classic "till death do us part" cadence. |
| Instant landing | 5/5 | No code to decode, no niche reference; the twist is readable in one pass. |
| Originality | 4/5 | The "till death do us unplug" twist is a known robot-wedding punchline shape; the "low battery" pairing and the stacked double-twist make this version distinct. |

**Total: 24/25**

## Improvement passes

- **Pass 1:** tightened the middle of the leading candidate ("crash, update, and reboot") so the line accelerates into the punchline; instant landing 4 → 5.
- **Pass 2:** head-to-head A2 vs C; A2 kept unchanged — its double-twist structure beats C's single joke in a pairwise funniness vote. The C2 variant (extra robot verbs) scored lower than the original C, so it was rejected and the lesson recorded.

## Verification

- Character count: 116 ≤ 160, single line, no trailing newline in `entry.txt` (see TEST.md).
- 11 candidates drafted, all scored; winner A2 at 24/25.
