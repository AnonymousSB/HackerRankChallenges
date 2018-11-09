function birthdayCakeCandles(ar)
{
    const maxNum = Math.max.apply(null, ar);

    return ar.reduce((total, num) =>
    {
        if(num === maxNum) total++;
        return total;
    }, 0);
}

birthdayCakeCandles([3, 2, 1, 3]);

// 2