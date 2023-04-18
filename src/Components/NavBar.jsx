import { Link } from "react-router-dom"

export default function NavBar() {

    return (
        <>
        <h1><a href={`/`}>Home</a></h1>
        
        <button>
            <Link to="/logs">Transactionss</Link>
        </button>
        <button>
            <Link to="/logs/new">New Transaction</Link>
        </button>
        </>
    )
}