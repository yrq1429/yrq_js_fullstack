// 斐波那契数列 1 1 2 3 5 8 13 21 34 55 89

// f(n) = f(n-1) + f(n-2);

// let count = 0;
// function fabo(n) {
//   count ++;
//   if (n == 1 || n == 2) {
//     return 1
//   }
//   return fabo(n-1) + fabo(n-2)
// }
// console.log(fabo(5), count)

// 这种方法递归的次数太多。通过for和while循环来替代
// 递归使用时注意优化

let count = 0;
function fabo(n) {
  let cache = {};
  function _fn(n) {
    if (cache[n]) {
      return cache[n];
    }
    count++;
    if (n == 1 || n == 2) {
      return 1
    }
    // return fabo(n - 1) + fabo(n - 2)
    let prev = _fn(n - 1);
    cache[n - 1] = prev;
    let next = _fn(n - 2);
    cache[n - 2] = next
    return prev + next
  }
  return _fn(n)
}
console.log(fabo(20), count)