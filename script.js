document.addEventListener("DOMContentLoaded", function () {
    const sketchContainer = document.getElementById("sketchContainer");
    const gridButtons = document.querySelectorAll(".grid-btn");
    const colorPicker = document.getElementById("colorPicker");
    const clearBtn = document.getElementById("clearBtn");
    let currentColor = colorPicker.value;

    // Update current color
    colorPicker.addEventListener("input", (e) => {
        currentColor = e.target.value;
    });

    // Create grid
    function createGrid(size) {
        sketchContainer.innerHTML = '';
        sketchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        sketchContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        const totalSquares = size * size;
        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement("div");
            square.className = "square";
            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = currentColor;
            });
            sketchContainer.appendChild(square);
        }
    }

    // Clear grid
    clearBtn.addEventListener("click", () => {
        document.querySelectorAll(".square").forEach(sq => sq.style.backgroundColor = "white");
    });

    // Default grid
    createGrid(16);

    // Grid size buttons
    gridButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            createGrid(parseInt(btn.dataset.size));
        });
    });
});
