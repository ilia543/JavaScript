let start = document.getElementById("start");
let checknumb = document.getElementById("checknumb");

let numbinp = document.getElementById("numbinp");

let randomnumbtxt = document.getElementById("randomnumbtxt");
let lowup = document.getElementById("lowup");

let rand;
let count = 0;

start.onclick = function(){
    rand = Math.floor(Math.random() * 100);
    randomnumbtxt.textContent = "number = x";
    lowup.textContent = "";
};

checknumb.onclick = function(){
    let userInput = Number(numbinp.value);
    count++
    if(userInput > rand){
        lowup.textContent = "random number is low";
    } else if(userInput < rand){
        lowup.textContent = "random number is up";
    } else {
        lowup.textContent = `You win! The number was: ${rand}, try was ${count}`;
        randomnumbtxt.textContent = "Click 'Start' to play again";
    }
};
