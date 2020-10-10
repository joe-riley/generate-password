
// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = () => {

  var numCharacters = prompt("How many characters long would you like your password to be?", "8");

  if (numCharacters && numCharacters >= 8 && numCharacters <= 128) {
    var characterSets = [];

    if (confirm("Should we allow lowercase characters?")) {
      characterSets.push('abcdefghijklmnopqrstuvwxyz');
    }

    if (confirm("Should we allow uppercase characters?")) {
      characterSets.push('ABCDEFGHIJKLMNOPQRSTUVWKYZ');
    }

    if (confirm("Should we allow digits as characters?")) {
      characterSets.push('1234567890');
    }
    
    if (confirm("Should we allow special symbols?")) {
      characterSets.push('~!@#$%^&*()_+{}|[]\\;\',./:"<>?"');
    }

  } else {
    alert("Unacceptable! Length must be 8 or greater and less than 129.");
  }

  if (characterSets.length === 0) {
    alert("You must select at least one character set from the prompts be it Lowercase, Uppercase, Numbers or Special Characters.");
  } else {

    var password = [];

    //fist include at least one character from each of the character sets.
    characterSets.forEach((value) => {
      var num = randomNumber(0, value.length - 1);
      var character = value[num];
      password.push(character);
    });

    //create a pool of characters from the sets so we can get the rest of the password
    var characterPool = [];
    for (var i = 0; i < characterSets.length; i++) {
      characterPool = characterPool.concat(characterSets[i].split(''));
    };

    //iterate through the requested length of the password minus the characters above
    for (var c = 0 + characterSets.length; c < numCharacters; c++) {
      var num = randomNumber(0, characterPool.length - 1);
      var character = characterPool[num];
      password.push(character);
    };

    //sort the password so that hackers have a hard time of cracking the password.
    for (var startingIndex = password.length - 1; startingIndex > 0; startingIndex--) {
      var randomIndex = randomNumber(0, password.length - 1);
      var swapCharacter = password[startingIndex];
      password[startingIndex] = password[randomIndex];
      password[randomIndex] = swapCharacter;
    };

  }

  return password.join('');
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
