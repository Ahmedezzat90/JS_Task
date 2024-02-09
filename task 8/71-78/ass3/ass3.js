let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flattenedArray = myArray.reduce(function( preValue, currentValue) {
  return preValue.concat(currentValue);
}, []);

let result = flattenedArray.reduce(function(preValue, currentValue) {
  return preValue + currentValue;
});

console.log(result); // Elzero
