// Assignment code here
function generatePassword() {
  // Set password length
  var length = window.prompt("How many characters would you like your password to contain?");
  if (isNaN(length) || length < 8) {
    alert("Password length must be at least 8 characters. Using default length of 8.");
    length = 8;
  }
  if (length > 128) {
    alert("Password length must be less than 128 characters. Using default length of 128");
    length = 128
  }
  // Define possible password characters
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";

  var all = lowerCase + upperCase + numbers + special;
  var password = "";

  // Cycle through desired password characters
  var useLowerCase = confirm("Click OK to include lowercase characters.");
  var useUpperCase = confirm("Click OK to include uppercase characters.");
  var useNumbers = confirm("Click OK to include numerical characters.");
  var useSpecial = confirm("Click OK to include special characters.");

  // Use at least one character type, otherwise alert and return
  if (!useLowerCase && !useUpperCase && !useNumbers && !useSpecial) {
    alert("Must select at least one character type. Try again.");
    return "";
  }

  // Build password using selected character types
  for (var i = 0; i < length; i++) {
    var charSet;
    if (useLowerCase && useUpperCase && useNumbers && useSpecial) {
      charSet = all;
    } else {
      charSet = "";
      if (useLowerCase) {
        charSet += lowerCase;
      }
      if (useUpperCase) {
        charSet += upperCase;
      }
      if (useNumbers) {
        charSet += numbers;
      }
      if (useSpecial) {
        charSet += special;
      }
    }
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return password;
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

