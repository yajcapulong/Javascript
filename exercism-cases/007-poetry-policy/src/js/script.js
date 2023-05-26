function frontDoorResponse(line) {
  return line[0];
}

function frontDoorPassword(word) {
  let slicedWord = word.slice(1);
  let wordLowerCase = slicedWord.toLowerCase();
  let firstLetter = word[0].toUpperCase();

  return firstLetter + wordLowerCase;
}

function backDoorResponse(line) {
  let cleanLine = line.trim();
  let lastLetter = cleanLine[cleanLine.length - 1];
  return lastLetter;
}

function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please';
}