var prenoms = ['Nel', 'Duval', 'Hans', 'Thibauth', 'Megane', 'Cybelle', 'Leolin', 'Farel'];

function maximum(arr) {
    let max = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > max.length) {
        max = arr[i];
      }
    }
    return max;
  }

console.log(maximum(prenoms));