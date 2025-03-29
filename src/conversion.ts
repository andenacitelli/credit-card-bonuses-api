import Papa from "papaparse";
import yaml from "yaml";
import { CREDIT_CARDS } from "@/data/data.js";
import { cardToDumpableObjects } from "@/csv.js";

export function getDataInCsvFormat(): string {
  return Papa.unparse(
    CREDIT_CARDS.reduce((accumulator, card) => {
      for (const offer of cardToDumpableObjects(card)) {
        accumulator.push(offer);
      }
      return accumulator;
    }, [] as object[]),
  );
}

export function getDataInJsonFormat(): string {
  return JSON.stringify(CREDIT_CARDS);
}

export function getDataInYamlFormat(): string {
  return yaml.stringify(CREDIT_CARDS);
}
