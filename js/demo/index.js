function add(a,b){
  return a+b;  
}
function sub(a,b){
  return a-b;  
}
var a1 = add.apply(sub,[4,2]);　　//sub调用add的方法
var a2 = sub.apply(add,[4,2]);
// alert(a1);  //6     
// alert(a2);  //2
console.log("a1: "+ a1 + " a2: "+ a2)
/*call的用法*/
var a1 = add.call(sub,4,2);