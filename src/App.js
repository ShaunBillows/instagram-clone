import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Navigate} from "react-router-dom"
import Home from "./pages/Home"
import { useCookies } from 'react-cookie'
import Settings from './pages/Settings';
import Profile from "./pages/Profile"
// import Profile from './pages/Profile';

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
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<Login setCookie={setCookie} user={user} setUser={setUser} />}>
            </Route>
            <Route path="/home" element={<Home user={user} setCookie={setCookie} cookies={cookies} setUser={setUser} />}>
            </Route>
            <Route path="/profile" element={<Profile user={user} setCookie={setCookie} cookies={cookies} setUser={setUser} />}>
            </Route>
            <Route path="/settings" element={<Settings user={user} setCookie={setCookie} cookies={cookies} setUser={setUser} />}>
            </Route>
        </Routes>
      </div>
    </BrowserRouter>


    {/* //cookie test
     <button onClick={handleCookie}>set cookie</button>
      <h2>cookie: {cookies.token}</h2> */}
    </>
  );
}

export default App;