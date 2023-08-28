let button = document.getElementById("btn");

let inDay = document.getElementById("day");
let inMonth = document.getElementById("month");
let inYear = document.getElementById("year");

let textDay = document.getElementById("span-day");
let textMonth = document.getElementById("span-month");
let textYear = document.getElementById("span-year");

let errDay = document.getElementById("day-err");
let errMonth = document.getElementById("month-err");
let errYear = document.getElementById("year-err");

let totalYears = document.getElementById("years");
let totalMonths = document.getElementById("months");
let totalDays = document.getElementById("days");

function mark(inDate, textDate) {
  inDate.style.border = "2px solid hsl(0, 100%, 67%)";
  textDate.style.color = "hsl(0, 100%, 67%)";
}

function unMark(inDate, textDate) {
  inDate.style.border = "2px solid hsl(0, 0%, 8%)";
  textDate.style.color = "hsl(0, 0%, 8%)";
}

function checkInput() {
  if (inDay.value == "DD") {
    errDay.innerHTML = "This field is required";
    mark(inDay, textDay);
  } else checkDay(inDay.value);

  if (inMonth.value == "MM") {
    errMonth.innerHTML = "This field is required";
    mark(inMonth, textMonth);
  } else checkMonth(inMonth.value);

  if (inYear.value == "YYYY") {
    errYear.innerHTML = "This field is required";
    mark(inYear, textYear);
  } else checkYear(inYear.value);
}

function checkDay(day) {
  if (day < 1 || day > 31) {
    errDay.innerHTML = "Must be a valid day";
    mark(inDay, textDay);
    return;
  }
  errDay.innerHTML = "";
  unMark(inDay, textDay);
}

function checkMonth(month) {
  if (month < 1 || month > 12) {
    errMonth.innerHTML = "Must be a valid month";
    mark(inMonth, textMonth);
    return;
  }
  errMonth.innerHTML = "";
  unMark(inMonth, textMonth);
}

function checkYear(year) {
  if (year < 1 || year > new Date().getFullYear()) {
    errYear.innerHTML = "Must be in the past";
    mark(inYear, textYear);
    return;
  }
  errYear.innerHTML = "";
  unMark(inYear, textYear);
}

button.addEventListener("click", () => {
  const [day, month, year] = [inDay.value, inMonth.value, inYear.value];

  checkInput();
  const date = new Date(`${year}-${month}-${day}`);
  const diff = calculateDateDifference(date);

  totalYears.innerHTML = diff.years;
  totalMonths.innerHTML = diff.months;
  totalDays.innerHTML = diff.days;
});

function calculateDateDifference(date) {
  const cur = new Date();
  const diffMillis = cur - date;

  const yearMillis = 31536000000;
  const monthMillis = 2628000000;
  const dayMillis = 86400000;

  const years = Math.floor(diffMillis / yearMillis);
  const months = Math.floor((diffMillis % yearMillis) / monthMillis);
  const days = Math.floor((diffMillis % monthMillis) / dayMillis);

  return { years, months, days };
}
