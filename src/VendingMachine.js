import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Chips from "./Chips.js";
import Cookies from "./Cookies.js";
import Poptarts from "./Poptarts.js";

function VendingMachine() {
  return (
    <div>
        <Chips />
        <Cookies />
        <Poptarts />
    </div>
  );
}

export default VendingMachine;