function twoStrings(s1, s2)
{
    let contains = false;
    const word = s1.split('');

    for (let i = 0; i < word.length; i++)
    {
        if(s2.includes(word[i]))
        {
            contains = true;
            break;
        }
    }

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