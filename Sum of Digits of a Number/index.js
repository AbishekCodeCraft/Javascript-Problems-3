function solution(n) {
  let sum = 0;

  let num = Math.abs(n);

  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }

  return sum;
}

var a = 2452;
var b = -2831;

console.log(solution(a));
console.log(solution(b));
