// 10. Count Uppercase Letters – Email Formatter

let email = "HELLO This is A Test EMAIL";
let count = 0;

for (let upperCase of email) {
  if (upperCase >= "A" && upperCase <= "Z") {
    count++;
  }
}
console.log(count);
