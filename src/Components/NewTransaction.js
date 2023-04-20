import React, { useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      [name === 'depositToggle' ? 'deposit' : name]: newValue,
    }));
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(newTransaction);
  };

  const addTransaction = (newTransaction) => {
    const transactionWithId = { ...newTransaction };
    if (!transactionWithId.deposit) {
      transactionWithId.deposit = false;
    }
    axios
      .post(`${API}/transactions`, transactionWithId)
      .then(() => navigate('/transactions'))
      .catch((err) => console.error(err));
  };
  


  return (
    <>
      <div
        className="EditTransaction"
        style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}
      >
        <h1 style={{ textAlign: 'center' }}>Edit Transaction</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="item_name">Item Name:</label>
            <input
              type="text"
              name="item_name"
              id="item_name"
              className="form-control"
              value={newTransaction.item_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="form-control"
              value={newTransaction.amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              id="date"
              className="form-control"
              value={newTransaction.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">From:</label>
            <input
              type="text"
              name="from"
              id="from"
              className="form-control"
              value={newTransaction.from}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              name="category"
              id="category"
              className="form-control"
              value={newTransaction.category}
              onChange={handleInputChange}
            />
          </div><br />
          <div className="form-group">
            <label htmlFor="depositToggle">Deposit:</label>
            <input
              type="checkbox"
              name="depositToggle"
              id="depositToggle"
              className="form-check-input"
              checked={newTransaction.deposit}
              onChange={handleInputChange}
            /><br /><br />
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>Save</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/transactions')}>Back</button>
        </form>
      </div>
    </>
  );
}
