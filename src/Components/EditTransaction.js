
    import React, { useState, useEffect } from 'react';
    import { useNavigate, useParams } from 'react-router-dom';
    import axios from 'axios';
    
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
        <>
          <div className="EditTransaction">
            <h1>EditTransaction</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Item Name:
                <input
                  type="text"
                  name="item_name"
                  value={editTransaction.item_name}
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
                  value={editTransaction.amount}
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
                  value={editTransaction.date}
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
                  value={editTransaction.from}
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
                  value={editTransaction.category}
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
                  checked={editTransaction.deposit}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <br />
              <button type="submit">Save</button>
              <button type="button" onClick={() => navigate('/transactions')}>
                Back
              </button>
            </form>
          </div>
        </>
      );
    }
    
