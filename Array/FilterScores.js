// 8. Filter Scores > 80 – Student Result Analyzer

let scores = [45, 67, 82, 90, 88, 76];

// using --- for of, ternary operator
for (let score of scores) {
  score > 80 ? console.log(score) : "";

  /*        (or) 
     if (score > 80){
        console.log(score);
     }
  */
}
