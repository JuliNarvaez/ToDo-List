const container = document.querySelector(".container__content");

function render(todos) {
    todos.forEach(toDo => {
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
        card.classList.toggle('checked-accept', toDo.done);
        checkbox.addEventListener('click', () => {
            card.classList.toggle("checked-accept");
        })
        container.appendChild(card);
    })
};

let variableArr;

fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => {
        variableArr = data;
        render(data);
    });

function filterAll(element) {
    document.querySelector(".button-pressed").classList.remove("button-pressed");
    element.classList.add("button-pressed");
    container.innerHTML = "";
    var complete = variableArr.filter(function ({done}) {
        switch (element.value) {
            case "all":
                return true;
            case "completed":
                return done == true;
            case "incomplete":
                return done == false;
        }
    });
    render(complete);
};
