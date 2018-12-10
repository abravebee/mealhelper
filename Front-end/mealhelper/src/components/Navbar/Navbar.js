import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import "./Navbar.css";

class NavbarLanding extends Component {
  render() {
    return (
      <div className="Navbar-Container">
        <p className="logo">EatWell</p>
        <div className="page-jumps" style={{ textDecoration: "none" }}>
          <a href="#product" className="jump">
            <h3>Product</h3>
          </a>
          <a href="#pricing" className="jump">
            <h3>Pricing</h3>
          </a>
          <a href="#team" className="jump">
            <h3>Team</h3>
          </a>
        </div>
        <div className="signup-login-buttons-navbar">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="buttons-navbar">Log In</button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button className="buttons-navbar">Sign Up</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(NavbarLanding));
