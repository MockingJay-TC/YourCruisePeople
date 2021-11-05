import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const HolidayPlan = ({ homepage }) => {
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
                style={{ fontSize: "20px" }}
              >
                {homepage ? homepage.holiday_message : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {homepage &&
            homepage?.packages?.map((vac) => {
              // if (vac.isPromo === true) {
              return (
                <div className="col-lg-3 col-sm-6" key={vac.id}>
                  <div
                    className="single-destinations-list style-two wow animated fadeInUp"
                    data-wow-duration="0.4s"
                    data-wow-delay="0.1s"
                  >
                    {/* <div class="card-header bg-info">PROMO</div> */}
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
                      {/* <p className="location">
                        <img
                          src={publicUrl + "assets/img/icons/1.png"}
                          alt="map"
                        />
                        <div className="row justify-content-center ">
                          {vac &&
                            vac?.cities?.map((city) => (
                              <span key={city.id}>{city.name},</span>
                            ))}
                        </div>
                      </p> */}

                      <h4
                        className="title row justify-content-center"
                        onClick={() => {
                          localStorage.setItem("package", JSON.stringify(vac));
                        }}
                      >
                        <Link to={`/myPage/${vac.slug}`}>
                          {vac && vac.name}
                        </Link>
                      </h4>
                      <div className="tp-price-meta row justify-content-center">
                        <h2>
                          {vac && vac.starting_price}
                          <small>$</small>
                        </h2>
                        <div class="alert alert-info" role="alert">
                          35% OFF
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
              // }
            })}
        </div>
      </div>
    </div>
  );
};

export default HolidayPlan;
