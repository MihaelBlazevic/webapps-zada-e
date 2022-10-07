let usporedba = (obj1, obj2) => {
    return JSON.stringify(Object.keys(obj1)) === JSON.stringify(Object.keys(obj2));
}


let a = { a: 1, b: 2, c: 3 }
let b = { a: 321, b: 3, c: 1 }
console.log(usporedba(a, b));