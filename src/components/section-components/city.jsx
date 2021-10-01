import React, { useState, useEffect } from "react";

const City = () => {
  const element = JSON.parse(localStorage.getItem("city"));
  const [city, setCity] = useState(element !== null ? element : []);

  useEffect(() => {});
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
                  <div className="d-details-main-slider-item">
                    <img
                      src={publicUrl + "assets/img/others/3.png"}
                      alt="img"
                    />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img
                      src={publicUrl + "assets/img/others/2.png"}
                      alt="img"
                    />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img
                      src={publicUrl + "assets/img/others/4.png"}
                      alt="img"
                    />
                  </div>
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
              <h3>Africa</h3>
              <p>Continen</p>
            </div>
            <div className="col-lg-6">
              <p>
                Africa is the world's second largest and second most-populous
                continent. At about 30.3 million km² including djacent islands,
                it covers 6% of Earth's total surface area and 20% of its land
                area. With 1.2 billion people as of 2016, it accounts for about
                16% of the world's human population
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                It accounts for about 16% of the world's human population. The
                continent is surrounded by the Mediterranean Sea to the Africa
                is the world's second largest and second most-populous
                continent. At about 30.3 million km² including djacent islands.
              </p>
            </div>
          </div>
          {/* destinations-client-review-slider start */}
          <h4 className="single-page-small-title">
            Based On Traveller Visits and Local Insights
          </h4>
          <div className="destinations-client-review-slider tp-common-slider-style">
            <div className="d-client-review-slider-item">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/8.png"}
                    alt="img"
                  />
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
                  <h4 className="title">Africa</h4>
                  <p className="content">
                    Africa is the world's second largest and second
                    most-populous continent, being behind Asia in both
                    categories. At about 30.3 million km² including adjacent
                    islands, it
                  </p>
                </div>
              </div>
            </div>
            <div className="d-client-review-slider-item">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/9.png"}
                    alt="img"
                  />
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
                  <h4 className="title">Thailand</h4>
                  <p className="content">
                    Thailand is the world's second largest and second
                    most-populous continent, being behind Asia in both
                    categories. At about 30.3 million km² including adjacent
                    islands, it
                  </p>
                </div>
              </div>
            </div>
            <div className="d-client-review-slider-item">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/10.png"}
                    alt="img"
                  />
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
                  <h4 className="title">Thailand</h4>
                  <p className="content">
                    Africa is the world's second largest and second
                    most-populous continent, being behind Asia in both
                    categories. At about 30.3 million km² including adjacent
                    islands, it
                  </p>
                </div>
              </div>
            </div>
            <div className="d-client-review-slider-item">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/11.png"}
                    alt="img"
                  />
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
                  <h4 className="title">France</h4>
                  <p className="content">
                    Africa is the world's second largest and second
                    most-populous continent, being behind Asia in both
                    categories. At about 30.3 million km² including adjacent
                    islands, it
                  </p>
                </div>
              </div>
            </div>
            <div className="d-client-review-slider-item">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/12.png"}
                    alt="img"
                  />
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
                  <h4 className="title">Mexico</h4>
                  <p className="content">
                    Africa is the world's second largest and second
                    most-populous continent, being behind Asia in both
                    categories. At about 30.3 million km² including adjacent
                    islands, it
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* destinations-client-review-slider end */}
         
    
        </div>
      </div>
      <div className="destination-area pd-top-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/8.png"}
                    alt="img"
                  />
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
                  <h3 className="title">Africa</h3>
                  <p className="content">
                    Africa is the world's second largest and second most-
                    populous continent, being behind Asia in both categories. At
                    about 30.3 million km² including adjacent islands, it covers
                    6% Earth's total surface area and 20% land area.
                  </p>
                  <a className="btn btn-gray" href="#">
                    <span>
                      Explore
                      <i className="la la-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/9.png"}
                    alt="img"
                  />
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
                  <h3 className="title">Africa</h3>
                  <p className="content">
                    Africa is the world's second largest and second most-
                    populous continent, being behind Asia in both categories. At
                    about 30.3 million km² including adjacent islands, it covers
                    6% Earth's total surface area and 20% land area.
                  </p>
                  <a className="btn btn-gray" href="#">
                    <span>
                      Explore
                      <i className="la la-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/10.png"}
                    alt="img"
                  />
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
                  <h3 className="title">Africa</h3>
                  <p className="content">
                    Africa is the world's second largest and second most-
                    populous continent, being behind Asia in both categories. At
                    about 30.3 million km² including adjacent islands, it covers
                    6% Earth's total surface area and 20% land area.
                  </p>
                  <a className="btn btn-gray" href="#">
                    <span>
                      Explore
                      <i className="la la-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
