//How do you find the missing number in a given integer array of 1 to 10?
let numArray = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10];

missingNumberChecker = () => {
    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] !== i)
        return i;
    }
}

console.log(missingNumberChecker(numArray));