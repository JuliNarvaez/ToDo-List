const elements = document.querySelectorAll(".item");

elements.forEach(element => {
    const checkbox = element.querySelector("input");
    checkbox.addEventListener('click', () => {
        element.classList.toggle("checked-accept");
    })
})
