import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import DonateBlood from "./DonateBlood";
import FindBlood from "./FindBlood";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>🩸 Blood Donation Portal</h1>

        <nav>
          <Link to="">Home</Link>
          <Link to="/donate">Donate Blood</Link>
          <Link to="/find">Find Blood</Link>
        </nav>
      </header>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/donate" element={<DonateBlood />} />
        <Route path="/find" element={<FindBlood />} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;

