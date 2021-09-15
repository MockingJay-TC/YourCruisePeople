import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Footer_v1 = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
    const url = "https://your-cruise-people-cms.herokuapp.com/contact-info";
    Axios.get(url).then((res) => {
      // return res.json();
      console.log(res.data);
      setContact(res.data);
    });
  }, []);
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imgattr = "Footer logo";
  return (
    <footer
      className="footer-area"
      style={{ backgroundImage: "url(" + publicUrl + "assets/img/bg/2.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget widget">
              <div className="about_us_widget">
                <Link to="/" className="footer-logo">
                  <img
                    src={publicUrl + "assets/img/logos/ycr.png"}
                    alt="footer logo"
                  />
                </Link>
                <p>
                  Cruise People Limited (Your Cruise People) offers personalized
                  cruise holiday packages to all our clients to experience the
                  pleasures of cruising. 
                </p>
                <ul className="social-icon">
                  <li>
                    <a
                      className="facebook"
                      href={contact && contact.facebook}
                      target="_blank"
                    >
                      <i className="fa fa-facebook  " />
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter"
                      href={contact && contact.twitter}
                      target="_blank"
                    >
                      <i className="fa fa-twitter  " />
                    </a>
                  </li>
                  <li>
                    <a
                      className="pinterest"
                      href={contact && contact.instagram}
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget widget ">
              <div className="widget-contact">
                <h4 className="widget-title">Contact us</h4>
                <p>
                  <i className="fa fa-map-marker" />
                  <span>{contact && contact.address}</span>
                </p>
                <p className="location">
                  <i className="fa fa-envelope-o" />
                  <span>{contact && contact.email}</span>
                </p>
                <p className="telephone">
                  <i className="fa fa-phone base-color" />
                  <span>{contact && contact.telephone1}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget widget">
              <h4 className="widget-title">Quick Link</h4>
              <ul className="widget_nav_menu  viaje-go-top">
                <li>
                  <Link to="/home-v2">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/destination-list">Destination</Link>
                </li>
                {/* <li>
                  <Link to="/tour-details">Tours</Link>
                </li> */}
                <li>
                  <Link to="#">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget widget">
              <h4 className="widget-title">Instagram Gallery</h4>
              <ul className="widget-instagram-feed">
                <li>
                  <a href="#">
                    <img width="90" height="70"
                      src={publicUrl + "assets/img/instagram/one.jpg"}
                      alt="img"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img width="90" height="70"
                      src={publicUrl + "assets/img/instagram/two.jpg"}
                      alt="img"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img width="90" height="70"
                      src={publicUrl + "assets/img/instagram/three.jpg"}
                      alt="img"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img width="90" height="70"
                      src={publicUrl + "assets/img/instagram/four.jpg"}
                      alt="img"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img width="90" height="70"
                      src={publicUrl + "assets/img/instagram/five.jpg"}
                      alt="img"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img width="90" height="70"
                      src={publicUrl + "assets/img/instagram/six.jpg"}
                      alt="img"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-inner">
        <div className="copyright-text">
          © YourCruisePeople 2021 All rights reserved. Crafted by{" "}
          <a href="https://wonchunii.com" target="_blank">
            {/* <i className="fas fa-code" /> */}
            <span>Wonchunii</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer_v1;
