import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function NewTransaction() {
  const navigate = useNavigate();
  
  const [newTransaction, setNewTransaction] = useState({
    id: null,
    item_name: '',
    amount: 0,
    date: '',
    from: '',
    category: '',
    deposit: false,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    const newValue =
      name === 'depositToggle'
        ? event.target.checked
        : name === 'amount'
        ? parseFloat(value)
        : value;
    setNewTransaction((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(newTransaction);
  };

  const addTransaction = (newTransaction) => {
    const transactionWithId = { ...newTransaction }; 
    axios
      .post(`${API}/transactions`, transactionWithId)
      .then(() => navigate('/transactions'))
      .catch((err) => console.error(err));
  };
  

  function handleDelete() {
    axios
      .delete(`${API}/transactions/${newTransaction.id}`)
      .then(() => {
        navigate('/transactions');
      })
      .catch((e) => console.error(e));
  }

  return (
    <>
      <div className="NewTransaction">
        <h1>NewTransaction</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Item Name:
            <input
              type="text"
              name="item_name"
              value={newTransaction.item_name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <br />
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={newTransaction.amount}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <br />
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={newTransaction.date}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <br />
          <label>
            From:
            <input
              type="text"
              name="from"
              value={newTransaction.from}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <br />
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={newTransaction.category}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <br />
          <label>
            deposit:
            <input
              type="checkbox"
              name="depositToggle"
              checked={newTransaction.deposit}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <br />
          <button type="submit">Save</button>
          <button type="button" onClick={() => navigate('/transactions')}>
            Back
          </button>
          <button onClick={handleDelete}>Delete</button>
        </form>
      </div>
    </>
  );
}
