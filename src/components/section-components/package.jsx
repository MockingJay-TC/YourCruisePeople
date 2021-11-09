import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Package = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [myPackages, setMyPackages] = useState([]);
  const [myGroups, setPackageGroups] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const fetchPackage = () => {
    const url = "https://your-cruise-people-cms.herokuapp.com/packages";
    Axios.get(url).then((res) => {
      console.log("Victor is this package");
      console.log(res.data);
      setMyPackages(res.data);
    });
  };
  const fetchGroup = () => {
    const url = "https://your-cruise-people-cms.herokuapp.com/package-groups";
    Axios.get(url).then((res) => {
      console.log("Victor is this package-groups");
      console.log(res.data);
      setPackageGroups(res.data);
    });
  };
  useEffect(() => {
    fetchGroup();
    fetchPackage();
  }, []);

  return (
    <div className="tour-list-area pd-top-120 viaje-go-top">
      <div className="container">
        {myGroups.map((group) => (
          <div key={group.id}>
            <h2>{group.name}</h2>

            <div className="row justify-content-center">
              {myPackages &&
                myPackages.map((myPackage) => {
                  if (myPackage?.package_group?.name === group.name) {
                    return (
                      <>
                        <div
                          className="col-lg-4 col-md-6 order-lg-4"
                          key={myPackage.id}
                        >
                          <div className="tour-list-area">
                            <div className="single-destinations-list">
                              <div className="thumb">
                                <img
                                  src={
                                    myPackage.cover_image &&
                                    myPackage.cover_image.url
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
                                    to={`/package-details/${myPackage.slug}`}
                                  >
                                    {myPackage && myPackage.name}
                                  </Link>
                                </h4>
                                <p className="content">
                                  {myPackage.description &&
                                    myPackage.description.description_text.slice(
                                      0,
                                      200
                                    ) + "..."}
                                </p>
                                <div className="list-price-meta">
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
                      </>
                    );
                  }
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Package;
