function pangrams(s) {
    s = s.toLowerCase();
    let letters = '';

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (letter !== ' ' && !letters.includes(letter)) {
            letters += letter;
        }
    }
    return letters.length === 26 ? 'pangram' : 'not pangram';
}

pangrams('The quick brown fox jumps over the lazy dog');
pangrams('We promptly judged antique ivory buckles for the next prize');
pangrams('We promptly judged antique ivory buckles for the prize');

// pangram
// pangram
// not pangram