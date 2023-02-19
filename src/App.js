import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { LivepeerConfig, createReactClient, studioProvider} from '@livepeer/react';
import { WagmiConfig, chain, createClient } from 'wagmi';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';  
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Landing from './pages/Landing';
import Detailed from "./pages/Detailed";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'; 
import { Auth, useAuth } from "@arcana/auth-react";
import Protected from "./components/Protected";
const contractAbi = require("./artifacts/contracts/Reviewed.sol/Reviewed.json").abi;

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Reviewed',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


const LiverpeerClient = createReactClient({
  provider: studioProvider({ apiKey: process.env.LIVEPEER_API_KEY }),
});


function App() {

  const auth = useAuth();
  const [showToast, setShowToast] = useState(false);
  const [contract, setContract] = useState(null);
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const isSignedIn = auth.isLoggedIn;

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
      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <LivepeerConfig client={LiverpeerClient}>

      {/* Toast that has to be shown for 3 secs if protected route is tried to be accessed without logging in */}
      {showToast && (
      <div class="absolute z-20 top-4 right-4 bg-red-600 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3" id="static-example" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-autohide="false">
      <div class="bg-red-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-red-500 rounded-t-lg">
        <p class="font-bold text-white flex items-center">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
          </svg>
          Error</p>
        <div class="flex items-center">
          <button type="button" class="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline" data-mdb-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
      <div class="p-3 bg-red-600 rounded-b-lg break-words text-white">
        Please Login to continue...
      </div>
      </div>
      )}
      {/* End of the toast message */}

      <Router>
      <Navbar auth={auth}/>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Products" element={<Protected isSignedIn={isSignedIn}><Products /></Protected>} />
        <Route exact path="/Products/:deviceName" element={<Protected isSignedIn={isSignedIn}><Detailed /></Protected>} />
        <Route exact path="/Gallery" element={<Protected isSignedIn={isSignedIn}><Gallery /></Protected>} />
        <Route path="*" element={<Landing />} />
      </Routes>
      </Router>
      <Footer/>
      </LivepeerConfig>
      </RainbowKitProvider>
    </WagmiConfig>
    </div>
  );
}

export default App;
