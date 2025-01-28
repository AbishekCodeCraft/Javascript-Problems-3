function solution(word) {
  let modifiedWord = word.toLowerCase();
  let count = 0;

  for (let i = 0; i < modifiedWord.length; i++) {
    if (
      modifiedWord[i] === "a" ||
      modifiedWord[i] === "e" ||
      modifiedWord[i] === "i" ||
      modifiedWord[i] === "o" ||
      modifiedWord[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(solution("Apple Pie"));
console.log(solution("Hello"));
console.log(solution("Cry"));
console.log(solution("Gym"));
