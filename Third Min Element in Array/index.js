// 1st Method
function solution(arr) {
  if (arr.length <= 2) {
    return null;
  }

  let first = Infinity;
  let second = Infinity;
  let third = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] !== first) {
      third = second;
      second = arr[i];
    } else if (arr[i] < third && arr[i] > second) {
      third = arr[i];
    }
  }

  return third;
}

// 2nd Method
function answer(arr) {
  if (arr.length <= 2) {
    return null;
  }

  let min = arr.sort((a, b) => a - b); //Ascending Order
  return min[2];
}

var arr = [10, 3, 6, 2, 8, 7, 5, 9, 1, 4];
console.log(solution(arr));
console.log(solution([]));
console.log(solution([1, 2]));
console.log(solution([1, 5, 3]));

console.log(answer(arr));
console.log(answer([]));
console.log(answer([1, 2]));
console.log(answer([1, 5, 3]));
