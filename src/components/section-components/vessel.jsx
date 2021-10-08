import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Vessel = () => {
  const element = JSON.parse(localStorage.getItem("package"));
  const [vessel, setVessel] = useState(element.vessel !== null ? element.vessel : []);
  const [otherVessels, setVessels] = useState(
    JSON.parse(localStorage.getItem("otherVessels"))
  );

  // useEffect(() => {
  //   const url = "https://your-cruise-people-cms.herokuapp.com/cities";
  //   // Axios.get(url).then((res) => {
  //   //   console.log(res.data);
  //   //   setOtherCities(res.data);
  //   // });
  //   Axios.get(url).then((res) => {
  //     localStorage.setItem("otherCities", JSON.stringify(res.data));
  //   });
  // }, []);
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";
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
                    vessel.images.map((citi) => (
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
                    ))}
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
              <h3>{vessel.name}</h3>
              {/* <p>Continen</p> */}
            </div>
            <div className="col-lg-12">
              <p>
                {vessel.description}
              </p>
            </div>
          </div>
          {/* destinations-client-review-slider start */}
          {/* <h4 className="single-page-small-title">Other Cities</h4> */}

          {/* destinations-client-review-slider end */}
        </div>
      </div>
    </div>
  );
};

export default Vessel;
