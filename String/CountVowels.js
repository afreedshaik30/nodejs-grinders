// 2. Count Vowels – Text Analysis Tool
// Vowels - aeiou
let text = "Education is the passport to the future.";
let vowels = "aeiou";
let count = 0;

// using for of and &&(logical AND operator)
for (let char of text.toLowerCase()) {
  vowels.includes(char) && count++;
}
console.log("count : ", count);

/*
 Logical AND operater && working
  
  It evaluates the left side.
  If the left side is falsey (e.g., false, 0, "", null, undefined, NaN), it stops and returns that value.
  If the left side is truthy, it evaluates and returns the right side.
*/