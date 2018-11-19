function morganAndString(a, b)
{
    a += '~';
    b += '~';
    let answer = '';
    let i = 0;
    let j = 0;
    while (a[i] !== '~' || b[j] !== '~')
    {
        if (a[i] !== '~' && a.slice(i, a.length) < b.slice(j, b.length))
        {
            answer += a[i];
            i++;
        }
        else
        {
            answer += b[j];
            j++;
        }
    }
    return answer;
}

morganAndString('JACK', 'DANIEL');
morganAndString('ABACABA', 'ABACABA');

// DAJACKNIEL
// AABABACABACABA