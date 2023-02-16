const names = ["vinayakan", "aswin", "sidharth", "charan", "vaibhav", "sai samrat", "nandana"];

let currentItem = 0;

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const display = document.querySelector('.display');

rightBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > names.length - 1) {
        currentItem = 0;
    }
    display.textContent = names[currentItem];
})

leftBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = names.length-1;
    }
    display.textContent = names[currentItem];
})