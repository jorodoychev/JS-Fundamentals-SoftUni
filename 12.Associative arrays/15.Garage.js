function solveGarageMap(inputArr) {
    let garagesMap = new Map();

    for (let row of inputArr) {
        let [garage, carKeyValues] = row.split(' - ');
        if (!garagesMap.has(garage)) {
            garagesMap.set(garage, [carKeyValues]);
        } else {
            let availableCars = garagesMap.get(garage);
            availableCars.push(carKeyValues);
            garagesMap.set(garage, availableCars);
        }
    }
    let sortedGarages = [...garagesMap.entries()].sort((a, b) => a[0] - b[0]);
    let output = '';
    for (let [currGarage, currCarKeyValue] of sortedGarages) {
        output += `Garage № ${currGarage}\n`;
        for (let currCarProperties of currCarKeyValue) {
            currCarProperties = currCarProperties.replace(/: /g, ' - ');
            output += `--- ${currCarProperties}\n`;
        }
    }
    console.log(output);
}

solveGarageMap(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])