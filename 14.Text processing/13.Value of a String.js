function solve(input, command) {

    // let text = input.split('\n')[0]
    // let command = input.split('\n')[1]
    let sum = 0

    let upperCasePattern = /[A-Z]/g
    let upperCaseChars = input.match(upperCasePattern)
    let upperChars = upperCaseChars.join('')

    let lowerCasePattern = /[a-z]/g
    let lowerCaseChars = input.match(lowerCasePattern)
    let lowerChars = lowerCaseChars.join('')

    if (command === 'LOWERCASE') {
        for (let i = 0; i < lowerChars.length; i++) {
            let numberChar = lowerChars.charCodeAt(i)
            sum += numberChar
        }
    }
    if (command === 'UPPERCASE') {
        for (let i = 0; i < upperChars.length; i++) {

            let numberChar = upperChars.charCodeAt(i)
            sum += numberChar
        }
    }


    console.log(`The total sum is: ${sum}`)


}

solve('HelloFromMyAwesome/PROGRAM','LOWERCASE')
// solve('AC','UPPERCASE')