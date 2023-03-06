

// creo variabile degli elementi HTML che andrò a manipolare

let pageContEl = document.getElementById('page-container');

let gridContEl = document.getElementById('grid-container');
let gridEl = document.getElementById('grid');
let buttonCreate = document.getElementById('btn-create');
let buttonClear = document.getElementById('btn-clear');

let gridPlaceholder = document.getElementById('grid-placeholder');

let messageEl = document.getElementById('final-message');
let messageText = document.getElementById('message-text');

// console.log(difficultyChoice.value);
gridEl.style.display = 'none';
messageEl.style.opacity = '0';

// creo array per i 16 numeri casuali a cui associare le bombe
let bombs = [];
// console.log(bombs);



// creo evento al click per generare la griglia con le celle
buttonCreate.addEventListener('click', function () {
    gridEl.innerHTML = '';
    gridPlaceholder.style.display = 'none';
    gridEl.style.display = 'flex';
    let difficultyChoice = document.getElementById('difficulty');
    if (difficultyChoice.value == 'easy') {
        easyGrid(gridEl, 101);
    } else if (difficultyChoice.value == 'medium') {
        mediumGrid(gridEl, 82);
    } else if (difficultyChoice.value == 'hard') {
        hardGrid(gridEl, 50);
    }
})








// creo funzione per generare la griglia con la difficoltà facile
function easyGrid(container, maxCell) {
    // genero le bombe casuali
    generateBombs(bombs, maxCell);
    console.log(bombs);

    // genero la griglia
    for (i = 1; i < maxCell; i++) {
        let newCell = document.createElement('div');
        container.append(newCell);
        newCell.innerText = i;
        newCell.classList.add('cell-easy');

        // aggiungo la stessa classe a tutte le bombe - per poi visualizzarle tutte insieme quando la partita termina
        for (cont = 0; cont < bombs.length; cont++) {
            if (newCell.innerText == bombs[cont]) {
                newCell.classList.add('cell-bomb');
            }
        }

        // raggruppo in un array tutte le celle con la classe bomba
        let cellBombs = document.querySelectorAll('.cell-bomb');

        function displayRed(array) {
            for (a = 0; a < array.length; a++) {
                array[a].style.backgroundColor = 'red';
            }
        }

        // creo l'evento al click che colora di azzurro le celle cliccate
        newCell.addEventListener('click', function () {
            newCell.classList.add('active');
            console.log(newCell.innerText);

            // creo un array per tutte le celle attive che mi serve per contarle e dare il punteggio
            let activeCells = document.querySelectorAll('.active');


            // creo il ciclo che controlla se la cella cliccata è una bomba
            for (cont = 0; cont < bombs.length; cont++) {
                // se la cella cliccata è una bomba il gioco termina e stampo il messaggio di sconfitta
                if (newCell.innerText == bombs[cont]) {
                    newCell.classList.toggle('active');
                    // newCell.style.backgroundColor = 'red';
                    messageEl.style.opacity = '1';
                    messageText.innerText = `Hai perso! il tuo punteggio è: ${activeCells.length - 1}`;
                    pageContEl.classList.add('disabled');
                }
            }
            
            displayRed(cellBombs);
            
            // se le celle attive raggiungono il numero massimo stampo il messaggio di vittoria
            if (activeCells.length == maxCell - 1 - bombs.length) {
                messageEl.style.opacity = '1';
                messageText.innerText = `Hai vinto!`;
                pageContEl.classList.add('disabled');
            }
        })

    }
}






function mediumGrid(container, maxCell) {
    generateBombs(bombs, maxCell);
    console.log(bombs);

    for (i = 1; i < maxCell; i++) {
        let newCell = document.createElement('div');
        container.append(newCell);
        newCell.innerText = i;
        newCell.classList.add('cell-medium');
        for (cont = 0; cont < bombs.length; cont++) {
            if (newCell.innerText == bombs[cont]) {
                newCell.classList.add('cell-bomb');
            }
        }
        let cellBombs = document.querySelectorAll('.cell-bomb');

        newCell.addEventListener('click', function () {
            newCell.classList.add('active');
            console.log(newCell.innerText);
            let activeCells = document.querySelectorAll('.active');

            for (cont = 0; cont < bombs.length; cont++) {
                if (newCell.innerText == bombs[cont]) {
                    newCell.classList.toggle('active');
                    newCell.style.backgroundColor = 'red';
                    for (a = 0; a < cellBombs.length; a++) {
                        cellBombs[a].style.backgroundColor = 'red';
                    }
                    messageEl.style.opacity = '1';
                    messageText.innerText = `Hai perso! il tuo punteggio è: ${activeCells.length - 1}`;
                    pageContEl.classList.add('disabled');
                }
            }
            if (activeCells.length == maxCell - 1 - bombs.length) {
                messageEl.style.opacity = '1';
                messageText.innerText = `Hai vinto!`;
                pageContEl.classList.add('disabled');
            }
        })
    }
}










function hardGrid(container, maxCell) {
    generateBombs(bombs, maxCell);
    console.log(bombs);

    for (i = 1; i < maxCell; i++) {
        let newCell = document.createElement('div');
        container.append(newCell);
        newCell.innerText = i;
        newCell.classList.add('cell-hard');
        for (cont = 0; cont < bombs.length; cont++) {
            if (newCell.innerText == bombs[cont]) {
                newCell.classList.add('cell-bomb');
            }
        }
        let cellBombs = document.querySelectorAll('.cell-bomb');

        newCell.addEventListener('click', function () {
            newCell.classList.add('active');
            console.log(newCell.innerText);
            let activeCells = document.querySelectorAll('.active');

            for (cont = 0; cont < bombs.length; cont++) {
                if (newCell.innerText == bombs[cont]) {
                    newCell.classList.toggle('active');
                    newCell.style.backgroundColor = 'red';
                    messageEl.style.opacity = '1';
                    messageText.innerText = `Hai perso! il tuo punteggio è: ${activeCells.length - 1}`;
                    pageContEl.classList.add('disabled');
                }
            }
            if (activeCells.length == maxCell - 1 - bombs.length) {
                messageEl.style.opacity = '1';
                messageText.innerText = `Hai vinto!`;
                pageContEl.classList.add('disabled');
            }
        })
    }
}








// creo funzione per aggiungere all'array delle bombe i 16 numeri casuali
function generateBombs(array, maxCell) {
    let i = 1;
    while(array.length < 16) {
        i = generateNumber(1, maxCell);
        if(!array.includes(i)) {
            array.push(i);
    }
}
}


// creo funzione per generare numero casuale compreso tra un minimo e un massimo
function generateNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min) + 1);
    return number;
}