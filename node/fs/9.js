const fs = require('fs');

const path = require('path');

const getFilesInDir = function (dir) {
    // console.log(path.resolve(dir));  
    //物理路径：D:\workspace\yrq_js_fullstack\node\fs\txt
    let results = [path.resolve(dir)];
    let files = fs.readdirSync(dir, 'utf8');
    // console.log(files);
    files.forEach(file => {
        // 拼接路径--   
        file = path.resolve(dir, file); 
        const stats = fs.statSync(file);
        // console.log(stats.isFile());
        if (stats.isFile()) {
            results.push(file);
        }
        else if(stats.isDirectory()) {
            results = results.concat(getFilesInDir(file))
        }
    })
    return results;
}
const files = getFilesInDir('./txt');
console.log(files);
