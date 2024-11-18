import React, { useState } from "react";

const AmbiguousCase = () => {
  const [angle, setAngle] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const checkAmbiguousCase = () => {
    const A = parseFloat(angle);
    const sideA = parseFloat(a);
    const sideB = parseFloat(b);
    const h = sideB * Math.sin((A * Math.PI) / 180);0

    if (A < 90) {
      if (sideA < h) setResult("No Triangle");
      else if (sideA === h) setResult("Right Triangle");
      else if (sideA > sideB) setResult("One Triangle");
      else if (h < sideA && sideA < sideB) setResult("Two Triangles (Ambiguous)");
    } else {
      if (sideA <= sideB) setResult("No Triangle");
      else setResult("One Triangle");
    }
  };

  return (
    <div>
      <h2>Ambiguous Case</h2>
      <input type="number" value={angle} onChange={(e) => setAngle(e.target.value)} placeholder="Angle A" />
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="Side a" />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Side b" />
      <button onClick={checkAmbiguousCase}>Check</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default AmbiguousCase;