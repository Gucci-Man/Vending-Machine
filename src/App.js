import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
