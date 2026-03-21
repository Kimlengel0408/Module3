// function getGreeting(name) {
//   return "Hello " + name + "!";
// }

const getGreeting = function(name) { //function expression syntax
    console.log(`Hello ${name}!`);
}

const anotherGreeting = (name) => console.log(`Hello again ${name}!`); // arrow function syntax

getGreeting('Kim');
anotherGreeting('Kim');