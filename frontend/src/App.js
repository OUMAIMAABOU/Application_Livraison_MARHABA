import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/Authentification/login';
import Register from './components/Authentification/Register';
import Home from './components/Authentification/homepage';



function App() {
  return (
    <div className="">

    <>
  <BrowserRouter>
     
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>

   </Routes>

  </BrowserRouter>
    </>
    </div>
  );
}

export default App;
