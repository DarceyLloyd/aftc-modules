const fs = require('fs-extra');

const aftc = require("aftc-node-tools");
const log = aftc.log;

const json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = json.version;

let msg = "// aftc-modules v" + version + "\n"
msg += "// Author: Darcey@aftc.io" + "\n";

log(version);
log(msg);


const gulp = require("gulp");
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const inject = require('gulp-inject-string');

// let files = aftc.getFilesSync("./src", ".js");
// log(files);

let files = [
    "./src/**/*.js"
]

let build = function (done) {
    gulp.src(files)
        .pipe(concat('aftc-modules.js'))
        .pipe(inject.prepend(msg))
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./'))

    done();
}

gulp.task("build", gulp.series(build));