const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  return NaN
}
// 测试用例console.log(add(1, '2'))
module.exports = { add }