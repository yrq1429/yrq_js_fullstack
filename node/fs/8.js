const fs = require('fs');
const stats = fs.statSync('./c.txt');
console.log(stats.isFile());
