let numb = document.getElementById("numb");
let random = document.getElementById("random");


random.onclick = function(){
    numb.textContent = Math.floor(Math.random() * 100)
}