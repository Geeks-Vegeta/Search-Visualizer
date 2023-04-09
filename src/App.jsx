import React from "react";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "./Pages/Home"
import Algo from "./Pages/Algo"
import About from "./Pages/About"
import "./App.css";


const App=()=>{
  return (
    <>
    
    <Router>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/Algo' element={<Algo/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App;