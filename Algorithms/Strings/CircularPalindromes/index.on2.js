function circularPalindromes(s) {
    const k = s.length;
    const result = [];
    const isPalindrome = (str) => {
        const len = str.length;

        for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }

        return true;
    };
    const subs = (s) => {
        let max = 0;

        for (let i = 0; i < s.length; i++) {
            for (let j = 1; j <= s.length - i; j++) {
                const sub = s.substring(i, i + j);

                if (sub.length < 2) continue;

                if (isPalindrome(sub) && sub.length > max) {
                    max = sub.length;
                }
            }
        }

        return max;
    };

    for (let i = 0; i < k; i++) {
        result.push(subs(s.substring(i, k) + s.substring(0, i)));
    }

    return result;
}

circularPalindromes('aaaaabbbbaaaa');
circularPalindromes('cacbbba');
circularPalindromes('eededdeedede');

// [ 12, 12, 10, 8, 8, 9, 11, 13, 11, 9, 8, 8, 10 ]
// [ 3, 3, 3, 3, 3, 3, 3 ]
// [ 5, 7, 7, 7, 7, 9, 9, 9, 9, 7, 5, 4 ]