function solution(sentence) {
  let modifiedSentence = sentence.trim().split(" ");

  let result = modifiedSentence.filter((element) => element !== "");

  //   console.log(result);

  return result.length;
}

var sentence =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. dkcg axighcuoqascg jkshc uoqwdgibwcnuov ,casufcy";

console.log(solution(sentence));
