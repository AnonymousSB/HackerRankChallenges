function pickingNumbers(a) {
    let result = 0;

    for (let i = 0; i < 100; i++) {
        const curr = i;
        const next = i + 1;
        let count = 0;

        for (let j=0; j < a.length; j++) {
            if (a[j] === curr || a[j] === next) {
                count++;
            }
        }

        if (count > result){
            result = count;
        }
    }

    return result
}

pickingNumbers([4, 6, 5, 3, 3, 1]);
pickingNumbers([1, 2, 2, 3, 1, 2]);
pickingNumbers([98, 3, 99, 1, 97, 2]);
pickingNumbers([4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1, 98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1, 1, 9, 2, 4]);

// 3
// 5
// 2
// 33