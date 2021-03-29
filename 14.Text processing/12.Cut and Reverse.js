function solve(input) {
    let arr = Array.from(input)
    let firstArr = arr.slice(0, arr.length / 2).reverse().join('')
    let secondArr = arr.slice(arr.length / 2, arr.length).reverse().join('')

    console.log(firstArr)
    console.log(secondArr)

}

solve('tluciffiDsIsihTgnizamAoSsIsihT')