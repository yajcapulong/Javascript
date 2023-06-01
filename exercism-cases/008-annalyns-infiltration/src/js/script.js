function canExecuteFastAttack(knightIsAwake) {
  if (knightIsAwake){
    return false;
  }else {
    return true;
  }
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake){
    return true;
  } else {
    return false;
  }
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if ((archerIsAwake && prisonerIsAwake) || (!archerIsAwake && !prisonerIsAwake)){
    return false;
  } else if (!prisonerIsAwake && archerIsAwake){
    return false;
  } else if (!archerIsAwake && prisonerIsAwake){
    return true;
  } 
}

function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (petDogIsPresent) {
    return !archerIsAwake;  
  }
  
  return prisonerIsAwake && !archerIsAwake && !knightIsAwake
}

