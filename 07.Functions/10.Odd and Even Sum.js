function solve(number) {
    if (number === 0) {
        console.log('Odd sum = 0, Even sum = 0')

    }
    else {
        let evenSum = number.toString().split('').filter(value => value % 2 === 0).map(Number).reduce((a, b) => a + b)
        let oddSum = number.toString().split('').filter(value => value % 2 !== 0).map(Number).reduce((a, b) => a + b)
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
    }


}


solve(  3495892137259234)

