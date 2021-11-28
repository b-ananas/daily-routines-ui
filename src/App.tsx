import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { useState } from "react";
import { Routines } from "./pages/Routines";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routine } from "./pages/Routine";

function App() {
  const [accessToken, setAccessToken] = useState("");
  return (
    <Container className="App">
      <BrowserRouter>
        <header>
          <Nav>
            <Nav.Link as={Link} to="/">
              Routines
            </Nav.Link>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link as={Link} to="/todo">
              Calendar
            </Nav.Link>
            <Nav.Link as={Link} to="/todo">
              Daily
            </Nav.Link>
            <Nav.Link as={Link} to="/todo">
              Weekly
            </Nav.Link>
            <Nav.Link as={Link} to="/todo">
              Weekly
            </Nav.Link>
            <Nav.Link as={Link} to="/routine">
              test
            </Nav.Link>
            <NavDropdown title="Account" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/todo">
                Notifications
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/todo">
                Timezone
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/todo">
                logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </header>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setAccessToken={setAccessToken} />}
          />
          <Route path="/" element={<Routines accessToken={accessToken} />} />
          {/* this should be mounted under /routines/:id */}
          <Route
            path="/routine"
            element={
              <Routine
                accessToken={accessToken}
                routine={{
                  id: 43,
                  title: "morning routine",
                  desc: "test",
                }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
