import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { signInWithGoogle, logOut } from "./firebase";
import { useState } from "react";
import Welcome from "./pages/Welcome";
import Home from "./components/Home/Home";
import Research from './components/Research';
import KloppAI from './components/Kloppai';
import ForBusiness from './components/ForBusiness';
import APILogin from './components/APILogin';
import APIPricing from './components/APILogin';
import APIDocumentation from './components/APIDocumentation';
import APIForum from './components/APIForum';
import News from './components/News';
import Safety from './components/Safety';
import AboutUs from './components/AboutUs';
import Header from './components/Header';

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
            <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/research" element={<Research />} />
        <Route path="/klopp-ai" element={<KloppAI />} />
        <Route path="/for-business" element={<ForBusiness />} />
        <Route path="/api/login" element={<APILogin />} />
        <Route path="/api/pricing" element={<APIPricing />} />
        <Route path="/api/documentation" element={<APIDocumentation />} />
        <Route path="/api/forum" element={<APIForum />} />
        <Route path="/news" element={<News />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
          </div>
        ) : (
          <Welcome handleLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;