function simpleArraySum(ar)
{
    return ar.reduce((total, num) => total + num, 0);
}

simpleArraySum([1, 2, 3, 4, 10, 11]);