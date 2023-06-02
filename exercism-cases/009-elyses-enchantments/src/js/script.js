function getItem(cards, position) {
  return cards[position];
}

function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}

function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

function removeItem(cards, position) {
  if (position == 0){
    cards.shift();
    return cards;

  } if (cards[position] == cards.length){
    cards.pop();
    return cards;
    
  } if (position == 1){
    cards.pop(1);
    return cards;
  } 
}

function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

function checkSizeOfStack(cards, stackSize) {
  if (cards.length == stackSize){
    return true;
  }else{
    return false;
  }
}
