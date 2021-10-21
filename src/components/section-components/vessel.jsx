import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Vessel = () => {
  const element = JSON.parse(localStorage.getItem("package"));
  const [vessel, setVessel] = useState(
    element.vessel !== null ? element.vessel : []
  );
  const [otherVessels, setVessels] = useState(
    JSON.parse(localStorage.getItem("otherVessels"))
  );

  useEffect(() => {
    const url = "";
    Axios.get(url).then((res) => {});
  });
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div>
      <div className="destinations-details-page mg-top--70">
        <div className="container">
          {/* destinations-details-main-slider start */}
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="destinations-details-main-slider-wrap">
                <div className="destinations-details-main-slider">
                  {vessel.images &&
                    vessel.images.map((citi) => {
                      if (citi.name.slice(0,3) === "oly")
                        return (
                          <div className="d-details-main-slider-item">
                            <img
                              src={citi.url}
                              alt="img"
                              style={{
                                height: 700,
                                width: 1350,
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        );
                    })}
                </div>
                <div className="destinations-details-main-slider-controls">
                  <div className="slider-nav tp-control-nav" />
                  {/*slider-nav*/}
                  <div className="slider-extra tp-slider-extra">
                    <div className="text">
                      <span className="first">01 </span>
                      <span className="last">05</span>
                    </div>
                    {/*text*/}
                    <div
                      className="d-list-progress"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span className="slider__label sr-only" />
                    </div>
                  </div>
                  {/*slider-extra*/}
                </div>
              </div>
            </div>
          </div>
          {/* destinations-details-main-slider End */}
          <div className="row destinations-details-location-name">
            <div className="col-lg-12">
              <h2>{vessel.name}</h2>
              {/* <p>Continen</p> */}
            </div>
            <div className="col-lg-12">
              <p>{vessel.description}</p>

              <p>
                <strong style={{ fontSize: 24, fontWeight: 600 }}>
                  {vessel && vessel.more_details.split("**")[1]}
                </strong>
                <br />
                {vessel && vessel.more_details.split("**")[2]}
              </p>
              <div className="user-recent-view">
                <div className="row mb-5">
                  <div className="col-sm-3">
                    <div className="single-destinations-list style-two">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/destination-list/4.png"}
                          alt="list"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-destinations-list style-two">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/destination-list/5.png"}
                          alt="list"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <strong style={{ fontSize: 24, fontWeight: 600 }}>
                  {vessel && vessel.more_details.split("**")[3]}
                </strong>
                <br />
                {vessel && vessel.more_details.split("**")[4]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vessel;
