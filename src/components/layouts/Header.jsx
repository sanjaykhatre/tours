import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";

export default function Header() {
  return (
    <div className="top-header">
      <div className="container">
        <div className="row justify-content-between">
          <div className="mt-2 mb-4 p-2 logo">
            <Link to="/">
              <img style={{ width: "100%" }} src={Logo} alt="Logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
