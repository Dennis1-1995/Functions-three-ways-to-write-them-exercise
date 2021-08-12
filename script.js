// function declaration:

function numbersOne(one, two){
    let total = (one*one) + (two*two);
    return total * total;
}

console.log(numbersOne(9,6));

// function expression:

const numbersTwo = function(one, two){
    let total = (one*one) + (two*two);
    return total * total;
}

console.log(numbersTwo(9,6));

// arrow function:

const numbersThree = (one, two) => {
    let total = (one*one) + (two*two);
    return total * total;
}

console.log(numbersThree(9,6));