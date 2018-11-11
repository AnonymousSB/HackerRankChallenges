function arrayManipulation(n, queries)
{
    let max = 0;
    const data = new Array(n).fill(0);
    queries.map(query =>
    {
        const start = query[0] - 1;
        const end = query[1];
        const summand = query[2];
        const slice = data.slice(start, end);
        const deleteCount = end - start;

        for(let i = 0; i < slice.length; i++)
        {
            slice[i] += summand
        }
        data.splice(start, deleteCount, ...slice);
    });
    for (let k = 0; k < data.length; k++) {
        max = Math.max(max, data[k]);
    }
    return max;
}

arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]);
arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]);

// 200
// 10