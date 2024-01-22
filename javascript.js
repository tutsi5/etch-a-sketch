const container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
    let divColumn = document.createElement("div");
    divColumn.setAttribute("style", "margin: 0; padding: 0; display:flex; flex: 1;");
    container.appendChild(divColumn);

    for (j = 0; j < 16; j++) {
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