import React from 'react';

const Transaction = ({ name, euro, pln }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{euro}</td>
      <td>{pln}</td>
      <td>
        <button>Remove</button>
      </td>
    </tr>
  );
};
export default Transaction;
