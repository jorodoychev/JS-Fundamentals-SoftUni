function solve(arr1 = [], arr2 = []) {
    let arr3 = []

    for (let i = 0; i < arr1.length; i++) {
        let element = arr1[i];
        if (i % 2 === 0) {
            element = Number(element)
            arr3.push(element + Number(arr2[i]))
        }
        else {
            arr3.push(element + arr2[i])
        }
    }
    console.log(arr3.join(' - '))
}

solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)