function dayOfProgrammer(year)
{
    let day;

    if (year === 1918) {
        day = 26;
    }
    else if
    (
        year <= 1917 && year % 4 === 0 ||
        year > 1918 && year % 400 === 0 ||
        year % 4 === 0 && year % 100 !== 0
    ){
        day = 12;
    }
    else
    {
        day = 13;
    }

    console.log(`${day}.09.${year}`);

    return `${day}.09.${year}`;
}

dayOfProgrammer(2017);
dayOfProgrammer(2016);
dayOfProgrammer(1800);
dayOfProgrammer(1918);

// 13.09.2017
// 12.09.2017
// 12.09.2017
// 26.09.1918