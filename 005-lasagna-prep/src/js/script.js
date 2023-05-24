
const EXPECTED_MINUTES_IN_OVEN = 40;
const MINUTES_PER_LAYER = 2;

let actualMinutesInOven = document.getElementById("actualMinutesInOven").value;
let numOfLayers = document.getElementById("numOfLayers").value;


function remainingMinsInOven(actualMinutesInOven){
    let result1 = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
    document.getElementById("result1").textContent = result1;
}

function prepTimeInMins(numOfLayers){
    let result2 =  MINUTES_PER_LAYER * numOfLayers;
    document.getElementById("result2").textContent = result2;
}

function totalTimeInMins(numOfLayers, actualMinutesInOven){
    let result3 =  prepTimeInMins(numOfLayers) + actualMinutesInOven;
    document.getElementById("result3").textContent = result3;
}

