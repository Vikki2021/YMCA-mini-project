
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");    /*All using */

const xSymbol= 'X';
const oSymbol= 'O';

// game variable
let gameisLive = true;
let xisNext = true;

// functions
const letterSymbol= (letter) => letter === 'X' ? xSymbol : oSymbol;

const handlewin = (letter) => {
    gameisLive = false;
    if (letter === 'X') {
        statusDiv.innerHTML = `${letterSymbol(letter)} has won!`;
    } else {
        statusDiv.innerHTML = `<span>${letterSymbol(letter)} has won</span>`;

    }
};

const Statusgame = () => {
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const middleLeft = cellDivs[3].classList[1];
    const middleMiddle = cellDivs[4].classList[1];
    const middleRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const bottomRight = cellDivs[8].classList[1];
 
 
// check winner
if (topLeft && topLeft === topMiddle && topLeft===topRight) {
    handlewin(topLeft);
    cellDivs[0].classList.add("won"); 
    cellDivs[1].classList.add("won");  
    cellDivs[2].classList.add("won"); 
} else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handlewin(middleLeft);
    cellDivs[3].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[5].classList.add("won");
} else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handlewin(bottomLeft);
    cellDivs[6].classList.add("won");
    cellDivs[7].classList.add("won");
    cellDivs[8].classList.add("won");
} else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handlewin(topLeft);
    cellDivs[0].classList.add("won");
    cellDivs[3].classList.add("won");
    cellDivs[6].classList.add("won");
} else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handlewin(topMiddle);
    cellDivs[1].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[7].classList.add("won");
} else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handlewin(topRight);
    cellDivs[2].classList.add("won");
    cellDivs[5].classList.add("won");
    cellDivs[8].classList.add("won");
} else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handlewin(topLeft);
    cellDivs[0].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[8].classList.add("won");
} else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handlewin(topRight);
    cellDivs[2].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[6].classList.add("won");
} else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight){
    gameisLive = false;
    statusDiv.innerHTML = "Game is tied!";
    statusDiv.style.color = "white";
} else {
    xisNext = !xisNext;
    if(xisNext) {
        statusDiv.innerHTML = `${xSymbol} is next`;
    }else {
        statusDiv.innerHTML = `<span>${oSymbol} is next</span>`
    }
}
};



// event Handlers
const handleReset = (e) => {
    xisNext = true;
    statusDiv.innerHTML = `${xSymbol} is next`;
    for (const cellDiv of cellDivs){
        cellDiv.classList.remove('X');
        cellDiv.classList.remove('O');
        cellDiv.classList.remove('won');
    }
    gameisLive = true;
};


const handleClick = (e) => {
    const classList = e.target.classList;
    // when neither x nor o is added the classList has only one element.
    // so classList[1] is undefined.
    if (!gameisLive || classList[1]==='X' || classList[1] ==='O'){
        return;
    }
    if (xisNext) {
        classList.add('X');
        Statusgame();
    } else{
        classList.add('O');
        Statusgame();
    }
};

// event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleClick);
}