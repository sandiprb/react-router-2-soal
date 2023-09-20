import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./about";
import Stores from "./stores";
import StoresLocation from "./storelocation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/stores">Stores</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<div>Hello this is homepage</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/stores" element={<Stores />}>
          <Route path=":id" element={<StoresLocation />} />
        </Route>
        <Route
          path="/stores/upcoming"
          element={
            <div>
              <div>Upcoming Stores</div>
              <li>Hyderabad</li>
              <li>Kolkata</li>
            </div>
          }
        />
        <Route path="*" element={<div> 404 Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
