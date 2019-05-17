//Create a function that returns the index of the first vowel in a string.

vowelChecker = (string) => {
    let indexChecker = [];
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        if (letter === 'a' || letter === 'e' || letter === 'i' ||
            letter === 'o' || letter === 'u') {
            indexChecker.push(i);
        }
    }
    return indexChecker[0];
}

console.log(vowelChecker('apple'));
console.log(vowelChecker('pear'));
console.log(vowelChecker('feet'));
