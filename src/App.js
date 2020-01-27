import React from 'react';
import './styles/main.scss';

function App() {
  return (
    <div className='App main-container'>
      <header className='header'>Currency converter</header>
      <div className='form-group'>
        <label htmlFor='exchange-rate'>1 EUR = </label>
        <input type='text' id='exchange-rate' />
        <span>PLN</span>
      </div>
    </div>
  );
}

export default App;
