// Given two strings, 
// firstName and lastName, 
// return a single string in the format "last, first".

concatName = (firstName, lastName) => {
    return lastName + ', ' + firstName;
}

console.log(concatName('Michael', 'Jordan'));
console.log(concatName('Susan', 'Anthony'));
console.log(concatName(',,,,', '&&'));
console.log(concatName(0,2));


//Write a function to reverse an array.

reverseArray = (array) => {
    array.reverse();
    return array;
}

console.log(reverseArray([1,2,3,4]));
console.log(reverseArray([]));
console.log(reverseArray(['Hello', 'Katie']));


