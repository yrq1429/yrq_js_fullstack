// console.log('工厂模式');
// 函数属于  对象 
// 函数是一等对象
// 类  简单的只有一个构造函数
// 类与函数没有区别。   JS本身并没有类，用的人多了，给的这个实现
// JS其实只有对象  Object原型对象鼻祖
// 原型  prototype
// JS不需要传统的继承    只需要一个参照物就可以实现原型示继承
var Bicycle = function(brand){
    /**
     * 构造函数  constructor
     * new 时执行
     * 
     */
    this.brand= brand || '凤凰'
}

/**
 * 
 *  原型   凤凰。。。。。
 * 二维码   手机支付
 * JS  继承关系  JS认为不是继承关系
 * 共享单车，完全颠覆了自行车，
 */
Bicycle.prototype= {
    sellBicycle:function(model){
        // console.log('卖车啦。。。。');
        // return null;
        // 卖车，，商店，很多车， 维修人员，仓库人员
        // 面向对象们
        var bicycle=null;

        switch (model) {
            case 'Giant':  
                bicycle=new Giant();
            break;
            case 'The Speed Ster':
                bicycle = new Speedster();
            break;
            case 'u2':
                bicycle = new u2();
            break;
        }
        bicycle.assemble();
        bicycle.wash();
        bicycle.provideRepair();
        // 把车卖出去
        return bicycle;
    }
}

var bicycle = new Bicycle('永久');



        
    


/**
 * js 基本类型
 * 字符串  数字  布尔值
 * underfined null
 * 复杂类型  Object <-prototype array function json
 */

// 雷速达
 function Speedster(){

}

Speedster.prototype={
    assemble:function(){
        console.log('组装完成');
    },
    wash:function(){
        console.log('清洗完成')
    },
    provideRepair:function () {
        console.log('保修一年')
    }
}

function Giant() {
    
}
Giant.prototype={
    assemble: function () {
        console.log('组装完成');
    },
    wash: function () {
        console.log('清洗完成')
    },
    provideRepair: function () {
        console.log('保修2年')
    }
}

function u2() {
    
}
u2.prototype={
    assemble: function () {
        console.log('组装完成');
    },
    wash: function () {
        console.log('清洗完成')
    },
    provideRepair: function () {
        console.log('保修3年')
    }
}


console.log(bicycle.sellBicycle('Giant'));