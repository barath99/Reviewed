import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
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

const onLogin = () => {
  // Route to authenticated page
}

function App() {
  const auth = useAuth();
  const [contract, setContract] = useState(null);
  
  async function getReview1() {
    if (contract) {
    console.log(await contract.getReview(1));
    console.log("here it has come...");
  }
  }

  useEffect(() => {
    // Get the provider object from ethers.js
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer object from the provider
    const signer = provider.getSigner();
    // Get the contract address and instantiate the contract object
    const contractAddress = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    setContract(contract);
  
    getReview1();  
  }, []);

  return (
    <div className="App">

      <Router>
      <Navbar/>
      
        <Routes>
          <Route exact path="/" element={<><div>
      {auth.loading ? (
        "Loading"
      ) : auth.isLoggedIn ? (
        <p>Logged In</p>
      ) : (
        <div>
          <Auth externalWallet={true} theme={"light"} onLogin={onLogin}/>
        </div>
      )}
    </div><Landing /></>}  />
          <Route exact path="/Products/:deviceName" element={<Detailed/>} />
          <Route exact path="/Products" element={<Products/>} />
          <Route path="*" element={<Landing/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
