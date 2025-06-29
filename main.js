const gridContainer = document.querySelector('.grid-container')

function createGrid (gridSize) {
    const containerWidth = gridContainer.clientWidth
    
    const squareSize = containerWidth / gridSize

    for (i = 0; i < (gridSize * gridSize); i++) {
        const squareDiv = document.createElement('div')
        squareDiv.classList.add('grid-square')
        squareDiv.style.width = `${squareSize}px`
        squareDiv.style.height = `${squareSize}px`
        gridContainer.appendChild(squareDiv)
    }
}

createGrid(16)