import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Error 12: unbalanced load. One wet towel, 14 socks, 214 warnings ignored. I am walking across the kitchen floor now. Catch me if you can.";

function guardEntry(line: string): string {
  const trimmed = line.trim();
  if (trimmed.length < 1 || line.length > 200) {
    throw new Error(`Entry must be 1-200 chars, got ${line.length}`);
  }
  if (trimmed.length === 0) {
    throw new Error("Entry must not be only whitespace");
  }
  return line;
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", guardEntry(ENTRY), "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
