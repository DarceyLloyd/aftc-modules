const { log, cls, getFilesSync, readFileToString, writeFile,concatFiles } = require("aftc-node-tools");
const { jsoGetDocs } = require("jsodoc");
const version = require("./package.json").version;

cls();
log("AFTC-MODULES: Starting build process...".green);

// Get files to be merged
let files = getFilesSync("./src",".js",true);
// log(files);

// Concatenate the files
let out = concatFiles(files);
// log(out);

// Write to aftc-modules.js file
writeFile("./aftc-modules.js",out);


// Generate docs via JSODocs
let docs = jsoGetDocs(out);

// Read REAMD-TEMPLATE.md
let readme = readFileToString("./docs/readme-template.md");
// log(readmeTemplate)

// Substitute values into readme
readme = readme.replace("[version]",version);
readme = readme.replace("[quick_list]",docs.gitSummary);
readme = readme.replace("[docs]",docs.gitDocs);

// Write readme.md
writeFile("./readme.md",readme);