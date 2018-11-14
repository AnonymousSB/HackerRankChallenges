function alternate(s)
{
    let max = 0;

    for (let i = 0; i < s.length; i++){
        for (let j = i + 1; j < s.length; j++){
            const replace = `[^${s[i]}${s[j]}]`;
            const re = new RegExp(replace, 'g');
            const temp = s.replace(re, '');
            if (/^(.)((?!\1).\1)*(?!\1).?$/.test(temp) && temp.length > max) {
                max = temp.length;
            }
        }
    }

    return max;
}

alternate('abaacdabd');
alternate('beabeefeab');
alternate('asdcbsdcagfsdbgdfanfghbsfdab');
alternate('asvkugfiugsalddlasguifgukvsa');

// 4
// 5
// 8
// 0