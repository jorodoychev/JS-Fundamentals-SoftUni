function solve(str1, str2) {
    let str1ToLowerCase = str1.toLowerCase()
    let str2ToLowerCase = str2.toLowerCase()

    let words = str2ToLowerCase.split(' ')

    for (let word of words) {

        if (str1ToLowerCase === word) {
            console.log(str1ToLowerCase)
            break

        } else {
            console.log(`${str1ToLowerCase} not found!`)
            break
        }
    }

}

solve('javascript',
    'JavaScript is the best javascript programming language'
)

solve('python',
    'JavaScript is the best programming language'
)