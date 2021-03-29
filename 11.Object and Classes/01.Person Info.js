function solve(firstName, lastName, age) {

    let person = {
        firstName: firstName,
        lastname: lastName,
        age: age,
    }
    for (let key in person) {
        console.log(`${key}: ${person[key]}`)
    }
}

solve("Peter",
    "Pan",
    "20"
)