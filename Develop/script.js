// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChars = "@#$%^&*"
var finalString = ""
console.log(finalString)
var passwordLength = ""
var finalPassword = ""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// calculate password from chosen options and length
function calculatePassword(letters) {
console.log(passwordLength)
  for (var i = 0; i < Number(passwordLength); i++) {
    var pwd = letters[Math.floor(Math.random() * letters.length)];
    console.log(pwd);
    
    finalPassword += pwd;
  }
  console.log(finalPassword);
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  // reset password box in case generator is used multiple times
  passwordText.value = ""

  var password = promptPassword();
  

  passwordText.value = password;

}


function promptPassword() {
  passwordLength = window.prompt("How many characters long would you like your password? (8 - 126)")
  if (passwordLength < 8) {
    window.prompt("password must be at least 8 characters")
    return
  }

  else if (passwordLength > 126) {
    window.prompt("password can't be longer than 126 characters")
    return
  }

  else {

  }

  var lowCase = window.prompt("For your password, would you like lowercase letters to be included? (y/n)");
  var upCase = window.prompt("For your password would you like uppercase letters to be included (y/n)");
  var specials = window.prompt("For your password, would you like special characters to be included? (y/n)");

 

  if (lowCase == "y") {
    finalString = finalString + lowercase
  }
  
  if (upCase == "y") {
    finalString = finalString + uppercase
  }

  if (specials == "y") {
    finalString = finalString + specialChars
  }
  
  console.log(finalString);

  return calculatePassword(finalString);

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);