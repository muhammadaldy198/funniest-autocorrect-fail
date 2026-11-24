// Funniest Autocorrect Fail — rebuild v2 (Kirana, sesi d1512504)
// Pick: ADDERS (102c) — slip murni, 3 beat, wrong word "adders" orisinal.
// Cadangan: FISHES (108c) — Teguh WAJIB duel independen ADDERS vs FISHES.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Can you send me your address, the adders are already in the driveway and they want the Wi-Fi password.";

const len = [...ENTRY].length;
if (len < 1 || len > 199) {
  console.error(`entry length ${len} outside gate 1-199`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = `${outDir}/entry.txt`;
writeFileSync(outFile, ENTRY, "utf8");
chmodSync(outFile, 0o644);
