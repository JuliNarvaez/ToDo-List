var elements = document.querySelectorAll(".container__content-item");

elements.forEach(element => {
    var checkbox = element.querySelector("input");
    checkbox.addEventListener('click', () => {
        element.classList.toggle("checkedAcept");
    })
})