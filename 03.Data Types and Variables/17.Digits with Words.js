function solve(input) {
    let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
    for (let i = 0; i < digits.length; i++) {
        if (input === digits[i]){
            console.log(i)
            break
        }

    }
}

solve('nine')