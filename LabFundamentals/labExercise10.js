function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.drive = () => {return this.age >= 18};
};

// A
let person1 = new Person("Dorothy", 59);

// B
let person2 = new Person("Blanche", 60);

// C
console.log(person1, "\n", person2);
console.log(`Can ${person1.name} drive? ${person1.drive()}`);
console.log(`Can ${person2.name} drive? ${person2.drive()}`);

// D
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  canDrive(){
    return this.age >= 18;
  }
};

let person3 = new PersonClass("Rose", 61);
console.log(person3);
console.log(person3.canDrive());

// E
