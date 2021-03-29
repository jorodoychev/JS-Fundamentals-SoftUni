function solve(arr) {

    let heroes = []

    arr.map(x => x.split(' / '))

        .map(x => heroes.push({
            name: x[0],
            level: +x[1],
            items: x[2].split(', ').sort((a, b) => a.localeCompare(b)).join(', ')
        }))


    heroes.sort((a, b) => a.level - b.level)

        .map(x => console.log(`Hero: ${x.name}\n level => ${x.level}\n items => ${x.items}`))

}

solve([
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
)