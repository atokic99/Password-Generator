// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword (){
  var userinput = prompt('how long do you want the password to be?')

  var strcon = Number(userinput)
  str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
  retval = '' 
  console.log (strcon, str)
  for (let i = 0, n = str.length; i < strcon; ++i) {
      retval += str.charAt(Math.floor(Math.random()*n))


    
  }
  return retval
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
