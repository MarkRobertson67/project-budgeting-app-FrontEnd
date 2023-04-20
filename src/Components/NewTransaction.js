import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from 'react-bootstrap';

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
    <Container>
      <div className="NewTransaction">
        <h1>NewTransaction</h1>
        <form onSubmit={handleSubmit}>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Item Name:</td>
                <td>
                  <input
                    type="text"
                    name="item_name"
                    value={newTransaction.item_name}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Amount:</td>
                <td>
                  <input
                    type="number"
                    name="amount"
                    value={newTransaction.amount}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Date:</td>
                <td>
                  <input
                    type="date"
                    name="date"
                    value={newTransaction.date}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>From:</td>
                <td>
                  <input
                    type="text"
                    name="from"
                    value={newTransaction.from}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Category:</td>
                <td>
                  <input
                    type="text"
                    name="category"
                    value={newTransaction.category}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Deposit:</td>
                <td>
                  <input
                    type="checkbox"
                    name="depositToggle"
                    checked={newTransaction.deposit}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                <button type="submit">Save</button>
                  <button
                    type="button"
                    onClick={() => navigate('/transactions')}
                  >Back</button>
                  <button onClick={handleDelete}>Delete</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </form>
      </div>
    </Container>
  );

}
