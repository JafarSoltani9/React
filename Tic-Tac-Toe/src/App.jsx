import { useEffect, useState } from "react";

export default function App() {
  const [gameActive, setGameActive] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameState, setGameState] = useState(Array(9).fill(""));

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winningMessage = () => `Player ${currentPlayer} has won!`;
  const drawMessage = () => `Game ended in a draw!`;
  const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

  const [statusText, setStatusText] = useState(currentPlayerTurn());

  useEffect(() => {
    if (gameActive) setStatusText(currentPlayerTurn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayer, gameActive]);

  function handleCellClick(index) {
    return () => {
      if (!gameActive || gameState[index] !== "") return;
      const next = [...gameState];
      next[index] = currentPlayer;
      setGameState(next);
      validateResult(next);
    };
  }

  function validateResult(state) {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
      const [aIdx, bIdx, cIdx] = winningConditions[i];
      const a = state[aIdx];
      const b = state[bIdx];
      const c = state[cIdx];
      if (!a || !b || !c) continue;
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      endRound(winningMessage());
      return;
    }

    const roundDraw = !state.includes("");
    if (roundDraw) {
      endRound(drawMessage());
      return;
    }

    setCurrentPlayer((p) => (p === "X" ? "O" : "X"));
  }

  function endRound(message) {
    setStatusText(message);
    setGameActive(false);
    setTimeout(() => {
      if (window.confirm(message + "\n\nPlay again?")) {
        handleRestart();
      }
    }, 120);
  }

  function handleRestart() {
    setGameActive(true);
    setCurrentPlayer("X");
    setGameState(Array(9).fill(""));
    setStatusText(currentPlayerTurn());
  }

  return (
    <section>
      <h1 className="game-title">Tic Tac Toe</h1>
      <div className="game-container">
        {gameState.map((val, idx) => (
          <div
            key={idx}
            className="cell"
            role="button"
            aria-label={`cell ${idx}`}
            onClick={handleCellClick(idx)}
          >
            {val}
          </div>
        ))}
      </div>
      <h3 className="game-status">{statusText}</h3>
      <button className="game-restart" onClick={handleRestart}>
        Restart Game
      </button>
    </section>
  );
}
