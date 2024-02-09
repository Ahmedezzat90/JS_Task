let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let letters= mix.map(function(element){  if (typeof element == "string")  return element }).reduce(function(acc , current){ return `${acc}${current}`;});

console.log(letters); // Elzero
