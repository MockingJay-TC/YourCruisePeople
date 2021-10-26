import React, { useEffect, useState } from "react";
import Axios from "axios";
import {Link } from 'react-router-dom'

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const url = "https://your-cruise-people-cms.herokuapp.com/about";
    Axios.get(url).then((res) => {
      setAbout(res.data);
    });
  }, []);
  return (
    <div className="about-section pd-top-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 align-self-center">
            <div className="section-title mb-lg-0">
              <h2 className="title">{about && about.title}</h2>
              <p>{about && about.message}</p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="thumb about-section-right-thumb">
              <img src={about && about.side_image_big.url} alt="img" />
              <img
                className="about-absolute-thumb"
                src={about && about.side_image_small.url}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
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
                  <Link to="/about">QUALITY & SERVICE</Link>
                </h4>
                <p style={{ textAlign: "justify" }}>
                  At Cruise People, quality and service go hand-in-hand. We go
                  above and beyond to ensure these two hallmarks are met at
                  every step of your journey. To help achieve these core values,
                  we closely monitor client satisfaction and are consistently
                  seeking new ways to exceed our clients’ expectations
                </p>
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
                  <Link to="/about">A PERSONAL TOUCH</Link>
                </h4>
                <p style={{ textAlign: "justify" }}>
                  From first contact, through the duration of your cruise, and
                  until you are safely home again, we are with you. You will
                  know your personal cruise or travel advisor both by name and
                  by face, as we make it a practice to greet our clients
                  personally and go through the entire trip.
                </p>
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
                  <Link to="/about">FRIENDLY & KNOWLEDGEABLE STAFF</Link>
                </h4>
                <p style={{ textAlign: "justify" }}>
                  Since we began in 2018, we’ve created unforgettable travel
                  experiences in the Mediterranean, Southern Africa and
                  Southeast Asia region for hundreds of clients from the West
                  African sub-region. That’s down to the quality of our people.
                  Our staff members have extensive and first-hand knowledge of
                  the region and are passionate about what they do
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
