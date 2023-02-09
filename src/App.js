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
// import Vocdoni from "./services/vocdoni";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Landing />}  />
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
