import React, { useState } from "react";

const HeronsFormula = () => {
    const [sideA, setSideA] = useState("");
    const [sideB, setSideB] = useState("");
    const [sideC, setSideC] = useState("");
    const [result,setResult] = useState("");

    const Calculation = () => {
        const a = parseFloat(sideA);
        const b = parseFloat(sideB);
        const c = parseFloat(sideC);

        const area = (1 / 4) * Math.sqrt(
            4 * Math.pow(a, 2) * Math.pow(b, 2) - Math.pow((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)), 2)
        );
        setResult(`The area of the triangle is ${area.toFixed(2)}.`);
    }

    return (
        <div className="herons-formula">
            <h2>Heron's Formula</h2>
            <div>
                <label>
                    Side A:
                    <input
                        type="text"
                        value={sideA}
                        onChange={(e) => setSideA(e.target.value)}
                        placeholder="Enter side A"
                    />
                </label>
            </div>
            <div>
                <label>
                    Side B:
                    <input
                        type="text"
                        value={sideB}
                        onChange={(e) => setSideB(e.target.value)}
                        placeholder="Enter side B"
                    />
                </label>
            </div>
            <div>
                <label>
                    Side C:
                    <input
                        type="text"
                        value={sideC}
                        onChange={(e) => setSideC(e.target.value)}
                        placeholder="Enter side C"
                    />
                </label>
            </div>
            <button onClick={Calculation}>Calculate</button>
            <div>
                <strong>Result:</strong> {result}
            </div>
        </div>
    );
}

export default HeronsFormula