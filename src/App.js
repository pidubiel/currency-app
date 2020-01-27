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
      <section className='new-transaction'>
        <form action=''>
          <div className='form-group'>
            <label htmlFor='name'>Transaction name</label>
            <input type='text' id='name' />
          </div>
          <div className='form-group'>
            <label htmlFor='amount'>Amount [EUR]</label>
            <input type='text' id='amount' />
          </div>
          <input className='submit' type='submit' value='Add transaction' />
        </form>
      </section>
      <section className='transactions'>
        <div className='recent'>
          <h2>Recent transactions</h2>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>EUR</th>
                <th>PLN</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Transaction 1</td>
                <td>10</td>
                <td>47,50</td>
                <td>
                  <button>Remove</button>
                </td>
              </tr>
              <tr>
                <td>Transaction 2</td>
                <td>100</td>
                <td>475,0</td>
                <td>
                  <button>Remove</button>
                </td>
              </tr>
              <tr className='summary'>
                <td></td>
                <td>2827</td>
                <td>32424</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='highest'>
          <h2>Highest transaction</h2>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>EUR</th>
                <th>PLN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Transaction 1</td>
                <td>10</td>
                <td>47,50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default App;
