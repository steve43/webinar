const fs = require("fs");
const yaml = require("js-yaml");
const doc = yaml.safeLoad(fs.readFileSync("./docs/swagger.yaml", "utf8"));
console.log(doc.info.version)
