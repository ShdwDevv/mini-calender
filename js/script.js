const monthElement = document.querySelector('.js-month');
const dayElement = document.querySelector('.js-day');
const dateElement = document.querySelector('.js-date');
const yearElement = document.querySelector('.js-year');
const date = new Date();
// console.log(date);
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getFullYear());
// monthElement.innerHTML = date.getMonth();
// dayElement.innerHTML = date.getDay();

monthElement.innerText = date.toLocaleString("en",{
    month:"long"
});
dayElement.innerText = date.toLocaleString("en",{
    weekday:"long"
});
dateElement.innerHTML = date.getDate();
yearElement.innerHTML = date.getFullYear();
