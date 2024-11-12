const { log, cls, getFilesSync, writeFile, concatFiles } = require("aftc-node-tools")
const { JSODoc } = require("jsodoc")
const fs = require("fs")
const p = require("path")
const path = require('path');
const fse = require("fs-extra")
const version = require("./package.json").version

cls();
log("# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #".green);
log("AFTC-MODULES: Build starting...".yellow);

// Get files to work on
let jsFiles = getFilesSync("./src", ".js", true);
let tsFiles = getFilesSync("./src", ".ts", true);
let dtsFiles = getDTSFiles("./src");
// log(jsFiles);
// log(tsFiles);

let importList = [];
let exportList = [];
let tsTypes = [];



start();
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



async function start() {
    console.clear();

    // build index.js
    await buildIndexJs();
    log(`index.js built`.green);

    await buildIndexTs();
    log(`index.d.ts built`.green);

    // Build concatinated bundle aftc-modules.js
    let out = concatFiles(jsFiles);
    await writeFile("./aftc-modules.js", out)
    log("aftc-modules.js - generated")

    cleanConcatinatedFile();

    // Docs
    // buildDocs()






    log("\nAFTC-MODULES: Build complete!".yellow);
    log("# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #".green);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



function getDTSFiles(currentDir) {
    let dtsFiles = [];

    function findFiles(dir) {
        const files = fs.readdirSync(dir);

        files.forEach(file => {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                findFiles(fullPath); // Recursive call
            } else if (file.endsWith('.d.ts')) {
                dtsFiles.push(fullPath);
            }
        });
    }

    findFiles(currentDir);
    return dtsFiles;
}





async function cleanConcatinatedFile() {

    const f = p.resolve("./aftc-modules.js");
    let first2Chars = "";
    let first2CharFilterList = ["//", "*", "*/"];
    let processLine = true;
    let processLineDone = false;

    let outputString = "";
    let debugString = "";

    const fileContents = await fs.readFileSync(f, 'utf-8');
    fileContents.split(/\r?\n/).forEach(line => {
        // reset
        first2Chars = "";
        processLine = true;

        // clean up line
        line = replaceTabs(line);

        // log(line);

        // check line doesn't start with any first2CharFilterList
        // let a = first2CharFilterList.some(substring=>line.includes(substring));

        first2Chars = line.substring(0, 2);
        if (isArrayInString(first2Chars, first2CharFilterList) !== true) {
            outputString += (line) + "\n";
        } else {
            debugString += line + "\n";
        }

    });


    await writeFile("./aftc-modules.js", outputString)
    // await writeFile("./aftc-modules-debug.js", debugString)


}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




async function buildIndexTs() {

    let outputFile = p.resolve("./index.d.ts");
    let fileContents = "";

    let currentDirName = p.basename(process.cwd())
    let pathStringToRemove = process.cwd() + "\\"; // process.cwd().replace(currentDirName, "")
    // log(pathStringToRemove);
    // let tsImportPath = "";
    // log(tsImportPath);
    // jsImportPath = replaceAll("\\", "/",jsImportPath)
    // jsImportPath = jsImportPath.replace(/\\/g, '/')
    let tsFilePath = "";

    log(dtsFiles);

    for (const f of dtsFiles) {
        tsFilePath = "";
        tsFilePath = f.replace(pathStringToRemove, "");
        tsFilePath = ".\\" + tsFilePath;
        tsFilePath = tsFilePath.replace(/\\/g, '/')

        log(tsFilePath)

        // /// <reference path="../src/array/arrayGetMax.d.ts"/>
        fileContents += `/// <reference path="${tsFilePath}"/>` + "\n";
    }

    await fse.writeFile(outputFile, fileContents);

}
// - - - - - - - - - - - - - - - - - - - - - - - -


async function buildIndexJs() {


    const outputFile = p.resolve("./index.js")
    let fileContents = "";


    let first2Chars = "";
    let first2CharFilterList = ["//", "*", "*/"];
    let exp = ""; // will hold the exportString to add to exportList
    let functionName = ""; // will hold the function name
    let currentDirName = p.basename(process.cwd())
    let pathStringToRemove = "";
    let jsImportPath = "";
    let exportList = []; // functions / class's names to add to export section


    jsFiles.sort();

    for (const f of jsFiles) {
        first2Chars = "";
        exp = "";
        functionName = "";
        pathStringToRemove = process.cwd().replace(currentDirName, "")
        jsImportPath = f.replace(pathStringToRemove, "")
        jsImportPath = jsImportPath.replace(/\\/g, '/')
        // log(jsImportPath);

        if (jsImportPath.includes("does")) {
            // log(jsImportPath);
        }

        const allFileContents = await fs.readFileSync(f, 'utf-8');
        allFileContents.split(/\r?\n/).forEach(line => {
            // reset
            first2Chars = "";
            exp = "";

            // clean up line
            line = replaceRN(line);
            first2Chars = line.substring(0, 2);

            if (isArrayInString(first2Chars, first2CharFilterList) === false) {
                // log(line);

                if (
                    line.includes("export function") ||
                    line.includes("export default function") ||
                    line.includes("export async function") ||
                    line.includes("export default async function") ||
                    line.includes("export class") ||
                    line.includes("export const")
                    // line.includes("export default class") === false &&
                ) {
                    // log(line)
                    functionName = cleanLineString(line)
                    exp = `import { ${functionName} } from '${jsImportPath}';`
                    // log(exp);

                    fileContents += exp + "\n";

                    // importList.push(exp);
                    exportList.push(functionName);
                    // log(exp);
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


    // build export part of file output
    let endComma = "";
    fileContents += "\n";
    fileContents += "export { \n";
    for (let i = 0; i < exportList.length; i++) {
        if (i < exportList.length) {
            endComma = ",";
        }

        fileContents += "\t" + exportList[i] + endComma + "\n"

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
    log(jsImportPath);

    const allFileContents = await fs.readFileSync(f, 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line => {
        // reset
        first2Chars = "";
        exp = "";

        // clean up line

        line = replaceRN(line);
        // line = replaceAll("\t", "TestObject", line);
        // log(line);

        // check line doesn't start with any first2CharFilterList
        // let a = first2CharFilterList.some(substring=>line.includes(substring));
        first2Chars = line.substring(0, 2);

        if (isArrayInString(first2Chars, first2CharFilterList) === false) {
            // log(line);

            if (
                line.includes("export function") ||
                line.includes("export default function") ||
                line.includes("export async function") ||
                line.includes("export default async function") ||
                line.includes("export class")
                // line.includes("export default class") === false &&
            ) {
                // log(line)
                functionName = cleanLineString(line)
                exp = `import { ${functionName} } from '${jsImportPath}';`
                importList.push(exp);
                exportList.push(functionName);
                // log(exp);
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

    // await fse.writeFile(outputFile, fileContents);

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

    const jsoDoc = new JSODoc({
        dir: './src',
        recursive: true,
        ext: ['js', 'ts'],
        // files: ['./aftc-modules.js'],
        template: './docs/template.md',
        substitutions: subs,
        output: './readme.md'
    })

    jsoDoc.start();
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

function replaceTabs(str) {
    //remove line breaks from str
    // str = str.replace(/\s{2,}/g, ' ');
    str = str.replace(/\t/g, ' ');
    return str;
}

function isArrayInString(input, arr) {
    return arr.some(substring => input.includes(substring));
}