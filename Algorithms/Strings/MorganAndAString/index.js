function morganAndString(a, b)
{
    a += '~';
    b += '~';

    let result = '';
    let i = 0;
    let j = 0;

    while (a[i] !== '~' || b[j] !== '~')
    {
        if (a[i] !== '~' && a.slice(i, a.length) < b.slice(j, b.length))
        {
            result += a[i];
            i++;
        }
        else
        {
            result += b[j];
            j++;
        }
    }

    return result;
}

morganAndString('JACK', 'DANIEL');
morganAndString('ABACABA', 'ABACABA');

// DAJACKNIEL
// AABABACABACABA