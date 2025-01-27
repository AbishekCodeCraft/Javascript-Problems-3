function solution(char) {
  let letter = char.toLowerCase();

  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    console.log("Vowel");
  } else {
    console.log("Consonant");
  }
}

solution("A");
solution("B");
solution("c");
solution("u");
