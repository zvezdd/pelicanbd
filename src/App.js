import './App.css';
import HomePage from './pages/HomePage';
import {signInWithGoogle, logOut} from './firebase'
import { useState } from 'react';
import Welcome from './pages/Welcome';

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
    <div className="App">
      {user? <HomePage/> : <Welcome handleLogin={handleLogin}/>}
    
    </div>
  );
}

export default App;
