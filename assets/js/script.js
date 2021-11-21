// Assignment code here
var criteria = []; 

var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var characters = ['"', '!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];


function generatePassword() {
  // clear criteria 
  criteria = [];
  // Prompt user for password length | notify user if input is wrong
  var plength = parseInt(window.prompt('Input a desired password length between 8 - 128'));
  if (isNaN(plength))
    {
    alert("Input is not a number");
    }
  else
    {
      if (plength >= 8 && plength <= 128)
      {
          console.log(plength);
          }  else {
            alert("Please input a number between 8 and 128");
            return null
      }
    }

    // Confirm if user wants lowercase 
    var lowercase = window.confirm('Would you like to include Lowercase?');
    if (lowercase) {
      criteria = criteria.concat(lower);
    }

    // Confirm if user wants lowercase
    var uppercase = window.confirm('Would you like to include Uppercase?');
    if (uppercase) {
      criteria = criteria.concat(upper);
    }

    // Confirm if user wants numbers
    var numeric = window.confirm('Would you like to include Numbers?');
    if (numeric) {
      criteria = criteria.concat(numbers);
    }

    // Confirm if user wants special characters
    var special = window.confirm('Would you like to include Special Charcters?');
    if (special) {
      criteria = criteria.concat(characters);
    }

    // password is generated here based on chosen criteria
    var genpass = "";
    for(var i = 0; i < plength; i++) {
      var random = Math.floor(Math.random() * criteria.length);
      genpass = genpass + criteria[random];
    }
    // return variable of generated password here
    return genpass;
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
