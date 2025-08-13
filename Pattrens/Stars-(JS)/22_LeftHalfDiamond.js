// 22. Pattern – Left Half Diamond

num = 3;
for (let row = 1; row <= num; row++) {
  for (let star = 1; star <= row; star++) {
    process.stdout.write("*");
  }
  console.log("");
}

for (let row = num - 1; row >= 1; row--) {
  for (let star = 1; star <= row; star++) {
    process.stdout.write("*");
  }
  console.log("");
}
