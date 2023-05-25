

const hrsPerDay = 8;

function dayRate(ratePerHour) {
  return hrsPerDay * ratePerHour;
}

function daysInBudget(budget, ratePerHour) {
  var result = budget/(ratePerHour * hrsPerDay);
  return Math.floor(result);
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  var fullMonth = Math.floor(numDays / 22);
  var remainingDays = numDays % 22;

  let fullMonthRate = fullMonth * (dayRate(ratePerHour) * 22) * (1 - discount);
  let remainDaysRate = remainingDays * dayRate(ratePerHour);

  return Math.ceil(fullMonthRate + remainDaysRate);

}
