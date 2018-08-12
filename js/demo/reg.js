var a = "a-b-c-d";
var result = a.replace(/((-)+\w)/g, (a) => {
  return a.toLocaleUpperCase()
})
// var b = result.replace(/[-]/g, "");
console.log(result)