function checkMagazine(magazine, note)
{
    let untraceable = true;
    const hashTable = magazine.reduce((dictionary, word) =>
    {
        if (dictionary.hasOwnProperty(word))
        {
            dictionary[word]++;
        }
        else {
            dictionary[word] = 1;
        }

        return dictionary;
    }, {});

    for (let i = 0; i < note.length; i++)
    {
        const word = note[i];
        if (hashTable.hasOwnProperty(word) && hashTable[word] > 0) {
            hashTable[word]--
        } else {
            untraceable = false;
            break;
        }
    }

    return untraceable ? 'Yes' : 'No';
}

checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today']);
checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four']);
checkMagazine(['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'], ['ive', 'got', 'some', 'coconuts']);

// Yes
// No
// No