import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home";
import QuestionCard from "./components/QuestionCard";
import Help from "./components/Help";

function App() {
  return( 
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game" element={<QuestionCard/>} />
        <Route path="/help" element={<Help/>} />
      </Routes>
    </Router>);
}

export default App;
