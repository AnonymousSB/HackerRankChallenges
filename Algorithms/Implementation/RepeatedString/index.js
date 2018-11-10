function countA(s){
    return (s.match(/a/g) || []).length;
}

function repeatedString(s, n)
{
    const divisor = Math.floor(n / s.length);
    const remainder = n - (s.length * divisor);

    return divisor * countA(s) + countA(s.substr(0, remainder));
}

repeatedString('aba', 10);
repeatedString('a', 1000000000000);
repeatedString('ceebbcb', 817723);
repeatedString('gfcaaaecbg', 547602);

// 7
// 1000000000000
// 0
// 164280