import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const MyPage = () => {
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
                <Link to="/vessel">
                  <strong>{newPackage.vessel && newPackage.vessel.name}</strong>
                </Link>
              </p>
            </div>
            <div className="col-lg-12">
              <p>{newPackage?.description?.description_text}</p>
            </div>
          </div>
          {/* destinations-client-review-slider start */}
          <h4 className="single-page-small-title">Featured Destinations</h4>
          <div className="destinations-client-review-slider tp-common-slider-style">
            {newPackage?.cities?.map((city) => (
              <div
                className="d-client-review-slider-item"
                key={city && city.id}
              >
                <div className="single-destination-grid">
                  <div className="thumb">
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
                          Itinerary
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs_3"
                        >
                          Vessel
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs_4"
                        >
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs_5"
                        >
                          Terms & Conditions
                        </a>
                      </li>

                      <li className="d-flex center justify-content-around text-center">
                        <a
                          className="btn btn-yellow text-center"
                          data-target="#exampleModal"
                          data-toggle="modal"
                          data-whatever="@mdo"
                          style={{
                            width: 150,

                            margin: "auto",
                            textAlign: "center",
                          }}
                        >
                          <span>Contact Us</span>
                        </a>
                        <a
                          className="btn btn-yellow"
                          href={newPackage.brochure_url}
                          download
                          style={{
                            width: 160,
                            padding: 0,
                            paddingLeft: 5,
                            margin: "auto",
                            marginTop: 20,
                            marginBottom: 20,
                            textAlign: "center",
                          }}
                        >
                          <span>Available Excursion</span>
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
                              <th scope="col">Day</th>
                              <th scope="col">Port/Activity</th>
                              <th scope="col">Arrival</th>
                              <th scope="col">Departure</th>
                            </tr>
                          </thead>
                          <tbody>
                            {newPackage.itinerary.map((itiner) => (
                              <tr>
                                <th scope="row">{itiner && itiner?.day}</th>
                                <td>{itiner && itiner?.portActivity}</td>
                                <td>{itiner && itiner?.arrival}</td>
                                <td>{itiner && itiner?.departure}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="tab-pane fade" id="tabs_2">
                        {/* content for tab 2 oes in here */}
                      </div>
                      <div className="tab-pane fade" id="tabs_3">
                        <div className="details">
                          <h3 className="title" style={{ fontWeight: 700 }}>
                            <Link to="/vessel">
                              {newPackage.vessel && newPackage.vessel.name}
                            </Link>
                          </h3>
                          <p className="content">
                            {newPackage.vessel.description &&
                              newPackage.vessel.description.slice(0, 600) +
                                "..."}
                          </p>
                          <Link to="/vessel" className="btn btn-yellow">
                            <span>
                              Go to Vessel
                              <i className="ti-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tabs_4">
                        <div className="user-recent-view">
                          <h2 className="user-details-title">Package Prices</h2>
                          <div className="row">
                            {newPackage?.prices?.map((price) => (
                              <div className="col-lg-6 d-flex" key={price.id}>
                                <div className="single-destinations-list style-two">
                                  <div
                                    className="details"
                                    key={price && price.id}
                                  >
                                    <h4 className="title">
                                      {price.description}
                                    </h4>
                                    <div className="tp-price-meta">
                                      Staring From{" "}
                                      <h2>$ {price.starting_price}</h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tabs_5">
                        <div className="details">
                          <h3 className="title" style={{ fontWeight: 700 }}>
                            <Link to="/vessel">Terms and Condition</Link>
                          </h3>
                          <p className="content">
                            Please take some time to read through this document
                          </p>
                          <button
                            className="btn btn-info "
                            data-toggle="modal"
                            data-whatever="@mdo"
                            data-target="#openPdf"
                          >
                            <span>Open Document</span>
                          </button>
                        </div>
                      </div>
                      <div
                        class="modal fade"
                        id="openPdf"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="openPdfModal"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-lg" role="document">
                          <div
                            class="modal-content"
                            style={{ height: "800px" }}
                          >
                            <div class="modal-header">
                              <h5 className="modal-title" id="openPdfModal">
                                Terms and Conditions
                              </h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <iframe
                                className="embed-responsive-item"
                                src={newPackage?.tnc && newPackage.tnc.url}
                                frameBorder="0"
                                scrolling="auto"
                                height="100%"
                                width="100%"
                                allowFullScreen
                              >
                                LOOK AT ME{" "}
                              </iframe>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-warning"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
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
                        style={{
                          width: "100%",
                          height: 300,
                          objectFit: "cover",
                        }}
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
                        to={`/myPage/${pack.name.split(" ").join("-")}`}
                        onClick={() => {
                          localStorage.setItem("package", JSON.stringify(pack));
                          window.location.assign(
                            `/viaje#/myPage/${pack.name.split(" ").join("-")}`
                          );
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
                <img
                  src={
                    newPackage.banner_image[0] && newPackage.banner_image[0].url
                  }
                />
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
