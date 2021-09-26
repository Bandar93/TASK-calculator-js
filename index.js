/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */

let numOne 
let numTwo 
let op
const numberlist = [1,2,3,4,5,6,7,8,9,0];
function buttonClick(text) {
  // console.log("Clicking", text);
 if (numberlist.includes(text)){
  printOnConsole(text);
}else{

}
}

/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
//printOnConsole("123");
//updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
