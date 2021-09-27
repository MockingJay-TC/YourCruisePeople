import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

const Packages = () => {
  const history = useHistory();

  // history.push("/myPage", params);

  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";
  const [myPackages, setMyPackages] = useState("");
  useEffect(() => {
    const url = "https://your-cruise-people-cms.herokuapp.com/packages";
    Axios.get(url).then((res) => {
      console.log(res.data);
      setMyPackages(res.data);
    });
  }, []);

  return (
    <div className="tour-list-area pd-top-120 viaje-go-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 order-lg-12">
            <div className="tp-tour-list-search-area"></div>
            <div className="tour-list-area">
              {myPackages &&
                myPackages.map((myPackage) => (
                  <div
                    className="single-destinations-list style-three"
                    key={myPackage.id}
                  >
                    <div className="thumb">
                      <img src={myPackage?.banner_image[0].url} alt="list" />
                    </div>
                    <div className="details">
                      <div className="tp-review-meta">
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="fa fa-star" />
                        <span>4.0</span>
                      </div>
                      <p className="location">
                        <img
                          src={publicUrl + "assets/img/icons/1.png"}
                          alt="map"
                        />
                        Italy
                      </p>
                      <h4
                        className="title"
                        onClick={()=>{
                          localStorage.setItem(
                          "package",
                          JSON.stringify(myPackage)
                        )
                        }}
                      >
                        <Link to="/myPage">{myPackage && myPackage.name}</Link>
                      </h4>
                      <p className="content">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et.
                      </p>
                      <div className="list-price-meta">
                        <ul className="tp-list-meta d-inline-block">
                          <li>
                            <i className="fa fa-calendar-o" /> 8oct
                          </li>
                          <li>
                            <i className="fa fa-clock-o" /> 4 days
                          </li>
                          <li>
                            <i className="fa fa-star" /> 4.3
                          </li>
                        </ul>
                        <div className="tp-price-meta d-inline-block">
                          <p>Price</p>
                          <h2>
                            620 <span>$</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Packages;
