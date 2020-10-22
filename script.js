/**
 * TODO
 * 
 * Reference: https://codepen.io/shotastage/pen/KaKwya
 * 
 * 
 * Listen to user inputs and determine when to create selection menu [DONE]
 * Get location of user cursor [DONE]
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
var selectionMenuPresent = false; 
// current highlighted Option, this will change based on arrow key presses
var currentOptionIdNum = 2; 
var clickMode = true; // Options are selected by click if true

// Experiment Variables
var keyWords = ["square", "squareOne", "squareTwo"];
var numMatching = 2;

/**
 * Function is called every time user types in textarea
 */
function detectOption() {
  moveSelectionMenuAsUserType();
  autocompleteDetection();
}

/**
 * Detects when selection Menu should be generated and where
 */
function autocompleteDetection() {
  if (selectionMenuPresent) {
    deleteSelectionMenu();
  }
  var content = document.getElementById(textAreaID).value.split("\n");
  var currentLineWords = content[content.length - 1].split(" ");
  var currentWord = currentLineWords[currentLineWords.length -1];
  var optionWords = []

  // if the currentword has at least numMatching letters, select as option.
  for (var i = 0; i < keyWords.length; i++) {
    var count = 0;
    var j = 0;
    while (j < currentWord.length && j < keyWords[i].length) {
      if (currentWord.charAt(j) == keyWords[i].charAt(j)) {
        j++;
        count++;
      } else {
        break;
      }
    }
    if (count >= numMatching && count >= currentWord.length) {
      optionWords.push(keyWords[i]);
    }
  }

  // If there is at least one potential option word, generate menu
  if (optionWords.length > 0) {
    var cursorPoint = getCursorXY(content.length, content[content.length - 1].length);
    createSelectionMenu(optionWords, cursorPoint.x, cursorPoint.y);
  }
}

/**
 * Find the absolute position of the cursor relatie to the textarea
 * @param {*} lineNumber 
 * @param {*} lineLength 
 */
const getCursorXY = (lineNumber, lineLength) => {
  const paddingLeft = 30;
  const paddingTop = 20;
  const lineHeight = 20;
  const letterWidth = 10;

  const rect = textarea.getBoundingClientRect();
  return {
    x: letterWidth * lineLength + rect.x + paddingLeft,
    y: (lineHeight * lineNumber) + rect.y + paddingTop,
  }
}

/** 
 * If selectionMenu is present, moves the selection menu the most recent cursor 
 * position
 */
function moveSelectionMenuAsUserType() {
  if (selectionMenuPresent) {
    /*
    var content = document.getElementById(textAreaID).value.split("\n");
    selectionMenu = document.getElementById(selectionMenuID);
    var cursorPoint = getCursorXY(content.length, content[content.length - 1].length);
    selectionMenu.style.left = cursorPoint.x +"px";   
    selectionMenu.style.top = cursorPoint.y + "px";     
    */
  }
}


/**
 * Create selection menu
 * @param {*} words array or words in selection menu
 * @param {*} left absolute position of menu (x)
 * @param {*} top absolute position of menu (y)
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
  selectionMenuPresent = true;
}

/** 
 * Deletes the selection menu
 * Removes div object with selection class name
 */
function deleteSelectionMenu() {
  selectionMenuPresent = false;
  document.getElementById(selectionMenuID).remove();
  return
}

/** 
 * Move selection menu to left top position
 */
function moveSelectionMenu(left, top) {
  // TODO:
  return
}

/**
 * Replace the text[start:end] with newText, and returns
 * text with the replacement
 * 
 * @param {*} start start of substring to replace
 * @param {*} end end of substring to replace
 * @param {*} text  text to modify
 * @param {*} newText text to replace with
 */
function replaceText(start, end, text, newText) {
  // TODO: 
  return;
}

/** 
 * cursorClick is called when an option is selected with a cursor 
 * Replaces word with suggestion 
 */
function cursorClick() {
  // TODO:

}

/** 
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

/**
 * Moves Highlighted option based on arrow key
 * Updates the currentOptionIdNum up if up is true, down otherwise. 
 * 0 < currentOptionIdNum <= number of options 
 * 
 * @param {*} up boolean true if arrowPress was up
 */
function arrowPress(up) {
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


/** 
 * Highlight the option in the selection menu 
 */
function highlightOption(optionId) {
  var option = document.getElementById(optionId);
  option.style.backgroundColor =  "#7b5294";
}

/**  
 * Removes highlight the option in the selection menu 
 */
function dehighlightOption(optionId) {
  var option = document.getElementById(optionId);
  option.style.backgroundColor =  "#353A55";
}

/**
 * Toggle the mode as key or mouse (click or enter) autocomplete
 * selection feature
 */
function toggleMode() {
  clickMode = !clickMode;
}


/**
 * Functions to call at start of program
 */
function setUp() {
}

// Keypress event listenter
document.body.onkeypress = function(e){
  if (selectionMenuPresent && !clickMode) {
    if(e.code == "Enter"){
        enterPress();
    } 
  } 
}

// On keydown
document.body.onkeydown = function(e){
  // Prevent arrow keys from scrolling the page
  if([37, 38, 39, 40].indexOf(e.keyCode) > -1) { 
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
