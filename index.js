/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */
let operation;
let numberOne, numberTwo;
let numberOneString = '';
let numberTwoString = '';
let firstNumberDoneFlag = false;
let historyArray = [];
function buttonClick(text) {
  // console.log("Clicking", text);
  if (typeof text === "number") {
    if (firstNumberDoneFlag) {
      numberTwoString += text;
      printOnConsole(numberTwoString);
    } else {
      numberOneString += text;
      printOnConsole(numberOneString);
    }
  }
    
  if (text === "AC") {
    printOnConsole("");
    historyArray = []
    updateHistory(historyArray);
    numberOneString = '';
    numberTwoString = '';
    firstNumberDoneFlag = false
  }
    
  if ((
    text === "+" ||
    text === "÷" ||
    text === "x" ||
    text === "-" ||
    text === "%")
  ) {
    operation = text;
    firstNumberDoneFlag = true;
    printOnConsole("");
  }

  if (text === "=") {
    numberOne = parseInt(numberOneString)
    numberTwo = parseInt(numberTwoString)
    if (isNaN(numberOne) === true || isNaN(numberTwo) === true) {
      printOnConsole("Error: Bad Operation");
    } else {
      result = calculateNumbers(numberOne, numberTwo, operation)
      printOnConsole(result);
      
      historyArray.push(`${numberOne} ${operation} ${numberTwo} = ${result} `);

      updateHistory(historyArray);
    }
    firstNumberDoneFlag = false
    numberOneString = '';
    numberTwoString = '';
  
  }
}
  function calculateNumbers(numberOne, numberTwo, operation) {
    switch (operation) {
      case "+":
        result = numberOne + numberTwo;
        break;

      case "-":
        result = numberOne - numberTwo;
        break;
      case "x":
        result = numberOne * numberTwo;
        break;
      case "÷":
        result = numberOne / numberTwo;
        break;
      case "%":
        result = numberOne % numberTwo;
        break;
    }
    return result
  }



/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
//printOnConsole("123");
//updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
