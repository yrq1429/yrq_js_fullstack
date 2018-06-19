// var o = {};
// o.step = 1;
// var bValue = 1;
// Object.defineProperty(o, 'a', {
//     get: function () {
//         return bValue
//     },
//     set: function (val) {
//         console.log('设置了新的值');
//         bValue = val
//     }
// });
// o.a = 2;   //先执行了set方法
// console.log(o.a);


// (function () {
//     // 启用严格模式
//     'use strict'
//     // 以下严格一点
//     console.log(this);
    
//     var o = {};

//     Object.defineProperty(o, 'a', {
//         value: 7,   //get 与 value 的区别
//         // get: function () {
//         //     return 7
//         // },
//         writable: false
//     });

//     console.log(o.a);
//     // o.a = 10;
//     console.log(o.a);
// })();


// var o = {};
// Object.defineProperty(o, 'a', {
//     value: 1,
//     enumerable: true
// });
// Object.defineProperty(o, 'b', {
//     value: 2,
//     enumerable: false
// });
// Object.defineProperty(o, 'c', {
//     value: 3
//     // enumerable 可枚举  默认不可枚举  是否在for中循环显示出来
// });
// o.d = 4;
// console.log(Object.keys(o));

// for(let key in o){
//     console.log(key, o[key]);
// }
// // api propertyIsEnumerable 判断是否可枚举
// console.log(o.propertyIsEnumerable('c'));

// 'use strict'
// var o = {};
// Object.defineProperty(o, 'a', {
//     configurable: false,
//     get: function () {
//         return 1;
//     }
// });

// console.log(o.a);

// delete o.a;
// console.log(o.a);



function Archiver() {
    var temperature = null;
    var archive = [];
    Object.defineProperty(this, 'temperature', {
        get: function () {
            console.log('get!');
            return temperature;
        },
        set: function (value) {
            temperature = value;
        }
    })
    // var data = {
    //     age: 20,
    //     name: 'yubasba'
    // }
    // for(let key in data){
    //     Object.defineProperty(data, key, {
    //         get: function () {
    //             console.log('get!');
    //             return data[key];
    //         },
    //         set: function (newVal) {
    //             console.log('set!');
    //             data[key] = newVal;
    //         }
            
    //     })
    // }
    // data.age = 20;
}

var arc = new Archiver();

