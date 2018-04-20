// 小明表白的故事
// 小明  talk in js
// js具有强大的表现力
// JS 弱类型语言   Java是静态强类型语言
// js 基础类型 字符串 数字 
// 对象{}，array,function
// symbol类型
// bool 布尔值 false  null 为空  undefined
// 六大数据类型  1复杂类型
var xiaoming ={
    name: '小明',
    age: '21',
    hasGirlFriend:false,
    job:null,
    city:undefined,
    // 方法  行为
    sendFlower:function(target){
        // 1.买花
        //创建Flower实例
        var flower = new Flower('满天星');
        if (typeof target.receiveFlower == 'function'){
            target.receiveFlower(flower, this.name);
        } 
        else{
            console.log('拿到名企前是不可能谈恋爱的。');
        }
            
    }
}
//具有详述性  最简单创造的对象
var xiaomei = {
    name:'小美',
    room:'9栋2201',
    hometown:'九江',
    receiveFlower:function(flower,name){
        console.log('收到'+name+'送的'+flower.type);
    },
    // 监听好心情
    /**
     * 功能 ： 提供心情监听
     * 参数： fn 类型函数
     * 在一段时间后，心情好了，执行fn
     */
    listenGoodMood:function (fn) {
        setTimeout(function(){
            fn();
        },10000)
        //typeof fn === 'function'
        //fn();
    }

}
// 类大写   对象小写
// var Flower = function(){
//     this.type = type || '玫瑰'
// }
var Flower=function(type){
    this.type=type || '玫瑰'
}
// xiaoming.sendFlower(xiaomei);

var xiaoxue ={
    name:'小雪',
    receiveFlower:function(flower,name){
        // if (name == '小明') {
        //     console.log('在一起吧大兄弟')
        // }
        // else{
            xiaomei.receiveFlower(flower,name);
                xiaomei.listenGoodMood(function(){
                    xiaomei.receiveFlower(flower, name);
                })
            }
        // }
        // 实现了同样的收花方法，接口
        // 小雪和小美都实现了相同的 接口
        // 实现了相同的接口就可以互换对象
        // xiaomei.receiveFlower(flower,name);
    }

//空的对象自变量

xiaoming.sendFlower(xiaoxue);
