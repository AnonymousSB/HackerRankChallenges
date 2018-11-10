function fruitInRange(min, max, tree, fruits)
{
    return fruits.reduce((total, fruit) =>
    {
        const location = fruit + tree;
        if(location >= min && location <= max)
        {
            total++
        }
        return total;
    }, 0);
}

function countApplesAndOranges(s, t, a, b, apples, oranges)
{
    const applesOnHouse = fruitInRange(s, t, a, apples);
    const orangesOnHouse = fruitInRange(s, t, b, oranges);

    console.log(applesOnHouse);
    console.log(orangesOnHouse);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])

// 1
// 1