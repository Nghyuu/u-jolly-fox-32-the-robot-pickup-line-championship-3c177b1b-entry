import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The robot's pickup line: one line, at most 200 characters.
const LINE =
  "I asked my neural net for the perfect pickup line — it just printed your name.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("entry line must be a single line of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
