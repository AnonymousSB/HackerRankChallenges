function camelcase(s)
{
    return (s.match(/[A-Z]/g) || []).length + 1;
}

camelcase('oneTwoThree');
camelcase('saveChangesInTheEditor');

// 3
// 5