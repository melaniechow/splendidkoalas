/**
 * TODO
 * 
 * Reference: https://codepen.io/shotastage/pen/KaKwya
 * 
 * 
 * Listen to user inputs and determine when to create selection menu []
 * Get location of user cursor []
 * Selection menu generator [DONE]
 * Select option with arrow keys or on click []
 * Move selection menu as user types []
 * ?? Dynamic selection menu changes as user writes more? []
 * 
 * Replace text with suggestion after a trigger action []
 *    Tab []
 *    Enter []
 * Remove menu  []
 * 
 */

var textAreaID = "Input";
var firstOptionId = "Option1";
var optionClassName = "Option"
var selectionClassName = "Selection";

var textarea = document.getElementById(textAreaID);

var selectionMenuPresent = true; 
var currentOptionId = firstOptionId ; // Highlighted Option




/*
 * Detects when selection Menu should be generated and where
 */
// TODO:


/*
 * Detects when selection Menu should be moved and where
 */
// TODO:


/* 
 * Create selection menu
 * Inputs:
 *    words - array or words in selection menu
 *    x, y - absolute position of menu
 */
function createSelectionMenu(words, left, top){
  var newDiv = document.createElement("div");
  newDiv.className = selectionClassName;

  var ul = document.createElement("ul");
  for (var i = 0; i<words.length; i++) {
    var option = document.createElement("li");
    option.className = optionClassName;
    option.id = optionClassName + (i+1);
    option.innerHTML = words[i];
    option.onclick = cursorClick();
    ul.appendChild(option)
  }
  newDiv.appendChild(ul);
  document.body.appendChild(newDiv);
  newDiv.style.position = "absolute";
  newDiv.style.left = left + "px";
  newDiv.style.top = top + "px";
  highlightFirstOption();
}

/* 
 * Deletes the selection menu
 * Removes div object with selection class name
 */
function deleteSelectionMenu() {
  // TODO:
  selectionMenuPresent = false;
  return
}

/* 
 * Move selection menu to left top position
 */
function moveSelectionMenu(left, top) {
  // TODO:
  return
}

/*
 * Replace the text[start:end] with newText, and returns
 * text with the replacement
 * Inputs:
 *    start - start of substring to replace
 *    end - end of substring to replace
 *    text - text to modify
 *    newText - text to replace with
 */
function replaceText(start, end, text, newText) {
  // TODO: 
  return;
}

/*
 * cursorClick is called when an option is selected with a cursor 
 * Replaces word with suggestion 
 */
function cursorClick() {}

/*
 * tabClick is called when an option is selected with a tab
 * Replaces word with suggestion 
 */
function tabPress() {}

/*
 * enterClick is called when an option is selected with a tab
 * Replaces word with suggestion 
 */
function enterPress() {}

/*
 * Moves Highlighted option based on arrow key
 * Inputs:
 *  up - boolean if arrowPress was up
 */
function arrowPress(up) {}


/* 
 * Highlight the first option in the selection menu 
 */
function highlightFirstOption() {
  var option = document.getElementById(firstOptionId);
  option.style.backgroundColor =  "#353A55";
}

/*
 * Functions to call at start of program
 */
function setUp() {
  createSelectionMenu(["Peaches", "Totoro"],450,850);
}

// Keypress event listenter
document.body.onkeypress = function(e){
  if(e.code == "Enter"){
  } 
  // Add other cases down here
}


setUp();
