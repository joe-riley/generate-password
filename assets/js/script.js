// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseLetters = lowerCaseLetters.toUpperCase();
var numbers = '1234567890';
var specialCharacters = '~!@#$%^&*()_+{}|[]\\;\',./:"<>?"';

var numCharacters;

var generatePassword = () => {
  numCharacters = prompt("How many characters long would you like your password to be?", "8");
  if (numCharacters && numCharacters > 7 && numCharacters < 129) {
    var characterPool = "";

    if (window.confirm("Should we allow lowercase characters?")) {
      characterPool += lowerCaseLetters;
    }

    if (window.confirm("Should we allow uppercase characters?")) {
      characterPool += upperCaseLetters;
    }

    if (window.confirm("Should we allow digits as characters?")) {
      characterPool += numbers;
    }
    
    if (window.confirm("Should we allow special symbols?")) {
      characterPool += specialCharacters;
    }
  } else {
    alert("Unacceptable! Length must be 8 or greater and less than 129.");
  }

  var password = '';

  for (var c = 0; c < numCharacters; c++) {
    var num = randomNumber(0, characterPool.length - 1);
    var character = characterPool[num];
    password += character;
  }

  return password;
}

var randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
