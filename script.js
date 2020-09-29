const container = document.querySelector(".container__content");

function render(e) {
    e.forEach(toDo => {
        const template = `
                <p class="item--title">${toDo.title} ${toDo.id}</p>
                <p class="item--details">${toDo.destails}</p>
                <div class="item--checkbox">
                    <label>
                        <input type="checkbox" name="" id="cbox1">
                    </label>
                    <p>Complete</p>
                </div>
        `;
        const card = document.createElement('div');
        card.innerHTML = template;
        card.className = "item";
        const checkbox = card.querySelector("input");
        checkbox.checked = toDo.done;
        checkbox.checked ? card.classList.add('checked-accept') : card.classList.remove('checked-accept');
        checkbox.addEventListener('click', () => {
            card.classList.toggle("checked-accept");
        })
        container.appendChild(card);
    })
}

fetch('./data/MOCK_DATA.json')
    .then(response => response.json())
    .then(filtrar);

const filterButtons = document.querySelectorAll("button");
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle("button-pressed");
        filtrar([],button.classList[0]);
    });
});

function filtrar(f) {
    var complete = f.filter(function (done) {
        switch ("button-all") {
            case "button-all":
                return done.done == done.done;
            case "button-completed":
                return done.done == true;
            case "button-incomplete":
                return done.done == false;
            }
    })
    render(complete);
};

 