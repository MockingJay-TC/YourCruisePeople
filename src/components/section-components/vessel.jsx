import React, { useState, useEffect } from "react";
import Axios from "axios";

const Vessel = () => {
  const element = JSON.parse(localStorage.getItem("package"));
  const [vessel, setVessel] = useState(
    element.vessel !== null ? element.vessel : []
  );

  useEffect(() => {
    const url = "";
    Axios.get(url).then((res) => {});
  });
  return (
    <div>
      <div className="destinations-details-page mg-top--70">
        <div className="container">
          {/* destinations-details-main-slider start */}
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="destinations-details-main-slider-wrap">
                <div className="destinations-details-main-slider">
                  {vessel.slider &&
                    vessel.slider.map((citi) => {
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
                  {vessel.inside_cabin &&
                    vessel.inside_cabin.map((citi) => {
                      return (
                        <div className="col-sm-3 mb-5">
                          <div className="single-destinations-list style-two">
                            <div className="thumb">
                              <img
                                src={citi.url}
                                alt="img"
                                style={{
                                  objectFit: "cover",
                                }}
                              />
                              {/* 387 x 258 */}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <p>
                <strong style={{ fontSize: 24, fontWeight: 600 }}>
                  {vessel && vessel.more_details.split("**")[3]}
                </strong>
                <br />
                {vessel && vessel.more_details.split("**")[4]}
              </p>
              <div className="user-recent-view">
                <div className="row mb-5">
                  {vessel.outside_cabin &&
                    vessel.outside_cabin.map((citi) => {
                      return (
                        <div className="col-sm-3 mb-5" key={citi.id}>
                          <div className="single-destinations-list style-two">
                            <div className="thumb">
                              <img
                                src={citi.url}
                                alt="img"
                                style={{
                                  objectFit: "cover",
                                }}
                              />
                              {/* 387 x 258 */}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vessel;
