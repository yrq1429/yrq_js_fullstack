const fs = require('fs');
const writeStream = fs.createWriteStream('./c.txt', 'utf8');
writeStream
    .on('close', () => {
        console.log("已经关闭了");
    })
writeStream.write('me');
writeStream.write('on');
writeStream.write('on\n');
writeStream.write('on');
writeStream.end('');
