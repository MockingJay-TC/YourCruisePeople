import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Packages = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [myPackages, setMyPackages] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    const url = "https://your-cruise-people-cms.herokuapp.com/packages";
    Axios.get(url).then((res) => {
      setMyPackages(res.data);
    });
  }, []);

  return (
    <div className="tour-list-area pd-top-120 viaje-go-top">
      <div className="container">
        <div className="row justify-content-center">
          {myPackages &&
            myPackages.map((myPackage) => (
              <div className="col-lg-4 col-md-6 order-lg-4">
                <div className="tour-list-area">
                  <div className="single-destinations-list" key={myPackage.id}>
                    <div className="thumb">
                      <img
                        src={
                          myPackage.banner_image[0] &&
                          myPackage.banner_image[0].url
                        }
                        alt="list"
                        style={{
                          width: "100%",
                          height: 300,
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
                        {myPackage &&
                          myPackage.cities.map((city) => (
                            <span key={city.id}>{city.name}, </span>
                          ))}
                      </p>
                      <h4
                        className="title"
                        onClick={() => {
                          localStorage.setItem(
                            "package",
                            JSON.stringify(myPackage)
                          );
                        }}
                      >
                        <Link
                          to={`/myPage/${myPackage.name.split(" ").join("-")}`}
                        >
                          {myPackage && myPackage.name}
                        </Link>
                      </h4>
                      <p className="content">
                        {myPackage.description &&
                          myPackage.description.description_text.slice(0, 300) +
                            "..."}
                      </p>
                      <div className="list-price-meta">
                        <ul className="tp-list-meta d-inline-block">
                          <li>
                            <i className="fa fa-calendar-o" /> 8oct
                          </li>
                          <li>
                            <i className="fa fa-clock-o" /> 10 days
                          </li>
                        </ul>
                        <div className="tp-price-meta d-inline-block">
                          <p>Starting Price</p>
                          <h2>
                            {myPackage.prices[0] &&
                              myPackage.prices[0].starting_price}{" "}
                            <span>$</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Packages;
