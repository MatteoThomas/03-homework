var valid1;
var valid2;
var valid3;
var valid4;
var low;
var up;
var num;
var symb;
var uppers = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var numb = "0123456789";
var sym = "!@#$%^&*()_-=+[]{}";
var passPossible = '';
// prompts
function inputCriteria() {
    //tell user to choose a character length
    var charNum = parseInt(
        prompt("Chose a length between 8 and 128 characters")
    );
    var passStore = [];
    //Asks if user would like to use a variety of characters through a series of confirms (Both variable and validator stored as boolean)
    function charSelect() {
        var lowersVal = function () {
            low = confirm("Would you like to use low characters?");
            valid1 = confirm("are you sure?");
        }
        lowersVal();
        while (valid1 === false) {
            lowersVal();
        }
        var uppersVal = function () {
            up = confirm("Would you like to use uppercase characters?");
            valid2 = confirm("are you sure?");
        }
        uppersVal();
        while (valid2 === false) {
            uppersVal();
        }
        var numbVal = function () {
            num = confirm("Would you like to use num characters?");
            valid3 = confirm("are you sure?");
        }
        numbVal();
        while (valid3 === false) {
            numbVal();
        }
        var symbVal = function () {
            symb = confirm("Would you like to use symb characters?");
            valid4 = confirm("are you sure?");
        }
        symbVal();
        while (valid4 === false) {
            symbVal();
        }
    }
    charSelect();
    //Validation that at least one character type was chosen
    if (low === true || up === true || num === true || symbChar === true) {
        alert("Let's get you your password!");
    } else {
        alert("Sorry, you have to choose at least one character type. Let's try this again");
        charSelect();
    }
    if (low === true) {
        passPossible = passPossible + lowers;
    }
    if (up === true) {
        passPossible = passPossible + uppers;
    }
    if (num === true) {
        passPossible = passPossible + numb;
    }
    if (symb === true) {
        passPossible = passPossible + sym;
    }
    for (i = 0; i < charNum; i++) {
        var randomIndex = Math.floor(Math.random() * passPossible.length);
        var randomChar = passPossible[randomIndex];
        passStore = passStore + randomChar;
    }
    return passStore;
}
// Write password to the #password input //
function writePassword() {
    var password = inputCriteria();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// Add event listener to generate button //
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);