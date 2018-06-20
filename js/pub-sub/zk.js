// 发布者Publish  多个Subscriber订阅者   pub-sub 发布订阅者模式
// 2018-10-01大婚
let zk = {};
// 以下是订阅者，上是发布者
zk.peopleList = [];
// fn 表示发布之后订阅者作何反应
zk.listen = function (fn) {
    // console.log(this);
    this.peopleList.push(fn)
}
zk.trigger = function () {
    // ?触发 消息发出去之后，所有的订阅者做出反应
    for(var i = 0, fn; fn = this.peopleList[i++];){
        console.log(arguments);//将参数arguments化作一个数组
        
        fn.apply(this, arguments);
    }
}
// 产生订阅者的过程
zk.listen(function (msg) {
    console.log(`收到了你${msg}的信息，决定给红包`);
});
zk.listen(function (msg) {
    console.log(`收到了你${msg}的信息，打飞机来`);
});
zk.listen(function (msg) {
    console.log(`收到了你${msg}的信息，作为情敌表示不开心`);
});
zk.trigger('曾凯同学要结婚了');
zk.trigger('曾凯同学生了大胖小子');