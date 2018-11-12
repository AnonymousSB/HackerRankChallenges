function sherlockAndAnagrams(s)
{
    const map = {};
    let count = 0;

    for(let i = 0; i < s.length; i++)
    {
        for(let j=i+1; j <= s.length; j++)
        {
            let hash = s.substring(i, j).split('').sort().join('');

            if(map.hasOwnProperty(hash))
            {
                const value = map[hash];

                count = count + value;
                map[hash]++;
            }
            else {
                map[hash] = 1;
            }
        }
    }

    return count;
}

sherlockAndAnagrams('abba');
sherlockAndAnagrams('abcd');
sherlockAndAnagrams('ifailuhkqq');
sherlockAndAnagrams('kkkk');
sherlockAndAnagrams('cdcd');

// 4
// 0
// 3
// 10
// 5