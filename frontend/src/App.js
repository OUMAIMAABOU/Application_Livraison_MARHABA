import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/Authentification/login';
import Register from './components/Authentification/Register';


function App() {
  return (
    <>
  <BrowserRouter>
  <div className="">
     
   <Routes>
   <Route path="/login" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>

   </Routes>

    </div>
  </BrowserRouter>
    </>
  );
}

export default App;
