# 性能优化

http createServer  (req, res) => { callback }
web 一切皆资源

web server 资源(html, css, json, img ...)  createReaderStream(读)

将相应的资源"传输"到客户端Client proxy

优化空间？？=> 传输体积减小，=> 压缩gzip
服务器端是可以进行文件操作  读写， 权限， 压缩，解压缩
客户端
res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf8'
})
带有压缩的字段， unzip

减少传输体积， 更快， 省带宽

