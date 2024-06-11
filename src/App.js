import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [BMI ,setBMI]=useState(0);
  useEffect(() => {
    setBMI((weight / ((height / 100) * (height / 100))).toFixed(2)); // Calculating BMI with two decimal places
  }, [height, weight]);
  return (
    <main>
      <h1>BMI CALCULATOR</h1>
        <div className="input-section">
          <p className='slider-output'>Weight:{weight}kg</p>
          <input className='input-slider' type='range' step="1" min="1" max="150" onChange={(e)=>setWeight(e.target.value)}></input>
          <p className='slider-output'>Height:{height}cm</p>
          <input className='input-slider' type='range' step="1" min="1" max="600"  onChange={(e)=>setHeight(e.target.value)}></input>
        </div>
        <div className="output-section">
          <p>Your BMI is:</p>
          {BMI}
        </div>
    </main>
  );
}

export default App;
