// 10. Count Uppercase Letters – Email Formatter

let email = "HELLO This is A Test EMAIL";
let words = email.split(" ");
let count = 0;

for (let word of words) {
  let upperInWord = 0;

  for (let ch of word) {
    if (ch >= "A" && ch <= "Z") {
      upperInWord++;
    }
  }

  // Only count uppercase letters in words with more than one uppercase letter
  if (upperInWord > 1) {
    count += upperInWord;
  }
}

console.log("Uppercase count:", count);

if (count >= email.length / 2) {
  console.log("not valid email");
}
