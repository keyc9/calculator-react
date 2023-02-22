import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator-body">
        <div className="input-block">
          <input className="input-field"></input>

        </div>
        <div className="buttons-section">
          <div className="numbers">
            <button className="number-0">0</button>
            <button className="number-1">1</button>
            <button className="number-2">2</button>
            <button className="number-3">3</button>
            <button className="number-4">4</button>
            <button className="number-5">5</button>
            <button className="number-6">6</button>
            <button className="number-7">7</button>
            <button className="number-8">8</button>
            <button className="number-9">9</button>
            <button className="number-comma">,</button>
          </div>
          <div className="math-operators">
          <button className="btn-plus">+</button>
          <button className="btn-minus">-</button>
          <button className="btn-times">X</button>
          <button className="btn-divide">÷</button>
          <button className="btn-percent">%</button>
          <button className="btn-plus_minus">±</button>
          <button className="btn-equals">=</button>
          <button className="btn-clear">AC</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
