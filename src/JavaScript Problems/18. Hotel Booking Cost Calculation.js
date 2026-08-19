// Hotel Booking Cost Calculation
// AvitoMail.ru
// Write a function bookingCalculate(nights, checkInDate) that calculates the cost of a hotel stay. Conditions:

//     The function takes two arguments:
//         nights (required) — number of nights to stay.
//         checkInDate (optional) — check-in date. If not specified, the current date is used.
//     The accommodation cost depends on the day of the week:
//         Weekdays (Monday–Friday) — 1500 rub.
//         Weekends (Saturday and Sunday) — 2200 rub.

// Examples:
// Input 1: 1, new Date("2023-11-11")
// Output 1: 2200
// Input 2: 5, new Date("2023-11-06")
// Output 2: 7500

const prices = {
  weekday: 1500,
  holiday: 2200,
};

function bookingCalculate(nights, checkInDate) {
  const today = checkInDate ? checkInDate : new Date();

  const days = {
    weekend: 0,
    weekday: 0,
  };

  let counter = nights;
  while (counter) {
    const actual = new Date(today)
    actual.setDate(actual.getDate() + counter)
 
    if (actual.getDay() === 0 || actual.getDay() === 1) {
      days.weekend += 1;
    }else{
      days.weekday += 1;
    }
    counter--
  }

  const sum = days.weekday * prices.weekday + days.weekend * prices.holiday

  return sum
}
