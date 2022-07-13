function main(count, array) {
 let maxNum = [array[0]];
 let minNum = Infinity;
 for (let i = 0; i < count; i++) {
    if (maxNum < array[i]) {
        maxNum = array[i];
    }
    if (minNum > array[i]) {
        minNum = array[i];
    }
 }
 console.log(`Min Number: ${minNum.toString()}`);
 console.log(`Max Number: ${maxNum.toString()}`);
}
main(3, [10, 350, 50]);