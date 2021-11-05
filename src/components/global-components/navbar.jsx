import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    return (
     
      <nav className="navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <div className="mobile-logo">
              <Link to="/">
                <img
                  src={publicUrl + "assets/img/logos/ycr.png"}
                  alt={imgattr}
                />
              </Link>
            </div>
            <button
              className="navbar-toggler float-right"
              type="button"
              data-toggle="collapse"
              data-target="#tp_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggle-icon">
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </span>
            </button>
            <div className="nav-right-content">
              <ul className="pl-0">
                <li className="top-bar-btn-booking">
                  <Link className="btn btn-yellow" to="/tour-details">
                    Book Now <i className="fa fa-paper-plane" />
                  </Link>
                </li>
                <li className="tp-lang">
                  <div className="tp-lang-wrap">
                    <select className="select single-select">
                      <option value={1}>ENG</option>
                      <option value={2}>BAN</option>
                      <option value={3}>Chinese</option>
                      <option value={3}>Spanish</option>
                    </select>
                  </div>
                </li>
                <li className="search">
                  <i className="ti-search" />
                </li>
                <li className="notification">
                  <a className="signUp-btn" href="#">
                    <i className="fa fa-user-o" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="tp_main_menu">
            <div className="logo-wrapper desktop-logo">
              <Link to="/" className="main-logo">
                <img src={publicUrl + "assets/img/logos/ycr.png"} alt="logo" />
              </Link>
              <Link to="/" className="sticky-logo">
                <img src={publicUrl + "assets/img/logos/ycr.png"} alt="logo" />
              </Link>
            </div>
            <ul className="navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/packages">Packages</Link>
              </li>
              <li>
                <Link to="/gallery-details">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-content">
            <ul>
              <li className="search"></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
