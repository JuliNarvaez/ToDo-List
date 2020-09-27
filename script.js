function render(data) {
    data.forEach(function (datos) {
        const card = `<p class="item--title">${datos.title} ${datos.id}</p>
        <p class="item--details">${datos.details}</p>
        <div class="item--checkbox">
            <label>
                <input type="checkbox" name="" id="cbox1">
            </label>
            <p>Complete</p>
        </div>
    `;

        const container = document.querySelector(".container__content");
        const div = document.createElement('div');
        div.innerHTML = card;
        div.className = "item";
        container.appendChild(div);
    })

    const elements = document.querySelectorAll(".item");

    elements.forEach(element => {
        const checkbox = element.querySelector("input");
        checkbox.addEventListener('click', () => {
            element.classList.toggle("checked-accept");
        })
    });
};

fetch('./data/MOCK_DATA.json')
    .then(response => response.json())
    .then(render);
    