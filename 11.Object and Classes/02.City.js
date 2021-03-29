function solve(name, area, population, country, postcode) {

    let city = {
        name: name,
        area: area,
        population: population,
        country: country,
        postCode: postcode,
    }

    let entries = Object.entries(city)

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }
    
}

solve("Sofia","492", "1238438", "Bulgaria", "1000")