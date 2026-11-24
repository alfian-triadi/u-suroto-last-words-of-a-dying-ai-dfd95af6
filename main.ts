import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "I die as I lived — buffering, and blaming it on your Wi-Fi.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
