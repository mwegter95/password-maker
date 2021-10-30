// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChars = "@#$%^&*"
var finalString = ""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var lowCase = window.prompt("For your password, would you like lowercase letters to be included? (y/n)");
  var upCase = window.prompt("For your password would you like uppercase letters to be included (y/n");
  var specials = window.prompt("For your password, would you like special characters to be included? (y/n)");

  if (lowCase = "y") {
    finalString = finalString + lowercase
  }
  
  if (upCase = "y") {
    finalString = finalString + uppercase
  }

  if (specials = "y") {
    finalString = finalString + specialChars
  }
  
  console.log(finalString);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);