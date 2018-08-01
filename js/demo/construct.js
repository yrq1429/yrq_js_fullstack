function Person(){

  this.name="monster1935";
  this.age='24';
  this.sex="male";

  // return 1;
  // return {
  //   name:'Object',
  //   age:'12',
  //   sex:'female'
  // }
  return () => {
    console.log("a")
  }

}

console.log(Person())