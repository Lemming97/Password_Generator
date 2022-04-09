//Master
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var symbolChar = "!@#$%^&*()_+~\`|}{[]:;?><,./-=";



var password = "";
var passwordLength = "";


function generatePassword() {
    console.log("generatePassword function");
    var passwordChar = "";
    var userPrompt;
    var lowercaseCharConfirm;
    var uppercaseCharConfirm;
    var numberConfirm;
    var symbolConfirm;

    //create user prompt
    do {
        var userPrompt = window.prompt("How many characters would you like your password to be? Password must be between 8 - 128 characters. ");
        var passwordLength = parseInt(userPrompt);
    } while (userPrompt == null || userPrompt == "");
    console.log('userPrompt');

    //while loop statements for character length
    while (passwordLength <= 7 || passwordLength >= 129) {
        window.alert("Password length must be between 8-128 characters Try again");
        userPrompt = window.prompt("How many characters would you like your password to be? Password must be between 8 - 128 characters. ");
        var passwordLength = parseInt(userPrompt);
    }

    // Repeat back how many characters the user will have  
    window.alert("Your password will have " + userPrompt + " characters");


    // //confirm if user wants lowercase
    var lowercaseCharConfirm = confirm("Click OK to confirm if you would like to include lowercase characters");


    // //confirm is user wants uppercase
    var uppercaseCharConfirm = confirm("Click OK to confirm if you would like to include uppercase characters");


    // //confirm if user wants numbers 
    var numberConfirm = confirm("Click OK to confirm if you would like to include numerical characters");

    // //confirm if user wants special characters 
    var symbolConfirm = confirm("Click OK to confirm if you would like to include special characters");


    // Confirmation Loop if NO selection was chosen 
    while (lowercaseCharConfirm === false && uppercaseCharConfirm === false && numberConfirm === false && symbolConfirm === false) {
        window.alert("You must choose at least one parameter");
        console.log("Second check");
        // debugger;
        // userPrompt = window.prompt("How many characters would you like your password to be? Password must be between 8 - 128 characters. ");
        lowercaseCharConfirm = confirm("Click OK to confirm if you would like to include lowercase characters");
        uppercaseCharConfirm = confirm("Click OK to confirm if you would like to include uppercase characters");
        numberConfirm = confirm("Click OK to confirm if you would like to include numerical characters");
        symbolConfirm = confirm("Click OK to confirm if you would like to include special characters");

    }

    console.log(passwordLength);
    //While loop with if statements generating password based on confirmations selected and length 

    var i = 0;
    while (i < passwordLength) {


        if (lowercaseCharConfirm) {

            var randomNumber = Math.floor(Math.random() * 25); // random number between 0-25 
            passwordChar += lowercaseChar[randomNumber];
            i++;
            if (i >= passwordLength) {

                break;

            }
        }
        if (uppercaseCharConfirm) {
            var randomNumber = Math.floor(Math.random() * 25);
            passwordChar += uppercaseChar[randomNumber];

            i++;
            if (i >= passwordLength) {

                break;

            }
        }
        if (numberConfirm) {
            var randomNumber = Math.floor(Math.random() * 9);
            passwordChar += randomNumber; // could add toString() to the end to return a string value

            i++;
            if (i >= passwordLength) {

                break;

            }
        }
        if (symbolConfirm) {
            var randomNumber = Math.floor(Math.random() * 30);
            passwordChar += symbolChar[randomNumber];
            i++;
            if (i >= passwordLength) {

                break;

            }
        }



    }


    return passwordChar;

}

function writePassword() {
    console.log("writePassword Function");
    var password = generatePassword();
    var passwordText = document.getElementById("password");
    passwordText.value = password;

}

const buttonClick = document.getElementById('generate').addEventListener('click', writePassword);