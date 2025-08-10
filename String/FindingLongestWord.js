// 9. Find Longest Word – Text Utility

let title = "Build modern fullstack web apps";
let wordsArr = title.split(" ");
let longest = "";

for (let word of wordsArr) {
  if (word.length > longest.length) {
    longest = word;
  }
}

console.log("Longest word :", longest);
