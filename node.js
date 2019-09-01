var fs = require('fs')

var stats0 = fs.statSync("./assets/images/favicon.ico");
var stats1 = fs.statSync("./assets/images/json64.png");
var stats2 = fs.statSync("./apple-touch-icon1.png");
var mtime0 = (+stats0.mtime) + 0;
var mtime1 = (+stats1.mtime) + 0;
var mtime2 = (+stats2.mtime) + 0;
console.log(mtime0);
console.log(mtime1);
console.log(mtime2);
