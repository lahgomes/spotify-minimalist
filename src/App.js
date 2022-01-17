import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

import './App.scss';

function App() {
  const [token, setToken] = useState("")

  const getAccess = () => {

    const hash = window.location.hash
    let token = localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        window.location.hash = ""
        localStorage.setItem("token", token)
    }

    setToken(token)  

  }
  
  useEffect(() => {
    getAccess()
    
  },[])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="home" element={<Home token={token} />}/>
      </Routes>
    </div>
  );
}

export default App;
