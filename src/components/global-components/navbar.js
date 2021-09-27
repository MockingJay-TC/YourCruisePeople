import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";
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
              {/* <li className="menu-item-has-children"> */}
              <li>
                <Link to="/">Home</Link>
                {/* <ul className="sub-menu">
			            <li><Link to="/">Home 01</Link></li>
			            <li><Link to="/home-v2">Home 02</Link></li>
			            <li><Link to="/home-v3">Home 03</Link></li>
			          </ul> */}
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/myPage">MyPage</Link>
              </li>

              <li className="menu-item-has-children">
                <a href="/tour-list">Packages</a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/seven-days-iconic-aegean">
                      7 Days Iconic Aegean
                    </Link>
                  </li>
                  <li>
                    <Link to="/seven-days-iconic-discovery">
                      7 Days Iconic Discovery
                    </Link>
                  </li>
                  <li>
                    <Link to="/eight-days-iconic-aegean">
                      8 Days Iconic Aegean
                    </Link>
                  </li>
                  <li>
                    <Link to="/eight-days-iconic-discovery">
                      8 Days Iconic Discovery
                    </Link>
                  </li>
                  <li>
                    <Link to="/ten-days-3continents">10 Days 3 Continents</Link>
                  </li>
                  <li>
                    <Link to="/ten-days-eclectic-aegean">
                      10 Days Eclectic Aegean
                    </Link>
                  </li>
                  <li>
                    <Link to="/ten-days-idyllic-aegean">
                      10 Days Idyllic Aegean
                    </Link>
                  </li>
                  <li>
                    <Link to="/ten-days-steps-of-paul">
                      10 Days Steps of Paul
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/gallery-details">Gallery Details</Link>
                  </li>
                  <li>
                    <Link to="/comming-soon">Comming soon</Link>
                  </li>
                  <li>
                    <Link to="/error">404</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/user-profile">User Profile</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/blog">Blog</Link>
                {/* <ul className="sub-menu">
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/blog-v2">Blog 02</Link>
                  </li>
                  <li>
                    <Link to="/blog-v3">Blog 03</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-content">
            <ul>
              <li>
                <Link className="btn btn-yellow" to="#">
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
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
