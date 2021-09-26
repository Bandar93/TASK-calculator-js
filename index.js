/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */
let op
let result
let numberOne 
let numberTwo  
let firstNumbertFlag = false
let historyArray = [];
function buttonClick(text) {
  // console.log("Clicking", text);
  if(typeof text === "number"){
    if (firstNumbertFlag){
    numberTwo = text;
    firstNumbertFlag = false
    printOnConsole(numberTwo)
    }
    else{
      numberOne = text;
      printOnConsole(numberOne)
    }
    
  }else{
    if(text === "AC")
    printOnConsole("")
    if(text === '+' || text === '÷'|| text === 'x'||text === '-' || text === '%'){ 
    op = text
    firstNumbertFlag = true
    printOnConsole(text)
    }
    
  if (text === "="){
    switch (op){
      case '+':
        result = numberOne + numberTwo;
        break;
      
      case '-':
        result = numberOne - numberTwo;
        break;
      case 'x':
        result = numberOne * numberTwo;
        break;
      case '÷':
        result = numberOne / numberTwo;
      case '%':
        result = numberOne % numberTwo;
        break;

      break;
    }
    printOnConsole(result);

    historyArray.push(`${numberOne} ${op} ${numberTwo} = ${result} `)

    updateHistory(historyArray);

    
  }
  }
  
  }


/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
//printOnConsole("123");
//updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
