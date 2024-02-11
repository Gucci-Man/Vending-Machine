import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import VendingMachineGif from "./gifs/vending_machine.gif"

function VendingMachine() {
  return (
    <div>
        <h1>
            <Link to="/chips">Chips</Link>
        </h1>
        <h1>
            <Link to="/cookies">Cookies</Link>
        </h1>
        <h1>
            <Link to="/poptarts">Poptarts</Link>
        </h1>
        <img src={VendingMachineGif} alt="Vending Machine Gif" />
    </div>
  );
}

export default VendingMachine;