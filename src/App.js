import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Landing from './pages/Landing';
import Detailed from "./pages/Detailed";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'; 
import { Auth, useAuth } from "@arcana/auth-react";
const contractAbi = require("./artifacts/contracts/Reviewed.sol/Reviewed.json").abi;

function App() {

  const auth = useAuth();
  const [contract, setContract] = useState(null);
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  useEffect(() => {
    // Get the provider object from ethers.js
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    // Get the signer object from the provider
    const signer = provider.getSigner();
    
    // Get the contract address and instantiate the contract object
    const contractTemp = new ethers.Contract(contractAddress, contractAbi, signer);
    setContract(contractTemp); 
    
  }, []);
  
  
  return (
    <div className="App">

      <Router>
      <Navbar auth={auth}/>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/Products/:deviceName" element={<Detailed />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
