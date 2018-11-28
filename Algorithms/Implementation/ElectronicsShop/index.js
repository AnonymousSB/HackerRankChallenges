function getMoneySpent(keyboards, drives, b) {
    let mostExpensive = -1;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            const total = keyboards[i] + drives[j];

            if (total <= b && total > mostExpensive) {
                mostExpensive = total;
            }
        }
    }

    return mostExpensive;
}

getMoneySpent([ 3, 1 ], [ 5, 2, 8 ], 10);
getMoneySpent([ 4 ], [ 5 ], 5);

// 9
// -1