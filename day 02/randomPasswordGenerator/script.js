const randompasswordbutton = document.getElementById("randompasswordbutton");
let randompasswortptxt = document.getElementById("randompasswortptxt");


randompasswordbutton.onclick = function() {
    
    const length = 20;
    const lowercase = true;
    const uppercase = true;
    const numbers = true;
    const symbols = true;


    const lowchars = "qwertyuioplkjhgfdsazxcvbnm";
    const upperchars = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    const numbchars = "01234567890123456789";
    const symbolchars = "!@#$%^&*<,>.?/:;+-_)(=";


    let allowedchars = "";
    let password = ""; 


    allowedchars += lowercase ? lowchars : "";
    allowedchars += uppercase ? upperchars : "";
    allowedchars += numbers ? numbchars : "";
    allowedchars += symbols ? symbolchars : "";

    for(let i = 0; i < length; i++){
        const randomindex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomindex];
    }

    randompasswortptxt.textContent = password;
};