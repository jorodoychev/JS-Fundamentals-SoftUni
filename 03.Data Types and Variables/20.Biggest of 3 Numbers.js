function solve(...numbers) {

    function compareNumbers(a, b) {
        return a - b;
    }
    numbers.sort(compareNumbers)
    let biggest = numbers.pop()
    console.log(biggest)
}

solve(-2,7,3)