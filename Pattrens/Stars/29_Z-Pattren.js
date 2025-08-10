// 29. Pattern – Z Pattern
let num = 5;

for (let row = 1; row <= num; row++) {
  for (let star = 1; star <= num; star++) {
    /*
        row == 1 → top row (all stars)
        row == num → bottom row (all stars)
        star == (num - row + 1) → diagonal from top-right to bottom-left
    */
    if (row == 1 || row == num || star == num - row + 1) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log("");
}
