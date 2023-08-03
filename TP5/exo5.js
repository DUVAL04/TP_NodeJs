var number = [2, 5, 14, 30, 55, 74, 89];

function maximumPair(arr) {
    let arr2 = [];
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        arr2.push(arr[i]);
      }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > max) {
            max = arr2[i];
        }
    }
    return max;
  }

console.log(maximumPair(number));