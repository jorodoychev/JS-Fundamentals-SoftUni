function solve(str, repeatCount) {
    let result = ''
    for (let i = 0; i < repeatCount; i++) {
        result+=str
    }
    console.log(result)
}

solve('abc', 3 )