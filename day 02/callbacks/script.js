

// function hello(callback) {
//     console.log("Hello");
//     callback();
// }

// function goodbye() {
//     console.log("Goodbye!");
// }

// hello(goodbye);


// function fetchData(callback) {
//     console.log("მონაცემების გამოთხოვა...");

//     setTimeout(() => {
//         callback();
//     }, 2000);
// }

// function processData(data) {
//     console.log("მიღებული მონაცემი: " +"ilia dzindzibadze" )
// }

// fetchData(processData);



function step1(callback) {
    setTimeout(() => {
        console.log("ნაბიჯი 1 დასრულდა");
        callback();
    }, 2000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("ნაბიჯი 2 დასრულდა");
        callback();
    }, 3000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("ნაბიჯი 3 დასრულდა");
        callback();
    }, 1000);
}

// Callback Hell ან ერთი სიტყვით პიზდეცი. მისმა დაწერამ შეიძლება გამოიწვიოს ტვინის ადუღება ასევე ეს დამწყებ პროგრამისტს რომ ვანახოთ პროგრამირებას თავს დაანებებს 👍

step1(() => {
    step2(() => {
        step3(() => {
            console.log("ყველა ნაბიჯი დასრულდა!");
        });
    });
});

