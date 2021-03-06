function matrixRotation(matrix, r) {
    const outerLength = matrix.length;
    const innerLength = matrix[0].length;
    let currentOuterLength = outerLength;
    let currentInnerLength = innerLength;
    const minLength = Math.min(outerLength, innerLength);

    for (let z = 1; z <= minLength / 2; z++)
    {
        const minRotations = 2 * (currentInnerLength + currentOuterLength - 2);
        const maxRotations = r % minRotations;
        for (let y = 1; y <= maxRotations; y++)
        {
            const a = matrix[z-1][z-1];
            for (let x= 0 + z - 1; x < innerLength-z; x++)
            {
                matrix[z - 1][x] = matrix[z - 1][x + 1];
            }
            for (let x = z - 1; x < outerLength - z; x++)
            {
                matrix[x][innerLength - z] = matrix[x + 1][innerLength - z];
            }
            for (let x= innerLength - z; x >= z; x--)
            {
                matrix[outerLength - z][x] = matrix[outerLength - z][x - 1];
            }
            for (let x = outerLength - z;x >= z + 1; x--)
            {
                matrix[x][z - 1] = matrix[x - 1][z - 1];
            }
            matrix[z][z - 1] = a;
        }
        currentOuterLength = currentOuterLength - 2;
        currentInnerLength = currentInnerLength - 2;
    }

    let result = '';

    for(let x = 0; x < outerLength; x++) {
        for(let y = 0; y < innerLength; y++) {
            result += matrix[x][y] + ' ';
        }
        result += '\n';
    }

    console.log(result)
}

matrixRotation([
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
], 1);

matrixRotation([
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
], 2);

matrixRotation([
  [ 1, 2, 3, 4 ],
  [ 7, 8, 9, 10 ],
  [ 13, 14, 15, 16 ],
  [ 19, 20, 21, 22 ],
  [ 25, 26, 27, 28 ]
], 7);

matrixRotation([
    [9718805, 60013003, 5103628, 85388216, 21884498, 38021292, 73470430, 31785927],
    [69999937, 71783860, 10329789, 96382322, 71055337, 30247265, 96087879, 93754371],
    [79943507, 75398396, 38446081, 34699742, 1408833, 51189, 17741775, 53195748],
    [79354991, 26629304, 86523163, 67042516, 54688734, 54630910, 6967117, 90198864],
    [84146680, 27762534, 6331115, 5932542, 29446517, 15654690, 92837327, 91644840],
    [58623600, 69622764, 2218936, 58592832, 49558405, 17112485, 38615864, 32720798],
    [49469904, 5270000, 32589026, 56425665, 23544383, 90502426, 63729346, 35319547],
    [20888810, 97945481, 85669747, 88915819, 96642353, 42430633, 47265349, 89653362],
    [55349226, 10844931, 25289229, 90786953, 22590518, 54702481, 71197978, 50410021],
    [9392211, 31297360, 27353496, 56239301, 7071172, 61983443, 86544343, 43779176],
], 40);

// 2  3  4  8
// 1  7 11 12
// 5  6 10 16
// 9 13 14 15

// 3  4  8 12
// 2 11 10 16
// 1  7  6 15
// 5  9 13 14

// 28 27 26 25
// 22  9 15 19
// 16  8 21 13
// 10 14 20  7
//  4  3  2  1

// 93754371 53195748 90198864 91644840 32720798 35319547 89653362 50410021
// 31785927 25289229 10844931 97945481 5270000 69622764 27762534 43779176
// 73470430 90786953 42430633 96642353 88915819 85669747 26629304 86544343
// 38021292 22590518 90502426 67042516 54688734 32589026 75398396 61983443
// 21884498 54702481 17112485 5932542 29446517 2218936 71783860 7071172
// 85388216 71197978 15654690 58592832 49558405 6331115 10329789 56239301
// 5103628 47265349 54630910 56425665 23544383 86523163 96382322 27353496
// 60013003 63729346 51189 1408833 34699742 38446081 71055337 31297360
// 9718805 38615864 92837327 6967117 17741775 96087879 30247265 9392211
// 69999937 79943507 79354991 84146680 58623600 49469904 20888810 55349226