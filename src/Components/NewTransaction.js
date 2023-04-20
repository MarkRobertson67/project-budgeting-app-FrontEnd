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
  const { name, value, type, checked } = event.target;
  const newValue =
  type === 'checkbox'
    ? checked
    : name === 'deposit'
    ? value === 'true'
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
  

return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="NewTransaction" style={{ marginTop: '50px' }}>
      <h1 className="text-center">NewTransaction</h1><br />
        <form onSubmit={handleSubmit}>
        <Table striped bordered hover style={{ width: '500px' }}>
            <tbody>
              <tr key={`${newTransaction.id}-item_name`}>
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
              <tr key={`${newTransaction.id}-amount`}>
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
              <tr key={`${newTransaction.id}-date`}>
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
              <tr key={`${newTransaction.id}-from`}>
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
              <tr key={`${newTransaction.id}-category`}>
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
              <tr key={`${newTransaction.id}-deposit`}>
                <td>Deposit:</td>
                <td>
                  <select
                    name="deposit"
                    value={newTransaction.deposit}
                    onChange={handleInputChange}
                  >
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>
                </td>
              </tr>

              <tr key={`${newTransaction.id}-buttons`}>
              <td> 
                      </td>
                <td>
                  <button type="submit">Save</button>
                  <button
                    type="button"
                    onClick={() => navigate('/transactions')}
                  >
                    Back
                  </button>
                  
                </td>
              </tr>
            </tbody>
          </Table>
        </form>
      </div>
    </Container>
  );
}
