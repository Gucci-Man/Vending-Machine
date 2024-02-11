import React from 'react';
import { Link } from "react-router-dom";

function Poptarts() {
  return (
    <div>
        <h1>Poptarts</h1>
        <h1>
            <Link to="/">Go back</Link>
        </h1>
    </div>
  );
}

export default Poptarts;