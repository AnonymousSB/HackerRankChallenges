function caesarCipher(s, k) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);

        if (
            (charCode < 65 || charCode > 122) ||
            (charCode > 90 && charCode < 97)
        ) {
            result += s[i];
        } else {
            let newCharCode = charCode + Math.ceil(k % 26);
            if (charCode >= 97 && newCharCode > 122) {
                newCharCode = newCharCode - 122 + 96;
            }
            if (charCode <= 90 && newCharCode > 90) {
                newCharCode = newCharCode - 90 + 64;
            }
            result += String.fromCharCode(newCharCode);
        }

    }
    return result
}

caesarCipher('middle-Outz', 2);
caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5);
caesarCipher('Hello_World!', 4);
caesarCipher('!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U', 62);

// okffng-Qwvb
// Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj
// Lipps_Asvph!
// !w-bL`-yX!.G`mVKmFlX/MaCyyvSS!CSwts.!g/`He`eJk1DGZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E