const monthNameEl = document.getElementById("month");
const dayNameEl = document.getElementById("day");
const dayNumEl = document.getElementById("date");
const yearEl = document.getElementById("year");

const date = new Date();
monthNameEl.innerText = date.toLocaleString("en", {
  month: "long",
});

dayNameEl.innerText = date.toLocaleString("en", {
    weekday: "long"
});
dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();