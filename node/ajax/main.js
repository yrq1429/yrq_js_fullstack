const http = require('http');

const fs = require('fs');

// 创建一个web服务器  req对象是请求对象，res对象是结果对象
const server = http.createServer((req, res) => {
    // 怎么得到一个HTML页面？   /代表首页
    if (req.url == '/') {
        // http相应响应头
        const indexFile = fs.createReadStream('./index.html');
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf8'
        })
        indexFile.pipe(res)
    }else if (req.url == '/info') {
        // api 后端
        const info = {
            "name": "曾凯",
            "desc": "身骑白马"
        };
        // 200是http状态码， Content-Type 文件格式  返回给浏览器， 如何去解析这一次请求的到达
        res.writeHead(200, {  
            'Content-Type': 'text/plain;charset=utf8'
        })
        res.end(JSON.stringify(info))
    }
    // console.log('那个家伙又来了');
    // res.end('hello world, 你要的反正不是首页');
});

server.listen(8081)