// 1. Filter Even Numbers – Fitness App

let steps = [3450, 4220, 3891, 5000, 6190, 5800, 7051];

// using iteration
for (let i = 0; i < steps.length; i++) {
  if (steps[i] % 2 === 0) {
    console.log(steps[i]);
  }
}

console.log("-----");

// using Arrow function (filter, forEach)
let ans = steps.filter((s) => s % 2 === 0);
ans.forEach((a) => console.log(a));
