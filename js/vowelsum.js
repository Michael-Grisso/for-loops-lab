function main(count, arrayOfLetters) {
let a = 1;
let e = 2;
let i = 3;
let o = 4;
let u = 5;
let sum = 0;

for (let index = 0; index < count; index++) {
    if (arrayOfLetters[index] === "a") {
        sum += a;
    } else if (arrayOfLetters[index] === "e") {
        sum += e;
    } else if (arrayOfLetters[index] === "i") {
        sum += i;
    } else if (arrayOfLetters[index] === "o") {
        sum += o;
    } else if (arrayOfLetters[index] === "u") {
        sum += u;
    }
}

console.log(sum);
}
main(3, ["i", "x", "u"]);