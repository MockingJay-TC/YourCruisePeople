import React, { useState, useEffect } from "react";
import Axios from "axios";

const HolidayPlan = () => {
  const [holiday, setHoliday] = useState("");

  useEffect(() => {
    const url = "https://your-cruise-people-cms.herokuapp.com/packages";
    Axios.get(url).then((res) => {
      console.log("holiday Victor, it's time for holiday");
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
                Today's Top Cruises
              </h2>
              <p
                className="wow animated fadeInUp"
                data-wow-duration="0.6s"
                data-wow-delay="0.2s"
              >
                No Data yet
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {holiday &&
            holiday?.map((vac) => {
              if (vac.isPromo === true) {
                return (
                  <div className="col-lg-3 col-sm-6" key={vac.id}>
                    <div
                      className="single-destinations-list style-two wow animated fadeInUp"
                      data-wow-duration="0.4s"
                      data-wow-delay="0.1s"
                    >
                      <div className="thumb">
                        <img
                          src={vac && vac.cover_image.url}
                          alt="list"
                          style={{
                            width: "100%",
                            height: "280px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="details">
                        <p className="location">
                          <img
                            src={publicUrl + "assets/img/icons/1.png"}
                            alt="map"
                          />
                          {vac &&
                            vac?.cities?.map((city) => (
                              <span key={city.id}> {city.name}, </span>
                            ))}
                        </p>
                        <h4 className="title">{vac && vac.name}</h4>
                        <div className="tp-price-meta">
                          <h2>
                            {vac && vac.prices[1].starting_price}
                            <small>$</small>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default HolidayPlan;
