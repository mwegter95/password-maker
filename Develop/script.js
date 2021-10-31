// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChars = "@#$%^&*"
var numerics = "1234567890"
var finalString = ""
var passwordLength = ""
var finalPassword = ""
var numberOfOptionsSelected = 0

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// calculate password from chosen options and length
function calculatePassword(letters) {
console.log(passwordLength)
var pwdLengthFinal = passwordLength - numberOfOptionsSelected;
  for (var i = 0; i < Number(pwdLengthFinal); i++) {
    var pwd = letters[Math.floor(Math.random() * letters.length)];
    console.log(pwd);
    
    finalPassword += pwd;
  }
  console.log(finalPassword);

  finalPasswordArray = [];
  for (i=0; i<finalPassword.length; i++) {
    finalPasswordArray[i] = finalPassword[i];
  }

  shuffle(finalPasswordArray);
  console.log(finalPasswordArray);
  
  finalPassword = "";
  for (i=0; i<finalPasswordArray.length; i++) {
    finalPassword += finalPasswordArray[i];
  }

  console.log(finalPassword);
  return (finalPassword);
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  // reset the variables so generator can be used multiple times without refreshing
  finalString = ""
  passwordLength = ""
  finalPassword = ""
  numberOfOptionsSelected = 0


// run the function to prompt the user for option selections and generate password
  var password = promptPassword();
  
// make the text on the page equal the generated password
  passwordText.value = password;

}


// prompt user for selections on characters to include in the password, add those characters to the finalString element to be chosen randomly from, and add one of each option chosen to finalPassword to ensure at least one is included in generated password
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
  var nums = window.prompt("For your password, would you like numbers to be included? (y/n)");

 

  if (lowCase == "y") {
    finalString = finalString + lowercase;
    numberOfOptionsSelected += 1;
    finalPassword = finalPassword + lowercase[Math.floor(Math.random() * lowercase.length)];
    console.log(finalPassword);
  }
  
  if (upCase == "y") {
    finalString = finalString + uppercase;
    numberOfOptionsSelected += 1;
    finalPassword = finalPassword + uppercase[Math.floor(Math.random() * uppercase.length)];
    console.log(finalPassword);
  }

  if (specials == "y") {
    finalString = finalString + specialChars;
    numberOfOptionsSelected += 1;
    finalPassword = finalPassword + specialChars[Math.floor(Math.random() * specialChars.length)];
    console.log(finalPassword);
  }

  if (nums == "y") {
    finalString = finalString + numerics;
    numberOfOptionsSelected += 1;
    finalPassword = finalPassword + numerics[Math.floor(Math.random() * numerics.length)];
    console.log(finalPassword);
  }
  
  console.log(finalString);

  return calculatePassword(finalString);

}

// shuffle function for randomizing the password array sourced from comment on this page https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// thank you to Divya M C M for general inspiration and layout, from their breakdown here: https://medium.com/@divyamcm/password-generator-using-html-css-and-javascript-74d079ef5a6e