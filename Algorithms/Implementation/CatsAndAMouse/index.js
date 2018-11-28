function catAndMouse(x, y, z) {
    const catA = Math.abs(x-z);
    const catB = Math.abs(y-z);

    if (catA === catB) return 'Mouse C';

    if (catA > catB) {
        return 'Cat B';
    } else {
        return 'Cat A';
    }
}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));

// Cat B
// Mouse C