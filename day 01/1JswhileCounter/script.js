let randomnumbp = document.getElementById("randomnumb");

let sumbitb = document.getElementById("sumbit");

let count = 0;

sumbitb.onclick = function(){
    let randomnumber = Math.floor(Math.random() * 100 + 50);
    randomnumbp.textContent = randomnumber;
    while( count !== randomnumber){
        count++
        console.log(count)
    }
    count = 0

}