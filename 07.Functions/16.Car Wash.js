function carWash (input) {

    let commands = {
        soap: x => x + 10,
        water: x => x + x * 0.2,
        'vacuum cleaner': x => x + x * 0.25,
        mud: x => x - x * 0.10
    };

    let value = input.reduce((acc, curr) => commands[curr](acc), 0);


    console.log(`The car is ${value.toFixed(2)}% clean.`);

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])