import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { signInWithGoogle, logOut } from "./firebase";
import { useState } from "react";
import Welcome from "./pages/Welcome";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const loggedInUser = await signInWithGoogle();
    setUser(loggedInUser);
  };

  const handleLogout = async () => {
    await logOut();
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        {user ? (
          <div className="app-container">
            <Sidebar onLogout={handleLogout} />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Chat />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        ) : (
          <Welcome handleLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;