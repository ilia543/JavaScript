

// NESTED OBJECTS //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NESTED OBJECTS //////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let person = {
//     name : "ilia",
//     surname : "dzindzibadze",
//     hobbies : ["programing", "training"],
//     addres : {
//         country : "Georgia",
//         city : "Tbilisi"
//     }
// }


// class Person {
//     constructor(name, age, ...address) {
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address {
//     constructor(street, city, country) {
//         this.city = city;
//         this.country = country;
//     }
// }




// ARRAYS of OBJECTS //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ARRAYS of OBJECTS //////////////////////////////////////////////////////////////////////////////////////////////////////////////



// const fruits = [
//     { name: "apple", color: "red", calories: 95 },
//     { name: "orange", color: "orange", calories: 45 },
//     { name: "banana", color: "yellow", calories: 105 },
//     { name: "coconut", color: "white", calories: 159 },
//     { name: "pineapple", color: "yellow", calories: 37 }
// ];

// console.log(fruits[2].name);

// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);



// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);



// const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

// const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

// console.log(maxFruit);
// console.log(minFruit);




//  SORTING //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  SORTING //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let numbers = [1,4,7,3,5,2,8,0,9,12,18,14,11,100]

// numbers.sort((a,b) => a - b);
// console.log(numbers);

// numbers.sort((a,b) => b - a);
// console.log(numbers);


// const people = [
//     { name: "Spongebob", age: 30, gpa: 3.0 },
//     { name: "Patrick", age: 37, gpa: 1.5 },
//     { name: "Squidward", age: 51, gpa: 2.5 },
//     { name: "Sandy", age: 27, gpa: 4.0 }
// ];

// people.sort((a, b) => a.age - b.age);

// console.log(people);



//  DATE objects //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  DATE objects //////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                  year, month, day, hour, minute, second, ms
// let date0 = new Date(2025,  2,     8,   8,    42,      30,    5);

// let date1 = new Date(21000000000);

// console.log(date1);
// console.log(date0);


// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);
