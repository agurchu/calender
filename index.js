const monthEl = document.querySelector(".date h1");
const fulldayEl = document.querySelector(".date p");
const dayEl = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthEl.innerText = months[monthInx];
fulldayEl.innerText = new Date().toDateString();

let days = "";
for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"> </div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

dayEl.innerHTML = days;
