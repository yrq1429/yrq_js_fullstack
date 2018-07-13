function flattern(arr) {
    // reduce 削藩 逐步缩减，直至一个值
    // reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
    return arr.reduce(function (prev, next) {
        
        console.log(prev, next);
        return prev.concat(Array.isArray(next)?flattern(next):next);
    }, [])   //prev 的初始值为[]
}

console.log(flattern([1,2,[3,4],[5,[6,7]]]));
