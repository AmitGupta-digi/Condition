import './App.css';
import React, { useState } from 'react';
//Event handling
const App = () => {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);

  const bgChange = () => {
    let newBg = '#34495e';
    setBg(newBg);
  }
  const bgBack = () => {
    setBg(purple);
  }

  return (
    <div style={{ backgroundColor: bg, width: '900px', height: '600px' }}>
      <button onDoubleClick={bgBack}> onDoubleClick</button>
      <button onMouseOver={bgChange} onMouseLeave={bgBack}> onMouseOver</button>
      <button onMouseEnter={bgChange}>onMouseEnter </button>
    </div>
  )
}
export default App;
