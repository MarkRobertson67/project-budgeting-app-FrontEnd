
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/NavBar";
import Transactions from "./Components/Transactions";
import TransactionIndex from "./Components/TransactionIndex"
import NewTransaction from "./Components/NewTransaction"
import EditTransaction from "./Components/EditTransaction"


function App() {

 
  return(
  <div className="App">
  <Router>
      <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/transactions" element={<Transactions/>} />
      <Route path="/transactions/:id" element={<TransactionIndex />} />
      <Route path="/transactions/new" element={<NewTransaction/>} />
      <Route path="/transactions/edit/:id" element={<EditTransaction/>} />
    </Routes>
  </Router>
  </div>
  )
}

export default App;


