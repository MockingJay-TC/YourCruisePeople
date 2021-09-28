import React, { Component, useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import Axios from "axios";

const Contact = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState(null);
  const [sendInfo, setSendInfo] = useState();
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    name: name,
    tel: tel,
    email: email,
    message: message,
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
      const url = "https://your-cruise-people-cms.herokuapp.com/contacts";
      Axios.post(url, data).then((res) => {
        console.log(res);
        setTimeout(() => {
          setLoading(false);
          window.location.reload(true);
          setName("");
          setTel("");
          setEmail("");
          setMessage("");
        }, 2000);
        console.log(res.status);
      });
    } else {
      console.log("Please fill the form");
    }
  };

  useEffect(() => {
    fetch("https://your-cruise-people-cms.herokuapp.com/contact-info")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setContact(data);
      });
  }, []);

  return (
    <div>
      <div className="contact-area pd-top-108">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-lg-center text-left">
                <h2 className="title">Get In Touch!!!</h2>
                <p>
                  Vestibulum blandit viverra convallis. Pellentesque ligula
                  urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris
                  lacus, consequat eget justo in
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="thumb">
                <img src={contact && contact.side_image.url} />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <form className="tp-form-wrap" onSubmit={(e) => handleSubmit(e)}>
                <div className="row">
                  <div className="col-md-6">
                    <label className="single-input-wrap style-two">
                      <span className="single-input-title">Name</span>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label className="single-input-wrap style-two">
                      <span className="single-input-title">Number</span>
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
                      <span className="single-input-title">Email</span>
                      <input
                        type="text"
                        name="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="col-lg-12">
                    <label className="single-input-wrap style-two">
                      <span className="single-input-title">Message</span>
                      <textarea
                        // defaultValue={""}
                        required
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="submit"
                      className="btn btn-yellow"
                      value={loading ? "sending..." : "Send Message"}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info-area pd-top-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 order-lg-12">
              <iframe
                className="contact-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1985.5212642895121!2d-0.1993528!3d5.5607153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf909d0bc5e4bf%3A0x878222581c1fc765!2sVALCO%20Trust%20House%2C%20Castle%20Road%2C%20Accra!5e0!3m2!1sen!2sgh!4v1631544882074!5m2!1sen!2sgh"
              />
            </div>
            <div className="col-xl-3 col-lg-4 order-lg-1">
              <div className="contact-info bg-gray">
                <p>
                  <i className="fa fa-map-marker" />
                  <span>{contact && contact.address}</span>
                </p>
                <p>
                  <i className="fa fa-clock-o" />
                  <span>{contact && contact.officeHour}</span>
                </p>
                <p>
                  <i className="fa fa-envelope" />
                  <span>
                    Email: <span>{contact && contact.email}</span>
                  </span>
                </p>
                <p>
                  <i className="fa fa-phone" />
                  <span>
                    sell phone: <span>{contact && contact.telephone1}</span>
                    <br />
                    telephone: <span>{contact && contact.telephone2}</span>
                    <br />
                    whatsapp: <span>{contact && contact.whatsapp}</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
