// Variables
var generateBtn = document.querySelector("#generate");

// defines the possible characters for password 
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"; 
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const numberCharacters = "1234567890";
const specialCharacters = "!@#$%^&*()~";

// Functions
function writePassword() {
  // generates the password
  var password = generatePassword();
  // target the appropriate part of the HTML
  var passwordText = document.querySelector("#password");
  // write the password to the webpage 
  passwordText.value = password;

}

//function to generate password
function generatePassword() {


//requests desired password length 
var passwordLength = window.prompt("How many characters do you wish for the password be?");

//convert password length into an integer 
passwordLength = parseInt(passwordLength);


//cut off function if user entered not a number 
if (isNaN(passwordLength)) {
  window.alert("That is not a number. Try again");
  return; 
}
// makes sure the user provides a valid number  
if (passwordLength > 128 || passwordLength < 8) {
  window.alert("The number of characters must be between 8 and 128. Try again");
  return; 

}


// ask the user for password criteria 

// are lowercase letters going to be included?
var passwordLowercase = window.confirm("Do you wish to include lowercase letters?") 
// are uppercase letters going to be included?
var passwordUppercase = window.confirm("Do you wish to include uppercase letters?") 
// are numbers going to be included?
var passwordNumbers = window.confirm("Do you wish to include numbers?") 
// are special characters going to be included?
var passwordSpecialcharacters = window.confirm("Do you wish to include special characters?") 

// make sure there is at least one criteria 
if ((passwordLowercase === false) && (passwordUppercase === false) && (passwordNumbers === false) && (passwordSpecialcharacters === false)){
  window.alert("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character")
  return; 
}


//assenble the characters 
var characters = "";

//include the lowercase letters 
if(passwordLowercase === true) {
characters = characters + lowercaseCharacters
}

//include the uppercase letters 
if(passwordUppercase === true) {
characters = characters + uppercaseCharacters
}

//include the numbers 
if(passwordNumbers === true) {
characters = characters + numberCharacters
}
  //include the special characters 
if(passwordSpecialcharacters === true) {
characters = characters + specialCharacters
}


//randomly generate the password
var result = ""; 
var charactersLength = characters.length 

for (i=0;i<passwordLength;i=i+1) {

var randomNumber = Math.random()*charactersLength 


result = result + characters.charAt(randomNumber)

}
return result; 
}
// Non function code 
generateBtn.addEventListener("click", writePassword);

