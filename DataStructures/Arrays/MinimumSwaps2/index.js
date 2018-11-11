function minimumSwaps (arr)
{
    let swaps = 0;
    const max = Math.max.apply(null, arr);

    for (let i = 0; i < max; i++)
    {
        while (arr[i] !== i + 1)
        {
            const home = arr[i] - 1;
            const temp = arr[home];
            arr[home] = arr[i];
            arr[i] = temp;

            if (!arr[i])
            {
                break;
            }
            swaps++;
        }
    }
    return swaps;
}

minimumSwaps([4, 3, 1, 2]);
minimumSwaps([2, 3, 4, 1, 5]);
minimumSwaps([1, 3, 5, 2, 4, 6, 7]);
minimumSwaps([7, 1, 3, 2, 4, 5, 6]);

// 3
// 3
// 3
// 5