import React from "react";

export default function ResultPopup({ gameOver, didWin, word, onNewGame }) {
  return (
    <div
      id="new-game-container"
      className={`new-game-popup ${gameOver ? "" : "hide"}`}
    >
      <div id="result-text">
        {gameOver &&
          (didWin ? (
            <>
              <h2 className="win-msg">You Win!!</h2>
              <p>
                The word was <span>{word}</span>
              </p>
            </>
          ) : (
            <>
              <h2 className="lose-msg">You Lose!!</h2>
              <p>
                The word was <span>{word}</span>
              </p>
            </>
          ))}
      </div>

      <button id="new-game-btn" onClick={onNewGame}>
        New Game
      </button>
    </div>
  );
}
