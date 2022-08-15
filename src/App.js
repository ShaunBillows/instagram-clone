import { useState } from 'react';
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import { useCookies } from 'react-cookie'
import Settings from './pages/Settings';
import Profile from "./pages/Profile"
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components"

function App() {

  const [ user, setUser ] = useState(); const [cookies, setCookie] = useCookies(["token"]);
  
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Body>
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
      </Body>
    </BrowserRouter>
  );
}

export default App;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
