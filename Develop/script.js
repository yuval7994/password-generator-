// Variables
var generateBtn = document.querySelector("#generate");

const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"; 
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const numberCharacters = "1234567890";
const specualCharacters = "!@#$%^&*()";

// Functions
function writePassword() {
  // generates the password
  var password = generatePassword();
  // target the appropriate part of the HTML
  var passwordText = document.querySelector("#password");
  // write the password to the webpage 
  passwordText.value = password;

}

// function generate our password
function generatePassword () {


// asks the user for password length 
// makes sure the user provided a valid length 


// ask the user for password criteria 
// make sure we have at least one criteria 

//random select from pool of characters to generate the password 


}


// Non function code 
generateBtn.addEventListener("click", writePassword);


