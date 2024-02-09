let myString = "EElllzzzzzzzeroo";
let ign = myString.split("").filter(function(currentValue, index, array) {
    return array.indexOf(currentValue) === index;
  })
  .join("");

console.log(ign);
// Elzero