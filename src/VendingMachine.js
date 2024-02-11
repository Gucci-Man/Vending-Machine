import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

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

    </div>
  );
}

export default VendingMachine;