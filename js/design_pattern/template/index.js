// 泡一杯咖啡  talk in js
// 流程 
// 把水煮沸  用水冲泡  把咖啡倒入杯子  加糖加奶
// 语义 转化为  代码
// 方法 methods=>boilWater() brewCoffeeGriends() pourInCup() addSugarAndMilk()


// var Coffee = function (){

// }
// var Tea = function () {

// }
// Coffee.prototype.boilWater= function () {
//     console.log('把水煮沸');
// }
// Coffee.prototype.pourInCup = function () {
//     console.log('把咖啡倒入杯子');
// }
// Coffee.prototype.brewCoffeeGriends = function () {
//     console.log('用水冲泡');
// }
// Coffee.prototype.addSugarAndMilk = function () {
//     console.log('加糖加奶');
// }
// Coffee.prototype.init = function () {
//     this.boilWater();
//     this.pourInCup();
//     this.brewCoffeeGriends();
//     this.addSugarAndMilk();
// }
// var coffee = new Coffee();
// coffee.init();

// // 泡茶   把水烧开 用沸水浸泡茶叶 把茶水倒入杯子 加柠檬


// Tea.prototype.boilWater = function () {
//     console.log('把水煮沸');
// }
// Tea.prototype.steepTeaBag = function () {
//     console.log('用沸水浸泡茶叶');
// }
// Tea.prototype.pourInCup = function () {
//     console.log('把茶水倒入杯子');
// }
// Tea.prototype.addLemon = function () {
//     console.log('加柠檬');
// }
// Tea.prototype.init = function () {
//     this.boilWater();
//     this.pourInCup();
//     this.brewTeaGriends();
//     this.addLemon();
// }
// var tea = new Tea();
// tea.init();

// 封装不是很完美，重复代码太多。如果代码可以复用就好了
// 第一步：把水烧开  共用这个方法，少写
    // coffee    tea 
    //这两个类不是父子关系，是什么关系？可以让复用方法？
    // 构建一个父类=>饮料类drink（抽象类）     Coffee Tea 兄弟类  
// 饮料类drink（抽象类） abstract class   一切皆抽象
// boilWater   共同点   
// steepTeaBag  brewCoffeeGriends    用水泡某个饮品  brew?()  点到即止
// pourInCup()  把咖啡/茶水倒进杯子
// addCondiments()        加糖/柠檬 


// 抽象类  模板模式，
// 优化方法，给抽象类
// function Beverage() {
    
// }
// Beverage.prototype.boilWater = function() {
//     console.log('把水煮沸');
// }
// // 原料不一样，方法不去具体实现，提供这个接口，子类一定要实现该方法
// Beverage.prototype.brew = function(){}
// Beverage.prototype.pourInCup = function(){}
// Beverage.prototype.addCondiments = function(){}
// Beverage.prototype.init = function () {
//     this.boilWater();
//     this.brew();
//     this.pourInCup();
//     this.addCondiments();
// }

// var Coffee = function(){};
// Coffee.prototype = new Beverage();
// Coffee.prototype.brew = function () {
//     console.log('用沸水泡咖啡');
// }
// Coffee.prototype.pourInCup = function () {
//     console.log('将咖啡倒入杯子');
// }
// Coffee.prototype.addCondiments = function () {
//     console.log('加糖加奶');
// }
// var Tea = function(){};
// Tea.prototype = new Beverage();
// // 覆盖父类方法   brew 接口  interface
// Tea.prototype.brew=function () {
//     console.log('用沸水浸泡茶叶');
// }
// Tea.prototype.pourInCup=function () {
//     console.log('将茶水倒入杯子');
// }
// Tea.prototype.addCondiments=function () {
//     console.log('加柠檬');
// }
// var coffee = new Coffee();
// coffee.init();
// var tea = new Tea();
// tea.init();



// js way 去构建模板模式
// 何为模板?  大体结构已经确定 4步 动作概念都有  差异点  继承 抽象类来实现
// JS  可以更加优雅  差异点就是·参数·？
var Beverage = function (params) {
    var boilWater = function(){
        console.log('把水煮沸');
    }
    var brew =params.brew || function(){
        throw new Error('必须传给brew方法');
    }
    var pourInCup = params.pourInCup || function () {
        throw new Error('必须穿传给pourInCup方法')
    }
    var addCondiments = params.addCondiments || function () {
        throw new Error('必须传给addCondiments方法')
    }
    var F = function(){
    }
    F.prototype.init = function () {
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    }
    return F;
}
// 模板可配置部分，作为参数传给模板对象
var Coffee = Beverage({
    brew:function(){
        console.log('用沸水泡咖啡');
    },
    pourInCup:function(){
        console.log('把咖啡倒进杯子');
    },
    addCondiments:function () {
        console.log('加糖加奶');
    }
});
var coffee = new Coffee();
coffee.init();  //调用init方法
