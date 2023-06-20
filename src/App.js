import React from "react";
import {Routes,Route} from 'react-router-dom'
import Homepage from "./Routes/Homepage.js";
import Templates from "./Routes/Templates.js";
import Notetaking from "./Routes/Notetaking.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Homepage />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/notetaking" element={<Notetaking />} />
      </Routes>
      
    </div>
    
  )
}

export default App;
