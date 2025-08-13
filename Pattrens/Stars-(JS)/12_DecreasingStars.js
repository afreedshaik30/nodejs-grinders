// 12. Pattern – Decreasing Stars

let num = 5;

for (let row = num; row >= 1; row--) {
  for (let star = row; star >= 1; star--) {
    process.stdout.write("* ");
  }
  console.log("");
}
