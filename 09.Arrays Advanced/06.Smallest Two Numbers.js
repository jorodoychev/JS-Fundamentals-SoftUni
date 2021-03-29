function solve(arr) {
    let smallestEl = arr.sort((a, b) => a - b).slice(0, 2).join(' ')
    console.log(smallestEl)
}

solve([30, 15, 50, 5])