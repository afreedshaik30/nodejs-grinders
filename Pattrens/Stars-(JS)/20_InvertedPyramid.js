// 20. Pattern – Inverted Pyramid

let num = 3;

for (let row = num; row >= 1; row--) {
  for (let space = 1; space <= num - row; space++) {
    process.stdout.write(" ");
  }
  for (let star = 1; star <= 2 * row - 1; star++) {
    process.stdout.write("*");
  }
  console.log("");
}
