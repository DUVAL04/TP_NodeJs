function somCube(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += Math.pow(i, 3);
    }
    return sum;
  }
  
console.log(somCube(10));