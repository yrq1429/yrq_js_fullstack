var obj = {a: 1};
// console.log("a" in obj);
// prototype自己默认的属性和方法
// console.log(obj.b);
// console.log("toString" in obj);


// 原型链对象上是否有该属性  obj对象 name 属性名
function hasPrototypeProperty(o, name) {
    return name in o && !o.hasOwnProperty(name)
}
console.log(hasPrototypeProperty(obj, "toString"));

// js 里面函数是一等对象 Object
function Person(name) {
    this.name = name;
}
// 在JS里面  几乎所有的函数都有一个prototype属性，像一个指针一样指向一个对象
// 属性或者是方法的集合

// prototype 入口
Person.prototype = {
    getName: function () {
        return this.name
    }
}

// js 原型式继承
// constructor Person name+books 属性
// prototype Person的方法链+方法链(自身方法)

// 一、让子对象拥有父类的所有属性
function Author(name, books) {
    // 新的构造函数
    Person.call(this, name);
    this.books = books;
}
// 得到Person的prototype
extend(Author, Person);
const author = new Author('雨果', ['悲惨世界']);
// ? author 函数prototype 指向了Author的prototype
Author.prototype.getBooks = function () {
    return this.books;
}
// 构造函数
function extend(subClass, superClass) {
    // 空的构造函数
    var F = function () {};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();  //新的对象
    // 失去构造函数
    subClass.prototype.constructor = subClass;
}
// console.log(author.getBooks());
console.log(author.getName());
