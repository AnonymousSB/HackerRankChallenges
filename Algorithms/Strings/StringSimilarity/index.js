function stringSimilarity(s) {
    s = s.split('');

    const length = s.length;
    const z = [length];
    let total = length;
    let L = 0, R = 0;

    for (let i = 1; i < length; i++) {
        if (i > R) {
            L = R = i;
            while (R < length && s[R - L] === s[R]) {
                R++;
            }
            z[i] = R - L;
            R--;
        } else {
            const k = i - L;
            if (z[k] < R - i + 1) {
                z[i] = z[k];
            } else {
                L = i;
                while (R < length && s[R-L] === s[R]){
                    R++;
                }
                z[i] = R - L;
                R--;
            }
        }
        total += z[i];
    }
    return total;
}

stringSimilarity('ababaa');
stringSimilarity('aa');

// 11
// 3