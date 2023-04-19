import { Link } from "react-router-dom";
import './navbar.css';

export default function NavBar() {
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
        </nav>
      );
    }

