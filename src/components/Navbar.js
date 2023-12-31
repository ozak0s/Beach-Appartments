import React, { Component, useState } from "react";
import logo from "../images/beach-apartments-logo2.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as Connect } from "react-scroll";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Xanthiotis Logo" />
            </Link>
            <button
              onClick={this.handleToggle}
              type="button"
              className="nav-btn"
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">
                <Connect
                  className="nav-secondary-btn"
                  to="ContactSection"
                  smooth={true}
                >
                  Contact Us
                </Connect>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
