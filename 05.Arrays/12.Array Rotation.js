function solve(arr=[], rotations) {
    for (let i = 0; i < rotations; i++) {
        let element = arr.shift();
        arr.push(element)
    }

    console.log(arr.join(' '))
}

solve([51, 47, 32, 61, 21], 2)