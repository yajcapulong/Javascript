const hrsPerDay = 8;
const billDays = 22;

function dayRate(ratePerHour) {
  return hrsPerDay * ratePerHour;
}

function daysInBudget(budget, ratePerHour) {
  var result = budget/(ratePerHour * hrsPerDay);
  return Math.floor(result);
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  var fullMonth = Math.floor(numDays / billDays);
  var remainingDays = numDays % billDays;

  let fullMonthRate = fullMonth * (dayRate(ratePerHour) * billDays) * (1 - discount);
  let remainDaysRate = remainingDays * dayRate(ratePerHour);

  return Math.ceil(fullMonthRate + remainDaysRate);

}

var calculate = document.getElementById("calculateButton");

calculate.addEventListener("click", dayRate);
calculate.addEventListener("click", daysInBudget);
calculate.addEventListener("click", priceWithMonthlyDiscount);


