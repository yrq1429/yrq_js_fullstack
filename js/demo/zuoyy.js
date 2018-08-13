var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　return () => {
　　　　　　　　return this.name;
　　　　　　};
　　　　}
　　};
console.log(object.getNameFunc()());