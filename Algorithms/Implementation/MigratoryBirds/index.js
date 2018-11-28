function migratoryBirds(arr) {
    const results = new Array(5).fill(0);
    const groups = arr.reduce((birds, bird) => {
        if (birds[bird]) {
            birds[bird]++
        } else {
            birds[bird] = 1
        }
        return birds;
    }, results);

    return groups.indexOf(Math.max(...groups));
}

migratoryBirds([1, 4, 4, 4, 5, 3]);
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);

// 4
// 3