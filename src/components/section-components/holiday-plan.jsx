import React, { useState, useEffect } from "react";
import Axios from "axios";

const HolidayPlan = () => {
  const [holiday, setHoliday] = useState("");

  useEffect(() => {
    const url = "https://your-cruise-people-cms.herokuapp.com/packages";
    Axios.get(url).then((res) => {
      console.log(res.data);
      setHoliday(res.data);
    });
  }, []);
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div
      className="holiday-plan-area tp-holiday-plan-area mg-top-96"
      style={{ backgroundImage: "url(" + publicUrl + "assets/img/bg/8.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-9">
            <div className="section-title text-center">
              <h2
                className="title wow animated fadeInUp"
                data-wow-duration="0.6s"
                data-wow-delay="0.1s"
              >
                Perfect Holiday Plan
              </h2>
              <p
                className="wow animated fadeInUp"
                data-wow-duration="0.6s"
                data-wow-delay="0.2s"
              >
                No vis fastidii accumsan, ignota postulant ea mea. Vis et prima
                integre, ei vis ridens moderatius reformidans cu vim doctus
                accumsan ignota.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div
              className="single-destinations-list style-two wow animated fadeInUp"
              data-wow-duration="0.4s"
              data-wow-delay="0.1s"
            >
              <div className="thumb">
                <img
                  src={holiday[1] && holiday[1].banner_image[0].url}
                  alt="list"
                />
              </div>
              <div className="details">
                <p className="location">
                  <img src={publicUrl + "assets/img/icons/1.png"} alt="map" />
                  {holiday[1] &&
                    holiday[1].cities.map((city) => (
                      <span> {city.name}, </span>
                    ))}
                </p>
                <h4 className="title">{holiday && holiday[1].name}</h4>
                <h6 className="content">Starting Price </h6>
                <div className="tp-price-meta">
                  <h2>
                    {holiday[1] && holiday[1].prices[1].starting_price}{" "}
                    <small>$</small>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div
              className="single-destinations-list style-two wow animated fadeInUp"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            >
              <div className="thumb">
                <img
                  src={holiday[1] && holiday[1].banner_image[0].url}
                  alt="list"
                />
              </div>
              <div className="details">
                <p className="location">
                  <img src={publicUrl + "assets/img/icons/1.png"} alt="map" />
                  {holiday[0] &&
                    holiday[0].cities.map((city) => (
                      <span> {city.name}, </span>
                    ))}
                </p>
                <h4 className="title">{holiday && holiday[0].name}</h4>
                <h6 className="content">Starting Price </h6>
                <div className="tp-price-meta">
                  <h2>
                    {holiday[0] && holiday[0].prices[1].starting_price}
                    <small>$</small>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div
              className="single-destinations-list style-two wow animated fadeInUp"
              data-wow-duration="0.9s"
              data-wow-delay="0.3s"
            >
              <div className="thumb">
                <img
                  src={holiday[1] && holiday[1].banner_image[0].url}
                  alt="list"
                />
              </div>
              <div className="details">
                <p className="location">
                  <img src={publicUrl + "assets/img/icons/1.png"} alt="map" />
                  {holiday[0] &&
                    holiday[0].cities.map((city) => (
                      <span> {city.name}, </span>
                    ))}
                </p>
                <h4 className="title">{holiday && holiday[0].name}</h4>
                <h6 className="content">Starting Price </h6>
                <div className="tp-price-meta">
                  <h2>
                    {holiday[0] && holiday[0].prices[1].starting_price}
                    <small>$</small>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div
              className="single-destinations-list style-two wow animated fadeInUp"
              data-wow-duration="1.1s"
              data-wow-delay="0.4s"
            >
              <div className="thumb">
                <img
                  src={holiday[1] && holiday[1].banner_image[0].url}
                  alt="list"
                />
              </div>
              <div className="details">
                <p className="location">
                  <img src={publicUrl + "assets/img/icons/1.png"} alt="map" />
                  {holiday[0] &&
                    holiday[0].cities.map((city) => (
                      <span> {city.name}, </span>
                    ))}
                </p>
                <h4 className="title">{holiday && holiday[0].name}</h4>
                <h6 className="content">Starting Price </h6>
                <div className="tp-price-meta">
                  <h2>
                    {holiday[0] && holiday[0].prices[1].starting_price}
                    <small>$</small>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayPlan;
