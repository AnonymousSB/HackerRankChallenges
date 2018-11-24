function hackerrankInString(s) {
    const search = 'hackerrank';
    let pointer = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === search[pointer]) {
            pointer++
        }

        if (pointer === search.length) {
            return 'YES';
        }
    }
    return 'NO';
}

console.log(hackerrankInString('hereiamstackerrank'));
console.log(hackerrankInString('hackerworld'));