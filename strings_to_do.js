// Remove Blanks

function removeSpaces(str) {
    console.log(str.split(" ").join(""));
    return str.split(" ").join("");
}

// Get Digits

function getDigits(str) {
    var stringArr = str.split(""); // creates a variable with an array containing each digit in the input string
    var intString = ""; // creates a variable that is an empty string
    for (var i=0; i < stringArr.length; i++) { //loops through each digit in the array
        if (stringArr[i] % 1 == 0) { // if there is zero remainder after dividing the digit by 1 (i.e, the digit is an integer)
            intString += stringArr[i]; // add that digit to the empty string
        }
    }
    console.log(intString);
    return intString;
}

// Acronyms

function getAcronym(str) {
    var newArr = str.split(" "); // creates a variable with an array containing each word in the string (separated by a space)
    console.log(newArr);
    var acroStr = ""; // creates a new empty string
    for (var i = 0; i < newArr.length; i++) { // loops through the array
        if (newArr[i] == false) { // if ???
            continue;
        } else {
            acroStr += newArr[i][0].toUpperCase(); //otherwise add the first letter of the word to the new string and capitalize it
        }
    }
    console.log(acroStr);
    return acroStr;
}

// Zip Arrays Into Map

// Invert Hash