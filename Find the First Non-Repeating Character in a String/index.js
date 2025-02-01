function firstNonRepeatingChar(str) {
  let charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("hello"));
console.log(firstNonRepeatingChar("aabbcc"));
console.log(firstNonRepeatingChar("racecars"));
console.log(firstNonRepeatingChar("stress"));
