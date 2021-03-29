function solve(arr) {

    let cats = []

    class Cat {

        constructor(name, age) {
            this.name = name
            this.age = age
        }

        meow = () => 'Meow';
    }

    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(' ')
        let [name, age] = [catData[0], catData[1]]
        cats.push(new Cat(name, age))
    }

    for (let cat of cats) {
        console.log(`${cat.name}, age ${cat.age} says ${cat.meow()}`)
    }
}

solve(['Mellow 2', 'Tom 5'])

