function twoStrings(s1, s2)
{
    const contains = s1.split('').some(v => s2.includes(v));
    return contains ? 'YES' : 'NO';
}

twoStrings('hello', 'world');
twoStrings('hi', 'world');
twoStrings('wouldyoulikefries', 'abcabcabcabcabcabc');
twoStrings('hackerrankcommunity', 'cdecdecdecde');
twoStrings('jackandjill', 'wentupthehill');
twoStrings('writetoyourparents', 'fghmqzldbc');

// YES
// NO
// NO
// YES
// YES
// NO