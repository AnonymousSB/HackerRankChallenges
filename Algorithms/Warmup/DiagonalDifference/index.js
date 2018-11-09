function diagonalDifference(arr)
{
    try
    {
        const sqrt = Math.sqrt(arr.length);
        if (sqrt % 1 !== 0)
        {
            throw new Error('arr length must have whole square root');
        }
        else
        {
            let diagonal1 = 0;
            let diagonal2 = 0;
            for (let i=0; i < arr.length; i+=sqrt) {
                let slicePos = i + sqrt;
                let temp = arr.slice(i, slicePos);
                diagonal1 += temp[slicePos/sqrt - 1];
                diagonal2 += temp[Math.abs(slicePos/sqrt - sqrt)];
            }
            return Math.abs(diagonal1 - diagonal2);
        }

    } catch(error)
    {
        return error;
    }
}

diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12]);

// 15