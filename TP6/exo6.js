function remove(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
        result += char;
      }
    }
    return result;
  }

console.log(remove("bonjour"));
