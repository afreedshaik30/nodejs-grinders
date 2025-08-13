// 28. Pattern – X Pattern
let num = 5;

for (let row = 1; row <= num; row++) {
  for (let star = 1; star <= num; star++) {
    /*
        star == row (left-to-right diagonal)
        star == num - row + 1 (right-to-left diagonal)
    */
    if (star == row || star == num - row + 1) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log("");
}
