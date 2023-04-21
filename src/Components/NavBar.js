import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const API = process.env.REACT_APP_API_URL;

export default function NavBar() {
  const [accountTotal, setAccountTotal] = useState(0);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((res) => res.json())
      .then((response) => {
        const total = response.reduce((acc, transaction) => {
            if (transaction.deposit) {
          return acc + Number(transaction.amount);
            } else {
                return acc - Number(transaction.amount);
            }
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
    <nav className="navbar">
      <h1>
        <a href="/">Budgeting App</a>
      </h1>

      <div className="nav-links">
        <button className="nav-btn">
          <Link to="/transactions">Transactions</Link>
        </button>
        <button className="nav-btn">
          <Link to="/transactions/new">New Transaction</Link>
        </button>
      </div>

      <h4 className={`account-total ${accountTotalStyle}`}>Account total: ${accountTotal}</h4>
    </nav>
  );
}
















