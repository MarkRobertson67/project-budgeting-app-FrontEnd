
    import React, { useState, useEffect } from 'react';
    import { useNavigate, useParams } from 'react-router-dom';
    import axios from 'axios';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { Container, Table } from 'react-bootstrap';

    
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
        const { name, value } = event.target;
        const newValue =
          name === 'depositToggle'
            ? event.target.checked
            : name === 'amount'
            ? parseFloat(value)
            : value;
        setEditTransaction((prevState) => ({
          ...prevState,
          [name]: newValue,
        }));
      }
    
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
        <Container className="d-flex justify-content-center align-items-center">
          <div className="EditTransaction" style={{ marginTop: '50px' }}>
            <h1>Edit Transaction</h1><br />
            <form onSubmit={handleSubmit}>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>Item Name:</td>
                    <td>
                      <input
                        type="text"
                        name="item_name"
                        value={editTransaction.item_name}
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
                        value={editTransaction.amount}
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
                        value={editTransaction.date}
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
                        value={editTransaction.from}
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
                        value={editTransaction.category}
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
                        checked={editTransaction.deposit}
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
                      {/* <button onClick={handleDelete}>Delete</button> */}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </form>
          </div>
        </Container>
      );
    
    }
    