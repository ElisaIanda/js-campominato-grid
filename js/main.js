
"use strict"

const squareCountsSelect = document.querySelector("[name='squareCounts']");
const btnStart = document.querySelector("#btn");
const gridContainer = document.querySelector(".grid-container");

btnStart.addEventListener("click", onBtnClick);


function onBtnClick() {
    // codice da eseguire al click

    // Leggo il valore della select
    const squareCounts = parseInt(squareCountsSelect.value);

    // console.log("valore scelto", squareCounts);

    // devo generare la griglia. Questa viene generata in modo virtuale,
    const gridList = createGrid(squareCounts);

    // console.log(gridList);

    // invoco la funzione che si occuperà di aggiungere al DOM i vari quadrati
    printGrid(gridContainer, gridList);
}

// Genera un singolo quadrato e lo ritorna

function createSingleSquare(squareContent, squareCounts) {
    const square = document.createElement("div");

    const squaresPerRow = Math.sqrt(squareCounts);

    square.classList.add("grid-square");    
    square.style.flexBasis = `calc(100% / ${squaresPerRow})`;

    square.addEventListener("click", function () {
        square.classList.toggle("bg-warning");
        square.innerHTML = squareContent;
        console.log(squareContent);
    });

    // Output
    return square;
}

// Dato un numero di celle, crea tutta la griglia.

function createGrid(squaresNumber) {
    const grid = [];

    for (let i = 0; i < squaresNumber; i++) {
        // salvo in una variabile l'output della funzione createSingleSquare
        const newSquare = createSingleSquare(i, squaresNumber);

        grid.push(newSquare);
    }

    // Output
    return grid;
}

// aggiungo ad un elemento html, la lista dei quadrati

function printGrid(container, squaresList) {
    // reset del contenuto del container per evitare che ci siano altri div creati precedentemente
    container.innerHTML = "";

    for (let i = 0; i < squaresList.length; i++) {
        container.append(squaresList[i]);
    }
}