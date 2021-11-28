import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { useState } from "react";
import { Routines } from "./pages/Routines";

function App() {
  const [accessToken, setAccessToken] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/routines">Routines</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setAccessToken={setAccessToken} />}
          />
          <Route
            path="/routines"
            element={<Routines accessToken={accessToken} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
