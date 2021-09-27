import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Axios from "axios";

const MyPage = () => {
  let products = JSON.parse(localStorage.getItem("package"));
  const [newPackage, setNewPackage] = useState(
    products !== null ? products : []
  );
  // const [cruisePackage, setCruisePackage] = useState(null);
  // useEffect(() => {
  //   const url = "https://your-cruise-people-cms.herokuapp.com/packages";
  //   Axios.get(url).then((res) => {
  //     console.log(res.data);
  //     console.log(res.data.length);
  //     // if (res.data[0].name === "7 Days Iconic Aegean") {
  //     //   setCruisePackage(res.data[0]);
  //     //   console.log("true");
  //     // } else {
  //     //   console.log("false");
  //     console.log(newPackage);
  //     setCruisePackage(res.data);
  //     // }
  //   });
  // }, []);

  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  return (
    <div>
      <div className="destinations-details-page mg-top-30 pd-top-90">
        <div className="container">
          <div className="row justify-content-center destinations-details-location-name">
            <div className="col-lg-12">
              <h3>{newPackage.name}</h3>
              <p>
                <i>{newPackage?.sub_title}</i>
              </p>
              <p>
                Vessel:
                <strong> {newPackage.vessel && newPackage.vessel.name} </strong>
              </p>
            </div>
            <div className="col-lg-12">
              <p>{newPackage?.description?.description_text}</p>
            </div>
          </div>
          {/* destinations-client-review-slider start */}
          <h4 className="single-page-small-title">Package Destinations</h4>
          <div className="destinations-client-review-slider tp-common-slider-style">
            {newPackage?.cities?.map((city) => (
              <div
                className="d-client-review-slider-item"
                key={city && city.id}
              >
                <div className="single-destination-grid">
                  <div className="thumb">
                    {/* {console.log(city.images[0] && city.images[0].url)} */}
                    <img
                      src={city.images[0] && city.images[0].url}
                      alt="img"
                      width="470"
                      height="200"
                    />
                  </div>
                  <div className="details">
                    <h4 className="title">{city && city.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* destinations-client-review-slider end */}

          {/* Itinerary start */}

          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="row">
                  <div className="col-lg-4">
                    <ul className="nav nav-tabs tp-tabs style-two">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tabs_1"
                        >
                          {/* <i className="fa fa-note" /> */}
                          Itinerary
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs_2"
                        >
                          {/* <i className="fa fa-check-square-o" /> */}
                          Terms & Condition
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs_3"
                        >
                          {/* <i className="fa fa-cog" /> */}
                          Vessel
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs_4"
                        >
                          {/* <i className="fa fa-recycle" /> */}
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs_5"
                        >
                          <i className="fa fa-credit-card-alt" />
                          Payment Methods
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs_6"
                        >
                          <i className="fa fa-star-o" />
                          Reviews
                        </a>
                      </li>
                      <li className="text-center">
                        <a className="btn btn-yellow" href="#">
                          <i className="fa fa-sign-in" aria-hidden="true" />{" "}
                          <span>Log Out</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-7 col-lg-8 offset-xl-1">
                    <div className="tab-content user-tab-content">
                      <div className="tab-pane fade show active" id="tabs_1">
                        {/* <div className="widget widget_categories mb-0">
                          {/* <h2 className="widget-title">Category</h2>
                          <ul>
                            <li><a href="#">Software</a> <span className="mr-5 pr-5">33</span> <span className="ml-5 pl-5">hello</span></li>
                            <li><a href="#">App Landing</a> 81</li>
                            <li><a href="#">Saas Landing</a> 12</li>
                            <li><a href="#">Design Studio</a> 17</li>
                            <li><a href="#">Product Showcase</a> 62</li>
                          </ul>
                        </div> */}

                        <table className="table table-hover">
                          <thead className="thead-light">
                            <tr>
                              {/* {cruisePackage &&
                                cruisePackage.itinerary.map((item) => (
                                  <th scope="col" key={item.id}>
                                    {item.day}
                                  </th>
                                ))} */}
                              <th scope="col">Day</th>
                              <th scope="col">Port/Activity</th>
                              <th scope="col">Arrival</th>
                              <th scope="col">Departure</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                {newPackage.itinerary[0] &&
                                  newPackage.itinerary[0].day}
                              </th>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage.itinerary[0]?.portActivity}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[0]?.arrival}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[0]?.departure}
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[1]?.day}
                              </th>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[1]?.portActivity}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[1]?.arrival}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[1]?.departure}
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[2]?.day}
                              </th>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[2]?.portActivity}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[2]?.arrival}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[2]?.departure}
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[3]?.day}
                              </th>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[3]?.portActivity}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[3]?.arrival}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[3]?.departure}
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[4]?.day}
                              </th>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[4]?.portActivity}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[4]?.arrival}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[4]?.departure}
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[5]?.day}
                              </th>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[5]?.portActivity}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[5]?.arrival}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[5]?.departure}
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[6]?.day}
                              </th>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[6]?.portActivity}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[6]?.arrival}
                              </td>
                              <td>
                                {newPackage.itinerary &&
                                  newPackage?.itinerary[6]?.departure}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="tab-pane fade" id="tabs_2">
                        <div className="user-verification">
                          <div className="row">
                            <div className="col-lg-7">
                              <h3 className="user-details-title">
                                Verification
                              </h3>
                              <div className="notice">
                                <i className="fa fa-exclamation-triangle" />{" "}
                                Your email hasn't been verified.
                              </div>
                              <span>imshuvo97@gmail.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tabs_3">
                        <div className="user-settings">
                          <h3 className="user-details-title">Settings</h3>
                          <div className="row">
                            <div className="col-lg-7">
                              <label className="single-input-wrap style-two">
                                <span className="single-input-title mb-3">
                                  Change your password
                                </span>
                                <input type="text" placeholder="Old password" />
                              </label>
                            </div>
                            <div className="col-lg-7">
                              <label className="single-input-wrap style-two">
                                <input type="text" placeholder="New password" />
                              </label>
                            </div>
                            <div className="col-lg-7">
                              <label className="single-input-wrap style-two">
                                <input type="text" placeholder="New password" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tabs_4">
                        <div className="user-recent-view">
                          <h3 className="user-details-title">
                            Recently Viewed
                          </h3>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="single-destinations-list style-two">
                                <div className="thumb">
                                  <img
                                    src={
                                      publicUrl +
                                      "assets/img/destination-list/4.png"
                                    }
                                    alt="list"
                                  />
                                </div>
                                <div className="details">
                                  <p className="location">
                                    <img
                                      src={publicUrl + "assets/img/icons/1.png"}
                                      alt="map"
                                    />
                                    Maldives
                                  </p>
                                  <h4 className="title">
                                    <a href="#">Hurawalhi Island</a>
                                  </h4>
                                  <p className="content">
                                    7Days Tour on 2 person
                                  </p>
                                  <div className="tp-price-meta">
                                    <h2>
                                      620 <small>$</small>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="single-destinations-list style-two">
                                <div className="thumb">
                                  <img
                                    src={
                                      publicUrl +
                                      "assets/img/destination-list/5.png"
                                    }
                                    alt="list"
                                  />
                                </div>
                                <div className="details">
                                  <p className="location">
                                    <img
                                      src={publicUrl + "assets/img/icons/1.png"}
                                      alt="map"
                                    />
                                    Indonesia
                                  </p>
                                  <h4 className="title">
                                    <a href="#">Bali Province</a>
                                  </h4>
                                  <p className="content">4days 2 person</p>
                                  <div className="tp-price-meta">
                                    <h2>
                                      780 <small>$</small>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tabs_5">
                        <div className="user-payment-method">
                          <div className="location-review-area">
                            <h3 className="user-details-title">
                              Payment Methods
                            </h3>
                            <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                              <div className="row">
                                <div className="col-lg-7">
                                  <label className="single-input-wrap">
                                    <span className="single-input-title">
                                      Credit card number
                                    </span>
                                    <input type="text" />
                                  </label>
                                  <label className="single-input-wrap">
                                    <span className="single-input-title">
                                      Card holder name
                                    </span>
                                    <input type="text" />
                                  </label>
                                  <label className="single-input-wrap">
                                    <span className="single-input-title">
                                      Expiry date (Example: 01/17)
                                    </span>
                                    <input type="text" />
                                  </label>
                                  <label className="single-input-wrap">
                                    <span className="single-input-title">
                                      Issuing bank
                                    </span>
                                    <input type="text" />
                                  </label>
                                </div>
                                <div className="col-lg-5">
                                  <div className="user-payment-card">
                                    <img
                                      src={
                                        publicUrl + "assets/img/others/16.png"
                                      }
                                      alt="img"
                                    />
                                    <span>Available payment method:</span>
                                    <div className="payment-card">
                                      <i className="fa fa-cc-paypal" />
                                      <i className="fa fa-cc-visa" />
                                      <i className="fa fa-cc-mastercard" />
                                      <i className="fa fa-credit-card-alt" />
                                    </div>
                                    <a className="btn btn-transparent" href="#">
                                      Cancel
                                    </a>
                                    <a className="btn btn-yellow" href="#">
                                      Save
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tabs_6">
                        <div className="user-tour-details">
                          <h3 className="user-details-title">Reviews</h3>
                          <span className="user-tour-details-title">
                            Reviews About You
                          </span>
                          <span>| Reviews By You</span>
                          <div className="comments-area tour-details-review-area">
                            <ul className="comment-list mb-0">
                              <li>
                                <div className="single-comment-wrap">
                                  <div className="thumb">
                                    <img
                                      src={
                                        publicUrl + "assets/img/client/2.png"
                                      }
                                      alt="img"
                                    />
                                  </div>
                                  <div className="content">
                                    <h4 className="title">Tyler Bailey</h4>
                                    <span className="date">13 August 2019</span>
                                    <div className="tp-review-meta">
                                      <i className="ic-yellow fa fa-star" />
                                      <i className="ic-yellow fa fa-star" />
                                      <i className="ic-yellow fa fa-star" />
                                      <i className="ic-yellow fa fa-star" />
                                      <i className="ic-yellow fa fa-star" />
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consetetur
                                      sadipscing elitr, sed diam nonumy eirmod
                                      tempor invidunt ut labore et dolore magna
                                      aliquyam erat, sed diam voluptua. At vero
                                      eos et accusam et justo duo dolores et ea
                                      rebum. Stet clita kasd gubergren, no sea
                                      takimata
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Itinerary end */}
          {/* location-details start */}

          <div className="location-details">
            <h4 className="single-page-small-title">Good To Know</h4>
            <div className="row">
              <div className="col-lg-7">
                <div className="location-details-table">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="title">Country</td>
                        <td>Africa</td>
                      </tr>
                      <tr>
                        <td className="title">Visa Requirements</td>
                        <td>Visa Requirements</td>
                      </tr>
                      <tr>
                        <td className="title">Languages Spoken</td>
                        <td>Afroasiatic languages</td>
                      </tr>
                      <tr>
                        <td className="title">Currency Used</td>
                        <td>Rant</td>
                      </tr>
                      <tr>
                        <td className="title">Ares (km2)</td>
                        <td>30.37 million km²</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn-wrap text-center">
                    <a
                      className="btn btn-yellow"
                      href="https://drive.google.com/u/0/uc?id=1Mnr-fM92hGB2JbHCvSspbRIPdLrgOmpw&export=download"
                      download
                    >
                      <span>
                        Pdf Download
                        <i className="ti-download" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="location-details-map">
                  <div
                    style={{
                      maxWidth: "100%",
                      listStyle: "none",
                      transition: "none",
                      overflow: "hidden",
                      width: "654px",
                      height: "400px",
                    }}
                  >
                    <div
                      id="display-googlemap"
                      style={{
                        height: "100%",
                        width: "100%",
                        maxWidth: "100%",
                      }}
                    >
                      <iframe
                        style={{ height: "100%", width: "100%", border: 0 }}
                        frameBorder={0}
                        src="https://www.google.com/maps/embed/v1/place?q=london&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                      />
                    </div>
                    <a
                      className="googlehtml"
                      rel="nofollow"
                      href="https://www.embed-map.com"
                      id="get-mapdata"
                    >
                      https://www.embed-map.com
                    </a>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "#display-googlemap img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* location-details end */}
          {/* location-review-area start */}
          <div className="location-review-area">
            <div className="row">
              <div className="col-lg-8">
                <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="single-page-small-title">
                        Write A Review
                      </h4>
                    </div>
                    <div className="col-md-6">
                      <div className="tp-review-meta text-lg-right">
                        <span className="ml-0">Assigned Rating</span>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="single-input-wrap">
                        <span className="single-input-title">Name</span>
                        <input type="text" />
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label className="single-input-wrap">
                        <span className="single-input-title">Email</span>
                        <input type="text" />
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <label className="single-input-wrap">
                        <span className="single-input-title">comments</span>
                        <textarea defaultValue={""} />
                      </label>
                    </div>
                    <div className="col-12">
                      <a className="btn btn-blue" href="#">
                        + Add Photo
                      </a>
                      <a className="btn btn-yellow float-right" href="#">
                        Send
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-xl-3 col-lg-4 offset-xl-1 mt-5 mt-lg-0 hidden-md">
                <a href="#">
                  <img src={publicUrl + "assets/img/others/01.png"} alt="ads" />
                </a>
              </div>
            </div>
          </div>
          {/* location-review-area start */}
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

export default MyPage;
