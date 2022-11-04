// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays containing different character types
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"]

//Global arrays
var allCharArray = []
var passwordArray = []
var passLength


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  //Resets arrays
  //
  allCharArray = []
  passwordArray = []

}


function checkPasswordLength() { //Function to check for length of password
    var passwordLength = window.prompt("Enter password length. (Min. 8, Max. 128)"); //Prompts to enter number
    passwordLength = +passwordLength; //Makes var into number
  if ((passwordLength < 8) || (passwordLength > 128) || isNaN(passwordLength)) { //input must be between 8-128 or it will ask again 
    checkPasswordLength();
  } else {
    return passwordLength;
  }
}

function checkPasswordChars() { //Function to check for which charaters to be included
  var passwordChars = window.prompt("Enter the characters you want included in the password.\n(Ex. lowercase,uppercase,numbers,special)").split(",")
  passwordChars = passwordChars.map(s => s.trim()); //removes spaces from elements in array
  if (passwordChars.includes("lowercase") || passwordChars.includes("uppercase") || passwordChars.includes("numbers") || passwordChars.includes("special")) { //Checks for which characters were selected
    var includeLowercase = passwordChars.includes("lowercase");
    var includesUppercase = passwordChars.includes("uppercase");
    var includesNumbers = passwordChars.includes("numbers");
    var includesSpecial = passwordChars.includes("special");
  } else {
    passwordChars = [];
    checkPasswordChars();
  }
  var charArray = [];
  if (includeLowercase) {
    charArray = charArray.concat(lowercaseChars);
  } else {

  }
  if (includesUppercase) {
    charArray = charArray.concat(uppercaseChars);
  } else {

  }
  if (includesNumbers) {
    charArray = charArray.concat(numberChars);
  } else {

  }
  if (includesSpecial) {
    charArray = charArray.concat(specialChars);
  } else {

  }
  allCharArray = allCharArray.concat(charArray); //combines all selected characters into an array
}



function generatePassword() {
  var passwordOutput = "";
  passLength = checkPasswordLength();
  checkPasswordChars();
    
    for (i = passLength; i > 0; i--) { //Randomly selects a character for an array of selected characters
      var random = Math.floor(Math.random() * allCharArray.length);
      passwordArray = passwordArray.concat(allCharArray[random]);
    }

    passwordOutput = passwordArray.join(``); //Combines all random characters into a string
    return passwordOutput;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
