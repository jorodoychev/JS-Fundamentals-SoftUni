function negativePositiveNumbers(arr) {

    arr = arr.map(Number);

    let result = [];
    for(let element of arr) {
        if(element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }

    result.forEach(el => console.log(el));
}

negativePositiveNumbers([3, -2, 0, -1])