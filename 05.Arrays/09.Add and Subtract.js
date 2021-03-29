function solve(data = []) {
    let resultArray = [];
    let originalSum, resultSum;

    data.map((number, index) => {
        number % 2 === 0 ? number += index : number -= index;
        resultArray.push(number);
    })

    originalSum = data.reduce((acc, el) => acc + el);
    resultSum = resultArray.reduce((acc, el) => acc + el);

    console.log(resultArray);
    console.log(originalSum);
    console.log(resultSum);
}

solve([5, 15, 23, 56, 35]);