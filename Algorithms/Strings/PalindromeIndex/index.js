function palindromeIndex(s)
{
    if (s.split('').reverse().join('') === s) return -1;

    let start = 0;
    let end = s.length - 1;

    while (Math.abs(start - end) > 1) {
        if (s[start] === s[end]) {
            start++;
            end--;
        } else {
            if (s[start + 1] === s[end] && s[start + 2] === s[end - 1])
            {
                return start;
            }
            else if (s[start] === s[end - 1] && s[start + 1] === s[end - 2])
            {
                return end;
            }
            else
            {
                return -1
            }
        }
    }
}

console.log(palindromeIndex('aaab'));
console.log(palindromeIndex('baa'));
console.log(palindromeIndex('aaa'));

// 3
// 0
// -1