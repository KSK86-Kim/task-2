const elements = document.querySelectorAll(".question__item")


elements.forEach.call(elements, function (el) {
    el.addEventListener('click', () => {
            el.classList.toggle("isOpen")
    })
});


