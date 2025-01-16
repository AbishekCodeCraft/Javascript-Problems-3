// 1st Method

function solution(arr) {
  if (arr.length <= 0) {
    return null;
  }

  if (arr.length < 2) {
    return arr[0];
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// 2nd Method
function answer(arr) {
  if (arr.length <= 0) {
    return null;
  }

  if (arr.length < 2) {
    return arr[0];
  }

  let max = arr.sort((a, b) => a - b); //Ascending Order
  return max[max.length - 1];
}

var arr = [7, 2, 5, 0, 1, 8, 3, 9, 6, 4];

console.log(solution(arr));
console.log(solution([]));
console.log(solution([5]));

console.log(answer(arr));
console.log(answer([]));
console.log(answer([5]));
