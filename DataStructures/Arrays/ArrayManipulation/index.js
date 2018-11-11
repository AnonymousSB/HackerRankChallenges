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

        if (end < data.length)
        {
            data[end] -= summand;
        }
    });

    data.reduce((previous, current) =>
    {
        const sum = previous + current;

        if (sum > max)
        {
            max = sum;
        }

        return sum;
    });

    return max;
}

arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]);
arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]);

// 200
// 10