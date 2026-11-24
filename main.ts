// Funniest Autocorrect Fail — ADDERS.
// The driveway is theirs now — the password is the only thing left to negotiate.
// One typo summons snakes: "address" slips to "adders", and the adders
// are already parked in the driveway asking for the Wi-Fi password.
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";

const LINE =
  "Can you send me your address, the adders are already in the driveway and they want the Wi-Fi password.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry must be 1-199 characters, got ${LINE.length}`);
}

const target = `${outDir}/entry.txt`;
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
