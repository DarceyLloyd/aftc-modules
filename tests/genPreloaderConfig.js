const fs = require("fs");
const aftc = require("aftc-node-tools");
const log = aftc.log;

console.clear();
log("Generating: preloader.json".green);


// getFilesSync(dir, ext = "*", includeHidden = false, recurse = false) {
let files = aftc.getFilesSync("./assets", "*", true, false, true);

let data = JSON.stringify(files);

aftc.writeFileSync("./preloader.json",data,()=>{
    log("File created!".green);
})

// fs.writeFile('preloader.json', data, function (err) {
//     if (err) throw err;
//     log("Done...".green);
// });