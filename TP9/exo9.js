function filtre(arr, values) {
    return arr.filter(item => !values.includes(item));
}

let arr = [1, 2, 3, 4, 5];
let values = [2, 4];
let result = filtre(arr, values);
console.log(result);