document.getElementById("button").addEventListener("click", function () {

    const containerGrid = document.getElementById("container-grid");
    const squareChoseInput = document.getElementById("square-chose");

    // select
    const squareChose = parseInt(squareChoseInput.value);

    if (squareChose === 49){
        containerGrid.style.width = "630px";
    } else if (squareChose === 81){
        containerGrid.style.width = "810px";
    } else if (squareChose === 100){
        containerGrid.style.width = "900px";
    }

    containerGrid.innerHTML = "";

    for (let i = 1; i <= squareChose; i++) {

        const squareSingolo = `<div class="square">${i}</div>`
        containerGrid.innerHTML += squareSingolo;
        console.log(containerGrid);

    }

    const listaSquare = document.querySelectorAll(".square")

    for (let i = 0; i < listaSquare.length; i++) {

        listaSquare[i].addEventListener("click", function () {
            
            listaSquare[i].classList.toggle("bg-warning");
            console.log(listaSquare[i].innerHTML);
        })
    }

})



// Riprovato esercizio da sola
// const squareChoseInput = document.getElementById("square-chose");
// const button = document.getElementById("button");
// const contenitoregrid = document.querySelector(".container-grid");

// button.addEventListener("click", myClick);

// //    codice da eseguire al click
// function myClick() {

//     //    Leggo il valore della select
//     const squareChose = parseInt(squareChoseInput.value);

//     console.log("valore scelto", squareChose);

//     //   genero la griglia in modo virtuale,
//     const listaGrid = createGrid(squareChose);

//     console.log(listaGrid);

//     printGrid(contenitoregrid, listaGrid);
// }

// //  genero un singolo quadrato

// function singoloSquare(squareContent, squareChose) {
//     const square = document.createElement("div");

//     const rowsquare = Math.sqrt(squareChose);

//     square.classList.add("grid-square");
//     square.style.flexBasis = `calc(100% / ${rowsquare})`;

//     square.addEventListener("click", function () {
//         square.classList.toggle("bg-warning");
//         square.innerHTML = squareContent;
//         console.log(squareContent);
//     });

//     return square;
// }

// //  crea tutta la griglia.

// function createGrid(numeroSquare) {
//     const grid = [];

//     for (let i = 0; i < numeroSquare; i++) {
//         // salvo in una variabile l'output della funzione
//         const nuovoSquare = singoloSquare(i, numeroSquare);

//         grid.push(nuovoSquare);
//     }

//     return grid;
// }

// //  aggiungo ad un elemento html

// function printGrid(container, listaSquare) {
//     //    reset del contenuto
//     container.innerHTML = "";

//     for (let i = 0; i < listaSquare.length; i++) {
//         container.append(listaSquare[i]);
//     }
// }


// Svolto in classe
// const squareCountsSelect = document.querySelector("[name='squareCounts']");
// const btnStart = document.querySelector("#btn");
// const gridContainer = document.querySelector(".grid-container");

// btnStart.addEventListener("click", onBtnClick);


// function onBtnClick() {
// //    codice da eseguire al click

// //    Leggo il valore della select
//     const squareCounts = parseInt(squareCountsSelect.value);

//    console.log("valore scelto", squareCounts);

// //    devo generare la griglia. Questa viene generata in modo virtuale,
//     const gridList = createGrid(squareCounts);

//    console.log(gridList);

// //    invoco la funzione che si occuperà di aggiungere al DOM i vari quadrati
//     printGrid(gridContainer, gridList);
// }

// //  Genera un singolo quadrato e lo ritorna

// function createSingleSquare(squareContent, squareCounts) {
//     const square = document.createElement("div");

//     const squaresPerRow = Math.sqrt(squareCounts);

//     square.classList.add("grid-square");
//     square.style.flexBasis = `calc(100% / ${squaresPerRow})`;

//     square.addEventListener("click", function () {
//         square.classList.toggle("bg-warning");
//         square.innerHTML = squareContent;
//         console.log(squareContent);
//     });

//    Output
//     return square;
// }

//  Dato un numero di celle, crea tutta la griglia.

// function createGrid(squaresNumber) {
//     const grid = [];

//     for (let i = 0; i < squaresNumber; i++) {
//     //    salvo in una variabile l'output della funzione createSingleSquare
//         const newSquare = createSingleSquare(i, squaresNumber);

//         grid.push(newSquare);
//     }

//    Output
//     return grid;
// }

// //  aggiungo ad un elemento html, la lista dei quadrati

// function printGrid(container, squaresList) {
// //    reset del contenuto del container per evitare che ci siano altri div creati precedentemente
//     container.innerHTML = "";

//     for (let i = 0; i < squaresList.length; i++) {
//         container.append(squaresList[i]);
//     }
// }