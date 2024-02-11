import React from 'react';
import { Link } from "react-router-dom";
import ChipsGif from "./gifs/chips.gif";

function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <img src={ChipsGif} alt="Chips Gif" />
      <h1>
        <Link to="/">Go back</Link>
      </h1>
    </div>
  );
}

export default Chips;