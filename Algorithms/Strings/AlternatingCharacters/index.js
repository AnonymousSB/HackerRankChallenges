function alternatingCharacters(s)
{
    let count = 0;
    const letters = s.split('');

    for (let i = 0; i < letters.length - 1; i++) {
        const letter = letters[i];
        const nextLetter = letters[i + 1];
        if (nextLetter === letter) {
            count++;
        }
    }

    return count;
}

alternatingCharacters('AAAA');
alternatingCharacters('BBBBB');
alternatingCharacters('ABABABAB');
alternatingCharacters('BABABA');
alternatingCharacters('AAABBB');
alternatingCharacters('AAABBBAABB');
alternatingCharacters('AABBAABB');
alternatingCharacters('ABABABAA');
alternatingCharacters('ABBABBAA');

// 3
// 4
// 0
// 0
// 4
// 6
// 4
// 1
// 3