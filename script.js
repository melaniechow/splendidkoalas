/**
 * TODO
 * 
 * Reference: https://codepen.io/shotastage/pen/KaKwya
 * 
 * 
 * Listen to user inputs and determine when to create selection menu []
 * Get location of user cursor []
 * Selection menu generator [DONE]
 * Move current highlighted option with arrow keys [DONE]
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

// Class Ids
var textAreaID = "Input";
var baseOptionId = "option";
var optionClassName = "Option"
var selectionMenuClassName = "Selection";
var selectionMenuID = "selectionMenu";

// HTML document objects
var textarea = document.getElementById(textAreaID);

// State of the site
var selectionMenuPresent = true; 
// current highlighted Option, this will change based on arrow key presses
var currentOptionIdNum = 1 ; 
var clickMode = true; // Options are selected by click if true


/*
 * Detects when selection Menu should be generated and where
 */
function autocompleteDetection() {
  // TODO:
  var content = document.getElementById(textAreaId).value.split("\n");
  var currentLineWords = content[content.length - 1].split(" ");
  var currentWord = currentLineWords[currentLineWords.length -1];

  // determing if currentWord is something we want to edit
}



/*
 * If selectionMenu is present, moves the selection menu the most recent cursor 
 * position
 */
function moveSelectionMenuAsUserType() {
  // TODO:
  // Most likely call this every key press
}


/* 
 * Create selection menu
 * Inputs:
 *    words - array or words in selection menu
 *    x, y - absolute position of menu
 */
function createSelectionMenu(words, left, top){
  var newDiv = document.createElement("div");
  newDiv.className = selectionMenuClassName;
  var ul = document.createElement("ul");
  ul.id = selectionMenuID;

  for (var i = 0; i<words.length; i++) {
    var option = document.createElement("li");
    option.className = optionClassName;
    option.id = baseOptionId + (i+1);
    option.innerHTML = words[i];
    if (clickMode) { // If click mode, select option upon clicking
      option.onclick = cursorClick();
    }
    ul.appendChild(option)
  }
  newDiv.appendChild(ul);
  document.body.appendChild(newDiv);
  newDiv.style.position = "absolute";
  newDiv.style.left = left + "px";
  newDiv.style.top = top + "px";
  highlightOption(baseOptionId + 1);
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
function cursorClick() {
  // TODO:

}

/*
 * enterPress is called when user presses enter on a current highlighted option
 * or, if user chose not user the selection menu
 * 
 * Replaces word with suggestion 
 */
function enterPress() {
  // TODO:
  // Determine if user is chosing an option or is opting out of the autocomplete
  // menu and is on the next line. 
  
}

/*
 * Moves Highlighted option based on arrow key
 * Updates the currentOptionIdNum up if up is true, down otherwise. 
 * 0 < currentOptionIdNum <= number of options 
 * Inputs:
 *  up - boolean if arrowPress was up
 */
function arrowPress(up) {
  // TODO:
  // call this after listenting for a certain key press
  if (up) {
    // Move up
    if (currentOptionIdNum > 0) {
      dehighlightOption(baseOptionId + currentOptionIdNum);
      currentOptionIdNum =  currentOptionIdNum - 1;
      highlightOption(baseOptionId + currentOptionIdNum);
    }
    
  } else {
    // Move Down
    var numOptions = document.getElementById(selectionMenuID).childElementCount;
    if (currentOptionIdNum < numOptions) {
      dehighlightOption(baseOptionId + currentOptionIdNum);
      currentOptionIdNum =  currentOptionIdNum + 1;
      highlightOption(baseOptionId + currentOptionIdNum);
    }
  }
}


/* 
 * Highlight the option in the selection menu 
 */
function highlightOption(optionId) {
  var option = document.getElementById(optionId);
  option.style.backgroundColor =  "#7b5294";
}

/* 
 * Removes highlight the option in the selection menu 
 */
function dehighlightOption(optionId) {
  var option = document.getElementById(optionId);
  option.style.backgroundColor =  "#353A55";
}

/*
 * Toggle the mode as key or mouse (click or enter) autocomplete
 * selection feature
 */
function toggleMode() {
  clickMode = !clickMode;
}

/*
 * Functions to call at start of program
 */
function setUp() {
  // Example Selection Menu
  createSelectionMenu(["Peaches", "Totoro"],450,880);
}

// Keypress event listenter
document.body.onkeypress = function(e){
  if (selectionMenuPresent && !clickMode) {
    if(e.code == "Enter"){
        enterPress();
    } else {
      // Check the user input after every letter
      moveSelectionMenuAsUserType();
      autocompleteDetection();
    }
  } 
}

// On keydown
document.body.onkeydown = function(e){
  // Prevent arrow keys from scrolling the page
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) { 
    e.preventDefault();
  }

  if (selectionMenuPresent && !clickMode) {
    if(e.code == "ArrowDown"){
      arrowPress(false);
    } else if (e.code == "ArrowUp") {
      arrowPress(true);
    } 
  }
}

setUp();
