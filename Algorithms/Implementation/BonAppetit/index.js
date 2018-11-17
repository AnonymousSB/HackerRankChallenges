function bonAppetit(bill, k, b) {
    bill.splice(k, 1);
    let result;
    const pay = bill.reduce((a, b) => a + b) / 2;

    if (pay === b) {
        result = "Bon Appetit";
    } else {
        result = Math.abs(pay - b);
    }
    console.log(result);
}

bonAppetit([3, 10, 2, 9], 1, 12);
bonAppetit([3, 10, 2, 9], 1, 7);

// 5
// Bon Appetit