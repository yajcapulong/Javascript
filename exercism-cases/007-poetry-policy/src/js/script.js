// Implement the function frontDoorResponse that takes a line of the poem as an argument and returns the first letter of that line.
function frontDoorResponse(line) {
  
  return line[0];
}

// Implement the function frontDoorPassword that accepts a string (the combined letters you found in task 1) and returns it correctly capitalized.
function frontDoorPassword(word) {
  let slicedWord = word.slice(1);
  let wordLowerCase = slicedWord.toLowerCase();
  let firstLetter = word[0].toUpperCase();

  return firstLetter + wordLowerCase;
}

// Implement the function backDoorResponse that takes a line of the poem as an argument and returns the last letter of that line that is not a whitespace character.
function backDoorResponse(line) {
  let cleanLine = line.trim();
  let lastLetter = cleanLine[cleanLine.length - 1];
  return lastLetter;
}

// Implement the function backDoorPassword that accepts a string (the combined letters you found in task 3) and returns the polite version of the capitalized password.
function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please';
}