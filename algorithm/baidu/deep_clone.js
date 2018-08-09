// 1. js 对于复杂对象，引用拷贝
// 2. 递归 树 key => value 

// 1. 递归主体，循环要解决的问题 2. 退出条件，不能一直递归，要退出

function deepClone(o1, o2) {
  for(let k in o2) {
    if (typeof o2[k] === 'object') {
      o1[k] = {};
      deepClone(o1[k], o2[k])      
    } else {
      o1[k] = o2[k];      
    }
  }
}

let obj = {
  a: 1,
  b: [1, 2, 3],
  c: {
    d: 4
  }
}

let emptyObj = Object.create(null); //{}
deepClone(emptyObj, obj)
console.log(emptyObj.a === obj.a);
console.log(emptyObj.b === obj.b);
console.log(emptyObj)