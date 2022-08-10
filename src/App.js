import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'
import Login from "./Login"
import SignUpOrLogin from './components/SignUpOrLogin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Home"

function App() {
  const [ user, setUser ] = useState();
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login user={user} setUser={setUser} />}>
          </Route>
          <Route path="/" element={<Home user={user} setUser={setUser} />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
