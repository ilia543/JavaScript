
//for in loop ////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for of loop ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// break continue ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let list1 = ["ilia", true, 9, 54.4, "javascript", false, [1,2,"name"]];

// const name = "ilia dzindzibadze";

// for (x of list1){
//     console.log(x);
// }

// for (i of name){
//     console.log(i);
// }



// for of loop not work with objects like:         let obj = {
//                                                     name: "ilia",
//                                                     surname: "dzindzibadze",
//                                                     age: 16,
//                                                     programist: true
//                                                 }
//


// let list2 = [1,2,3,4,5,6,7,8,9,10];

// for (i of list2){
//     if(i === 4){
//         continue;
//     }else if(i === 9){
//         break;
//     }
//     console.log(i)
// }

// let list3 = [];

// for (i of list2){
//     list3.push(i * 2);
// }

// console.log(list3)



/////////////////////////////////////////




// let list4 = [1,2,3,4,5, "ilia", true, [1,2,3]]

// for (i in list4){
//     console.log(i)
// }

// let obj = {
//     name: "ilia",
//     programist: true,
//     age: 16
// }

// for (i in obj){
//     console.log(i);
// }

// for (i in obj){
//     console.log(obj[i]);
// }

// let list5 = [];


// for (i in obj){
//     if(i === "programist"){
//         continue
//     }
//     list5.push(obj[i])
// }

// console.log(list5)

// for in loop is useful in objects but not much useful with lists.



// Map /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Map /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let store = new Map([
//     ["ponchik", 1], ["burger", 2], ["pizza", 6], ["shaurma", 5], ["sushi", 8],
//     ["cola", 1], ["sprite", 1], ["fanta", 1], ["water", 1], ["pepsi", 1]
// ]);
  
// for (let [key, value] of store) {
//     console.log(`${key} cost ${value}$`);
// }

// store.forEach((key, value) => console.log(`${key}$ is cost of ${value}`))


// set /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// set /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// let names = ["Luka", "Ana", "Nika", "Luka", "Sandro", "Ana"];
// let uniqueNames = [...new Set(names)];
// console.log(uniqueNames); // [ 'Luka', 'Ana', 'Nika', 'Sandro' ]

// let numbers = [1, 2, 3, 3, 4, 4, 5];
// let uniqueNumbers = new Set(numbers);
// console.log([...uniqueNumbers]); // [1, 2, 3, 4, 5]


// let Users = new Set(["Luka", "Ana", "Sandro"]);

// console.log(Users.has("Luka")); // true
// console.log(Users.has("Nika")); // false




// Error handling ///////////////////////////////////////////////////////////////////////////////////////////////
// Error handling ///////////////////////////////////////////////////////////////////////////////////////////////

// try {
//     let a = Number(prompt("Enter number: "));
//     let b = Number(prompt("Enter second number: "));
//     let operator = prompt("Enter operator (+, -, *, /): ");

//     if (isNaN(a) || isNaN(b)) {
//         throw new Error("Invalid input: Not a number");
//     }

//     let result;

//     switch (operator) {
//         case "+":
//             result = a + b;
//             break;
//         case "-":
//             result = a - b;
//             break;
//         case "*":
//             result = a * b;
//             break;
//         case "/":
//             if (b === 0) {
//                 throw new Error("Division by zero is not allowed");
//             }
//             result = a / b;
//             break;
//         default:
//             throw new Error("Invalid operator");
//     }

//     console.log(`Result: ${result}`);
// } catch (error) {
//     console.log(`Error: ${error.message}`);
// } finally {
//     console.log("Rate calculator: 1 2 3 4 5");
//     prompt("");
// }

