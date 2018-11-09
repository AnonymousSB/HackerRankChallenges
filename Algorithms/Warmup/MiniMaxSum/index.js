function miniMaxSum(arr)
{
    let low = 0;
    let high = 0;

    arr.sort().forEach((num, i) =>
    {
        if(i < arr.length - 1)
        {
            low += num;
        }
        if(i > 0)
        {
            high += num;
        }
    });

    console.log(`${low} ${high}`);
}

miniMaxSum([1, 2, 3, 4, 5]);

// 10 14