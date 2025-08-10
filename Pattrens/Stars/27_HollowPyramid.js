// 27. Pattern – Hollow Pyramid

num = 4;

for (let row = 1; row <= num; row++) {
  for (let space = 1; space <= num - row; space++) {
    process.stdout.write(" ");
  }
  for (let star = 1; star <= 2 * row - 1; star++) {
    // last line(Bottom row fully filled), 1st star, last star
    if (row == num || star == 1 || star == 2 * row - 1) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log("");
}
