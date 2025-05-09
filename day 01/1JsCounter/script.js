let numb = document.getElementById("numb");
let add = document.getElementById("add");
let minus = document.getElementById("minus");
let refresh = document.getElementById("refresh");
let count = 0

add.onclick = function(){
    count++ 
    numb.textContent = count
}

minus.onclick = function(){
    count-- 
    numb.textContent = count
}


refresh.onclick = function(){
    count = 0
    numb.textContent = count
}