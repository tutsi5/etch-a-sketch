const container = document.querySelector("#container");
const grid = document.querySelector("#grid");

let size = 16;

function makeGrid(size) {
    for (i = 0; i < size; i++) {
        let divColumn = document.createElement("div");
        divColumn.setAttribute("style", "margin: 0; padding: 0; display:flex; flex: 1;");
        grid.appendChild(divColumn);
    
        for (j = 0; j < size; j++) {
            let divRow = document.createElement("div");
            divRow.setAttribute("style", "border: solid 1px black; margin: 0; padding: 0; flex: 1;");
            divColumn.appendChild(divRow);
            divRow.classList.add("hover");
        }
    }

    let hoverElements = document.querySelectorAll(".hover");

    hoverElements.forEach(function(hoverElement) {
        hoverElement.addEventListener("mouseover", function() {
            hoverElement.style.backgroundColor = "purple";
        })
    })
}

makeGrid(size);

const gridSize = document.querySelector(".btnSize");

gridSize.addEventListener("click", function() {
    let sizeChoice = prompt("Choose grid size (1-100)");
    
    while (sizeChoice < 1 || sizeChoice > 100 || sizeChoice % 1 != 0) {
    sizeChoice = prompt("The number must be an integer between 1 and 100")
    }

    size = sizeChoice;
    grid.replaceChildren();
    makeGrid(sizeChoice)
})

const reset = document.querySelector(".btnReset");

reset.addEventListener("click", function() {
    grid.replaceChildren();
    makeGrid(size)
})