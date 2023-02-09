import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Landing from './pages/Landing';
import ForumPage from "./pages/ForumPage";
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
          <Route exact path="orbis-hack/" element={<Landing />}  />
          <Route exact path="orbis-hack/Forum" element={<ForumPage/>} />
          <Route exact path="orbis-hack/Products/:deviceName" element={<Detailed/>} />
          <Route exact path="orbis-hack/Products" element={<Products/>} />
          {/* <Route exact path="/Vocdoni" element={<Vocdoni/>} /> */}
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
