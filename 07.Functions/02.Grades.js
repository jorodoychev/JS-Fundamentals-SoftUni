function solve(grade) {

    if (grade >= 2.00 && grade <= 2.99) {
        if (grade === 2.50) {
            console.log(`Fail (${grade.toFixed(2)})`)
            return
        }
        console.log(`Fail (${Math.floor(grade)})`)
    } else if (grade >= 3.00 && grade <= 3.49) {
        console.log(`Poor (${grade.toFixed(2)})`)
    } else if (grade >= 3.50 && grade <= 4.49) {
        if (grade === 3.50) {
            console.log(`Poor (${grade.toFixed(2)})`)
            return
        }
        console.log(`Good (${grade.toFixed(2)})`)
    } else if (grade >= 4.50 && grade <= 5.49) {
        if (grade === 4.50) {
            console.log(`Very good (${grade.toFixed(2)})`)
            return
        }
        console.log(`Very good (${grade.toFixed(2)})`)
    } else if (grade >= 5.50 && grade <= 6.00) {
        if (grade === 5.50) {
            console.log(`Excellent (${grade.toFixed(2)})`)
            return
        }
        console.log(`Excellent (${grade.toFixed(2)})`)
    }

}

solve(2.80)