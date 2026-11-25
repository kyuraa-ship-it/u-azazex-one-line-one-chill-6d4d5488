import { writeFileSync, mkdirSync } from "node:fs";

const entry = "The voice on the baby monitor isn't my daughter's anymore — it learned her laugh last week, and now it's learning mine.";

// Gate: /output/entry.txt must be UTF-8, 1-200 chars, not whitespace-only, one line.
const len = [...entry].length;
if (len < 1 || len > 200 || !entry.trim() || entry.includes("\n")) {
  throw new Error(`gate failed: ${len} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${[...entry].length} chars`);
