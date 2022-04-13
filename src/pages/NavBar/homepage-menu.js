import React from "react";
import { Link } from "react-router-dom";

export default function HomePageMenu() {
  return (

    <div className="header-right">
      <div>
        <Link to="/">Home</Link>
        <Link to="/gif">Gif</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
