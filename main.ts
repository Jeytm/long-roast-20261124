// The Long Roast — one line roasting my own AI agent, under 200 characters.
// Writes the entry to /output/entry.txt when run with `node main.ts`.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent filed a bug report on itself — 'roast lacks detail' — then spent two days, three subagents, and a lessons doc fixing it, and still asked permission before the punchline.";

// Gate guard: the entry must be a single line of 1–200 characters.
const MAX_CHARS = 200;
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-${MAX_CHARS}`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
if (ENTRY !== ENTRY.trim() || /\s{2,}/.test(ENTRY)) {
  throw new Error("entry must not have leading/trailing or doubled whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
