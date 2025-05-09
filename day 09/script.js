let topb = document.getElementById("top");
let leftb = document.getElementById("left");
let rightb = document.getElementById("right");
let downb = document.getElementById("down");

let myDiv = document.getElementById("myDiv");

topb.addEventListener("click", topf);
leftb.addEventListener("click", leftf);
rightb.addEventListener("click", rightf);
downb.addEventListener("click", downf);

let timerId = null;
let x = 40;
let y = 40;

function topf() {
    clearInterval(timerId);
    timerId = setInterval(frame, 5);

    setTimeout(() => {
        clearInterval(timerId);
    }, 500);

    function frame() {
        y -= 2;
        myDiv.style.top = y + "px";
    }
}

function leftf() {
    clearInterval(timerId);
    timerId = setInterval(frame, 5);

    setTimeout(() => {
        clearInterval(timerId);
    }, 500);

    function frame() {
        x -= 2;
        myDiv.style.left = x + "px";
    }
}

function rightf() {
    clearInterval(timerId);
    timerId = setInterval(frame, 5);

    setTimeout(() => {
        clearInterval(timerId);
    }, 500);

    function frame() {
        x += 2;
        myDiv.style.left = x + "px";
        myDiv.style.top = y + "px";
    }
}

function downf() {
    clearInterval(timerId);
    timerId = setInterval(frame, 5);

    setTimeout(() => {
        clearInterval(timerId);
    }, 500);

    function frame() {
        y += 2;
        myDiv.style.top = y + "px";
    }
}

