document.addEventListener("DOMContentLoaded", function () {
    const sketchContainer = document.getElementById("sketchContainer");

    // Create 256 square divs and append them to the grid container
    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.className = "square";
        sketchContainer.appendChild(square);
    }
});