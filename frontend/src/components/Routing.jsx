import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import KingdomAssets from "../pages/KingdomAssets";
import RoyalFamilly from "../pages/RoyalFamilly";
import Connexion from "../pages/Connexion";
import Registration from "../pages/Registration";
import NavBar from '../components/NavBar';

function Routing() {
  return ( 
  <>
  <NavBar />
   <Routes>
    <Route path="/" element={<Home />} />  
    <Route path="/familly" element={<RoyalFamilly />} />  
    <Route path="/kingdom" element={<KingdomAssets />} />  
     <Route path="/contact" element={<Contact />} />   
</Routes>
</>
  )
}

export default Routing;