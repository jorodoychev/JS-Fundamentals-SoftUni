function solve(str) {

    let pattern = new RegExp(/[^A-Z0-9]/ig);

    if (str.length < 6 || str.length > 10) {
        console.log('Password must be between 6 and 10 characters')
    }
    if (pattern.test(str)) {
        console.log('Password must consist only of letters and digits')
    }
    let checkNum = ''

    for (let i = 0; i < str.length; i++) {
        if (Number(str[i])) {
            checkNum += str[i]
        }
    }

    if (checkNum.length < 2) {
        console.log('Password must have at least 2 digits')

    } else {
        console.log('Password is valid')

    }
}

solve('MyPass123')