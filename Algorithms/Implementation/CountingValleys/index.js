function countingValleys(n, s)
{
    return s.split('').reduce((valleys, step) =>
    {
        switch(step) {
            case 'U':
                valleys.currentLevel++;
                if (valleys.currentLevel === 0)
                {
                    valleys.totalValleys++;
                }
                break;
            case 'D':
            default:
                valleys.currentLevel--;
                break;
        }
        return valleys;
    }, {totalValleys: 0, currentLevel: 0}).totalValleys;
}

countingValleys(8, 'UDDDUDUU');
countingValleys(12, 'DDUUDDUDUUUD');

// 1
// 2