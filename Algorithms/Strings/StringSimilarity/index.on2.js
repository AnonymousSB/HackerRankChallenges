function stringSimilarity(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const prefix = s.slice(i);
        if (s === prefix) {
            count += prefix.length;
            continue;
        }
        for (let j = 0; j < prefix.length; j++) {
            if (s.charAt(j) === prefix.charAt(j)) {
                count++
            } else {
                break;
            }
        }
    }
    return count;
}

stringSimilarity('ababaa');
stringSimilarity('aa');

// 11
// 3