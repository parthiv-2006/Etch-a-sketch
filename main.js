const gridContainer = document.querySelector('.grid-container')

const resetButton = document.querySelector('#resetBtn')
const eraserButton = document.querySelector('#eraserBtn')
const penButton = document.querySelector('#penBtn')
const magicPenButton = document.querySelector('#magicPenBtn')

let penColor = 'black'

resetButton.addEventListener('click', () => {
    gridContainer.textContent = ''
    createGrid(16)
})

magicPenButton.addEventListener('click', () => {
    penColor = 'magic'
})

penButton.addEventListener('click', () => {penColor = 'black'})

eraserButton.addEventListener('click', () => {penColor = 'white'})

function rainbowColor () {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

function createGrid (gridSize) {
    const containerWidth = gridContainer.clientWidth
    
    const squareSize = containerWidth / gridSize

    for (i = 0; i < (gridSize * gridSize); i++) {
        const squareDiv = document.createElement('div')
        squareDiv.classList.add('grid-square')
        squareDiv.style.width = `${squareSize}px`
        squareDiv.style.height = `${squareSize}px`


        squareDiv.addEventListener('mouseover', () => {
            if (penColor === 'magic') {
                squareDiv.style.backgroundColor = rainbowColor()
            }
            else 
             {squareDiv.style.backgroundColor = penColor}
        })

        gridContainer.appendChild(squareDiv)
    }
}

createGrid(16)