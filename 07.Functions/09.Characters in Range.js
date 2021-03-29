function solve(char1, char2) {

    let chars = ''

    for (let i = char1.charCodeAt(0) + 1; i < char2.charCodeAt(0); i++) {
        chars += String.fromCharCode(i) + ' '
    }

    console.log(chars)
}

solve('a', 'd')