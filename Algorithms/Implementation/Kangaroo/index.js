function kangaroo(x1, v1, x2, v2)
{
    let canMeet = false;

    if (v1 > v2 && (x1 - x2) % (v2 - v1) === 0)
    {
        canMeet = true;
    }

    return canMeet ? 'YES' : 'NO'
}

kangaroo(1, 2, 2, 1);
kangaroo(0, 3, 4, 2);
kangaroo(0, 2, 5, 3);

// YES
// YES
// NO