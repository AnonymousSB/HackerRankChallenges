function jumpingOnClouds(c)
{
    let jumps = 0;
    for (let i = 0; i < c.length; i++)
    {
        if(!c.length) continue;

        const nextCloud = c[i + 1];
        const nextNextCloud = c[i + 2];

        if(Number.isInteger(nextNextCloud) && nextNextCloud === 0)
        {
            jumps++;
            c.splice(0, 2);
            i--;
        }
        else if(Number.isInteger(nextCloud) && nextCloud === 0) {
            jumps++;
            c.splice(0, 1);
            i--;
        }
    }
    return jumps;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
jumpingOnClouds([0, 0, 0, 0, 1, 0]);
jumpingOnClouds([0, 0, 0, 1, 0, 0]);

// 4
// 3
// 3