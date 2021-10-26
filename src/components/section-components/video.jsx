import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Video = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [about, setAbout] = useState("");
  const myVideo = "https://www.youtube.com/watch?v=GG-vJLwIYng";
  const myImage =
    "https://bucket-wonchunii.s3.eu-west-1.amazonaws.com/cruise-people/santorini_full_9092297778.jpg";

  useEffect(() => {
    const url = "https://your-cruise-people-cms.herokuapp.com/about";
    Axios.get(url).then((res) => {
      console.log(res.data);
      setAbout(res.data);
    });
  }, []);

  let newText = `${about && about.message}`;
  newText = newText.slice(0, 253) + "...";
  console.log(newText);
  let Image = props.image;
  let Video_url = props.video_url;

  return (
    <div
      className="video-area tp-video-area pd-top-110"
      style={{ backgroundImage: "url(" + publicUrl + "assets/img/bg/7.png)" }}
    >
      <div className="container viaje-go-top">
        <div className="row">
          <div
            className="col-xl-5 col-lg-6 align-self-center wow animated fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="section-title mb-lg-0 mb-4 text-center text-lg-left">
              <h2 className="title">
                What Do You Know <br /> About US
              </h2>
              <p>{newText}</p>
              <Link className="btn btn-yellow" to="/about">
                <span>
                  Read More
                  <i className="la la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-6 offset-xl-1 wow animated fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="video-popup-wrap">
              <div className="thumb">
                <img src={Image ? Image : myImage} />
              </div>
              <div className="video-popup-btn">
                <a
                  href={Video_url ? Video_url : myVideo}
                  className="video-play-btn mfp-iframe"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
