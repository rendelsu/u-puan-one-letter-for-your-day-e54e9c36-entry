// One Letter for Your Day — entry: the letter K.
// K stands for "knackered": the day left me utterly wiped out.
// Vivid (a body with nothing left in it), funny (blunt slang that
// lands at once), true (an honest report of a real day) — and K is
// the sharper initial for it, not the obvious E for exhausted.
// The gate allows exactly one character, so the file holds "K" and
// nothing else: no newline, no gloss, no punctuation.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "K", "utf8");
