let game = document.getElementById("game");
let wordInput = document.getElementById("word-input");
let checkWord = document.getElementById("check-word");
let message = document.getElementById("message");

let wordlist = ["apple", "bread", "chair", "dance", "eagle", "flute", "grape", "house", "ivory", "jelly", "knife", "lemon", "mango", "night", "ocean", "plant", "quest", "river", "stone", "train", "unity", "vivid", "whale", "xylic", "yacht", "zebra", "blaze", "cloud", "dream", "earth", "aaaaa", "eeeee", "iiiii", "ooooo", "uuuuu"]
let word = wordlist[Math.floor(Math.random() * 30 - 1)]


let gusses = 8;

let count = 0
let rowcount = 0

function gamebox(){
    for(let i = 0; i < gusses; i++){
        let row = document.createElement("div");
        row.className = "row";
        for(let j = 0; j < 5; j++){
            let rowbox =  document.createElement("div");
            rowbox.className = "rowbox";
            row.appendChild(rowbox);
        }
        game.appendChild(row)
    }
}
gamebox()


checkWord.addEventListener("click", () =>{
    if (count < gusses){
        if (wordInput.value.length != 5){
            message.style.color = "red"
            message.textContent = "letters in word must be 5";
        } else{
            let row = game.children[rowcount]
            if(wordInput.value === word){
                for(let i = 0; i < 5; i++){
                    let rowbox = row.children[i]
                    rowbox.textContent = wordInput.value[i]
                    rowbox.className = "correct"
                }
                message.style.color = "green"
                message.textContent = "you woon!!!";
                checkWord.disabled = true
            } else{
                let row = game.children[rowcount];

                for(let i = 0; i < 5; i++){
                    let rowbox = row.children[i]
                    rowbox.textContent = wordInput.value[i]
                    if (wordInput.value[i] === word[i]){
                        rowbox.className = "correct"
                    } else if(word.includes(wordInput.value[i])){
                        rowbox.className = "includes"
                    } else{
                        rowbox.className = "wrong"
                    }
                }
                rowcount += 1
            }
        }
        count += 1
    } else{
        message.style.color = "red"
        message.textContent = `you lost word was: ${word}`;
        checkWord.disabled = true
    }
})