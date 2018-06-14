// var s1 = Symbol('foo');//可以加个标签
// var s2 = Symbol('bar');
// // Symbol类型的对象永远不相等
// console.log(s1 == s2); //false
// console.log(s1);
// console.log(typeof );

// var str = "123";
// var str2 = new String("123");
// console.log(typeof str);  //String
// console.log(typeof str2);  //Object
// console.log(String(str2));
// console.log(str === String(str2));

// var sym = Symbol('My Symbol');
// console.log(sym);
// console.log(typeof sym);
// console.log(String(sym));
// console.log(String(sym) == sym);


var mySymbol = Symbol();
var a = {
    "delay": 1000,
    "delay": 2000,
    [mySymbol]: 'Hello!'
}
// console.log(a[mySymbol]);
var sym = Symbol();
var obj = new Object();
a[sym] = {value : '你好'};
Object.defineProperty(obj, sym, {
    configurable: false,
    writable: true,
    enumerable: true,
    value: '张三'
})
console.log(obj[sym]);

for (let i in a) {
    console.log(i, a[i]);
}
const objectSymbols = Object.getOwnPropertySymbols(a);
console.log(objectSymbols);

// console.log(a.test);











