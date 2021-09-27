import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class TourListV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="tour-list-area pd-top-120 viaje-go-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 order-lg-12">
              <div className="tp-tour-list-search-area">
                {/* <div className="row">
                        <div className="col-xl-3 col-sm-6">
                          <label className="single-input-wrap">
                            <i className="fa fa-calendar-minus-o" />
                            <input type="text" className="departing-date" placeholder="Departing" />
                          </label>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <label className="single-input-wrap tour-list-search-icon">
                            <i className="la la-arrow-up" />
                            <input type="text" placeholder="Price Low to High" />
                          </label>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <label className="single-input-wrap tour-list-search-icon">
                            <i className="la la-arrow-down" />
                            <input type="text" placeholder="Price High to Low" />
                          </label>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <label className="single-input-wrap">
                            <i className="fa fa-paper-plane" />
                            <input type="text" placeholder="Name (A - Z)" />
                          </label>
                        </div>
                      </div> */}
              </div>
              <div className="tour-list-area">
                <div className="single-destinations-list style-three">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/destination-list/12.png"}
                      alt="list"
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
                    <p className="location">
                      <img
                        src={publicUrl + "assets/img/icons/1.png"}
                        alt="map"
                      />
                      Italy
                    </p>
                    <h4 className="title">
                      <Link to="/tour-details">Colosseum, Rome</Link>
                    </h4>
                    <p className="content">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et.
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
                <div className="single-destinations-list style-three">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/destination-list/7.png"}
                      alt="list"
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
                    <p className="location">
                      <img
                        src={publicUrl + "assets/img/icons/1.png"}
                        alt="map"
                      />
                      Spain
                    </p>
                    <h4 className="title">
                      <Link to="/tour-details">Barcelona city beach</Link>
                    </h4>
                    <p className="content">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusa.
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
                <div className="single-destinations-list style-three">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/destination-list/6.png"}
                      alt="list"
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
                    <p className="location">
                      <img
                        src={publicUrl + "assets/img/icons/1.png"}
                        alt="map"
                      />
                      Bangladesh
                    </p>
                    <h4 className="title">
                      <Link to="/tour-details">Cox's bazar Beach</Link>
                    </h4>
                    <p className="content">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusa.
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
                <div className="single-destinations-list style-three">
                  <div className="thumb">
                    <img
                      src={publicUrl + "assets/img/destination-list/5.png"}
                      alt="list"
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
                    <p className="location">
                      <img
                        src={publicUrl + "assets/img/icons/1.png"}
                        alt="map"
                      />
                      Indonesia
                    </p>
                    <h4 className="title">
                      <Link to="/tour-details">Bali Province</Link>
                    </h4>
                    <p className="content">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusa.
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TourListV2;
