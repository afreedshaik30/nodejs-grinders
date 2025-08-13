// 11. Pattern – Increasing Stars

let num = 5;
for (let row = 1; row <= num; row++) {
  for (let star = 1; star <= row; star++) {
    process.stdout.write("* ");
  }
  console.log("");
}
