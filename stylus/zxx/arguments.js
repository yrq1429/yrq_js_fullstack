// 参数不限
function sum(...args) {
    // console.log(args);

    //this 自动生成，函数执行方式决定
    // arguments 所有参数
    console.log(arguments.length);
    
    // 类数组，JS生成的怪胎
    // 真正的数组Array.prototype.forEach
    // let total = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     total += arguments[i];
    // }
    // return total;


    // let total = 0;
    // args.forEach(i=>{
    //     total += i;
    // })
    // return total;

    // es6  新方法
    let total = 0;
    Array.from(arguments).forEach(i=>{
        total += i;
    })
    return total;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));