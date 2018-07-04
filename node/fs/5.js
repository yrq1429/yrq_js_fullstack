const fs = require('fs');

fs.writeFile('./b.txt', 'hello world', 'utf8', (err) => {
    if (err) throw err
    console.log('文件写入成功');
})

fs.writeFileSync('./c.txt', 'hello world', 'utf8');
console.log("C写入成功");
