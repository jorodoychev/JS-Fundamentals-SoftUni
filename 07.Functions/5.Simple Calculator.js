function calc(num1, num2, op) {
    switch (op) {
        case 'multiply':
            console.log(num1 * num2)
            break
        case 'divide':
            console.log(num1 / num2)
            break
        case 'add':
            console.log(num1 + num2)
            break
        case 'subtract':
            console.log(num1 - num2)
            break

    }

}

calc(5, 5, 'multiply')