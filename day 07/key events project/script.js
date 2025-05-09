const myBox = document.getElementById("myBox");

const amount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {

    switch(event.key) {
        case "w":
            y -= amount;
            myBox.textContent = "📈";
            break;
        case "s":
            y += amount;
            myBox.textContent = "📉";
            break;
        case "a":
            x -= amount;
            myBox.textContent = "⬅️";
            break;
        case "d":
            x += amount;
            myBox.textContent = "➡️";
            break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
});

document.addEventListener("keyup", event => {
    myBox.textContent = "💸";
});


// document.addEventListener("keydown", event => {
//     myBox.textContent = "📉";
//     myBox.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event => {
//     myBox.textContent = "📈";
//     myBox.style.backgroundColor = "lightblue";
// });