// context 表示等下要绑定的this
Function.prototype.bind2 = function (context) {
  var self = this;
  // context
  var args = Array.prototype.slice.call(arguments, 1);
  var fNOP = function() {}
  var bound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    // 判断是否为一个实例  new的过程
    self.apply(this instanceof self ? this : context, args.concat(bindArgs))
  }
  fNOP.prototype = this.prototype;
  bound.prototype = new fNOP();
  return bound;
}

var value = 2;
var foo = {
  value: 1
}
function bar(name, age) {
  this.habit = 'shopping';
  // console.log(this.value);
  // console.log(name);
  console.log(age);
}
bar.prototype.friend = 'kevin';
var bindFoo = bar.bind(foo, 'asss');
var obj = new bindFoo('8');
// console.log(obj.habit)
// console.log(obj.friend)
// bindFoo();

// 如何手工实现bind
// 1. 返回一个新的函数 高阶函数 return  function() { bar() }
// 2. this的指向  利用了闭包