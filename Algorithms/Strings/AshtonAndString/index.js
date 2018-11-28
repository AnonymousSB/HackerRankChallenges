function ashtonString(s, k){
    const t = {};
    let sum = 0;
    let done = false;
    let letter = '';

    function suffArray(s) {
        const sarr = [];

        for (let i=0; i< s.length; i++) sarr.push(i);

        sarr.sort((a,b) => {
            while(true){
                if (s[a] < s[b]) return -1;
                if (s[a] > s[b]) return 1;
                a++; b++;
                if ((a === b) && (a === s.length-1)) return 0;
                if (a > s.length-1) return -1;
                if (b > s.length-1) return 1;
            }
        });

        return sarr;
    }

    function add(s, index){
        let node = t, depth = 0, i = index;
        while (i < s.length){
            if (s[i] in node) {
                node = node[s[i]];
                depth++; i++;
            } else {
                depth++;
                node[s[i]] = {};
                node = node[s[i]];
                sum += depth;
                if (sum >= k) {
                    done = true;
                    letter = s[i - sum + k];
                    return true;
                }
                i++;
            }
        }
        return false;
    }

    const sa = suffArray(s);

    for (let i of sa) {
        if (add(s, i)) break;
    }

    return letter;
}

ashtonString('dbac', 3);
ashtonString('nvzjkcahjwlhmdiuobjdwbanmvrtadopapbktdtezellktgywrdstdhhayaadqrdhspavjgxprk', 2071);
ashtonString('szkkcedhlkhjnjofbrnvhntsushncjavkmfn', 465);
ashtonString('wcweojncpqwcofrhxnzgbdrd', 251);
ashtonString('pfpgrnlorzzhdoxzsnemubzvkcbbfb', 77)
ashtonString('judaioobpoiteiszvzlscmpmpqqwuvtdqzdapudfimaowsnttalwndievaapwusmtyoksrpcfpqbkgvfiibvlkbjkcy', 2473);

// c
// b
// d
// d
// o
// w