import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home";
//import logo from './logo.svg';
import Navbar from "./components/Navbar";
import './App.css';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import { HashRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    
    <Router>
    <div>
      <Preloader load = {load}/>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar/>
      <ScrollToTop/>
          <Route exact path="/"><Home/></Route>
      </div>
    </div>
    </Router>
  );
}

export default App;
