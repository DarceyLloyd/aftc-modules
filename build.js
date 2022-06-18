const { log, cls, getFilesSync, writeFile, concatFiles } = require("aftc-node-tools")
const { JSODoc } = require("jsodoc")
const fs = require("fs")
const p = require("path")
const fse = require("fs-extra")
const version = require("./package.json").version

cls();
log("# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #".green);
log("AFTC-MODULES: Build starting...".yellow);

// Get files to work on
let jsFiles = getFilesSync("./src", ".js", true);
let tsFiles = getFilesSync("./src", ".ts", true);
// log(jsFiles);
// log(tsFiles);

let importList = [];
let exportList = [];
let tsTypes = [];



start();
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



async function start() {
    // build index.js
    await buildIndexJs();
    log(`index.js built`.green);

    await buildIndexTs();
    log(`index.d.ts built`.green);

    // Build concatinated bundle aftc-modules.js
    let out = concatFiles(jsFiles);
    await writeFile("./aftc-modules.js", out)
    log("aftc-modules.js - generated")

    buildDocs()




    log("\nAFTC-MODULES: Build complete!".yellow);
    log("# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #".green);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


async function buildIndexTs() {

    let outputFile = p.resolve("./types/index.d.ts");
    let fileContents = "";

    let currentDirName = p.basename(process.cwd())
    let pathStringToRemove = process.cwd() + "\\"; // process.cwd().replace(currentDirName, "")
    // log(pathStringToRemove);
    // let tsImportPath = "";
    // log(tsImportPath);
    // jsImportPath = replaceAll("\\", "/",jsImportPath)
    // jsImportPath = jsImportPath.replace(/\\/g, '/')
    let tsFilePath = "";

    for (const f of tsFiles) {
        tsFilePath = "";
        tsFilePath = f.replace(pathStringToRemove, "");
        tsFilePath = "..\\" + tsFilePath;
        tsFilePath = tsFilePath.replace(/\\/g, '/')

        // log(tsFilePath)

        // /// <reference path="../src/array/arrayGetMax.d.ts"/>
        fileContents += `/// <reference path="${tsFilePath}"/>` + "\n";
    }

    await fse.writeFile(outputFile, fileContents);

}
// - - - - - - - - - - - - - - - - - - - - - - - -


async function buildIndexJs() {


    // const f = p.resolve("./test.js")
    // const f = jsFiles[0];
    // await getJsImportsAndExportsFromFile(f);

    for (const f of jsFiles) {
        await getJsImportsAndExportsFromFile(f);
    }


    // log(importList)
    // log(exportList)

    let outputFile = p.resolve("./index.js");
    let fileContents = "";

    // Imports
    for (let i = 0; i < importList.length; i++) {
        fileContents += importList[i] + "\n";
    }

    fileContents += "\n";

    // Exports
    fileContents += "export {\n";
    let endChar = "";
    for (let i = 0; i < exportList.length; i++) {
        if (i < (exportList.length - 1)) {
            endChar = ",";
        } else {
            endChar = "";
        }
        fileContents += "\t" + exportList[i] + endChar + "\n";
    }
    fileContents += "}";

    await fse.writeFile(outputFile, fileContents);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




async function getJsImportsAndExportsFromFile(f) {


    // const f = files[0];
    // const f = p.resolve("./test.js")
    let first2Chars = "";
    let first2CharFilterList = ["//", "*", "*/"];
    let processLine = true;
    let processLineDone = false;
    let exp = ""; // will hold the exportString to add to exportList
    let functionName = ""; // will hold the function name
    let currentDirName = p.basename(process.cwd())
    let pathStringToRemove = process.cwd().replace(currentDirName, "")
    let jsImportPath = f.replace(pathStringToRemove, "")
    // jsImportPath = replaceAll("\\", "/",jsImportPath)
    jsImportPath = jsImportPath.replace(/\\/g, '/')
    // jsImportPath = jsImportPath.replace("\\\\","/")
    // log(jsImportPath);

    const allFileContents = await fs.readFileSync(f, 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line => {
        // reset
        first2Chars = "";
        processLine = true;
        exp = "";

        // clean up line
        line = replaceRN(line);
        // line = replaceAll("\t", "TestObject", line);
        // log(line);

        // check line doesn't start with any first2CharFilterList
        // let a = first2CharFilterList.some(substring=>line.includes(substring));
        if (isArrayInString(line, first2CharFilterList) === true) {
            processLine = false;
        }

        if (processLine === true) {
            // Handle "export function test() {" and similar
            if (
                line.includes("export") &&
                line.includes("export {") === false &&
                line.includes("export default {") === false
                // line.includes("export default class") === false &&
            ) {
                functionName = cleanLineString(line)
                exp = `import { ${functionName} } from '${jsImportPath}';`
                importList.push(exp);
                exportList.push(functionName);
                // log(exp);
                processLineDone = true;
            }

            // Handle multiline export export {\n fn, etc }
            // TODO
            // if (processLineDone === false){
            //     if (line.includes("export {") || line.includes("export default {")) {
            //         log(line);
            //     }
            // }
        }


    });

}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



function cleanLineString(line) {
    line = line.replace("export const", "")
    line = line.replace("export let", "")
    line = line.replace("export function", "")
    line = line.replace("export async function", "")
    line = line.replace("export default function", "")
    line = line.replace("export default async function", "")
    line = line.replace("export class", "")
    line = line.replace("export default class", "")
    line = line.replace(/ *\{[^}]*\) */g, ""); // replace {} and contents"
    line = line.replace(/ *\([^)]*\) */g, ""); // replace () and contents"
    line = replaceAll("=", "", line)
    line = replaceAll(";", "", line)
    line = replaceAll(">", "", line)
    line = replaceAll("{", "", line)
    line = replaceAll("}", "", line)
    line = replaceAll("  ", " ", line)
    line = replaceAll("  ", " ", line)
    line = replaceAll("  ", " ", line)
    line = line.trim();
    return line;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




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
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -







// Utils
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function replaceAll(search, replacement, source) {
    return source.replace(new RegExp(search, 'g'), replacement);
};

// function replaceAll(find, replace, source) {
//     return source.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
// };

function replaceRN(str) {
    //remove line breaks from str
    str = str.replace(/\s{2,}/g, ' ');
    str = str.replace(/\t/g, ' ');
    str = str.toString().trim().replace(/(\r\n|\n|\r)/g, "");
    return str;
}

function isArrayInString(input, arr) {
    return arr.some(substring => input.includes(substring));
}