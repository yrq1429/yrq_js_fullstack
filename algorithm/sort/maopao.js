// var arr = [];
// var arr1 = [35, 99, 18, 76, 12];
// for (var i = 0; i < 100; i++) {
//     arr[i] = i;
// }
// for (var j = 0; j < arr1.length; j++) {
//     console.log(arr1[j]);
// }



// 桶排序
const source_arr = [35, 99,99, 18, 76, 12];

function sort() {
    const arr = [];
    // 方法是利用数组下标排序
    const a = [];
    for (let i = 0; i < 100; i++) {
        a[i] = 0;
    }
    for (let i = 0; i < source_arr.length; i++) {
        const item = source_arr[i];
        a[item] += 1;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            for (let j = 0; j<a[i]; j++) {
                arr.push(i);
            }
        }
    }
    return arr;
}
const sorted_arr = sort();
console.log(sorted_arr);
