function Person(name) {
    this.name=name;

}

Person.prototype.getName=function(){
    return this.name;
}

// IT工程师  extend Person
function Coder(name,languages) {
    // call ?
    Person.call(this,name);
    // 父类没有的可以加
    this.languages=languages;

    
}
// new Person 新的对象就是Coder的原型对象
Coder.prototype=new Person();
Coder.prototype.construtor=Coder;
Coder.prototype.getLanguages=function () {
    return this.languages;
}
var wxf = new Person('汪西发');

console.log(wxf.name);

var xjy = new Coder('徐加元',['javascript','python','c/c++']);

console.log(xjy.name+'  '+xjy.languages.join(','));

console.log(xjy.getName());

console.log(xjy.getLanguages());