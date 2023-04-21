
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const API = process.env.REACT_APP_API_URL;

export default function EditTransaction() {
  const navigate = useNavigate();
  
  const [editTransaction, setEditTransaction] = useState({
    id: null,
    item_name: '',
    amount: 0,
    date: '',
    from: '',
    category: '',
    deposit: false,
  });
  let {id} = useParams()


  function handleInputChange(event) {
    setEditTransaction({ ...editTransaction, [event.target.id]: event.target.value });
      };

    const handleCheckboxChange = () => {
        setEditTransaction({ ...editTransaction, deposit: !editTransaction.deposit });
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(editTransaction);
  };

  const addTransaction = (editTransaction) => {
    
    axios
      .put(`${API}/transactions/${id}`, editTransaction)
      .then(() => navigate(`/transactions/${id}`))
      .catch((err) => console.error(err));
  };
  
  useEffect(() => {
    // console.log(`${API}/transactions/${id}`)
  fetch(`${API}/transactions/${id}`)
    .then((res) => res.json())
    .then((response) => {
      setEditTransaction(response)
    //   console.log(response)
    })
    .catch((e) => console.log(e))
}, [id])


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
              value={editTransaction.item_name}
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
              value={editTransaction.amount}
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
              value={editTransaction.date}
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
              value={editTransaction.from}
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
              value={editTransaction.category}
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
              checked={editTransaction.deposit}
              onChange={handleCheckboxChange}
            /><br /><br />
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>Save</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/transactions')}>Back</button>
        </form>
      </div>
    </>
  );
}



