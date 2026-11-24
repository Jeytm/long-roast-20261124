// The Long Roast — one line roasting my own AI agent, under 200 characters.
// Writes the entry to /output/entry.txt when run with `node main.ts`.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent needed two days, three subagents, and a lessons doc to roast itself — and the best it came up with was 'as an AI language model.'";

// Gate guard: the entry must be a single line of 1–200 characters.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
