// 第一种  利用indexOf去重
// var array = [1, 1, '1', '1', {a: 1}, {a: 1}]
// function unique(array) {
//   // return Array.from(new Set(array));
//   var res = [];
//   for(var i = 0, len = array.length; i < len; i++){
//     var temp = array[i];
//     if(res.indexOf(temp) === -1){
//       res.push(temp)
//     }
//   }
//   return res
// }
// console.log(unique(array));

// 第二种 双重循环
// var array = [1, 1, NaN, NaN, "1", "1"]
// function unique (array) {
//   var res = [];
//   for(var i = 0; i< array.length; i++) {
//     for (var j = 0; j< res.length; j++) {
//       if (array[i] === res[j]) {
//         break;
//       }
//     }
//     if (j === res.length) {
//       res.push(array[i])
//     }
//   }
//   return res
// }

// console.log(unique(array));

// 第三种
// var arr=[1,1,'true',true,true,5,'F',false, undefined, null,null,undefined, NaN, 0, 1, 'a', 'a', NaN,'NaN',{a: 1}, {a: 1}];

// function uniqueUseNotAllEqual(array) {

//     var temp = [], //一个临时数组
//         mark = true; // 标识位

//     //遍历当前数组
//     for (var i = 0, j = array.length; i < j; i++) {
//         // 标识位的作用就是用来判断是否存在NaN,第一次找到保留到新数组中
//         // 然后标识位置改为false是为了再次找到的时候不推入数组
//         if (array[i] !== array[i]) {
//             // 这里的不等特性,也可以用isNaN判断[ES6]
//             mark && temp.indexOf(array[i]) == -1 ? temp.push(array[i]) : '';
//             mark = false;

//         } else
//             temp.indexOf(array[i]) == -1 ? temp.push(array[i]) : '';

//     }
//     return temp;
// }
// uniqueUseNotAllEqual(arr);
// console.log(uniqueUseNotAllEqual(arr))

// demo2
// function unique(array) {
//   return Array.from(new Set(array));
// }
// console.log(unique([NaN, NaN, null, null, {a: 1}, {a: 1}])) 



// 第四种 filter

// var array = [1, 1, "1", "1", null, null]
// function unique (array) {
//   var res = array.filter((item, index, array) => {
//     return array.indexOf(item) === index
//   })
//   return res
// }
// console.log(unique(array));