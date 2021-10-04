import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const City = () => {
  const element = JSON.parse(localStorage.getItem("city"));
  const [city, setCity] = useState(element !== null ? element : []);
  const [otherCities, setOtherCities] = useState(
    JSON.parse(localStorage.getItem("package"))
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
                  {city.images &&
                    city.images.map((citi) => (
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
              <h3>{city.name}</h3>
              <p>Continen</p>
            </div>
            <div className="col-lg-12">
              <p>
                <strong style={{ fontSize: 20, fontWeight: 600 }}>
                  {city && city.description.split("**")[1]}
                </strong>
                <br />
                {city && city.description.split("**")[2]}
              </p>
            </div>
          </div>
          {/* destinations-client-review-slider start */}
          <h4 className="single-page-small-title">Other Cities</h4>
          <div className="destinations-client-review-slider tp-common-slider-style">
            {otherCities.cities &&
              otherCities.cities
                .filter((ele) => {
                  if (ele.id !== city.id) {
                    return true;
                  } else {
                    return false;
                  }
                })
                .map((otherCity) => (
                  <div className="d-client-review-slider-item">
                    <div className="single-destination-grid text-center">
                      <div className="thumb">
                        <img
                          src={otherCity.images[0] && otherCity.images[0].url}
                          alt="img"
                          style={{ height: 270, objectFit: "cover" }}
                        />
                      </div>
                      <div className="details">
                        <Link
                          to="/city"
                          onClick={() => {
                            localStorage.setItem(
                              "city",
                              JSON.stringify(otherCity)
                            );
                            window.location.reload();
                          }}
                        >
                          <h4 className="title">
                            {otherCity && otherCity.name}
                          </h4>
                        </Link>
                        <p className="content">
                          <strong style={{ fontSize: 16, fontWeight: 600 }}>
                            {otherCity.description &&
                              otherCity.description
                                .split("**")[1]
                                .slice(0, 25) + "..."}
                          </strong>
                          <br />
                          {otherCity.description &&
                            otherCity.description.split("**")[2].slice(0, 180) +
                              "..."}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          {/* destinations-client-review-slider end */}
        </div>
      </div>
    </div>
  );
};

export default City;
