// 文件引用 按照文件引用的顺序打包文件 文件依赖
require('./styles/normalize')
require('./styles/index')

const format = require('utils/format')

const { log } = require('./utils.js')

log(format('hello world'))
document.querySelector('.superman').style.display = 'block'

log(_.map([1, 2, 3], (item) => item * 2))
