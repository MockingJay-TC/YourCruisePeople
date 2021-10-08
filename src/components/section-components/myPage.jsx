import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Axios from "axios";

const MyPage = () => {
  // let products = JSON.parse(localStorage.getItem("package"));
  const [filteredPackage, setFilteredPackage] = useState([]);
  const [newPackage, setNewPackage] = useState(
    JSON.parse(localStorage.getItem("package")) !== null
      ? JSON.parse(localStorage.getItem("package"))
      : []
  );

  console.log(newPackage + "Victor is doing well");
  useEffect(() => {
    const url = "https://your-cruise-people-cms.herokuapp.com/packages";
    Axios.get(url).then((res) => {
      setFilteredPackage(res.data);
    });
  }, []);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let element = JSON.parse(localStorage.getItem("package"));
  const [package_id, setPackage_name] = useState(
    element._id !== null ? element._id : " "
  );

  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  const data = {
    _id: package_id,
    name: name,
    tel: tel,
    email: email,
    note: message,
  };
  const validateMessage = (data) => {
    if (
      data.name === "" ||
      data.message === "" ||
      data.email === "" ||
      data.tel === ""
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (validateMessage(data)) {
      const url = "https://your-cruise-people-cms.herokuapp.com/bookings";
      Axios.post(url, data).then((res) => {
        console.log(data);
        setTimeout(() => {
          setLoading(false);
          window.location.reload(true);
          setName("");
          setTel("");
          setEmail("");
          setMessage("");
        }, 2000);
      });
    } else {
      console.log("Please fill the form");
    }
  };

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
                <Link to='/vessel'> <strong> {newPackage.vessel && newPackage.vessel.name} </strong></Link>
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
                    <Link
                      to="/city"
                      onClick={() => {
                        console.log(city.name);
                        localStorage.setItem("city", JSON.stringify(city));
                      }}
                    >
                      <h4 className="title">{city && city.name}</h4>
                    </Link>
                    <p className="content">
                      <strong>
                        {city.description &&
                          city.description.split("**")[1].slice(0, 25) + "..."}
                      </strong>
                      <br />
                      {city.description &&
                        city.description.split("**")[2].slice(0, 180) + "..."}
                    </p>
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
                      {/* <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs_5"
                        >
                          <i className="fa fa-credit-card-alt" />
                          Payment Methods
                        </a>
                      </li> */}
                      {/* <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs_6"
                        >
                          <i className="fa fa-star-o" />
                          Reviews
                        </a>
                      </li> */}
                      <li className="d-flex justify-content-around">
                        <a
                          className="btn btn-yellow"
                          data-target="#exampleModal"
                          data-toggle="modal"
                          data-whatever="@mdo"
                        >
                          <i className="fa fa-sign-in" aria-hidden="true" />
                          <span>Contact Us</span>
                        </a>
                        <a
                          className="btn btn-yellow"
                          href={newPackage.brochure_url}
                          // href="https://drive.google.com/u/0/uc?id=1Mnr-fM92hGB2JbHCvSspbRIPdLrgOmpw&export=download"
                          download
                        >
                          <span>
                            Available Excursions
                            <i className="ti-download" />
                          </span>
                        </a>
                      </li>
                      {/* testing a theory start*/}

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                New message
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form
                                className="tp-form-wrap"
                                onSubmit={(e) => handleSubmit(e)}
                              >
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                      <span className="single-input-title">
                                        Name
                                      </span>
                                      <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) =>
                                          setName(e.target.value)
                                        }
                                      />
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                      <span className="single-input-title">
                                        Number
                                      </span>
                                      <input
                                        type="text"
                                        name="number"
                                        value={tel}
                                        onChange={(e) => setTel(e.target.value)}
                                      />
                                    </label>
                                  </div>
                                  <div className="col-lg-12">
                                    <label className="single-input-wrap style-two">
                                      <span className="single-input-title">
                                        Email
                                      </span>
                                      <input
                                        type="text"
                                        name="email"
                                        value={email}
                                        required
                                        onChange={(e) =>
                                          setEmail(e.target.value)
                                        }
                                      />
                                    </label>
                                  </div>
                                  <div className="col-lg-12">
                                    <label className="single-input-wrap style-two">
                                      <span className="single-input-title">
                                        Message
                                      </span>
                                      <textarea
                                        // defaultValue={""}
                                        required
                                        name="message"
                                        value={message}
                                        onChange={(e) =>
                                          setMessage(e.target.value)
                                        }
                                      />
                                    </label>
                                  </div>
                                  <div className="col-12">
                                    <input
                                      type="submit"
                                      className="btn btn-yellow"
                                      value={
                                        loading ? "sending..." : "Send Message"
                                      }
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* testing a theory ending */}
                    </ul>
                  </div>
                  <div className="col-xl-7 col-lg-8 offset-xl-1">
                    <div className="tab-content user-tab-content">
                      <div className="tab-pane fade show active" id="tabs_1">
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
                        {/* <div className="user-verification">
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
                        </div> */}
                      </div>
                      <div className="tab-pane fade" id="tabs_3">
                        <div className="details">
                    
                          <h4
                            className="title"
                            
                          >
                            <Link to="/vessel">{newPackage.vessel && newPackage.vessel.name}</Link>
                          </h4>
                          <p className="content">
                            {newPackage.vessel.description &&
                              newPackage.vessel.description.slice(0, 500) +
                              "..."}
                          </p>
                       
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tabs_4">
                        {/* <div className="user-recent-view">
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
                        </div> */}
                      </div>
                      <div className="tab-pane fade" id="tabs_5">
                        {/* <div className="user-payment-method">
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
                        </div> */}
                      </div>
                      <div className="tab-pane fade" id="tabs_6">
                        {/* <div className="user-tour-details">
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
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Itinerary end */}

          {/* location-review-area start */}

          {/* location-review-area start */}
        </div>
      </div>
      <div className="destination-area pd-top-120">
        <div className="container">
          <h2 className="m-5" style={{ textAlign: "center" }}>
            OTHER PACKAGES
          </h2>
          <div className="row justify-content-center">
            {filteredPackage
              .filter((myPackage) => {
                if (myPackage.id !== newPackage._id) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((pack) => (
                <div className="col-lg-4 col-md-6" key={pack._id}>
                  <div className="single-destination-grid text-center">
                    <div className="thumb">
                      <img
                        src={pack.banner_image[0] && pack.banner_image[0].url}
                        alt="img"
                      // style={{ maxWidth: 400 }}
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
                      <h3 className="title">{pack.name}</h3>
                      <p className="content">
                        {pack.description &&
                          pack.description.description_text.slice(0, 230) +
                          "..."}
                      </p>
                      <Link
                        to="/myPage"
                        onClick={() => {
                          localStorage.setItem("package", JSON.stringify(pack));
                          window.location.reload();
                        }}
                        className="btn btn-gray"
                      >
                        <span>
                          Explore
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className="col-xl-5 col-lg-6 wow animated fadeInLeft mx-auto pt-5"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="video-popup-wrap">
              <div className="thumb">
                <img src={newPackage.banner_image[0] && newPackage.banner_image[0].url} />
              </div>
              <div className="video-popup-btn">
                <a
                  href={newPackage && newPackage.video_url}
                  className="video-play-btn mfp-iframe"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
