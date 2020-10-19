/**
 * TODO
 * 
 * Listen to user inputs and determine when to create selection menu
 * Get location of user cursor
 * Selection menu generator
 * Move selection menu as user types
 * ?? Dynamic selection menu changes as user writes more?
 * 
 * Replace text with suggestion after a trigger action
 *    Tab
 *    Enter
 * Remove menu 
 * 
 */

var textAreaID = "input";
var firstOptionId = "option1";

function addLineNumbers() {
  var content = document.getElementById(textAreaID).innerHTML.split("\n");
  var newContent = [];
  for (var i = 0; i < content.length; i++) { 
    newContent.push((i + 1) + "  " + content[i] + "\n");
  } 
  document.getElementById(textAreaID).innerHTML = newContent.join("");
}

/* Create selection menu based on user input: text */
function createSelectionMenu(text){
  return
}

/* Highlight the first option in the selection menu */
function highlightFirstOption() {
  var option = document.getElementById(firstOptionId);
  option.style.backgroundColor =  "#353A55";
}

/*
 * Functions to call at start of program
 */
function setUp() {
  highlightFirstOption();
}

// Keypress event listenter
document.body.onkeypress = function(e){
  if(e.code == "Enter"){
  }
  // Add other cases down here
}

setUp();
