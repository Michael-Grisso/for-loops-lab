function main(n, p) {
let product = 1;

    for (let i = 1; i <= p; i++) {
        product *= n;
    }
    console.log(product);
}
main(2, 5);