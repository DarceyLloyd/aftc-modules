const { log, cls, getFilesSync, writeFile, concatFiles } = require("aftc-node-tools");
const { JSODoc } = require("jsodoc");
const version = require("./package.json").version;

cls();
log("AFTC-MODULES: Starting build process...".green);

// Get files to be merged
let files = getFilesSync("./src", ".js", true);
// log(files);

// Concatenate the files
let out = concatFiles(files);
// log(out);

// Write to aftc-modules.js file
writeFile("./aftc-modules.js", out)
    .then(() => {
        log("aftc-modules.js - generated")
        buildDocs()
    })


function buildDocs() {
    let subs = {
        "[[version]]": version
    }

    new JSODoc({
        // dir: './src',
        // recursive: true,
        // ext: 'js',
        files: ['./aftc-modules.js'],
        template: './docs/template.md',
        substitutions: subs,
        output: './readme.md'
    })

}
