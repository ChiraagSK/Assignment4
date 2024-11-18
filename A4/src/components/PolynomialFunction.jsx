import React, { useState } from "react";

const PolynomialFunction = () => {
    const [coeff, setCoeff] = useState("");
    const [exp, setExp] = useState("");
    const [xVal, setX] = useState("");
    const [polyFunction, setPolyF] = useState("");
    const [polySolution, setPolySol] = useState("");

    // if(coeff.some(isNaN) || exp.some(isNaN) || isNaN(xVal) || coeff.length !== exp.length){
    //     polyFunction.value="Please enter a valid number for all fields";
    //     return;
    // }

    const Calculate = () => {

    const coeffArray = coeff.split(" ").map(Number);
    const expArray = exp.split(" ").map(Number);
    const xValue = parseFloat(xVal);

    let functionString = "f(x) = ";
    let evaluation = 0;
    

    for(let i = 0; i < coeffArray.length; i++){
        const coefficient = coeffArray[i];
        const exponent = expArray[i];
        const term = coefficient*Math.pow(xVal, exponent);

        evaluation += term;

        //+ive or -ive
        if(i>0){
            functionString += coefficient >= 0 ? " + " : " - ";
        } else if(coefficient < 0){
            functionString += "-";
        }

        functionString += `${Math.abs(coefficient)}x^${exponent}`;
    }

    setPolyF(functionString);
    setPolySol(`f(${xVal}) = ${evaluation.toFixed(2)}`);
    }

    return (
        <div className="polynomial-function">
            <h2>Polynomial Function</h2>
            <div>
                <label>
                    Coefficients (separated by spaces):
                    <input
                        type="text"
                        value={coeff}
                        onChange={(e) => setCoeff(e.target.value)}
                        placeholder="e.g., 2 3 -4"
                    />
                </label>
            </div>
            <div>
                <label>
                    Exponents (separated by spaces):
                    <input
                        type="text"
                        value={exp}
                        onChange={(e) => setExp(e.target.value)}
                        placeholder="e.g., 5 3 2"
                    />
                </label>
            </div>
            <div>
                <label>
                    x Value:
                    <input
                        type="text"
                        value={xVal}
                        onChange={(e) => setX(e.target.value)}
                        placeholder="e.g., 3"
                    />
                </label>
            </div>
            <button onClick={Calculate}>Calculate</button>
            <div>
                <strong>Function:</strong> {polyFunction}
            </div>
            <div>
                <strong>Evaluation:</strong> {polySolution}
            </div>
        </div>
    );
}

export default PolynomialFunction;