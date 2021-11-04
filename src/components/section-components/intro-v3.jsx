import React, { Component } from "react";

class IntroV3 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="intro-area pd-top-108">
        <div className="container">
          <div className="section-title text-lg-center text-left">
            <h2 className="title">
              <span>We Are</span> territorial agents for
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 pt-5">
              <div className="single-intro style-two">
                <div className="thumb pt-5">
                  <a href="https://www.msccruises.co.za" target="_blank">
                    <img
                      src={publicUrl + "assets/img/logos/msc.png"}
                      alt="img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-intro style-two">
                <div className="thumb">
                  <a href="https://celestyal.com/" target="_blank">
                    <img
                      src={publicUrl + "assets/img/logos/cele.jpg"}
                      alt="img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pt-5">
              <div className="single-intro style-two">
                <div className="thumb pt-5">
                  <a href="https://www.dreamcruiseline.com/en" target="_blank">
                    <img
                      src={publicUrl + "assets/img/logos/drm.png"}
                      alt="img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroV3;
