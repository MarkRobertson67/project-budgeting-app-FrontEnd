import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL

function TransactionIndex() {
    const { id } = useParams();
    const [transaction, setTransaction] = useState(null);
  
    useEffect(() => {
        // console.log(`${API}/transactions/${id}`)
      fetch(`${API}/transactions/${id}`)
        .then((res) => res.json())
        .then((response) => {
          setTransaction(response)
          console.log(response)
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
  
    return (
      <Container className="my-5">
        {/* <h1 className="text-center">{transaction.id}</h1><br /> */}
        <h4 className="text-center">Date: {formattedDate}</h4><br />
        <h4 className="text-center">Amount: ${transaction.amount}</h4><br />
        <h4 className="text-center">Transaction Type: {transaction.deposit ? "Deposit" : "Withdrawal"}</h4><br />
        <h4 className="text-center">From: {transaction.from}</h4><br />
        <h4 className="text-center">Category: {transaction.category}</h4><br />
        <h4 className="text-center">Deposit: {transaction.deposit ? 'Yes' : 'No'}</h4><br />
      </Container>
    );
  }
  
  export default TransactionIndex;
  


