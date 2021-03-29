function solve(arr) {
    let firstEl = Number(arr.shift())
    let lastEl = Number(arr.pop())
    let sum = firstEl + lastEl
    console.log(sum)
}

solve(['20', '30', '40'])