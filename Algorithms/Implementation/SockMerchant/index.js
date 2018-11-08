function sockMerchant(n, ar) {
    const pairs = {};
    let total = 0;
    ar.map((sock) => {
        const socksCounted = pairs.hasOwnProperty(sock);
        if (socksCounted) {
            pairs[sock]++;
            if(pairs[sock] % 2 === 0) total++;
        } else if(!socksCounted) {
            pairs[sock] = 1;
        }
    });
    return total;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); // 3