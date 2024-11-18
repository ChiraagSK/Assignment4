import React, { useState } from "react";

const NewtonsMethod = () => {
    const [rootGuess, setGuess] = useState("");
    const [result, setResult] = useState("");

    const f = (x) => {
        return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
    }

    const fPrime = (x) => { //Derivative
        return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
    }

    const calculate = () =>{
        let x0 = rootGuess;
    const maxIterations = 100;
    const tolerance = 1e-7;
    let iteration = 0;

    while(iteration < maxIterations){
        const fx0 = f(x0);
        const fpx0 = fPrime(x0);
        
        if(fpx0 === 0){
            setResult("Please enter a different initial guess");
            return;
        }

        const x1 = x0 - fx0/fpx0;

        if(Math.abs(x1-x0) < tolerance){
            setResult(`Approximate root: ${x1.toFixed(6)}`);
            return;
        }

        x0 = x1;
        iteration++;

        setResult("The method did not converge.");
        }
    }

    
    

    return (
        <div className="newtons-method">
            <h2>Newton's Method</h2>
            <div>
                <label>
                    Root Guess:
                    <input
                        type="text"
                        value={rootGuess}
                        onChange={(e) => setGuess(e.target.value)}
                        placeholder="Enter your initial guess"
                    />
                </label>
            </div>
            <button onClick={calculate}>Calculate</button>
            <div>
                <strong>Result:</strong> {result}
            </div>
        </div>
    );
}

export default NewtonsMethod