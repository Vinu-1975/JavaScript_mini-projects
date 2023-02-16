
//METHOD 1

// const i = document.getElementsByClassName('increase')[0];
// const d = document.getElementsByClassName('decrease')[0];
// const r = document.getElementsByClassName('reset')[0];

// i.addEventListener('click', function () {
//     let c = document.getElementById('value');
//     c.style.color = "green";
//     let c1 = document.getElementById('value').innerText;
//     let ans = parseInt(c1) + 1;
//     c.textContent = ans;
// })

// d.addEventListener('click', function () {
//     let c = document.getElementById('value');
//     c.style.color = "red";
//     let c1 = document.getElementById('value').innerText;
//     let ans = parseInt(c1) - 1;
//     c.textContent = ans;
// })

// r.addEventListener('click', function () {
//     let c = document.getElementById('value');
//     c.style.color = "blue";
//     c.textContent = 0;
// })

//METHOD 2

let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
    })
})

