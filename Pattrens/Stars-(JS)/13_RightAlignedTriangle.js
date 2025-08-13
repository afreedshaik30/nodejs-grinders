// 13. Pattern – Right Aligned Triangle

let num = 4;
for (let row = 1; row <= num; row++) {
  // spaces
  for (let space = 1; space <= num - row; space++) {
    process.stdout.write(" ");
  }

  // star
  for (let star = 1; star <= row; star++) {
    process.stdout.write("*");
  }
  console.log("");
}
