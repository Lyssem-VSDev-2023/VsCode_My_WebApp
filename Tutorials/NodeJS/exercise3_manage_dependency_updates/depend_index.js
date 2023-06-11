import fetch from "node-fetch";
import _ from "lodash";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

async function run() {
  const response = await fetch("https://dev.to/api/articles?state=rising");
  const json = await response.json();
  const sorted = _.sortBy(json, ["public_reactions_count"], ["desc"]);
  const top5 = _.take(sorted, 3);

  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);

  const filePrefix = new Date().toISOString().split("T")[0];
  fs.writeFileSync(
    path.join(__dirname, `${filePrefix}-feed.json`),
    JSON.stringify(top5, null, 2)
  );
}

run();
