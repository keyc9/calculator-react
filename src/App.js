import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator-body basic-theme">
        <div className="input-block">
          <input className="basic-theme" id='input-field'></input>
        </div>

        <div className="buttons-section basic-theme">
          <button className="btn" id='number-0'>0</button>
          <button className="btn" id='number-1'>1</button>
          <button className="btn" id='number-2'>2</button>
          <button className="btn" id='number-3'>3</button>
          <button className="btn" id='number-4'>4</button>
          <button className="btn" id='number-5'>5</button>
          <button className="btn" id='number-6'>6</button>
          <button className="btn" id='number-7'>7</button>
          <button className="btn" id='number-8'>8</button>
          <button className="btn" id='number-9'>9</button>
          <button className="btn" id='number-comma'>,</button>

          <button className="btn" id='btn-plus'>+</button>
          <button className="btn" id='btn-minus'>-</button>
          <button className="btn" id='btn-times'>X</button>
          <button className="btn" id='btn-divide'>÷</button>
          <button className="btn" id='btn-percent'>%</button>
          <button className="btn" id='btn-plus_minus'>±</button>
          <button className="btn" id='btn-equals'>=</button>
          <button className="btn" id='btn-clear'>AC</button>
        </div>
      </div>
    </div>
  );
}

export default App;
