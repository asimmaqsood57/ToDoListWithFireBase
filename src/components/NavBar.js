import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper blue">
        <Link to="/" className="brand-logo">
          Todo
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>

          <li>
            <button className="btn red">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
