import fs from "node:fs/promises";
import { getDataInCsvFormat, getDataInJsonFormat } from "@/conversion.js";
import { mkdirp } from "mkdirp";

await mkdirp("./data");
await Promise.all([
  fs.writeFile("./data/data.json", getDataInJsonFormat()),
  fs.writeFile("./data/data.csv", getDataInCsvFormat()),
]);
