function countTriplets(arr, r) {
    let count = 0;
    const secondNumber = {};
    const thirdNumber = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const nextNum = num * r;

        if (thirdNumber.hasOwnProperty(num))
        {
            count += thirdNumber[num];
        }

        if (secondNumber.hasOwnProperty(num))
        {
            if (thirdNumber.hasOwnProperty(nextNum))
            {
                thirdNumber[nextNum] = thirdNumber[nextNum] + secondNumber[num];
            }
            else
            {
                thirdNumber[nextNum] = secondNumber[num];
            }
        }

        if (secondNumber.hasOwnProperty(nextNum))
        {
            secondNumber[nextNum] = secondNumber[nextNum] + 1;
        }
        else
        {
            secondNumber[nextNum] = 1
        }
    }

    return count;
}

countTriplets([1, 4, 16, 64], 4);
countTriplets([1, 2, 2, 4], 2);
countTriplets([1, 3, 9, 9, 27, 81], 3);
countTriplets([1, 5, 5, 25, 125], 5);

// 2
// 2
// 6
// 4