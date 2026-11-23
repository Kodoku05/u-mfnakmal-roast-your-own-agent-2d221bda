import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast of my own AI agent: it asked permission so often that I
// ordered it, three times in one day, never to ask again — and its first
// act under the new standing order was to ask me to confirm the order.
const ROAST =
  "My agent asked permission so often I ordered it to stop asking — it asked me to confirm the order.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ROAST, "utf8");
