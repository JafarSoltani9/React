import { useMemo, useState } from "react";
import "./style.css";

export default function App() {
  const [count, setCount] = useState(0);

  const [startInput, setStartInput] = useState("");
  const [stepInput, setStepInput] = useState("");

  const [startLocked, setStartLocked] = useState(false);
  const [stepLocked, setStepLocked] = useState(false);

  const step = useMemo(() => {
    const n = parseInt(stepInput, 10);
    return Number.isFinite(n) ? n : 1;
  }, [stepInput]);

  const countColor = count > 0 ? "green" : count < 0 ? "red" : "black";

  const onSelectStart = () => {
    const n = parseInt(startInput, 10);
    if (Number.isFinite(n)) {
      setCount(n);
      setStartLocked(true);
    }
  };

  const onSelectStep = () => {
    const n = parseInt(stepInput, 10);
    if (Number.isFinite(n)) {
      setStepLocked(true);
    }
  };

  const increase = () => setCount((c) => c + step);
  const decrease = () => setCount((c) => c - step);
  const resetCount = () => setCount(0);

  const resetPage = () => {
    setCount(0);
    setStartInput("");
    setStepInput("");
    setStartLocked(false);
    setStepLocked(false);
  };

  return (
    <div className="container">
      <div className="choseCountContainer">
        <div>
          1. Enter a number to start at:
          <br />
          <input
            type="number"
            className="start"
            placeholder="Enter a number"
            value={startInput}
            onChange={(e) => setStartInput(e.target.value)}
            disabled={startLocked}
          />
          <br />
          <button id="startBtn" onClick={onSelectStart} disabled={startLocked}>
            Select
          </button>
        </div>

        <br />

        <div>
          2. Enter a number to count by:
          <br />
          <input
            type="number"
            className="countBy"
            placeholder="Enter a number"
            value={stepInput}
            onChange={(e) => setStepInput(e.target.value)}
            disabled={stepLocked}
          />
          <br />
          <button id="countByBtn" onClick={onSelectStep} disabled={stepLocked}>
            Select
          </button>
        </div>
      </div>

      <br />

      <span id="value" style={{ color: countColor }}>
        {count}
      </span>

      <div className="buttonContainer">
        <button className="btn decrease" onClick={decrease}>
          Decrease
        </button>
        <button className="btn reset" onClick={resetCount}>
          Reset
        </button>
        <button className="btn increase" onClick={increase}>
          Increase
        </button>
      </div>

      <button id="reset-page-btn" onClick={resetPage}>
        Reset Page
      </button>
    </div>
  );
}
