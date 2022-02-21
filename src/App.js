import React from "react";
import 'boxicons';
import "./App.css";
import Navbar from "./conponents/Navbar";
import Footer from "./conponents/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

import {BrowserRouter,Routes,Route} from "react-router-dom";
  
  

function App() {
  return (
   
 <div className="App">
 
<BrowserRouter>
    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
    
   
       
       
    </div>
    
  );
}

export default App;
