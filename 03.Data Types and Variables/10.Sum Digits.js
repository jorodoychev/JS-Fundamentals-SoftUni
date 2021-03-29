function solve(value) {

    let sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

    console.log(sum)


}

solve(543)