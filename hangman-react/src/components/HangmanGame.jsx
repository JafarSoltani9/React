import React, { useEffect, useRef, useState } from "react";
import ResultPopup from "./resultPopup";

// Categories (same as your original)
const CATEGORIES = {
  fruits: [
    "Apple",
    "Blueberry",
    "Mandarin",
    "Pineapple",
    "Pomegranate",
    "Watermelon",
  ],
  animals: ["Hedgehog", "Rhinoceros", "Squirrel", "Panther", "Walrus", "Zebra"],
  countries: [
    "India",
    "Hungary",
    "Kyrgyzstan",
    "Switzerland",
    "Zimbabwe",
    "Dominica",
  ],
};

const LETTERS = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

export default function HangmanGame() {
  // ===== State =====
  const [category, setCategory] = useState("");
  const [word, setWord] = useState(""); // UPPERCASE
  const [revealed, setRevealed] = useState([]); // boolean array
  const [chosenLetters, setChosenLetters] = useState(new Set());
  const [wrongCount, setWrongCount] = useState(0); // 0..6
  const [gameOver, setGameOver] = useState(false);
  const [didWin, setDidWin] = useState(false);

  // Canvas
  const canvasRef = useRef(null);

  // ===== Handlers =====
  const startNew = () => {
    setCategory("");
    setWord("");
    setRevealed([]);
    setChosenLetters(new Set());
    setWrongCount(0);
    setGameOver(false);
    setDidWin(false);
    requestAnimationFrame(() => drawInitial());
  };

  const chooseCategory = (key) => {
    setCategory(key);
    const pool = CATEGORIES[key];
    const picked = pool[Math.floor(Math.random() * pool.length)].toUpperCase();
    setWord(picked);
    setRevealed(Array.from({ length: picked.length }, () => false));
  };

  const onLetterClick = (letter) => {
    if (!word || gameOver) return;
    if (chosenLetters.has(letter)) return;

    const nextChosen = new Set(chosenLetters);
    nextChosen.add(letter);
    setChosenLetters(nextChosen);

    const indices = [];
    for (let i = 0; i < word.length; i++)
      if (word[i] === letter) indices.push(i);

    if (indices.length > 0) {
      setRevealed((prev) => {
        const next = [...prev];
        indices.forEach((idx) => (next[idx] = true));
        if (next.every(Boolean)) {
          setGameOver(true);
          setDidWin(true);
        }
        return next;
      });
    } else {
      setWrongCount((c) => {
        const nc = c + 1;
        drawByCount(nc);
        if (nc >= 6) {
          setGameOver(true);
          setDidWin(false);
        }
        return nc;
      });
    }
  };

  // ===== Canvas drawing =====
  const getCtx = () => canvasRef.current?.getContext("2d");

  const drawLine = (fromX, fromY, toX, toY) => {
    const ctx = getCtx();
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
  };

  const drawInitial = () => {
    const ctx = getCtx();
    if (!ctx) return;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    // gallows
    drawLine(10, 130, 130, 130);
    drawLine(10, 10, 10, 131);
    drawLine(10, 10, 70, 10);
    drawLine(70, 10, 70, 20);
  };

  const drawHead = () => {
    const ctx = getCtx();
    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(70, 30, 10, 0, Math.PI * 2, true);
    ctx.stroke();
  };
  const drawBody = () => drawLine(70, 40, 70, 80);
  const drawLeftArm = () => drawLine(70, 50, 50, 70);
  const drawRightArm = () => drawLine(70, 50, 90, 70);
  const drawLeftLeg = () => drawLine(70, 80, 50, 110);
  const drawRightLeg = () => drawLine(70, 80, 90, 110);

  const drawByCount = (count) => {
    switch (count) {
      case 1:
        drawHead();
        break;
      case 2:
        drawBody();
        break;
      case 3:
        drawLeftArm();
        break;
      case 4:
        drawRightArm();
        break;
      case 5:
        drawLeftLeg();
        break;
      case 6:
        drawRightLeg();
        break;
      default:
        break;
    }
  };

  // Draw gallows on mount
  useEffect(() => {
    drawInitial();
  }, []);

  // Ensure gallows after reset + category picked
  useEffect(() => {
    if (category && wrongCount === 0) drawInitial();
  }, [category, wrongCount]);

  // ===== Render =====
  return (
    <div className="container">
      {/* Category options */}
      <div id="options-container">
        {!category && (
          <>
            <h3>Please Select An Option</h3>
            <div>
              {Object.keys(CATEGORIES).map((key) => (
                <button
                  key={key}
                  className={`options ${category === key ? "active" : ""}`}
                  onClick={() => chooseCategory(key)}
                >
                  {key}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Letters */}
      <div
        className={`letter-container ${!word ? "hide" : ""}`}
        id="letter-container"
      >
        {LETTERS.map((L) => (
          <button
            key={L}
            className="letters"
            onClick={() => onLetterClick(L)}
            disabled={!word || chosenLetters.has(L) || gameOver}
          >
            {L}
          </button>
        ))}
      </div>

      {/* Masked word */}
      <div id="user-input-section">
        {word
          ? word.split("").map((_, idx) => (
              <span key={idx} className="dashes" style={{ margin: "0 0.15em" }}>
                {revealed[idx] ? word[idx] : "_"}
              </span>
            ))
          : null}
      </div>

      {/* Canvas */}
      <canvas id="canvas" ref={canvasRef} width={160} height={150} />

      {/* Result / New Game */}
      <ResultPopup
        gameOver={gameOver}
        didWin={didWin}
        word={word}
        onNewGame={startNew}
      />
    </div>
  );
}
