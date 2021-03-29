function solve(arr) {
    let map = new Map()
    let neighborhoods = arr[0].split(', ')

    for (const neighborhood of neighborhoods) {
        map.set(neighborhood, [])
    }

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i].split(' - ')
        let neighborhood = current[0]
        let person = current[1]

        if (neighborhoods.includes(neighborhood)) {
            map.get(neighborhood).push(person)
        }
    }
    let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length)

    for (const neighborhood of sorted) {

        let neighborhoodName = neighborhood[0];
        let persons = neighborhood[1];
        console.log(`${neighborhoodName}: ${persons.length}`);

        for (let j = 0; j < persons.length; j++) {
            console.log(`--${persons[j]}`);
        }
    }
}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)