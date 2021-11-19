// Assignment code here
// 1. Prompt user for password criteria
//   . password length 8-128
//   . lowercase uppercase numeric special characters
// 2. Validate the input of criteria
// 3. Generate passsword based on validated criteria



var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
var numbers = '0123456789'
var characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


function generatePassword(plength) {
  var plength = window.prompt('input desired password length');
  plength = parseInt(plength);
  if (isNaN(plength))
    {
    alert("input is not a number");
    }
  else
    {
      if (plength >= 8 && plength <= 128)
        {
        console.log(plength);
        }
    }
  


  //var lowercase = window.prompt('Would you like to include lowercase');
  //var uppercase = window.prompt('Would you like to include Uppercase');
  //var numeric = window.prompt('Would you like to include numbers');
  //var special = window.prompt('Would you like to include Special Charcters');
  










// return variable of generated password here
  return "Password goes here";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
