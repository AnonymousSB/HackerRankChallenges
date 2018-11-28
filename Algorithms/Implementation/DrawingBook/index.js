function pageCount(n, p) {
    const right = Math.floor(n / 2);
    const left = Math.floor(p / 2);

    if(left <= right / 2) {
        return left;
    } else {
        return right - left;
    }
}

console.log(pageCount(6, 2));
console.log(pageCount(5, 4));
console.log(pageCount(6, 5));

// 1
// 0
// 1