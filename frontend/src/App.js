import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/Authentification/login';
import Register from './components/Authentification/Register';
import Home from './components/Authentification/homepage';
import Verification from './components/Authentification/verification';
import ProductRout from './utils/productRout'



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<ProductRout/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/verification" element={<Verification/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>        </Routes>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="">

//     <>
//   <BrowserRouter>
     
//    <Routes>
//    <Route path="/home" element={<Home/>}/>
//    <Route path="/verification" element={<Verification/>}/>

//    <Route path="/login" element={<Login/>}/>
//    <Route path="/register" element={<Register/>}/>

//    </Routes>

//   </BrowserRouter>
//     </>
//     </div>
//   );
// }

export default App;
