function rotateArray(input) {
    let rotations = Number(input.pop());
    rotations %= input.length;

    for(let i=0; i<rotations; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(' '));
}

rotateArray(['1', '2', '3', '4', '2'])