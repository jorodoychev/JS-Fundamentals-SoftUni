function solve(input) {
    let phonebook = {}
    for (const string of input) {
        let tokens = string.split(' ')
        let name = tokens[0]
        phonebook[name] = tokens[1]
    }

    for (const key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`)
    }

}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)