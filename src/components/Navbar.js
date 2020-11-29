import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
    <nav class="nav">
        <ul class="nav">
            <li class="nav-item">
                <h4>Google Books</h4>
            </li>
            
            <li class="nav-item">
                <Link className="nav-link" to="/Search">Search</Link>
            </li>
            
            <li class="nav-item">
                <Link className="nav-link" to="/Saved">Saved</Link>
            </li>
        </ul>
    </nav>
    );
  }
}

export default Navbar;
