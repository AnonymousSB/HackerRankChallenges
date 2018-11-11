function arrayManipulation(n, queries)
{
    let max = 0;
    let data = new Array(n).fill(0);

    queries.forEach(query =>
    {
        const start = query[0] - 1;
        const end = query[1];
        const summand = query[2];

        data[start] += summand;

        if (end < data.length) {
            data[end] -= summand;
        }
    });

    for (let j = 1; j < n; j++)
    {
        data[j] += data[j-1];
        max = Math.max(max, data[j]);
    }

    return max;
}

arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]);
arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]);

// 200
// 10