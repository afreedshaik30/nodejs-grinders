// 6. Extract Digits – Chat App

let message = "Hey my number is 987654 and OTP is 1234";
let digits = "";

// using ---- for of and !isNaN()
for (let char of message) {
  if (!isNaN(char) && char !== " ") {
    digits += char;
  }
}
console.log(digits);

/*
  isNaN(value) → returns true if the value is NOT a number.
  !isNaN(value) → negates that, so it returns true if the value is a number.
  
  console.log(isNaN("5"));    // false  (because "5" can be treated as a number)
  console.log(!isNaN("5"));   // true   (yes, it's a number)

  console.log(isNaN("a"));    // true   ("a" is not a number)
  console.log(!isNaN("a"));   // false  (no, it's not a number)

  Here:
    !isNaN(char) → To ensures the character is a digit (0–9).
    char !== " " → Avoids counting spaces as numbers.

*/