// 1st Method
function solution(arr) {
  if (arr.length <= 1) {
    return "No second min elemnt in an array";
  }

  let min = Infinity;
  let secondMin = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      secondMin = min;
      min = arr[i];
    } else if (arr[i] < secondMin && arr[i] !== min) {
      secondMin = arr[i];
    }
  }

  if (secondMin === Infinity) {
    return "No 2nd Largest.";
  }

  return secondMin;
}

//2nd Method
function answer(arr) {
  if (arr.length <= 1) {
    return null;
  }

  let min = arr.sort((a, b) => a - b); //Ascending Order
  return min[1];
}

var arr = [5, 8, 1, 4, 2, 9, 0, 3, 6, 7];
console.log(solution(arr));
console.log(solution([2]));
console.log(solution([]));
console.log(solution([2, 2]));

console.log(answer(arr));
console.log(answer([]));
console.log(answer([5, 2]));
