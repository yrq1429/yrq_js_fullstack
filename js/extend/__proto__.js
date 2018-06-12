// 函数都有一个属性prototype
// __proto__ 私有属性  对象具有私有属性
function Foo() {
    
}
var Boo = { name: 'Boo'};
Foo.prototype = Boo;

var f = new Foo();
// __proto__ 指向构造该对象的构造函数的原型
// console.log(f.__proto__);
// console.log(Foo.prototype === Boo);
// console.log(f.__proto__ === Boo);
// Object.getPrototypeOf(f) === f.__proto__;
// console.log(Object.getPrototypeOf(f) === f.__proto__);

function Person(name) {
    this.name = name
}
Person.prototype = {
    construstor: Person,
    sayName: function () {
        console.log('my name is '+ this.name);
    }
}

var p1 = new Person('ligang');
// __proto__ 指向构造该对象的构造函数的原型
console.log(p1.__proto__ === Person.prototype);