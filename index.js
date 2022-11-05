

// select the button and create an onclick function
// select element ids in html for making passwords visible
// create an event listener for button click and to select a random index from characters array
// create a function that will generate 14 random indexes to display 14 characters onscreen for 1st password
// repeat these steps again for 2nd password
// create a function for generating new numbers with the button is hit next

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let button = document.getElementById("btn");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

function getRandomPassword() {

    button.addEventListener("click", function () {
        document.getElementById("password1").innerHTML = "";
        document.getElementById("password2").innerHTML = "";
        for (let i = 0; i < 14; i++) {
            let randomIndexOne = Math.floor(Math.random() * characters.length);
            password1.textContent += characters[randomIndexOne];

            let randomIndexTwo = Math.floor(Math.random() * characters.length);
            password2.textContent += characters[randomIndexTwo];
        }
    })
}