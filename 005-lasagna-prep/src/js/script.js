const EXPECTED_MINUTES_IN_OVEN = 40;
const MINUTES_PER_LAYER = 2;


function remainingMinsInOven(){
    let minsInOven = parseFloat(document.getElementById("actualMinutesInOven").value);
    let result1 = EXPECTED_MINUTES_IN_OVEN - minsInOven;
    document.getElementById("result1").textContent = "The remaining time in the oven for the lasagna is: " + result1;
    return result1;
}

function prepTimeInMins() {
    let numLayers = parseFloat(document.getElementById("numOfLayers").value);
    let result2 = MINUTES_PER_LAYER * numLayers;
    document.getElementById("result2").textContent = "The preparation time for a lasagna with " + numLayers + " layers is: " + result2;
    return result2;
}
  
function totalTimeInMins() {
    let numLayers = parseFloat(document.getElementById("numOfLayers").value);   
    let minsInOven = parseFloat(document.getElementById("actualMinutesInOven").value);
    let prepTime = prepTimeInMins(numLayers);
    let result3 = prepTime + minsInOven;
    document.getElementById("result3").textContent = "The total time for the lasagna is: " + result3 + " minutes";
  }
  

