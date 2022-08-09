import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'
import Login from "./Login"
import SignUpOrLogin from './components/SignUpOrLogin';


function App() {
  const [ user, setUser ] = useState();
  const [ pics, setPics ] = useState()
  // const [age, setAge] = useState("55");
  // const [character, setCharacter] = useState ("Goody")

  // const getPics = async () => {
  //   const response = await fetch("https://picsum.photos/v2/list")
  //   const data = await response.json()
  //   setPics( data )
  // }

  // useEffect( () => {
  //   getPics()
  // }, [] )
  
  return (
    <div className="App">
      {/* <h1>{user}</h1>
      <SignUpOrLogin setUset={setUser}/> */}
      <Login user={user} setUser={setUser} />
      {/* {
        user
        ?
        // <Header user={user} setUser={setUser} />
        <h1>SUCES</h1>
        :
        <Login user={user} setUser={setUser} />
      } */}
    </div>
  );
}

export default App;
