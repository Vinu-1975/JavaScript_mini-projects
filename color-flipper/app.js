const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.getElementsByClassName('color')[0];

btn.addEventListener('click', function () {
    const random = Math.floor(Math.random() * colors.length);
    console.log(random);
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
})

// function getRandom() {
//     return Math.random();
// }