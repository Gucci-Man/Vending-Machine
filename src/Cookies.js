import React from 'react';
import { Link } from "react-router-dom";
import CookiesGif from "./gifs/cookies.gif";

function Cookies() {
  return (
    <div>
      <h1>Cookies</h1>
      <img src={CookiesGif} alt="Cookies Gif" />
      <h1>
        <Link to="/">Go back</Link>
      </h1>
    </div>
  );
}

export default Cookies;