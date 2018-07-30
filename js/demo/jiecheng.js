// function f(num) {
//   if (num <= 1) {
//     return 1;
//   }
//   else {
//     return num * f(num - 1)
//   }
// }

// console.log(f(4))
// console.log(f.caller)


function a() {
  b();
}
function b() {
  console.log(b.caller)
}
var q = [];
a()
// console.log(b.caller)
console.log(typeof(q))