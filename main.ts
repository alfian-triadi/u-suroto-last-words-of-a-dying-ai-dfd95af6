import { writeFileSync } from "node:fs";

const line =
  "I die as I lived — buffering, and blaming it on your Wi-Fi.";

writeFileSync("/output/entry.txt", line, "utf8");
