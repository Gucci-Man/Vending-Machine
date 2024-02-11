import React from 'react';
import { Link } from "react-router-dom";
import PoptartsGif from "./gifs/poptarts.gif";

function Poptarts() {
  return (
    <div>
        <h1>Poptarts</h1>
        <img src={PoptartsGif} alt="Poptarts Gif" />
        <h1>
            <Link to="/">Go back</Link>
        </h1>
    </div>
  );
}

export default Poptarts;