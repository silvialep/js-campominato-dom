

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









function easyGrid(container, maxCell) {
    let a = 0;
    generateBombs(bombs, maxCell);
    console.log(bombs);
    for (i = 1; i < maxCell; i++) {
        let newCell = document.createElement('div');
        container.append(newCell);
        newCell.innerText = i;
        newCell.classList.add('cell-easy');
        for (cont = 0; cont < bombs.length; cont++) {
            if (newCell.innerText == bombs[cont]) {
                newCell.classList.add('cell-bomb');
            }
        }
        newCell.addEventListener('click', function () {
            a++;
            newCell.classList.add('active');
            console.log(newCell.innerText);
            let activeCells = document.querySelectorAll('.active');
            console.log(activeCells.length);

            for (cont = 0; cont < bombs.length; cont++) {
                if (newCell.innerText == bombs[cont]) {
                    newCell.classList.toggle('active');
                    newCell.style.backgroundColor = 'red';
                    messageEl.style.opacity = '1';
                    messageText.innerText = `Hai perso! il tuo punteggio è: ${activeCells.length - 1}`;
                    pageContEl.classList.add('disabled');
                }
            }
            console.log(activeCells.length);
            console.log(bombs.length);
            console.log(activeCells.length - bombs.length);
            if (activeCells.length == maxCell - 1 - bombs.length) {
                messageEl.style.opacity = '1';
                messageText.innerText = `Hai vinto!`;
                pageContEl.classList.add('disabled');
            }
        })
    }
}






function mediumGrid(container, maxCell) {
    let a = 0;
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
        newCell.addEventListener('click', function () {
            a++;
            newCell.classList.add('active');
            console.log(newCell.innerText);
            let activeCells = document.querySelectorAll('.active');
            console.log(activeCells.length);

            for (cont = 0; cont < bombs.length; cont++) {
                if (newCell.innerText == bombs[cont]) {
                    newCell.classList.toggle('active');
                    newCell.style.backgroundColor = 'red';
                    messageEl.style.opacity = '1';
                    messageText.innerText = `Hai perso! il tuo punteggio è: ${activeCells.length - 1}`;
                    pageContEl.classList.add('disabled');
                }
            }
            console.log(activeCells.length);
            console.log(bombs.length);
            console.log(activeCells.length - bombs.length);
            if (activeCells.length == maxCell - 1 - bombs.length) {
                messageEl.style.opacity = '1';
                messageText.innerText = `Hai vinto!`;
                pageContEl.classList.add('disabled');
            }
        })
    }
}










function hardGrid(container, maxCell) {
    let a = 0;
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
        newCell.addEventListener('click', function () {
            a++;
            newCell.classList.add('active');
            console.log(newCell.innerText);
            let activeCells = document.querySelectorAll('.active');
            console.log(activeCells.length);

            for (cont = 0; cont < bombs.length; cont++) {
                if (newCell.innerText == bombs[cont]) {
                    newCell.classList.toggle('active');
                    newCell.style.backgroundColor = 'red';
                    messageEl.style.opacity = '1';
                    messageText.innerText = `Hai perso! il tuo punteggio è: ${activeCells.length - 1}`;
                    pageContEl.classList.add('disabled');
                }
            }
            console.log(activeCells.length);
            console.log(bombs.length);
            console.log(activeCells.length - bombs.length);
            if (activeCells.length == maxCell - 1 - bombs.length) {
                messageEl.style.opacity = '1';
                messageText.innerText = `Hai vinto!`;
                pageContEl.classList.add('disabled');
            }
        })
    }
}















// function easyGrid(container, maxCell) {
//     generateBombs(bombs, maxCell);
//     console.log(bombs);
//     for (i = 1; i < maxCell; i++) {
//         let newCell = document.createElement('div');
//         container.append(newCell);
//         newCell.innerText = i;
//         newCell.classList.add('cell-easy');
//         newCell.addEventListener('click', function () {
//             newCell.classList.add('active');
//             console.log(newCell.innerText);
            
//             for(cont = 0; cont < bombs.length; cont++) {
//                 if(newCell.innerText == bombs[cont]) {
//                     newCell.classList.toggle('active');
//                     newCell.classList.add('cell-bomb');
//                     alert('Hai perso!', pageContEl.classList.add('disabled'));
//                 }
//             }
//         })
//     }
    

// }

// function mediumGrid(container, maxCell) {
//     for (i = 1; i < maxCell; i++) {
//         let newCell = document.createElement('div');
//         container.append(newCell);
//         newCell.innerText = i;
//         newCell.classList.add('cell-medium');
//         generateBombs(bombs, maxCell);
//         newCell.addEventListener('click', function () {
//             newCell.classList.add('active');
//             console.log(newCell.innerText);
//             for (cont = 0; cont < bombs.length; cont++) {
//                 if (newCell.innerText == bombs[cont]) {
//                     newCell.classList.toggle('active');
//                     newCell.classList.add('cell-bomb');
//                     alert('Hai perso!', pageContEl.classList.add('disabled'));
//                 }
//             }
//         })
//     }
// }

// function hardGrid(container, maxCell) {
//     for (i = 1; i < maxCell; i++) {
//         let newCell = document.createElement('div');
//         container.append(newCell);
//         newCell.innerText = i;
//         newCell.classList.add('cell-hard');
//         generateBombs(bombs, maxCell);
//         newCell.addEventListener('click', function () {
//             newCell.classList.add('active');
//             console.log(newCell.innerText);
//             for (cont = 0; cont < bombs.length; cont++) {
//                 if (newCell.innerText == bombs[cont]) {
//                     newCell.classList.toggle('active');
//                     newCell.classList.add('cell-bomb');
//                     alert('Hai perso!', pageContEl.classList.add('disabled'));
//                 }
//             }
//         })
//     }
// }


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