

// spread operator //////////////////////////////////////////////////////////////////////////////////////////////////
// spread operator //////////////////////////////////////////////////////////////////////////////////////////////////


// function mergeArrays(arr1, arr2) {
//     let arr3 = [...arr1, ...arr2];
//     return arr3;
// }
  
//   console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
// → [1, 2, 3, 4, 5, 6]


// forEach() method //////////////////////////////////////////////////////////////////////////////////////////////////////
// forEach() method //////////////////////////////////////////////////////////////////////////////////////////////////////


// function printElements(arr) {
//   arr.forEach(element => {
//     console.log(element);
//   });
// }

// printElements([1, 2, 3, 4, 5]);




// function printElements(arr) {
//     let arr2 = [];
//     arr.forEach(element => {
//         element *= 2;
//         arr2.push(element);
//     });
//     console.log(arr2);
// }
  
// printElements([1, 2, 3, 4, 5]);



// function printUserNames() {
//     const users = [
//         { name: "გიორგი", age: 25 },
//         { name: "ანა", age: 30 },
//         { name: "ნიკა", age: 22 }
//     ];
//     users.forEach(element => {
//         console.log(element.name);
//     });
// }

// printUserNames();



// function sumArray(arr) {
//     result = 0;

//     arr.forEach(element => {
//         result += element;
//     });
//     return result;
// }
  
// console.log(sumArray([5, 10, 15, 20]));
  


// function countOccurrences(arr, target) {
//     result = 0;

//     arr.forEach(element => {
//         if (element === target){
//             result++;
//         }
//     });
//     return result;
// }
  
// console.log(countOccurrences([1, 2, 3, 2, 4, 2, 5], 2));
  



// .map() //////////////////////////////////////////////////////////////////////////////////////////////////////
// .map() //////////////////////////////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5];

// function func(element){
//     return element * 2;
// }

// console.log(numbers.map(func));;



// const words = ["apple", "banana", "cherry"];

// function func(element){
//     return element.length;
// }

// console.log(words.map(func));




// const users = [
//     { id: 1, name: "Ana" },
//     { id: 2, name: "Giorgi" },
//     { id: 3, name: "Mari" }
// ];

// function func(element){
//     return element.name;
// }

// console.log(users.map(func));



// const dates = ["2025-03-06T12:00:00Z", "2024-12-25T08:30:00Z"];

// function func(element){
//     return element.slice(0, 10);
// }

// function func1(element){
//     return element.slice(0, -10);
// }

// console.log(dates.map(func));
// console.log(dates.map(func1));




// .filter() //////////////////////////////////////////////////////////////////////////////////////////////////////
// .filter() //////////////////////////////////////////////////////////////////////////////////////////////////////


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function func(element){
//     return !(element % 2 === 0);
// }

// console.log(numbers.filter(func));



// const nums = [-3, -2, -1, 0, 1, 2, 3, 4];

// function func(element) {
//     return element > 0;
// }

// console.log(nums.filter(func));


// const users = [
//     { name: "Ana", age: 16 },
//     { name: "Giorgi", age: 22 },
//     { name: "Mari", age: 18 },
//     { name: "Luka", age: 15 }
// ];


// function func(element){
//     return element.age >= 18;
// }

// console.log(users.filter(func))


// const words = ["apple", "banana", "kiwi", "strawberry", "grape"];

// function func(element){
//     return element.length > 5;
// }

// console.log(words.filter(func))


// const words = ["apple", "banana", "avocado", "cherry", "apricot"];

// function func(element){
//     return element[0] === "a";
// }

// console.log(words.filter(func))