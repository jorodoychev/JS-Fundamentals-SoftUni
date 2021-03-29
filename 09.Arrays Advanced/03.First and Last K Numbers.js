function solve(arr) {
    arr = arr.map(Number);
    let k = arr.shift()

    let firstK = arr.slice(0, k).join(' ')
    let lastK = arr.slice((arr.length - k), arr.length).join(' ')

    console.log(firstK)
    console.log(lastK)
}


solve([3, 6, 7, 8, 9])