//How do you find the duplicate number on a given integer array ?

let numberArray = [0, 1, 78, 76, 100, 20, 76, 4];

let unique = numberArray.map((number) => {
    return {
        count: 1,
        number: number
    }
}).reduce((a, b) => {
        a[b.number] = (a[b.number] || 0) + b.count
        return a;
    }, {})

let duplicates = Object.keys(unique).filter((a) => unique[a] > 1)

console.log(duplicates);


