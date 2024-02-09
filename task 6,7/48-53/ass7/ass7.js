
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start; i < mix.length; i++) {
    if(mix[i]==1)
    {continue}
    if (typeof mix[i] !== "number") {
    continue;
  } else if (typeof mix[i] === "number") {
    console.log(mix[i]);
  }
}
