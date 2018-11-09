function staircase(n)
{
    let result = '';

    for(let i = 1; i <= n; i++)
    {
        result = result.concat(' '.repeat(n - i)).concat('#'.repeat(i));
        if (i !== n) result = result.concat('\n');
    }
    console.log(result);
}

staircase(6);

//      #
//     ##
//    ###
//   ####
//  #####
// ######