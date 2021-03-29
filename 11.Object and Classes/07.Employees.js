function solve(input) {
    let employees = []

    class Employee {
        constructor(name, personalNumber) {
            this.name = name
            this.personalNumber = personalNumber
        }
    }

    for (let i = 0; i < input.length; i++) {
        let employeeData = input[i].split(',')
        let personalNumber = input[i].length
        let [name] = [employeeData[0]]
        employees.push(new Employee(name, personalNumber))

    }

    for (let employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    }

}

solve([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
)