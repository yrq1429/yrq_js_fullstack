const fs = require('fs');
let data;
try {
    data = fs.readFileSync('./f2.txt', 'utf8');
    console.log('文件读取完成');
    console.log('文件内容是：' + data);
} catch (error) {
    console.error('读取文件出错:'+ error.message);
}



