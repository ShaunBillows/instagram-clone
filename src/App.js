import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'
import Login from "./Login"
import SignUpOrLogin from './components/SignUpOrLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Navigate} from "react-router-dom"
import Home from "./Home"
import { useCookies } from 'react-cookie'


function App() {
  const [ user, setUser ] = useState();
  const [cookies, setCookie] = useCookies(["token"]);

  // get current token
  useEffect( () => {
    console.log(cookies.token);
  }, [] )

  function handleCookie() {
    setCookie("token", "", {
      path: "/"
    });
    console.log('object');
  }
  
  return (
    <>
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<Login setCookie={setCookie} user={user} setUser={setUser} />}>
            </Route>
            <Route path="/home" element={<Home user={user} setCookie={setCookie} cookies={cookies} setUser={setUser} />}></Route>
        </Routes>
      </div>
    </Router>


    {/* //cookie test
     <button onClick={handleCookie}>set cookie</button>
      <h2>cookie: {cookies.token}</h2> */}
    </>
  );
}

export default App;