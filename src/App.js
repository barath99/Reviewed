import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Landing from './pages/Landing';
import Detailed from "./pages/Detailed";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import { Auth, useAuth } from "@arcana/auth-react";

const onLogin = () => {
  // Route to authenticated page
}

function App() {
  const auth = useAuth();
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
          {/* <Route exact path="/Vocdoni" element={<Vocdoni/>} /> */}
          <Route path="*" element={<Landing/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
