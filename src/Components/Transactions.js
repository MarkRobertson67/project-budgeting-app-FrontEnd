import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const API = process.env.REACT_APP_API_URL

export default function Transactions() {

  const [transactions, setTransactions] = useState([])
  const [accountTotal, setAccountTotal] = useState(0);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((res) => res.json())
      .then((response) => {
        setTransactions(response)
        console.log(response)
      })
      .catch((e) => console.log(e))
  }, [])

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((res) => res.json())
      .then((response) => {
        const total = response.reduce((acc, transaction) => {
          return acc + transaction.amount;
        }, 0);
        setAccountTotal(total);
      })
      .catch((e) => console.log(e));
  }, []);

  let accountTotalStyle = '';
  if (accountTotal > 100) {
    accountTotalStyle = 'text-success';
  } else if (accountTotal >= 0) {
    accountTotalStyle = 'text-warning';
  } else {
    accountTotalStyle = 'text-danger';
  }


  return (
    <Container className="my-5">
      <h1 className="text-center">Transactions</h1><br />
      <h4 className={`text-center ${accountTotalStyle}`}>Account total: ${accountTotal}</h4><br />
      <Table striped bordered hover style={{maxWidth: '500px'}} className="mx-auto">
        <thead>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
{transactions.map((transaction) => {
    const formattedDate = new Date(transaction.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    return (
        <tr key={transaction.id}>
            <td>{formattedDate}</td>
            <td>
                <Link to={{ pathname: `/transactions/${transactions.indexOf(transaction)}`, state: { transaction: transaction } }}>
                    {transaction.item_name}
                </Link>
            </td>
            <td className={transaction.deposit ? "positive-amount" : "negative-amount"}>
                {transaction.deposit ? "+" : "-"}
                ${Math.abs(transaction.amount)}
            </td>
        </tr>
    );
})}
</tbody>

      </Table>
      
    </Container>
  );
}

