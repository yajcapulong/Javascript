console.log("Script file loaded.");

const EXPECTED_MINUTES_IN_OVEN = 40;
const MINUTES_PER_LAYER = 2;

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

// Assuming you have a button with the ID "calculateButton" to trigger the calculations
let calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", function() {
    let actualMinutesInOven = parseInt(document.getElementById("actualMinutesInOven").value);
    let numOfLayers = parseInt(document.getElementById("numOfLayers").value);

    remainingMinsInOven(actualMinutesInOven);
    prepTimeInMins(numOfLayers);
    totalTimeInMins(numOfLayers, actualMinutesInOven);
});
