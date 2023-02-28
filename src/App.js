
import './App.css';
import {  Routes , Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert'
import Login from './components/Login'
import Signup from './components/Signup'
import { useState } from 'react';



function App() {

  const [alert, setAlert] = useState({message : "", type : "" });

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
        setAlert({message : "", type : "" });
    }, 1500);
}
  return (
    <>
    <NoteState>
  
      <Navbar/>
       <Alert alert={alert}></Alert> 
      <Routes >
      <Route exact path="/home" element={<Home showAlert={showAlert}/>} />
      <Route  path="/" element={<About/>} />
      <Route path="/login" element={<Login showAlert={showAlert}/>} />
      <Route  path="/signup" element={<Signup showAlert={showAlert}/>} />
      </Routes >
  
      </NoteState>
    </>
  );
}

export default App;
