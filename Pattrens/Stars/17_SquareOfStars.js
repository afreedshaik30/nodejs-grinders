// 17. Pattern – Square of Stars

num = 3;

for (let row = 1; row <= num; row++) {
  for (let star = 1; star <= num; star++) {
    process.stdout.write("*");
  }
  console.log("");
}
