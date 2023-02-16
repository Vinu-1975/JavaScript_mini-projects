const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const question = e.currentTarget.parentElement.parentElement;

        question.classList.toggle("show-ans");
    });
});