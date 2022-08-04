let carName = '';
const concatAndConvert = () => {
  let conCat = Number(carName + 15);
  console.log("The number is "+conCat);
  conCat++;
  console.log("The number after increment is " +conCat);
  function checkIfGreaterThanTwenty(num1){
    let result;
    if ( num1 > 20 ) {
      result = "The number is greater than 20";
      console.log(result.toUpperCase());
      //console.log("The number is greater than 20");
    }
    else if ( num1 < 20 ) {
      result = "The number is less than 20";
      console.log(result.toUpperCase());
      //console.log("The number is less than 20");
    }
    else if ( num1 == 20 ) {
      result = "The number is equal to 20";
      console.log(result.toUpperCase());
      //console.log("The number is equal to 20");
    }
  }
  checkIfGreaterThanTwenty(conCat);
}
concatAndConvert();
