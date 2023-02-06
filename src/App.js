import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Landing from './pages/Landing';
import ForumPage from "./pages/ForumPage";
import Vote from "./pages/Vote";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Landing />}  />
          <Route exact path="/Forum" element={<ForumPage/>} />
          <Route exact path="/Vote" element={<Vote/>} />
          <Route exact path="/Products" element={<Products/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
