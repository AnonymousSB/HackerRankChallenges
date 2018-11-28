function birthday(s, d, m) {
    let count = 0;

    if (m > s.length) return count;

    if (
        s.length === 1 &&
        m === 1 &&
        s[0] === d
    ) {
        return 1;
    }

    for (let i = 0; i < s.length - (m - 1); i++) {
        let total = s[i];

        for (let j = i + 1; j < s.length; j++) {
            if (j - i >= m) break;

            total += s[j];

            if (total === d && j - i === m - 1) {
                count++;
                break;
            }

            if (total > d) break;
        }
    }
    return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
console.log(birthday([4], 4, 1));
console.log(birthday(
    [2, 2, 2, 1, 3, 2, 2, 3,
        3, 1, 4, 1, 3, 2, 2, 1,
        2, 2, 4, 2, 2, 3, 5, 3,
        4, 3, 2, 1, 4, 5, 4],
    10, 4
));
console.log(birthday(
    [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1],
    18, 7
));

// 2
// 0
// 1
// 7
// 3