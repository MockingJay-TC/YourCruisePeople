import React, { useState } from "react";
import Axios from "axios";

const Subscribe = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const data = {
    email: email,
  };
  const validateEmail = (data) => {
    if (data.email === "") {
      return false;
    }
    return true;
  };
  const subscribe = (e) => {
    e.preventDefault();
    setLoading(true);
    if (validateEmail(data)) {
      const url = "https://your-cruise-people-cms.herokuapp.com/mailchimp";
      Axios.post(url, data).then((res) => {
        console.log(res);
        setTimeout(() => {
          setLoading(false);
          window.location.reload(true);
          setEmail("");
        }, 2000);
        console.log(res.status);
      });
    } else {
      console.log("Please Enter Email");
    }
  };

  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className="newslatter-area pd-top-120">
      <div className="container">
        <div className="newslatter-area-wrap border-tp-solid">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-5 offset-xl-2">
              <div className="section-title mb-md-0">
                <h2 className="title">Newsletter</h2>
                <p>Sign up to receive the best offers</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-7 align-self-center offset-xl-1">
              <form onSubmit={(e) => subscribe(e)}>
                <div className="input-group newslatter-wrap">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="input-group-append">
                    <input
                      type="submit"
                      className="btn btn-yellow vaijesubmit"
                      value={loading ? "sending..." : "Subscribe"}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
