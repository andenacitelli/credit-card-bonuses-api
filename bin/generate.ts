import fs from "node:fs/promises";
import {
  getDataInCsvFormat,
  getDataInJsonFormat,
  getDataInYamlFormat,
} from "@/conversion.js";
import { mkdirp } from "mkdirp";
import path from "node:path";

const ROOT_FOLDER = "./exports";

await mkdirp(ROOT_FOLDER);
await Promise.all([
  fs.writeFile(path.join(ROOT_FOLDER, "data.json"), getDataInJsonFormat()),
  fs.writeFile(path.join(ROOT_FOLDER, "data.csv"), getDataInCsvFormat()),
  fs.writeFile(path.join(ROOT_FOLDER, "data.yaml"), getDataInYamlFormat()),
]);
