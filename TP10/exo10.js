function extract(array, indexes) {
    let result = [];
    for (let i = 0; i < indexes.length; i++) {
        result.push(array[indexes[i]]);
    }
    return result;
}

let myArray = [1, 2, 3, 4, 5];
let myIndexes = [0, 2, 4];
let extractedValues = extract(myArray, myIndexes);
console.log(extractedValues);
