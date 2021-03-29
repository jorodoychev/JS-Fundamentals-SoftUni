function solve(string, searchedWord) {
    let text = string.split(' ')
    let counter = 0
    for (const textElement of text) {
        if(textElement === searchedWord){
            counter++
        }
    }

    console.log(counter)
}

solve("This is a word and it also is a sentence", "is")