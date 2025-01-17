function solution(arr) {
  if (arr.length <= 1) {
    return "No second max elemnt in an array";
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  if (secondMax === -Infinity) {
    throw new Error("No 2nd Largest.");
  }

  return secondMax;
}

var arr = [5, 8, 1, 4, 2, 9, 0, 3, 6, 7];
console.log(solution(arr));
console.log(solution([2]));
console.log(solution([]));
console.log(solution([2, 2]));
