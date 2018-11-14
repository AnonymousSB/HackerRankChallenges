function minimumNumber(n, password) {
    const requirements = [
        /\d/,
        /[a-z]/,
        /[A-Z]/,
        /[!@#$%^&*()\-+]/
    ];
    const satisfied = requirements.map(r => !r.test(password)).filter(Boolean).length;

    return Math.max(satisfied, 6 - n);
}

minimumNumber(3, 'Ab1');
minimumNumber(11, '#HackerRank');

// 3
// 1