function solve(arr) {
    let sorted = arr.sort()
    sorted.forEach((value, index) => console.log(`${index + 1}.${value}`))

}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"])