// Variables globales
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

// Obtener las celdas del tablero
const cells = document.querySelectorAll(".cell");

// Función para actualizar el tablero
function updateBoard() {
  cells.forEach((cell, index) => {
    cell.textContent = gameBoard[index];
  });
}

// Función para comprobar si alguien ha ganado
function checkWinner() {
  // Comprobar filas
  if (
    (gameBoard[0] === currentPlayer &&
      gameBoard[1] === currentPlayer &&
      gameBoard[2] === currentPlayer) ||
    (gameBoard[3] === currentPlayer &&
      gameBoard[4] === currentPlayer &&
      gameBoard[5] === currentPlayer) ||
    (gameBoard[6] === currentPlayer &&
      gameBoard[7] === currentPlayer &&
      gameBoard[8] === currentPlayer)
  ) {
    return true;
  }

  // Comprobar columnas
  if (
    (gameBoard[0] === currentPlayer &&
      gameBoard[3] === currentPlayer &&
      gameBoard[6] === currentPlayer) ||
    (gameBoard[1] === currentPlayer &&
      gameBoard[4] === currentPlayer &&
      gameBoard[7] === currentPlayer) ||
    (gameBoard[2] === currentPlayer &&
      gameBoard[5] === currentPlayer &&
      gameBoard[8] === currentPlayer)
  ) {
    return true;
  }

  // Comprobar diagonales
  if (
    (gameBoard[0] === currentPlayer &&
      gameBoard[4] === currentPlayer &&
      gameBoard[8] === currentPlayer) ||
    (gameBoard[2] === currentPlayer &&
      gameBoard[4] === currentPlayer &&
      gameBoard[6] === currentPlayer)
  ) {
    return true;
  }

  return false;
}

// Función para cambiar de jugador
// Función para reiniciar el juego
// Asignar eventos a las celdas del tablero
