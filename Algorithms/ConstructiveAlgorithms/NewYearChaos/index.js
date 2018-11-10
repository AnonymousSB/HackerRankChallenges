function minimumBribes(q)
{
    let bribes = 0;
    let tooChaotic = false;
    for (let i = q.length - 1; i >= 0; i--) {
        if (tooChaotic) continue;
        if (q[i] - (i + 1) > 2) {
            tooChaotic = true;
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++)
        {
            if (q[j] > q[i])
            {
                bribes++;
            }
        }
    }
    console.log(tooChaotic ? 'Too chaotic' : bribes);
}

minimumBribes([2, 1, 5, 3, 4]);
minimumBribes([2, 5, 1, 3, 4]);
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]);
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]);

// 3
// Too chaotic
// Too chaotic
// 7
// 4