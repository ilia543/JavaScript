


// .reduce() /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .reduce() /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const prices = [5, 10, 15, 20, " dollars ", 100, " gel"];

// const total = prices.reduce(sum);

// console.log(total); // 50 dollars 100 gel

// function sum(el1, el2){
//     return el1 + el2;
// }

// const grades = [10, 50, 30, 75, 90];

// console.log(grades.reduce(getmax));

// function getmax(accumulator, element){
//     return Math.max(accumulator, element)
// }






// objects /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// objects /////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// const person = {
//     name: "ilia",
//     surname: "dzindzibadze",
//     age: 16,

//     sayhello: function() { console.log(`hello my name is ${this.name}`) },
    
//     personinfo: function() {
//         return(`name: ${this.name}, surname: ${this.surname}, age: ${this.age}`);
//     }
// }

// console.log(person);
// console.log(person.name);
// person.sayhello(); 
// console.log(person.personinfo());




// classes /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// classes /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// class products{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayproduct(){
//         console.log(`prduct: ${this.name}`);
//         console.log(`price: $${this.price}`)
//     }

//     pricewithtea(tea){
//         return "price with tea = $" + (this.price + this.price * tea)
//     }
// }

// const tea = 0.1

// const product1 = new products("potato", 10);
// const product2 = new products("cucumber", 10);

// product1.displayproduct();
// product2.displayproduct();

// console.log(product1.pricewithtea(tea))





// static /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// static /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class MathMethods{
//     static PI = 3.1415;

//     static diameter(radius){
//         return radius * 2
//     }
// }


// console.log(MathMethods.diameter(10))



// class Users{

//     static usercount = 0;

//     constructor(usename){
//         this.usename = usename;
//         Users.usercount++;
//     }
// }

// const person1 = new Users("ilia");
// const person2 = new Users("gio");
// const person3 = new Users("nika");
// const person4 = new Users("luka");


// console.log(Users.usercount);





// inhertinace /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// super /////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// class animal{
//     alive = true;

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`
//     }

// }


// class Rabbit extends animal{
//     constructor(name, age, run){
//         super(name, age)
//         this.run = run
//     }
// }

// const rabbit = new Rabbit("rabbit", 3, true);

// console.log(rabbit)
// console.log(rabbit.eat())
// console.log(rabbit.alive)



// set, get /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// set, get /////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// class rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newwidth){
//         if(newwidth > 0){
//             this._width = newwidth
//         } else{
//             console.log("incorect width value")
//         }
//     }

//     get width(){
//         return this._width
//     }

//     set height(newheight){
//         if(newheight > 0){
//             this._height = newheight
//         } else{
//             console.log("incorect height value")
//         }
//     }

//     get height(){
//         return this._height
//     }
// }

// const rag = new rectangle(-16, "ilia");
// const rag1 = new rectangle(6, 10);

// console.log(rag)
// console.log(rag1)



