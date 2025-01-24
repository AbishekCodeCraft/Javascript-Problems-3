// 1st Method
function solution(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (!ans.includes(arr[i])) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

// 2nd Method
function answer(arr) {
  return [...new Set(arr)];
}

var arr = [1, 4, 2, 7, 8, 1, 2, 9, 4];
console.log(solution(arr));
console.log(answer(arr));
