let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

// 9.A
// let newSport = teamSports;
let newSport = [...teamSports]; // 9.E

newSport.push('Basketball');
newSport.unshift('Badminton');
console.log(`newSport = ${newSport}, \nand teamSports = ${teamSports}`);

// 9.B
let dog2 = dog1;
dog2 = "Brownie";
console.log(dog2);
console.log(dog1);

//9.C
// let cat2 = cat1;
let cat2 = {...cat1}; //9.E
[cat2.name] = ["Garfield"];
console.log(cat2, cat1);

