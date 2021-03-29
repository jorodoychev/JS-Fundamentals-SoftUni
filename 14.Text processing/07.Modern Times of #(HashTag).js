function solve(text) {
    let texts = text.split(' ');
    texts.forEach(element => {
        if (element.startsWith(`#`) && (element.length > 1)) {
            let el = element.substring(1, element.length);
            console.log(el);
        }
    });
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')

