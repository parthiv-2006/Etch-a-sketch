const gridContainer = document.querySelector('.grid-container')
const resetButton = document.querySelector('#resetBtn')
const eraserButton = document.querySelector('#eraserBtn')
const penButton = document.querySelector('#penBtn')
const magicPenButton = document.querySelector('#magicPenBtn')
const changeGridButton = document.querySelector('#changeGridBtn')


let penColor = 'white'
let userGridSize = 16
const defaultButtonColour = '#8BC34A'

changeGridButton.addEventListener('click', () => {
    size = getCustomGrid()
    gridContainer.textContent = ''
    magicPenButton.style.backgroundColor = defaultButtonColour
    penButton.style.backgroundColor = defaultButtonColour
    eraserButton.style.backgroundColor = defaultButtonColour
    createGrid(size)
})

resetButton.addEventListener('click', () => {
    gridContainer.textContent = ''
    magicPenButton.style.backgroundColor = defaultButtonColour
    penButton.style.backgroundColor = defaultButtonColour
    eraserButton.style.backgroundColor = defaultButtonColour
    createGrid(userGridSize)
})


magicPenButton.addEventListener('click', () => {
    magicPenButton.style.backgroundColor = 'darkgreen'
    penButton.style.backgroundColor = defaultButtonColour
    eraserButton.style.backgroundColor = defaultButtonColour
    penColor = 'magic'
})

penButton.addEventListener('click', () => {
    penColor = 'black'
    magicPenButton.style.backgroundColor = defaultButtonColour
    penButton.style.backgroundColor = 'darkgreen'
    eraserButton.style.backgroundColor = defaultButtonColour
})

eraserButton.addEventListener('click', () => {
    penColor = 'white'
    magicPenButton.style.backgroundColor = defaultButtonColour
    penButton.style.backgroundColor = defaultButtonColour
    eraserButton.style.backgroundColor = 'darkgreen'
})

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

            if (squareDiv.style.backgroundColor === 'white' || squareDiv.style.backgroundColor === '')
                {if (penColor === 'magic') {
                    squareDiv.style.backgroundColor = rainbowColor()
                }
                else 
                {squareDiv.style.backgroundColor = penColor}
        }
            else if (penColor === 'white') {
                squareDiv.style.backgroundColor = 'white'
            }
        })

        gridContainer.appendChild(squareDiv)
    }
}

function getCustomGrid() {
    userGridSize = prompt('What would you like your grid size to be? (Please enter a value between 1-100)')
    
    userGridSize = parseInt(userGridSize)

    const MAXGRIDSIZE = 100
    const MINGRIDSIZE = 1


    while (isNaN(userGridSize) || userGridSize > MAXGRIDSIZE || userGridSize < MINGRIDSIZE) {
        userGridSize = prompt('Invalid Grid Size. Please Enter a Value between 1-100')
        userGridSize = parseInt(userGridSize)
    }

    return userGridSize

}


createGrid(userGridSize)