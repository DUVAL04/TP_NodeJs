function compare(obj1, obj2) {
    for (let key in obj1) {
      if (obj1.hasOwnProperty(key)) {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
    return true;
  }

  let obj1 = { a: 1, b: 2 };
  let obj2 = { a: 1, b: 2 };
  let result = compare(obj1, obj2);
  console.log(result);
  
  