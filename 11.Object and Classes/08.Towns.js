function solve(input) {

    class Town {

        constructor(name, latitude, longitude) {
            this.name = name;
            this.latitude = latitude;
            this.longitude = longitude;

        }
    }

    for (let i = 0; i < input.length; i++) {
        let data = input[i].split(' | ')
        let [name, latitude, longitude] = [data[0], data[1], data[2]]
        new Town(name, latitude, longitude)

        console.log(`{ town: '${name}', latitude: '${Number(latitude).toFixed(2)}', longitude: '${Number(longitude).toFixed(2)}' }`)
    }

}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)