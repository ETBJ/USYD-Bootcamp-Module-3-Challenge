// Assignment code here

// Variables
var lowerCased = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCased = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var lengthPrompt = 'How long would you want your Password to be? \n(Note: Please pick between 8 to 212)';
var passwordOutput = document.querySelector("#password");
var passwordArray = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = PasswordGen();
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join('');
}

// Validate Answers
function validAnswer(confirmation, a1) {
  if (confirmation === true) {
    passwordArray = passwordArray.concat(a1)
  } else {
    return;
  }
}

function PasswordGen() {
  alert("let's Generate a Secure Password.");
  
  //initial alerts
  passwordLength = prompt(lengthPrompt); 

  validNum(); //validates the number
  
  validLength = parseInt(passwordLength); //converts passwordLength into a int and stores it in a new var.

  alert("Pleasee pick the criteria for your password. \n(Note: Please pick atleast 1 criteria)") // alert for clarity.

  includes(); // validates that atleast one criteria was chosen. 

  // concats arrays to passwordArray based on user input.
  validAnswer(includeLowerCase, lowerCased);
  validAnswer(includeUpperCase, upperCased);
  validAnswer(includeSpecial, special);
  validAnswer(includeNums, numeric);
  
  var password = [];
  // loops through final passwordArray randomly up to the length of the number chosen by user.
  for (var i = 0; i < validLength; i++ ) {
    password[i] = passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }
  
  return password;
};



// Functions
// validates the number given
function validNum() {
  while (parseFloat(passwordLength) < 8 || parseFloat(passwordLength) > 212  || isNaN(passwordLength) === true || passwordLength === "") {
    alert("Please pick a number between 8 and 128. Please enter a new number");
    passwordLength = prompt(lengthPrompt);
  } 
}

// contains all of the comfirm questions so they can be looped back over if necessary.
function includes() {
  includeLowerCase = confirm('Would you like to include lowercase letters?');
  includeUpperCase = confirm('Would you like to include uppercase letters?');
  includeSpecial = confirm('Would you like to include special characters?');
  includeNums = confirm('Would you like to include nummerical values?');
  includeAtLeastOne();
}

// validates that atleast one criteria was Included.
function includeAtLeastOne() {
  if (includeLowerCase !== true && includeNums !== true && includeSpecial !== true && includeUpperCase !== true) {
    alert("You must pick atleast one criteria");
    includes();
  } 
}

generateBtn.addEventListener("click", writePassword);