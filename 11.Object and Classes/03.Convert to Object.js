function solve(str) {
    let person = JSON.parse(str)

    for (let key in person) {
        console.log(`${key}: ${person[key]}`)
    }


}

solve('{"name": "George", "age": 40, "town": "Sofia"}')