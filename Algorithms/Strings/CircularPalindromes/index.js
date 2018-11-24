function circularPalindromes(s) {
    s = s.split('');

    let currentLength, equalsLength, j1, j2;
    const length = s.length;
    const length2 = s.length - 1;
    const largest = new Array(s.length).fill(0);

    for (let i = 0; i < s.length; i++) {
        currentLength = 1;
        j1 = (i < 1) ? length2 : i - 1;
        j2 = (i >= length2) ? 0 : i + 1;

        while (s[i] === s[j2] && currentLength < length) {
            currentLength++;
            if (++j2 >= length) j2 = 0;
        }
        equalsLength = currentLength;

        if (currentLength > 1) {
            checkEqual(largest, i, currentLength);
            i += currentLength - 1;
        }

        while (s[j1] === s[j2] && currentLength < length && j1 !== j2) {
            currentLength += 2;
            if (--j1 < 0) j1 = length2;
            if (++j2 >= length) j2 = 0;
        }

        if (currentLength > equalsLength) {
            if(++j1 >= length) j1 = 0;
            checkLargest(largest, j1, currentLength, equalsLength);
        }
    }

    return largest;
}

function checkEqual(largest, position, length) {
    const limit = position + length;
    const middle = position + (length >> 1);
    const even = (length & 1) === 0;

    for (let i = (position - largest.length + length < 0 ? 0 : position - largest.length + length); i < position; i++) {
        if (largest[i] < length)  largest[i] = length;
    }

    for (let i = position + length; i < largest.length; i++) {
        if (largest[i] < length) largest[i] = length;
    }

    for (let i = position, j = position; i < limit; i++, j++) {
        if (j >= largest.length) j = i % largest.length;
        if (largest[j] < length) largest[j] = length;
        if (i < middle){
            length--;
        } else if (i > middle) {
            length++;
        } else if (even) {
            length++;
        }
    }
}

function checkLargest(largest, position, length, equalsLength) {
    const limit1 = position + (length >> 1) - (equalsLength >> 1);
    const limit2 = position + length;

    for (let i = (position - largest.length + length < 0 ? 0 : position - largest.length + length); i < position; i++) {
        if (largest[i] < length) largest[i] = length;
    }

    for (let i = position + length; i < largest.length; i++) {
        if (largest[i] < length)  largest[i] = length;
    }

    for (let i = position, j = position; i < limit1; i++, j++) {
        if (j >= largest.length) j = i % largest.length;
        if (largest[j] < length) largest[j] = length;
        length -= 2;
    }

    for (let i = limit1 + equalsLength, j = limit1 + equalsLength; i < limit2; i++, j++) {
        if (j >= largest.length) j = i % largest.length;
        if (largest[j] < length) largest[j] = length;
        length += 2;
    }
}

circularPalindromes('aaaaabbbbaaaa');
circularPalindromes('cacbbba');
circularPalindromes('eededdeedede');

// [ 12, 12, 10, 8, 8, 9, 11, 13, 11, 9, 8, 8, 10 ]
// [ 3, 3, 3, 3, 3, 3, 3 ]
// [ 5, 7, 7, 7, 7, 9, 9, 9, 9, 7, 5, 4 ]