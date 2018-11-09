function add(num1, num2)
{
    let temp = '';
    let sum = '';
    let i = 0;
    let carry = 0;

    num1 = num1.toString();
    num2 = num2.toString();

    if(num2.length > num1.length)
    {
        temp = num2;
        num2 = num1;
        num1 = temp;
    }

    do
    {
        let a = parseInt(num1.charAt(num1.length - 1 - i));
        let b = parseInt(num2.charAt(num2.length - 1 - i));
        b = b ? b : 0;
        temp = (carry + a + b).toString();
        let digitSum = temp.charAt(temp.length - 1);
        carry = parseInt(temp.substr(0, temp.length - 1));
        carry = carry ? carry : 0;
        sum = (i === num1.length - 1) ? temp + sum : digitSum + sum;
        i++;
    }
    while (i < num1.length);

    return sum;
}

function aVeryBigSum(ar)
{
    return ar.reduce((total, num) => {
        total = add(total, num);
        return total;
    }, 0)
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]); // 5000000015
