const EXPECTED_MINUTES_IN_OVEN = 40;
const MINUTES_PER_LAYER = 2;

function remainingMinsInOven(actualMinutesInOven){
    let minsInOven = parseFloat(document.getElementById("actualMinutesInOven").value);
    let result1 = EXPECTED_MINUTES_IN_OVEN - minsInOven;
    document.getElementById("result1").textContent = "The remaining time in the oven for the lasagna is: " + result1;
}

function prepTimeInMins(numOfLayers){
    let numLayers = parseFloat(document.getElementById("numOfLayers").value);
    let result2 =  MINUTES_PER_LAYER * numLayers;
    document.getElementById("result2").textContent = "The preparation time for a lasagna with " + numLayers + " layers is: " + result2;
}

function totalTimeInMins(numOfLayers, actualMinutesInOven){
    let numberOfLayers = parseFloat(document.getElementById("numOfLayers").value);
    let prepTime = prepTimeInMins(numberOfLayers);
    let actualMinsInOven = parseFloat(document.getElementById("actualMinutesInOven").value);
    let result3 =  prepTime + actualMinsInOven;
    document.getElementById("result3").textContent = result3;
    
}

