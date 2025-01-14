// 1st Method

function solution(num) {
  let sum = 0;
  let original = num;
  const strNum = String(num);
  let len = strNum.length;

  while (num >= 1) {
    let rem = num % 10;
    sum += Math.pow(rem, len);
    num = Math.floor(num / 10);
  }

  return sum === original;
}

// 2nd Method

function answer(num) {
  let sum = 0;
  const strNum = String(num);
  let len = strNum.length;

  for (let n of strNum) {
    sum += Math.pow(Number(n), len);
  }

  return sum === num;
}

// 3rd Method

function check(num) {
  const strNum = num.toString().split("");
  let len = strNum.length;

  let sum = strNum.reduce((acc, n) => acc + Math.pow(Number(n), len), 0);

  return sum === num;
}

var number = 153;
console.log(solution(number));
console.log(answer(number));
console.log(check(number));
