function superReducedString(s)
{
    while ((s.match(/([a-z])\1/g) || []).length)
    {
        s = s.replace(/([a-z])\1/g, '');
    }

    return s ? s : 'Empty String';
}

superReducedString('aaabccddd');
superReducedString('aa');
superReducedString('baab');

// abd
// Empty String
// Empty String