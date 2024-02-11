import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import VendingMachine from "./VendingMachine";

import Chips from "./Chips.js";
import Cookies from "./Cookies.js";
import Poptarts from "./Poptarts.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />}/>
          <Route path="/chips" element={<Chips />}/>
          <Route path="/cookies" element={<Cookies />}/>
          <Route path="/poptarts" element={<Poptarts />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
