const fs = require('fs-extra');

const aftc = require("aftc-node-tools");
const log = aftc.log;

const json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = json.version;

const gulp = require("gulp");
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const inject = require('gulp-inject-string');

const readline = require('readline');
const lineReader = require('line-reader');
const async = require('async');

let msg = "// aftc-modules v" + version + "\n"
msg += "// Author: Darcey@aftc.io" + "\n";





// async function getList(){

//     return new Promise( (resolve, reject) => {
//         let out = [];

//         for (let n=0; n <= 4; n++){
//             // new Promise( (resolve, reject) => {});
//             let time = (n+1) * 250;
//             new Promise(resolve => setTimeout(()=>{
//                 log(n);
//                 out.push(n);
//                 resolve();
//             }, time));
//         }

//         // How do I get this resolve to run only once all the for looped promises are complete?
//         resolve(out);
//     });
// }

// function test(){
//     let numbers = false;
//     log("start");
//     log(numbers); // logs false (correct);

//     getList().then((v)=>{
//         log("v = " + v);
//         log("completed");
//     })
// }

// console.clear();
// test();




// function readManyFiles(files) {
//     async.map(files,
//         function(file, callback))
//             lineReader.open(file, function(reader) {
//               if (reader.hasNextLine()) {
//                 reader.nextLine(function(line) {
//                   callback(null,line);
//                 });
//               }
//             });
//         },
//         function(err, allLines) {
//             //do whatever you want to with the lines
//         })
// }



// function getLines2() {

//     let files = aftc.getFilesSync("./src", ".js");
//     // log(files);

//     let lines = "ola/n";

//     return new Promise(function (resolve, reject) {



//         files.forEach(f => {
//             lineReader.open(f, function (err, reader) {
//                 if (err) throw err;
//                 if (reader.hasNextLine()) {
//                     reader.nextLine(function (err, line) {
//                         try {
//                             if (err) throw err;
//                             // log(f);
//                             let str = line.replace("export function ", "");
//                             str = str.slice(0, str.indexOf("{"));
//                             // console.log(str);
//                             lines += str + "\n";
//                         } finally {
//                             reader.close(function (err) {
//                                 if (err) throw err;
//                             });
//                         }
//                     });
//                 }
//                 else {
//                     reader.close(function (err) {
//                         if (err) throw err;
//                     });
//                 }
//             });
//         });


//         // log("lines = " + lines);
//         resolve(lines);

//     });
// }


// Reads the whole file every time (above needs working out for async)
// getLines2 is the line by line reader
// shouldn't matter too much but still, doing it right...
getLines = function(){

    let files = aftc.getFilesSync("./src", ".js");

    let appendStr = "";
    let line = "";
    let temp = "";

    files.forEach(f => {

        var fileLines = require('fs').readFileSync(f, 'utf-8')
        .split('\n')
        .filter(Boolean);

        temp = fileLines[0];
        temp = temp.replace("export function ","");
        temp = temp.replace("export class ","");
        temp = temp.slice(0, temp.indexOf("{"));
        temp = temp.replace(" (","(");
        temp = " - " + temp.trim() + "\n";
        appendStr += temp;
    });

    return appendStr;

}



async function buildDocs(done) {
    let docs = fs.readFileSync('./template.md', "utf8");
    docs = docs.replace("[v]",version);

    let appendStr = getLines();
    docs += appendStr;

    fs.writeFile('./readme.md', docs, function (err) {
        if (err) {
            throw err;
        } else {
            done();
        }
    });
}



let gulpFiles = [
    "./src/**/*.js"
]

let build = function (done) {
    gulp.src(gulpFiles)
        .pipe(concat('aftc-modules.js'))
        .pipe(inject.prepend(msg))
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./'))

    done();
}

gulp.task("build", gulp.series(build, buildDocs));