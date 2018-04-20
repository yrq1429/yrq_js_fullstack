var xiaoming = {
    name:'小明',
    age:'22',
    sendFlower:function(tar){
        var flower = new Flower();
        tar.receiveFlower(flower,this.name);
    }
}

var xiaomei ={
    name:'小美',
    age:21,
    receiveFlower:function(flower,name){

        console.log('收到'+name+'的'+flower.type);
    },
    listenGoodMood: function (fn) {
        setTimeout(function () {
            fn();
        }, 10000)
    }
}

var Flower=function(type){
    this.type=type || '菊花'
}


xiaoming.sendFlower(xiaomei);

//新建一个小雪，通过小雪来送花，这个时候，小雪跟小美一样，有同一个方法receiveFlower()
// 所以就相当于实现了同样的接口，所以可以交换对象
// 即在小雪的receiveFlower方法中，调用小美来receiveFlower

var xiaoxue ={
    name:'小雪',
    age:21,
    receiveFlower(flower,name){
        xiaomei.receiveFlower(flower,name);
        xiaomei.listenGoodMood(function () {
            xiaomei.receiveFlower(flower, name);
        })
    }

}
xiaoming.sendFlower(xiaoxue);
//1完善小明和小美的基础信息，小美需要receiveFlower这个方法，小明需要sendFlower（），
// receiveFlower需要接受两个参数，姓名还有花的类型
// 小明的sendFlower方法需要一个参数，那就是送花的人的名字。
// 花的类型通过声明一个var Flower，然后在sendFlower方法中实例化一个对象去接受这个花的类型
