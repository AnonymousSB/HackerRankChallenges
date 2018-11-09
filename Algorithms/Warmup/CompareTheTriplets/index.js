function compareTriplets(a, b) {
    const score = [0,0];
    a.map((mark, i) => {
        if(mark > b[i]) score[0]++;
        if(mark < b[i]) score[1]++;
    });
    return score;
}

compareTriplets([5, 6, 7], [3, 6, 10]);
compareTriplets([17, 28, 30], [99, 16, 8]);