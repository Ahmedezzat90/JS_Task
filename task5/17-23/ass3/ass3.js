let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(+num++ + +num + +num++ - +num); // 20

// Solution Three
console.log(+num-- + +num -true-true-true); // 20
+num--;
// Solution Four
console.log(+num*2); // 20