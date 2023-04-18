
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/NavBar";
import Show from "./Pages/Show";
import Index from "./Pages/Index";


function App() {
  return(
  <>
  <Router>
      <Nav/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/logs" element={<Index/>}/>
      <Route path="/logs/:index" element={<Show />} />
    </Routes>
  </Router>
  </>
  )
}

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
