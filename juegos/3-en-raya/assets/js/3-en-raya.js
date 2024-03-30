// Definición de variables globales
let currentPlayer = 'X'; // Jugador actual
let gameActive = true; // Estado del juego (activo o no)
const cells = document.querySelectorAll('.cell'); // Celdas del tablero
const message = document.getElementById('message'); // Mensaje de estado del juego

// Maneja el clic en una celda del tablero
function handleClick(index) {
    const cell = cells[index]; // Celda seleccionada
    // Verifica si el juego está activo o si la celda ya está marcada
    if (!gameActive || cell.textContent !== '') return;
    
    // Marca la celda con el jugador actual
    cell.textContent = currentPlayer;

    // Verifica si hay un ganador
    if (checkWin()) {
        endGame(`¡${currentPlayer} ha ganado!`);
        return;
    }

    // Verifica si hay un empate
    if (checkDraw()) {
        endGame('¡Empate!');
        return;
    }

    // Cambia al siguiente jugador
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `${currentPlayer}'s Turn`;
}

// Verifica si hay un ganador
function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];
    
    // Itera sobre las combinaciones ganadoras
    return winningCombinations.some(combination => {
        // Verifica si el jugador actual ha marcado todas las celdas de una combinación ganadora
        return combination.every(index => cells[index].textContent === currentPlayer);
    });
}

// Verifica si hay un empate
function checkDraw() {
    // Verifica si todas las celdas están marcadas
    return [...cells].every(cell => cell.textContent);
}

// Finaliza el juego con un mensaje y oculta el tablero
function endGame(messageText) {
    document.querySelector('.game').classList.add('d-none'); // Oculta el tablero
    document.querySelector('.fireworks').classList.remove('d-none'); // Muestra los fuegos artificiales
    message.textContent = messageText; // Muestra el mensaje de finalización del juego
    gameActive = false; // Desactiva el juego
}

// Reinicia el juego
function resetGame() {
    document.querySelector('.game').classList.remove('d-none'); // Muestra el tablero
    document.querySelector('.fireworks').classList.add('d-none'); // Oculta los fuegos artificiales
    // Reinicia todas las celdas
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X'; // Establece el jugador inicial
    gameActive = true; // Reactiva el juego
    message.textContent = `${currentPlayer}'s Turn`; // Restablece el mensaje de estado del juego
}
