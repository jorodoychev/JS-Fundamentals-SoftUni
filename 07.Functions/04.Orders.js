function solve(product, quantity) {

    let shop = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00,
    }

    for (let [key, value] of Object.entries(shop)) {
        if (key === product) {
            value *= quantity
            console.log(`${value.toFixed(2)}`);
            return
        }

    }

}

solve('water', 5)