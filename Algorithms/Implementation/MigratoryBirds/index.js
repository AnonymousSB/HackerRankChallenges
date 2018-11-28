function migratoryBirds(arr) {
    let max = 1;
    const results = new Array(6).fill(0);

    for (let i = 0; i < arr.length; i++) {
        results[arr[i]]++;
    }

    for (let i = 2; i < 6; i++) {
        if (results[i] > results[max]) {
            max = i;
        }
    }

    return max;
}

migratoryBirds([1, 4, 4, 4, 5, 3]);
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);

// 4
// 3