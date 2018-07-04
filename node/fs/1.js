// COMMONJS require NODE 内置支持的js模块化方案
// es6 module
// sea.js
const fs = require('fs');
let data;
const p = new Promise((resolve, reject) => {
    fs.readFile('./f2.txt', 'utf8', (err, data) => {

        // console.log('真正的读取完成了');
        // console.log('文件内容' + data);
          //调用resolve表明做完了
        if (err) {
            reject(err)
        }else {
            resolve(data)
        }
    });//callback回调
})
p.then(data => {
    console.log('读取成功，可以做其他事情了');
}).catch(e => {
    console.log(e);
})
