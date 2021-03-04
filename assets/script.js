// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppers = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var numb = "0123456789";
var sym = "!@#$%^&*()_-=+[]{}";
var minlen = 8;
var maxlen = 128;


function inputCriteria() {
  var criteria = prompt("Type the criteria you would like to include - Length, Character Types, or press cancel to skip.");
  
  if (criteria == "length") {
  prompt("Enter a number between 8 -128")
  }
  if (criteria == "character types") {
    prompt("Enter lowercase, uppercase, numeric, and/or special characters")
 }
  if (criteria == null) {
    generatePassword
  }
}
   
function generatePassword() {
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", inputCriteria);

