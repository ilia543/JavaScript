let fcheckbox = document.getElementById("fcheckbox");
let scheckbox = document.getElementById("scheckbox");

let fradio = document.getElementById("fradio");
let sradio = document.getElementById("sradio");
let thradio = document.getElementById("thradio");

let submit = document.getElementById("submit");

let checkedp = document.getElementById("checked");


submit.onclick = function(){
    if(fcheckbox.checked && scheckbox.checked && (fradio.checked || sradio.checked || thradio.checked)){
        if(fradio.checked){
            checkedp.textContent = `you are study in Goa and you are man`;
        } else if(sradio.checked){
            checkedp.textContent = `you are study in Goa and you are woman`;
        } else{
            checkedp.textContent = `you are study in Goa`
        }
    } else if((fcheckbox.checked || scheckbox.checked) && (fradio.checked || sradio.checked || thradio.checked)){
        if(fcheckbox.checked){
            if(fradio.checked){
                checkedp.textContent = `you are chad and you are man`;
            } else if(sradio.checked){
                checkedp.textContent = `you are chad and you are woman`;
            } else{
                checkedp.textContent = `you are chad`
            }
        } else{
            if(fradio.checked){
                checkedp.textContent = `you are sigma and you are man`;
            } else if(sradio.checked){
                checkedp.textContent = `you are sigma and you are woman`;
            } else{
                checkedp.textContent = `you are sigma`
            }
        }
    } else if(fradio || sradio || thradio){
        if(fradio.checked){
            checkedp.textContent = `you are man`;
        } else if(sradio.checked){
            checkedp.textContent = `you are woman`;
        } else{
            checkedp.textContent = `who you are?`
        }
    }

}