const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')

const keys = [
    'Q'
    ,'W'    
    ,'E'
    ,'R'
    ,'T'
    ,'Y'
    ,'U'
    ,'I'
    ,'O'
    ,'P'
    ,'A'  
    ,'S'
    ,'D'
    ,'F'
    ,'G'
    ,'H'
    ,'J'
    ,'K'
    ,'L'
    ,'ENTER'
    ,'Z'
    ,'X'
    ,'C'
    ,'V'
    ,'B'
    ,'N'
    ,'M'
    ,'<-'
]

const handleClick = () => {
    console.log('clicked')
}

keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', handleClick)
    keyboard.append(buttonElement)
})

const guessRows= [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
]
let currentRow = 0
let currentTile = 0

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((guess, guessIndex) => {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
        tileElement.setAttribute('class', 'tile')
        rowElement.append(tileElement)
    })
    tileDisplay.append(rowElement)
})
