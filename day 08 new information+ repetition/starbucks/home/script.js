let navbar = document.getElementById("navbar");
let coffeebackcolor = document.getElementById("coffeebackcolor");
let bigcoffee = document.getElementById("bigcoffee");
let coffeebuttongreen = document.getElementById("coffeebuttongreen");
let coffeebuttonorange = document.getElementById("coffeebuttonorange");
let coffeebuttonpink = document.getElementById("coffeebuttonpink");
let coffeesale = document.getElementById("coffeesale");
let coffeediscount = document.getElementById("coffeediscount");
let smothsale = document.getElementById("smothsale");
let smothdiscount = document.getElementById("smothdiscount");
let clicktobuy =document.getElementById("clicktobuy");


coffeebuttongreen.addEventListener('click', function(){
    
    bigcoffee.src = "green_coffee.png";

    bigcoffee.style.transform = "scale(-1, 1) rotate(45deg)";
    bigcoffee.style.width = "600px";
    bigcoffee.style.left = "870px";
    bigcoffee.style.top = "200px";

    coffeebackcolor.style.backgroundColor = "rgb(0, 172, 0)";
    coffeebackcolor.style.boxShadow = "-30px -30px 60px green"

    navbar.style.backgroundColor = "lightgreen";
    navbar.style.border = "2px solid green";
    navbar.style.boxShadow = "4px 4px 0px lightgreen";

    coffeesale.style.boxShadow = "2px 2px 10px green";
    coffeediscount.style.backgroundColor = "rgb(123, 255, 123)";
    coffeediscount.style.border = "2px solid green";

    smothsale.style.boxShadow = "2px 2px 10px green";
    smothdiscount.style.backgroundColor = "rgb(123, 255, 123)";
    smothdiscount.style.border = "2px solid green";

    clicktobuy.style.color = "green";
})

coffeebuttonorange.addEventListener('click', function(){

    bigcoffee.src = "orange_coffee.png";

    bigcoffee.style.width = "300px";
    bigcoffee.style.transform = "scale(-1, 1) rotate(45deg)";
    bigcoffee.style.left = "1020px";
    bigcoffee.style.top = "250px";

    coffeebackcolor.style.backgroundColor = "orange";
    coffeebackcolor.style.boxShadow = "-30px -30px 60px orange";

    navbar.style.backgroundColor = "orange";
    navbar.style.border = "2px solid rgb(89, 58, 0)";
    navbar.style.boxShadow = "4px 4px 0px orange";

    coffeesale.style.boxShadow = "2px 2px 10px orange"
    coffeediscount.style.backgroundColor = "rgb(255, 205, 143)";
    coffeediscount.style.border = "2px solid rgb(89, 58, 0)";

    smothsale.style.boxShadow = "2px 2px 10px orange";
    smothdiscount.style.backgroundColor = "rgb(255, 205, 143)";
    smothdiscount.style.border = "2px solid rgb(89, 58, 0)";

    clicktobuy.style.color = "orange";
})

coffeebuttonpink.addEventListener('click', function(){

    bigcoffee.src = "pink_coffee.png";

    bigcoffee.style.width = "650px";
    bigcoffee.style.transform = "scale(-1, 1) rotate(45deg)";
    bigcoffee.style.left = "840px";
    bigcoffee.style.top = "250px";

    coffeebackcolor.style.backgroundColor = "rgb(237, 137, 255)";
    coffeebackcolor.style.boxShadow = "-30px -30px 60px rgb(237, 137, 255)";

    navbar.style.backgroundColor = "rgb(237, 137, 255)";
    navbar.style.border = "2px solid rgb(199, 0, 234)";
    navbar.style.boxShadow = "4px 4px 0px rgb(237, 137, 255)";

    coffeesale.style.boxShadow = "2px 2px 10px rgb(237, 137, 255)"
    coffeediscount.style.backgroundColor = "rgb(237, 137, 255)";
    coffeediscount.style.border = "2px solid rgb(199, 0, 234)";

    smothsale.style.boxShadow = "2px 2px 10px rgb(237, 137, 255)";
    smothdiscount.style.backgroundColor = "rgb(237, 137, 255)";
    smothdiscount.style.border = "2px solid rgb(199, 0, 234)";

    clicktobuy.style.color = "rgb(237, 137, 255)";
})

// სმუზის გადმოსხმის ანიმაცია სტარტი ////////////////////////////////////////////////////////////////////////////////
const container = document.getElementById('container');
const chocosmoth = document.getElementById('chocosmoth');
let ballInterval;
let balls = [];

const createBall = (x, y, delay) => {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
    ball.style.animationDelay = `${delay}s`;
    const spreadX = (Math.random() - 0.5) * 400;
    ball.style.setProperty('--spread-x', `${spreadX}px`);
    container.appendChild(ball);

    balls.push(ball);

    setTimeout(() => {
        ball.remove();
        balls = balls.filter(b => b !== ball);
    }, 30000);
};

const generateBalls = () => {
    const startX = window.innerWidth / 2 + 212;
    const startY = -40;
    let count = 0;
    ballInterval = setInterval(() => {
        const xOffset = (count % 4) * 10;
        const x = startX;
        const y = startY;
        createBall(x, y, 2);
        count++;
        if (count === 300) clearInterval(ballInterval);
    }, 100);
};

chocosmoth.addEventListener('mouseover', () => {
    clearInterval(ballInterval);
    generateBalls();
});

chocosmoth.addEventListener('mouseleave', () => {
    clearInterval(ballInterval);

    balls.forEach(ball => ball.remove());
    balls = [];
});

// სმუზის გადმოსხმის ანიმაცია end ////////////////////////////////////////////////////////////////////////////////