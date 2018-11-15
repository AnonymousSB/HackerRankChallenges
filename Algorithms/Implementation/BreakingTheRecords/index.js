function breakingRecords(scores)
{
    let highest = scores[0];
    let lowest = scores[0];
    const results = [0, 0];

    scores.forEach(score =>
    {
        if (score > highest)
        {
            highest = score;
            results[0]++;
        }
        if (score < lowest)
        {
            lowest = score;
            results[1]++;
        }
    });

    return results;
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);

// 2 4
// 4 0