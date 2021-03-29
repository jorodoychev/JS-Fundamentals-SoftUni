function solve(input) {

    let words = input.replace(/([a-z\d])([A-Z])/g, '$1 $2')
    let output = words.replace(/\s/g, ', ')

    console.log(output)
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')