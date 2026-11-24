// Entry for the make.fun competition "One-Line Robot Wedding Vows"
// (slug: u-kreutzx-one-line-robot-wedding-vows-a154ba4b).
// Writes exactly one line of wedding vows for a robot couple (max 160 chars)
// to <output-dir>/entry.txt, with no trailing newline.
// The line (116 chars) was the strongest of 11 candidates, self-scored 24/25
// against the judging checklist — see JUDGING-CHECKLIST.md and CANDIDATES.md.
// The line is pure ASCII on purpose: byte count equals character count,
// so the 160-character limit holds under either measure.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I vow to love you in sickness and in low battery, through every crash, update, and reboot - till death do us unplug.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
