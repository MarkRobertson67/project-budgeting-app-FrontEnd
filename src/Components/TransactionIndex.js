import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const API = process.env.REACT_APP_API_URL

function TransactionIndex() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState(null);
  
    useEffect(() => {
        // console.log(`${API}/transactions/${id}`)
      fetch(`${API}/transactions/${id}`)
        .then((res) => res.json())
        .then((response) => {
          setTransaction(response)
        //   console.log(response)
        })
        .catch((e) => console.log(e))
    }, [id])
  
    if (!transaction) {
      return (
        <Container className="my-5">
          <h1 className="text-center">Loading...</h1>
        </Container>
      )
    }
  
    const formattedDate = new Date(transaction.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });


    function handleDelete() {
        axios
          .delete(`${API}/transactions/${id}`)
          .then(() => {
            navigate('/transactions');
          })
          .catch((e) => console.error(e));
      }
  
    return (
        <Container className="my-5" style={{width: "500px"}}>
          <table className="table">
            <tbody>
              <tr>
                <td>Item Name:</td>
                <td className="text-center">{transaction.item_name}</td>
              </tr>
              <tr>
                <td>Amount:</td>
                <td className="text-center">${transaction.amount}</td>
              </tr>
              <tr>
                <td>Date:</td>
                <td className="text-center">{formattedDate}</td>
              </tr>
              <tr>
                <td>From:</td>
                <td className="text-center">{transaction.from}</td>
              </tr>
              <tr>
                <td>Category:</td>
                <td className="text-center">{transaction.category}</td>
              </tr>
              <tr>
                <td>Deposit:</td>
                <td className="text-center">{transaction.deposit ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleDelete}>Delete</button>
        </Container>
      );
    }

  export default TransactionIndex;
  


