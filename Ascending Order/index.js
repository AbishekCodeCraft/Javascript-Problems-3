// 1st Method
function solution(arr) {
  if (arr.length == 0) {
    return null;
  }

  if (arr.length == 1) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// 2nd Method
function answer(arr) {
  if (arr.length == 0) {
    return null;
  }

  if (arr.length == 1) {
    return arr;
  }

  return arr.sort((a, b) => a - b);
}

var arr = [1, 5, 3, 6, 7, 2, 8, 9, 4, 0];

console.log(solution(arr));
console.log(answer(arr));

