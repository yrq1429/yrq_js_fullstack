// es6 class 只是语法糖
function Person(name) {
    this.name = name;
}

Person.prototype = {
    getName: function () {
        return this.name;
    }
}

function Author(name, books) {
    Person.call(this, name);
    this.books = books;
}

extend(Author, Person);
Author.prototype.getBooks = function () {
    return this.books;
}

function extend(subClass, superClass) {
    // var F = function () {}
    // F.prototype = superClass.prototype;
    // subClass.prototype = new F();  //新的对象
    // // 失去构造函数
    // subClass.prototype.constructor = subClass;

    subClass.prototype = new superClass();
    // constructor属性丢失了   下面这句代码让属性指回来
    subClass.prototype.constructor = subClass;
}
const author = new Author('高尔基', ['我的offer']);
console.log(author.getName());

const person = new Person('周杰伦');
console.log(person.constructor.prototype); 

