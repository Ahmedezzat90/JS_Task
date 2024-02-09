let start = 0;
let swappedName = "elZerO";

let result = "";
for (let i = 0; i < swappedName.length; i++) {
  let char = swappedName[i];
  if (char.toUpperCase() === char) {
    result += char.toLowerCase();
  } else {
    result += char.toUpperCase();
  }
}

console.log(result);
