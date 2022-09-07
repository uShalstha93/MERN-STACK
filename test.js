// const testVar = 2000;
const outerFunction = () => {
  const outerFuncVar = 5000;
  const innerFunction = () => {
    // debugger;
    console.log(outerFuncVar);
  }
  return innerFunction;
}
var z = outerFunction;
console.log(z)
