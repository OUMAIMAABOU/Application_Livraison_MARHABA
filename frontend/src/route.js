import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Authentification/login";
import Register from "./components/Authentification/Register";
import Home from "./components/Authentification/homepage";
import Dashboard from "./components/Authentification/dashboard";
import Verification from "./components/Authentification/verification";
import ProductRout from "./utils/productRout";
import Activecompte from "./components/Authentification/Activecompte";
import Forgotpassword from "./components/Authentification/ForgotPassword";
import Restpassword from "./components/Authentification/restpassword";
import Header from "./components/Authentification/Header";
import Homepage from "./components/Authentification/home";


export {
  Login,
  Routes,
  Route,
  BrowserRouter,
  Register,
  Restpassword,
  Forgotpassword,
  Activecompte,
  Verification,
  Dashboard,
  Home,
  ProductRout,
  Header,
  Homepage
  
};
