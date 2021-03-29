function solve(input) {
    let str = input.split('')

    for (let i = 0; i < str.length; i++) {
        let charCurr = str[i]
        let charNext = str[i + 1]

        if (charCurr === charNext) {
            str.splice(i, 1)
            i--
        }

    }
    console.log(str.join(''))
}

solve('aaaaabbbbbcdddeeeedssaa')