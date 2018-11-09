function plusMinus(arr)
{
    const length = arr.length;
    let positive = 0;
    let negative = 0;
    let neutral = 0;

    arr.map((num) =>
    {
        switch(Math.sign(num))
        {
            case 1:
                positive++;
                break;
            case -1:
                negative++;
                break;
            case 0:
            default:
                neutral++;
                break;
        }
    });
    const positiveRatio = (positive/length).toFixed(6);
    const negativeRatio = (negative/length).toFixed(6);
    const neutralRatio = (neutral/length).toFixed(6);

    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(neutralRatio);
}

plusMinus([-4, 3, -9, 0, 4, 1]);

// 0.500000
// 0.333333
// 0.166667