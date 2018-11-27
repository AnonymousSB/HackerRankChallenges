function divisibleSumPairs(k, a) {
    const mod = new Array(k).fill(0);
    let pairs = 0;

    for (let i = 0; i < a.length; i++) {
        const position = a[i] % k;

        pairs += mod[(k - position) % k];
        mod[position]++;
    }

    return pairs;
}

divisibleSumPairs(3, [ 1, 3, 2, 6, 1, 2 ]);

// 5