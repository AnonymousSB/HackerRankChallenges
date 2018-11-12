function superReducedString(s)
{
    do
    {
        s = s.replace(/([a-z])\1/g, '');
    }
    while ((s.match(/([a-z])\1/g) || []).length);

    return s ? s : 'Empty String'
}

superReducedString('aaabccddd');
superReducedString('aa');
superReducedString('baab');

// abd
// Empty String
// Empty String