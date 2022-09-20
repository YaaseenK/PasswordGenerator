// Assignment Code;
let generateBtn = document.querySelector("#generate");

// Length of Password Chosen by User;
let passwordLength;
// Users options;
let containNumbers; 
let containLower; 
let containUpper;
let containSymbols
// Options user has chosen; 
let userChoices=[];

// Array of Numbers  ;
let numbers = [0,1,2,3,4,5,6,7,8,9,];
// Array of symbols  ;
let symbols = ['!', '@', '#', '$', '^', '&', '*', '”' , '%', "'", '(', ')' , '+', '-' , '.', '/', ':', ';' , '<' , '=' , '>' , '?' , '~' ];
// Creates an array of 26 undefined items // we go through the array and creates an array of numbers from 97 - 122 // 97 - 122 is the key codes for lower case letters a-z;
let characterCodes = Array.from(Array(26)).map( (_, i) => i +97);
// converts the key codes into the lower case letters
let lowerCaseLetters = characterCodes.map(code=> String.fromCharCode(code));
//  takes the lowerCaseLetters array and converts the letters to upper case
let upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase());

// Write password to the #password input;
// 
// generate a random function which takes 2 parameters a max and a min value;
function getRandomInt(min, max) {
  // return result to which ever function calls getRandomInt function;
  return Math.floor(Math.random() * (max - min) + min);
}

//  this function takes one parameter which is a list;
// It selects a random list from the user's choices.;
function getRandomChoice(list){
  return list[getRandomInt(0, list.length)];
}

// asks the user to confirm their choices for what they want to make their password out of ... Options include, Numbers/LowerCase/UpperCase/Symbols...;
function confirmNumber(){
  containNumbers = window.confirm('Should the password contain numbers?');
  if(containNumbers === true){
      userChoices.push(numbers);
  }
};
// asks the user to confirm their choices for what they want to make their password out of ... Options include, Numbers/LowerCase/UpperCase/Symbols...;
function confirmLowerCase(){
  containLower = window.confirm('Should the password contain lower case characters?');
  if(containLower === true){
      userChoices.push(lowerCaseLetters)
  };
}
// asks the user to confirm their choices for what they want to make their password out of ... Options include, Numbers/LowerCase/UpperCase/Symbols...;
function confirmUpperCase(){
  containUpper = window.confirm('Should the password contain upper case characters?');
  if(containUpper === true){
      userChoices.push(upperCaseLetters)
    };
};
// asks the user to confirm their choices for what they want to make their password out of ... Options include, Numbers/LowerCase/UpperCase/Symbols...;
function confirmSymbols(){
  containSymbols = window.confirm('Should the password contain special symbols?');
    if(containSymbols === true){
      userChoices.push(symbols)
    };
};

function generatePassword(){  
  // while the password length entered by the user is not a number or !between 8-128 then loop;
  while(true){
    // checks if password is null (if user hits cancel);
    if(passwordLength === null){
      window.alert('You have canceled, the page will be refreshed. Please try again!')
      // reloads page;
      location.reload();
      return;
    }
    passwordLength = window.prompt('How many characters should the password contain?');
    // isNaN = is not a number;
    if(isNaN(passwordLength)){
      window.alert('Input a number! \nPlease try again!')
    }
    // if passwordLength is smaller than 8 OR if it is greater than 128;
    else if(passwordLength < 8 || passwordLength >128) {
      window.alert('Password length can be from 8-128 characters. \nPlease try again!')
    }
    // once everything is valid then we break out of the while loop and continue with function  ;
    else {
    break;
    };
  };

  // while user has not at least one character type should be selected - loop;
  while(true){
    confirmNumber();
    confirmLowerCase();
    confirmUpperCase();
    confirmSymbols();
    if(containNumbers === false && containLower === false && containUpper === false && containSymbols === false) {
      window.alert('To generate password at least one character type should be selected');
    }
    else{
      break
    }
  }
  // yourPassword;
  let yourPassword = '';
  // iterate until iteration is equal to users passwordLength;
  for(let i = 0; i < passwordLength; i++){
    // choose a random array from the usersChoices by generating a random number = to the list;
    let randomArray = getRandomChoice(userChoices);
    // we pick a random element inside of the array by generating a random number = to the array; 
    var randomChar = getRandomChoice(randomArray);
    yourPassword += randomChar;
  }
  // returns password to the function which called for it;
  return yourPassword;
}



function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

