// 26. Pattern – Hollow Right Triangle

num = 5;
for (let row = 1; row <= num; row++) {
  for (let star = 1; star <= row; star++) {
    // num == row → bottom border, star == 1 → left border, star == row → right border
    if (num == row || star == 1 || star == row) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log("");
}
