const {
    log,cls,getFilesSync,concatFiles,
    getJSOCommentFromString,generateJSODocs,
    writeFile,readFileToString} = require("./aftc-node-tools");

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


// Get JSO Code comments from the concatenated file
let comments = getJSOCommentFromString(out);
// log(comments);

// JSO Generate Comment Readme Documentation
let docs = generateJSODocs(comments);


// Read REAMD-TEMPLATE.md
let readme = readFileToString("./docs/readme-template.md");
// log(readmeTemplate)

let version = require("./package.json").version;
// log(version);

// Substitute values into readme
readme = readme.replace("[version]",version);
readme = readme.replace("[docs]",docs);

// Write readme.md
writeFile("./readme.md",readme);