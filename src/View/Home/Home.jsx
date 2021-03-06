import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import NameSvg from "../../Custom/NameSvg/NameSvg";

export default function Home() {
  return (
    <div className="Home">
      <div className="nav">
        <NameSvg />
        <div className="navItem">
          <p>
            <Link to="/me">me</Link>
          </p>
          <p>
            <Link to="/services">services</Link>
          </p>

          <p>shop</p>
          <p>contact</p>
        </div>
      </div>
    </div>
  );
}
