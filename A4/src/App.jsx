import HeronsFormula from "./components/HeronsFormula.jsx"
import AmbiguousCase from "./components/AmbiguousCase.jsx"
import NewtonsMethod from "./components/NewtonsMethod.jsx"
import PolynomialFunction from "./components/PolynomialFunction.jsx"
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <HeronsFormula />
        </div>
        <div className="card">
          <AmbiguousCase />
        </div>
        <div className="card">
          <NewtonsMethod />
        </div>

        <div className="card">
          <PolynomialFunction />
        </div>
      </div>
    </div>
  )
}

export default App
