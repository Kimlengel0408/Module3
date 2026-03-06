const animals = ['Tiger', 'Giraffe']
console.log(animals)
animals.push("Lion", "Hyenas"); // a) Add 2 new values to the end
console.log(animals);
animals.unshift("Kangaroo", "Robert Irwin", "Penguin"); // b) Add 2 new values to the beginning
console.log(animals);

console.log(animals.sort()); // c) Sort the values alphabetically

function replaceMiddleAnimal(newValue) {
    if ((animals.length%2) === 1) {
        animals.splice((animals.length/2), 1, newValue);
        return animals
    } else {
        animals.splice((animals.length/2), 0, newValue);
        return animals;
    }
};

console.log(replaceMiddleAnimal("Crocodile"));




// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.