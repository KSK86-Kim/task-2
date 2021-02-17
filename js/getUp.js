const elements = document.querySelectorAll(".js-question__btn")



elements.forEach.call(elements, function (el) {
    el.addEventListener('click', () => {
        el.parentNode.classList.toggle("isOpen")
    })
});


