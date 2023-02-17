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
  
  async function getReview(reviewId) {
    try {
      const review = await contract.getReview(1);
      return review;
    } catch (err) {
      console.error(err);
    }
  }

  async function addReview(review) {
    if (typeof window.ethereum !== "undefined") {
      // ethereum is usable, get reference to the contract
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // signer needed for transaction that changes state
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      // perform transaction
      const transaction = await contract.createReview(review);
      await transaction.wait();
      return true;
    } else {
      console.error("Ethereum is not usable.");
      return false;
    }
  }

  async function requestAccount() {
    await window.ethereum.request({method: 'eth_requestAccounts'});
  }

  

  return (
    <div className="App">

      <Router>
      <Navbar/>
      
        <Routes>
          <Route exact path="/" element={<><div>
          {auth.loading ? ("Loading") : auth.isLoggedIn ? (<p>Logged In</p>) : (
            <div><Auth externalWallet={true} theme={"dark"} onLogin={onLogin}/></div>
          )}
        </div><Landing /><button onClick={()=>addReview("First Review ever...")}>Submit review</button>
        </>}  />
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
