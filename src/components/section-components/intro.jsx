import React from "react";
import { Link } from "react-router-dom";

const Intro = ({ homepage }) => {
  console.log(homepage);
  return (
    <div className="intro-area pd-top-112">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="single-intro wow animated fadeInUp"
              data-wow-duration="0.6s"
              data-wow-delay="0.1s"
            >
              <h4
                style={{
                  textAlign: "center",
                  fontWeight: 600,
                  padding: 0,
                  margin: 10,
                }}
              >
                {/* <span className="intro-count">01</span> */}
                <Link to="/about">
                  {homepage ? homepage.key_phrase_1 : " "}
                </Link>
              </h4>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="single-intro wow animated fadeInUp"
              data-wow-duration="1.0s"
              data-wow-delay="0.2s"
            >
              <h4
                style={{
                  textAlign: "center",
                  fontWeight: 600,
                  padding: 0,
                  margin: 10,
                }}
              >
                {/* <span className="intro-count">02</span> */}
                <Link to="/about">
                  {homepage ? homepage.key_phrase_2 : " "}
                </Link>
              </h4>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="single-intro wow animated fadeInUp"
              data-wow-duration="1.6s"
              data-wow-delay="0.3s"
            >
              <h4
                style={{
                  textAlign: "center",
                  fontWeight: 600,
                  padding: 0,
                  margin: 10,
                }}
              >
                {/* <span className="intro-count">03</span> */}
                <Link to="/about">
                  {homepage ? homepage.key_phrase_3 : " "}
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
