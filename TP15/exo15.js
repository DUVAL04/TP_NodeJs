function add(a, b) {
    return new Promise((resolve, reject) => {
        if (a === undefined || b === undefined) {
            reject("Doit fournir deux paramètres");
        } else {
            resolve(a + b);
        }
    });
}
add(2,5)