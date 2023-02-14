##Password Generator
This is a password generator that allows the user to select the length and character types for their password. The generator ensures that the password meets a minimum length of 8 characters and a maximum length of 128 characters. It also ensures that at least one character type is selected.

#The generator offers four character types: lowercase letters, uppercase letters, numbers, and special characters. The user can select which character types they want to include in their password.

#The password is generated using a random selection of characters from the selected character types, with each character type having an equal probability of being selected.

##How to Use
#To use the password generator, click the "Generate Password" button. You will be prompted to select the length of the password. If you enter a value less than 8 or greater than 128, the generator will alert you and use the default values of 8 or 128, respectively.

#You will then be prompted to select which character types you want to include in your password. At least one character type must be selected. If no character types are selected, the generator will alert you and return an empty string.

#Once you have selected your desired password length and character types, the generator will generate a password and display it in the password field.

##Technical Details
#The password generator is written in JavaScript and uses the Math.random() function to select random characters from the selected character types.

#The generator also uses the querySelector() and addEventListener() methods to interact with the HTML document and generate the password.
