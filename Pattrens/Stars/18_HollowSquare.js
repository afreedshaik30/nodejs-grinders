// 18. Pattern – Hollow Square

let num = 4;

for (let row = 1; row <= num; row++) {
  for (let star = 1; star <= num; star++) {
    if (row == 1 || row == num || star == 1 || star == num) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log("");
}
