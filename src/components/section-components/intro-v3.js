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
                {/* <h4 className="intro-title">Great Hotels</h4>
                <p>
                  I have always made a living to make movies, never the other
                  way around.I first I washed dishes in a seafood
                </p> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pt-5">
              <div className="single-intro style-two">
                <div className="thumb pt-5">
                  <a href="https://www.dreamcruiseline.com/en" target="_blank">
                    <img
                      src={publicUrl + "assets/img/logos/msc.png"}
                      alt="img"
                    />
                  </a>
                </div>
                {/* <h4 className="intro-title">Fast Booking</h4>
                <p>
                  Aenean sed nibh a magna posuere tempor. Nunc faucibus nunc
                  aliquet. Donec congue, nunc vel tempor
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroV3;
