function repeatedString(s, n)
{
    const count = (s.match(/a/g) || []).length;
    const divisor = Math.floor(n / s.length);
    const remainder = n - (s.length * divisor);

    return divisor * count + s.substr(0, remainder).length;
}

repeatedString('aba', 10);
repeatedString('a', 1000000000000);

// 7
// 1000000000000