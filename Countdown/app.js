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
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');

const futureDate = new Date(2022, 8, 10, 11, 30, 0);
// console.log(futureDate)

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();
const month = futureDate.getMonth();
const weekday = futureDate.getDay();

giveaway.textContent = `giveaway ends on ${weekdays[weekday]}, ${date} ${months[month]} ${year}, ${hour}:${mins}am.`

const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
    const today = new Date().getTime();
    // console.log(today)
    const t = futureTime - today;
    // console.log(t);

    //1s=1000ms
    //1m=60s
    //1hr=60m
    //1day=24hrs

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });
    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML=`<h4 class="expired">sorry, this giveaway has expired</h4>`;
    }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();